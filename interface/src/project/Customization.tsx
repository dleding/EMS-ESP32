import { useCallback, useEffect, useState } from 'react';
import type { FC } from 'react';
import { useBlocker, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import CancelIcon from '@mui/icons-material/Cancel';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import WarningIcon from '@mui/icons-material/Warning';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Link,
  MenuItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';

import * as SystemApi from 'api/system';

import {
  Body,
  Cell,
  Header,
  HeaderCell,
  HeaderRow,
  Row,
  Table
} from '@table-library/react-table-library/table';
import { useTheme } from '@table-library/react-table-library/theme';
import { dialogStyle } from 'CustomTheme';
import { useRequest } from 'alova';
import {
  BlockNavigation,
  ButtonRow,
  MessageBox,
  SectionContent,
  useLayoutTitle
} from 'components';
import RestartMonitor from 'framework/system/RestartMonitor';
import { useI18nContext } from 'i18n/i18n-react';

import * as EMSESP from './api';
import SettingsCustomizationDialog from './CustomizationDialog';
import EntityMaskToggle from './EntityMaskToggle';
import OptionIcon from './OptionIcon';
import { DeviceEntityMask } from './types';
import type { DeviceEntity, DeviceShort } from './types';

export const APIURL = window.location.origin + '/api/';

const Customization: FC = () => {
  const { LL } = useI18nContext();
  const [numChanges, setNumChanges] = useState<number>(0);
  const blocker = useBlocker(numChanges !== 0);

  const [restarting, setRestarting] = useState<boolean>(false);
  const [restartNeeded, setRestartNeeded] = useState<boolean>(false);
  const [deviceEntities, setDeviceEntities] = useState<DeviceEntity[]>([]);
  const [confirmReset, setConfirmReset] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<number>(0);
  const [search, setSearch] = useState('');
  const [selectedDeviceEntity, setSelectedDeviceEntity] = useState<DeviceEntity>();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  useLayoutTitle(LL.CUSTOMIZATIONS());

  // fetch devices first
  const { data: devices } = useRequest(EMSESP.readDevices);

  const [selectedDevice, setSelectedDevice] = useState<number>(
    Number(useLocation().state) || -1
  );
  const [selectedDeviceName, setSelectedDeviceName] = useState<string>('');

  const { send: resetCustomizations } = useRequest(EMSESP.resetCustomizations(), {
    immediate: false
  });

  const { send: writeCustomizationEntities } = useRequest(
    (data: { id: number; entity_ids: string[] }) =>
      EMSESP.writeCustomizationEntities(data),
    {
      immediate: false
    }
  );

  const { send: readDeviceEntities, onSuccess: onSuccess } = useRequest(
    (data: number) => EMSESP.readDeviceEntities(data),
    {
      initialData: [],
      immediate: false
    }
  );

  const setOriginalSettings = (data: DeviceEntity[]) => {
    setDeviceEntities(
      data.map((de) => ({
        ...de,
        o_m: de.m,
        o_cn: de.cn,
        o_mi: de.mi,
        o_ma: de.ma
      }))
    );
  };

  onSuccess((event) => {
    setOriginalSettings(event.data);
  });

  const { send: restartCommand } = useRequest(SystemApi.restart(), {
    immediate: false
  });

  const entities_theme = useTheme({
    Table: `
      --data-table-library_grid-template-columns: 156px repeat(1, minmax(80px, 1fr)) 45px minmax(45px, auto) minmax(120px, auto);
    `,
    BaseRow: `
      font-size: 14px;
      .td {
        height: 32px;
      }
    `,
    BaseCell: `
      &:nth-of-type(3) {
        text-align: right;
      }
      &:nth-of-type(4) {
        text-align: right;
      }
      &:last-of-type {
        text-align: right;
      }
    `,
    HeaderRow: `
      text-transform: uppercase;
      background-color: black;
      color: #90CAF9;
      .th {
        border-bottom: 1px solid #565656;
        height: 36px;
      }
      &:nth-of-type(1) .th {
        text-align: center;
      }
    `,
    Row: `
      background-color: #1e1e1e;
      position: relative;
      cursor: pointer;
      .td {
        border-top: 1px solid #565656;
        border-bottom: 1px solid #565656;
      }
      &.tr.tr-body.row-select.row-select-single-selected {
        background-color: #3d4752;
      }
      &:hover .td {
        border-top: 1px solid #177ac9;
        border-bottom: 1px solid #177ac9;
      }
      &:nth-of-type(odd) .td {
        background-color: #303030;
      }
    `,
    Cell: `
      &:nth-of-type(2) {
        padding: 8px;
      }
      &:nth-of-type(3) {
        padding-right: 4px;
      }
      &:nth-of-type(4) {
        padding-right: 4px;
      }
      &:last-of-type {
        padding-right: 8px;
      }
    `
  });

  function hasEntityChanged(de: DeviceEntity) {
    return (
      (de?.cn || '') !== (de?.o_cn || '') ||
      de.m !== de.o_m ||
      de.ma !== de.o_ma ||
      de.mi !== de.o_mi
    );
  }

  useEffect(() => {
    if (deviceEntities.length) {
      setNumChanges(
        deviceEntities
          .filter((de) => hasEntityChanged(de))
          .map(
            (new_de) =>
              new_de.m.toString(16).padStart(2, '0') +
              new_de.id +
              (new_de.cn || new_de.mi || new_de.ma ? '|' : '') +
              (new_de.cn ? new_de.cn : '') +
              (new_de.mi ? '>' + new_de.mi : '') +
              (new_de.ma ? '<' + new_de.ma : '')
          ).length
      );
    }
  }, [deviceEntities]);

  useEffect(() => {
    if (devices && selectedDevice !== -1) {
      void readDeviceEntities(selectedDevice);
      const id = devices.devices.findIndex((d) => d.i === selectedDevice);
      if (id === -1) {
        setSelectedDevice(-1);
        setSelectedDeviceName('');
      } else {
        setSelectedDeviceName(devices.devices[id].tn || '');
        setNumChanges(0);
        setRestartNeeded(false);
      }
    }
  }, [devices, selectedDevice]);

  const restart = async () => {
    await restartCommand().catch((error: Error) => {
      toast.error(error.message);
    });
    setRestarting(true);
  };

  function formatValue(value: unknown) {
    if (typeof value === 'number') {
      return new Intl.NumberFormat().format(value);
    } else if (value === undefined) {
      return '';
    } else if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }
    return value as string;
  }

  const formatName = (de: DeviceEntity, withShortname: boolean) =>
    (de.n && de.n[0] === '!'
      ? LL.COMMAND(1) + ': ' + de.n.slice(1)
      : de.cn && de.cn !== ''
        ? de.cn
        : de.n) + (withShortname ? ' ' + de.id : '');

  const getMaskNumber = (newMask: string[]) => {
    let new_mask = 0;
    for (const entry of newMask) {
      new_mask |= Number(entry);
    }
    return new_mask;
  };

  const getMaskString = (m: number) => {
    const new_masks: string[] = [];
    if ((m & 1) === 1) {
      new_masks.push('1');
    }
    if ((m & 2) === 2) {
      new_masks.push('2');
    }
    if ((m & 4) === 4) {
      new_masks.push('4');
    }
    if ((m & 8) === 8) {
      new_masks.push('8');
    }
    if ((m & 128) === 128) {
      new_masks.push('128');
    }
    return new_masks;
  };

  const filter_entity = (de: DeviceEntity) =>
    (de.m & selectedFilters || !selectedFilters) &&
    formatName(de, true).includes(search.toLocaleLowerCase());

  const maskDisabled = (set: boolean) => {
    setDeviceEntities(
      deviceEntities.map(function (de) {
        if (filter_entity(de)) {
          return {
            ...de,
            m: set
              ? de.m |
                (DeviceEntityMask.DV_API_MQTT_EXCLUDE |
                  DeviceEntityMask.DV_WEB_EXCLUDE)
              : de.m &
                ~(
                  DeviceEntityMask.DV_API_MQTT_EXCLUDE |
                  DeviceEntityMask.DV_WEB_EXCLUDE
                )
          };
        } else {
          return de;
        }
      })
    );
  };

  const resetCustomization = async () => {
    try {
      await resetCustomizations();
      toast.info(LL.CUSTOMIZATIONS_RESTART());
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setConfirmReset(false);
    }
  };

  const onDialogClose = () => {
    setDialogOpen(false);
  };

  const updateDeviceEntity = (updatedItem: DeviceEntity) => {
    setDeviceEntities(
      deviceEntities?.map((de) =>
        de.id === updatedItem.id ? { ...de, ...updatedItem } : de
      )
    );
  };

  const onDialogSave = (updatedItem: DeviceEntity) => {
    setDialogOpen(false);
    updateDeviceEntity(updatedItem);
  };

  const editDeviceEntity = useCallback((de: DeviceEntity) => {
    if (de.n === undefined || (de.n && de.n[0] === '!')) {
      return;
    }

    if (de.cn === undefined) {
      de.cn = '';
    }

    setSelectedDeviceEntity(de);
    setDialogOpen(true);
  }, []);

  const saveCustomization = async () => {
    if (devices && deviceEntities && selectedDevice !== -1) {
      const masked_entities = deviceEntities
        .filter((de: DeviceEntity) => hasEntityChanged(de))
        .map(
          (new_de) =>
            new_de.m.toString(16).padStart(2, '0') +
            new_de.id +
            (new_de.cn || new_de.mi || new_de.ma ? '|' : '') +
            (new_de.cn ? new_de.cn : '') +
            (new_de.mi ? '>' + new_de.mi : '') +
            (new_de.ma ? '<' + new_de.ma : '')
        );

      // check size in bytes to match buffer in CPP, which is 2048
      const bytes = new TextEncoder().encode(JSON.stringify(masked_entities)).length;
      if (bytes > 2000) {
        toast.warning(LL.CUSTOMIZATIONS_FULL());
        return;
      }

      await writeCustomizationEntities({
        id: selectedDevice,
        entity_ids: masked_entities
      }).catch((error: Error) => {
        if (error.message === 'Reboot required') {
          setRestartNeeded(true);
        } else {
          toast.error(error.message);
        }
      });
      setOriginalSettings(deviceEntities);
    }
  };

  const renderDeviceList = () => (
    <>
      <Box mb={1} color="warning.main">
        <Typography variant="body2">{LL.CUSTOMIZATIONS_HELP_1()}.</Typography>
      </Box>
      <TextField
        name="device"
        label={LL.EMS_DEVICE()}
        variant="outlined"
        fullWidth
        value={selectedDevice}
        disabled={numChanges !== 0}
        onChange={(e) => setSelectedDevice(parseInt(e.target.value))}
        margin="normal"
        select
      >
        <MenuItem disabled key={-1} value={-1}>
          {LL.SELECT_DEVICE()}...
        </MenuItem>
        {devices.devices.map((device: DeviceShort) => (
          <MenuItem key={device.i} value={device.i}>
            {device.s}
          </MenuItem>
        ))}
      </TextField>
    </>
  );

  const renderDeviceData = () => {
    const shown_data = deviceEntities.filter((de) => filter_entity(de));

    return (
      <>
        <Box color="warning.main">
          <Typography variant="body2" mt={1}>
            <OptionIcon type="favorite" isSet={true} />={LL.CUSTOMIZATIONS_HELP_2()}
            &nbsp;&nbsp;
            <OptionIcon type="readonly" isSet={true} />={LL.CUSTOMIZATIONS_HELP_3()}
            &nbsp;&nbsp;
            <OptionIcon type="api_mqtt_exclude" isSet={true} />=
            {LL.CUSTOMIZATIONS_HELP_4()}&nbsp;&nbsp;
            <OptionIcon type="web_exclude" isSet={true} />=
            {LL.CUSTOMIZATIONS_HELP_5()}&nbsp;&nbsp;
            <OptionIcon type="deleted" isSet={true} />={LL.CUSTOMIZATIONS_HELP_6()}
          </Typography>
        </Box>
        <Grid
          container
          mb={1}
          mt={0}
          spacing={1}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={2}>
            <TextField
              size="small"
              variant="outlined"
              placeholder={LL.SEARCH()}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" sx={{ fontSize: 16 }} />
                  </InputAdornment>
                )
              }}
            />
          </Grid>
          <Grid item>
            <ToggleButtonGroup
              size="small"
              color="secondary"
              value={getMaskString(selectedFilters)}
              onChange={(event, mask: string[]) => {
                setSelectedFilters(getMaskNumber(mask));
              }}
            >
              <ToggleButton value="8">
                <OptionIcon type="favorite" isSet={true} />
              </ToggleButton>
              <ToggleButton value="4">
                <OptionIcon type="readonly" isSet={true} />
              </ToggleButton>
              <ToggleButton value="2">
                <OptionIcon type="api_mqtt_exclude" isSet={true} />
              </ToggleButton>
              <ToggleButton value="1">
                <OptionIcon type="web_exclude" isSet={true} />
              </ToggleButton>
              <ToggleButton value="128">
                <OptionIcon type="deleted" isSet={true} />
              </ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid item>
            <Button
              size="small"
              sx={{ fontSize: 10 }}
              variant="outlined"
              color="inherit"
              onClick={() => maskDisabled(false)}
            >
              {LL.SET_ALL()}&nbsp;
              <OptionIcon type="api_mqtt_exclude" isSet={false} />
              <OptionIcon type="web_exclude" isSet={false} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              size="small"
              sx={{ fontSize: 10 }}
              variant="outlined"
              color="inherit"
              onClick={() => maskDisabled(true)}
            >
              {LL.SET_ALL()}&nbsp;
              <OptionIcon type="api_mqtt_exclude" isSet={true} />
              <OptionIcon type="web_exclude" isSet={true} />
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" color="primary">
              {LL.SHOWING()}&nbsp;{shown_data.length}/{deviceEntities.length}
              &nbsp;{LL.ENTITIES(deviceEntities.length)}
            </Typography>
          </Grid>
        </Grid>
        <Table
          data={{ nodes: shown_data }}
          theme={entities_theme}
          layout={{ custom: true }}
        >
          {(tableList: DeviceEntity[]) => (
            <>
              <Header>
                <HeaderRow>
                  <HeaderCell stiff>{LL.OPTIONS()}</HeaderCell>
                  <HeaderCell resize>{LL.NAME(1)}</HeaderCell>
                  <HeaderCell stiff>{LL.MIN()}</HeaderCell>
                  <HeaderCell stiff>{LL.MAX()}</HeaderCell>
                  <HeaderCell resize>{LL.VALUE(0)}</HeaderCell>
                </HeaderRow>
              </Header>
              <Body>
                {tableList.map((de: DeviceEntity) => (
                  <Row key={de.id} item={de} onClick={() => editDeviceEntity(de)}>
                    <Cell stiff>
                      <EntityMaskToggle onUpdate={updateDeviceEntity} de={de} />
                    </Cell>
                    <Cell>
                      {formatName(de, false)}&nbsp;(
                      <Link
                        target="_blank"
                        href={APIURL + selectedDeviceName + '/' + de.id}
                      >
                        {de.id}
                      </Link>
                      )
                    </Cell>
                    <Cell>
                      {!(de.m & DeviceEntityMask.DV_READONLY) && formatValue(de.mi)}
                    </Cell>
                    <Cell>
                      {!(de.m & DeviceEntityMask.DV_READONLY) && formatValue(de.ma)}
                    </Cell>
                    <Cell>{formatValue(de.v)}</Cell>
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>
      </>
    );
  };

  const renderResetDialog = () => (
    <Dialog
      sx={dialogStyle}
      open={confirmReset}
      onClose={() => setConfirmReset(false)}
    >
      <DialogTitle>{LL.RESET(1)}</DialogTitle>
      <DialogContent dividers>{LL.CUSTOMIZATIONS_RESET()}</DialogContent>
      <DialogActions>
        <Button
          startIcon={<CancelIcon />}
          variant="outlined"
          onClick={() => setConfirmReset(false)}
          color="secondary"
        >
          {LL.CANCEL()}
        </Button>
        <Button
          startIcon={<SettingsBackupRestoreIcon />}
          variant="outlined"
          onClick={resetCustomization}
          color="error"
        >
          {LL.RESET(0)}
        </Button>
      </DialogActions>
    </Dialog>
  );

  const renderContent = () => (
    <>
      {devices && renderDeviceList()}
      {selectedDevice !== -1 && renderDeviceData()}
      {restartNeeded && (
        <MessageBox my={2} level="warning" message={LL.RESTART_TEXT(0)}>
          <Button
            startIcon={<PowerSettingsNewIcon />}
            variant="contained"
            color="error"
            onClick={restart}
          >
            {LL.RESTART()}
          </Button>
        </MessageBox>
      )}
      {!restartNeeded && (
        <Box display="flex" flexWrap="wrap">
          <Box flexGrow={1}>
            {numChanges !== 0 && (
              <ButtonRow>
                <Button
                  startIcon={<CancelIcon />}
                  variant="outlined"
                  color="secondary"
                  onClick={() => devices && readDeviceEntities(selectedDevice)}
                >
                  {LL.CANCEL()}
                </Button>
                <Button
                  startIcon={<WarningIcon color="warning" />}
                  variant="contained"
                  color="info"
                  onClick={saveCustomization}
                >
                  {LL.APPLY_CHANGES(numChanges)}
                </Button>
              </ButtonRow>
            )}
          </Box>
          <ButtonRow mt={1}>
            <Button
              startIcon={<SettingsBackupRestoreIcon />}
              variant="outlined"
              color="error"
              onClick={() => setConfirmReset(true)}
            >
              {LL.RESET(0)}
            </Button>
          </ButtonRow>
        </Box>
      )}
      {renderResetDialog()}
    </>
  );

  return (
    <SectionContent>
      {blocker ? <BlockNavigation blocker={blocker} /> : null}
      {restarting ? <RestartMonitor /> : renderContent()}
      {selectedDeviceEntity && (
        <SettingsCustomizationDialog
          open={dialogOpen}
          onClose={onDialogClose}
          onSave={onDialogSave}
          selectedItem={selectedDeviceEntity}
        />
      )}
    </SectionContent>
  );
};

export default Customization;
