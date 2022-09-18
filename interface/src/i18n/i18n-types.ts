// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'
	| 'nl'
	| 'no'
	| 'pl'
	| 'se'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	/**
	 * Language
	 */
	LANGUAGE: string
	/**
	 * Retry
	 */
	RETRY: string
	/**
	 * Loading
	 */
	LOADING: string
	/**
	 * is required
	 */
	IS_REQUIRED: string
	/**
	 * Sign In
	 */
	SIGN_IN: string
	/**
	 * Sign Out
	 */
	SIGN_OUT: string
	/**
	 * Username
	 */
	USERNAME: string
	/**
	 * Password
	 */
	PASSWORD: string
	/**
	 * Dashboard
	 */
	DASHBOARD: string
	/**
	 * Settings
	 */
	SETTINGS: string
	/**
	 * saved
	 */
	SAVED: string
	/**
	 * Help
	 */
	HELP: string
	/**
	 * Logged in as {name}
	 * @param {unknown} name
	 */
	LOGGED_IN: RequiredParams<'name'>
	/**
	 * Please sign in to continue
	 */
	PLEASE_SIGNIN: string
	/**
	 * Upload successful
	 */
	UPLOAD_SUCCESSFUL: string
	/**
	 * Download successful
	 */
	DOWNLOAD_SUCCESSFUL: string
	/**
	 * Invalid login details
	 */
	INVALID_LOGIN: string
	/**
	 * Network
	 */
	NETWORK: string
	/**
	 * Security
	 */
	SECURITY: string
	/**
	 * ON/OFF
	 */
	ONOFF_CAP: string
	/**
	 * on/off
	 */
	ONOFF: string
	/**
	 * Type
	 */
	TYPE: string
	/**
	 * Description
	 */
	DESCRIPTION: string
	/**
	 * Entities
	 */
	ENTITIES: string
	/**
	 * Refresh
	 */
	REFRESH: string
	/**
	 * Export
	 */
	EXPORT: string
	/**
	 * Device Details
	 */
	DEVICE_DETAILS: string
	/**
	 * Brand
	 */
	BRAND: string
	/**
	 * Entity Name
	 */
	ENTITY_NAME: string
	/**
	 * Value
	 */
	VALUE: string
	/**
	 * only show favorites
	 */
	SHOW_FAV: string
	/**
	 * Device and Sensor Data
	 */
	DEVICE_SENSOR_DATA: string
	/**
	 * Devices & Sensors
	 */
	DEVICES_SENSORS: string
	/**
	 * Attached EMS-ESP Sensors
	 */
	ATTACHED_SENSORS: string
	/**
	 * Call Command
	 */
	RUN_COMMAND: string
	/**
	 * Change Value
	 */
	CHANGE_VALUE: string
	/**
	 * Cancel
	 */
	CANCEL: string
	/**
	 * Reset
	 */
	RESET: string
	/**
	 * Send
	 */
	SEND: string
	/**
	 * Save
	 */
	SAVE: string
	/**
	 * Remove
	 */
	REMOVE: string
	/**
	 * Problem updating
	 */
	PROBLEM_UPDATING: string
	/**
	 * Problem loading
	 */
	PROBLEM_LOADING: string
	/**
	 * Access Denied
	 */
	ACCESS_DENIED: string
	/**
	 * Analog Sensor
	 */
	ANALOG_SENSOR: string
	/**
	 * Analog Sensors
	 */
	ANALOG_SENSORS: string
	/**
	 * Updated
	 */
	UPDATED: string
	/**
	 * Update
	 */
	UPDATE: string
	/**
	 * Removed
	 */
	REMOVED: string
	/**
	 * Deletion
	 */
	DELETION: string
	/**
	 * Offset
	 */
	OFFSET: string
	/**
	 * Factor
	 */
	FACTOR: string
	/**
	 * Frequency
	 */
	FREQ: string
	/**
	 * Start value
	 */
	STARTVALUE: string
	/**
	 * Warning: be careful when assigning a GPIO!
	 */
	WARN_GPIO: string
	/**
	 * Edit
	 */
	EDIT: string
	/**
	 * Temperature Sensor
	 */
	TEMP_SENSOR: string
	/**
	 * Temperature Sensors
	 */
	TEMP_SENSORS: string
	/**
	 * Write command {cmd}
	 * @param {unknown} cmd
	 */
	WRITE_COMMAND: RequiredParams<'cmd'>
	/**
	 * EMS bus disconnected. If this warning still persists after a few seconds please check settings and board profile
	 */
	EMS_BUS_WARNING: string
	/**
	 * Scanning for EMS devices...
	 */
	EMS_BUS_SCANNING: string
	/**
	 * Connected
	 */
	CONNECTED: string
	/**
	 * Tx issues - try a different Tx Mode
	 */
	TX_ISSUES: string
	/**
	 * Disconnected
	 */
	DISCONNECTED: string
	/**
	 * Are you sure you want to initiate a full device scan of the EMS bus?
	 */
	EMS_SCAN: string
	/**
	 * EMS Bus Status
	 */
	EMS_BUS_STATUS: string
	/**
	 * Active Devices & Sensors
	 */
	ACTIVE_DEVICES: string
	/**
	 * Device
	 */
	DEVICE: string
	/**
	 * SUCCESS
	 */
	SUCCESS: string
	/**
	 * FAIL
	 */
	FAIL: string
	/**
	 * QUALITY
	 */
	QUALITY: string
	/**
	 * Scan for new devices
	 */
	SCAN_DEVICES: string
	/**
	 * EMS Bus & Activity Status
	 */
	EMS_BUS_STATUS_TITLE: string
	/**
	 * Scan
	 */
	SCAN: string
	STATUS_NAMES: {
		/**
		 * EMS Telegrams Received (Rx)
		 */
		'0': string
		/**
		 * EMS Reads (Tx)
		 */
		'1': string
		/**
		 * EMS Writes (Tx)
		 */
		'2': string
		/**
		 * Temperature Sensor Reads
		 */
		'3': string
		/**
		 * Analog Sensor Reads
		 */
		'4': string
		/**
		 * MQTT Publishes
		 */
		'5': string
		/**
		 * API Calls
		 */
		'6': string
		/**
		 * Syslog Messages
		 */
		'7': string
	}
	/**
	 * {num} Device{{s}}
	 * @param {string | number | boolean} num
	 */
	NUM_DEVICES: RequiredParams<'num'>
	/**
	 * {num} Temperature Sensor{{s}}
	 * @param {string | number | boolean} num
	 */
	NUM_TEMP_SENSORS: RequiredParams<'num'>
	/**
	 * {num} Analog Sensor{{s}}
	 * @param {string | number | boolean} num
	 */
	NUM_ANALOG_SENSORS: RequiredParams<'num'>
	/**
	 * {num} Day{{s}}
	 * @param {string | number | boolean} num
	 */
	NUM_DAYS: RequiredParams<'num'>
	/**
	 * {num} Second{{s}}
	 * @param {string | number | boolean} num
	 */
	NUM_SECONDS: RequiredParams<'num'>
	/**
	 * {num} Hour{{s}}
	 * @param {string | number | boolean} num
	 */
	NUM_HOURS: RequiredParams<'num'>
	/**
	 * {num} Minute{{s}}
	 * @param {string | number | boolean} num
	 */
	NUM_MINUTES: RequiredParams<'num'>
	/**
	 * Application Settings
	 */
	APPLICATION_SETTINGS: string
	/**
	 * Customization
	 */
	CUSTOMIZATION: string
	/**
	 * EMS-ESP is restarting
	 */
	APPLICATION_RESTARTING: string
	/**
	 * Select a pre-configured interface board profile from the list below or choose Custom to configure your own hardware settings
	 */
	BOARD_PROFILE_TEXT: string
	/**
	 * Board Profile
	 */
	BOARD_PROFILE: string
	/**
	 * Button
	 */
	BUTTON: string
	/**
	 * Temperature
	 */
	TEMPERATURE: string
	/**
	 * disabled
	 */
	DISABLED: string
	/**
	 * General Options
	 */
	GENERAL_OPTIONS: string
	/**
	 * Language (for device entities)
	 */
	LANGUAGE_ENTITIES: string
	/**
	 * Hide LED
	 */
	HIDE_LED: string
	/**
	 * Enable Telnet Console
	 */
	ENABLE_TELNET: string
	/**
	 * Enable Analog Sensors
	 */
	ENABLE_ANALOG: string
	/**
	 * Convert temperature values to Fahrenheit
	 */
	CONVERT_FAHRENHEIT: string
	/**
	 * Bypass Access Token authorization on API calls
	 */
	BYPASS_TOKEN: string
	/**
	 * Enable read-only mode (blocks all outgoing EMS Tx Write commands)
	 */
	READONLY: string
	/**
	 * Underclock CPU speed
	 */
	UNDERCLOCK_CPU: string
	/**
	 * Enable Shower Timer
	 */
	ENABLE_SHOWER_TIMER: string
	/**
	 * Enable Shower Alert
	 */
	ENABLE_SHOWER_ALERT: string
	/**
	 * Trigger Time
	 */
	TRIGGER_TIME: string
	/**
	 * Cold Shot Duration
	 */
	COLD_SHOT_DURATION: string
	/**
	 * Formatting Options
	 */
	FORMATTING_OPTIONS: string
	/**
	 * Boolean Format Dashboard
	 */
	BOOLEAN_FORMAT_DASHBOARD: string
	/**
	 * Boolean Format API/MQTT
	 */
	BOOLEAN_FORMAT_API: string
	/**
	 * Enum Format API/MQTT
	 */
	ENUM_FORMAT: string
	/**
	 * Index
	 */
	INDEX: string
	/**
	 * Enable parasite power
	 */
	ENABLE_PARASITE: string
	/**
	 * Logging
	 */
	LOGGING: string
	/**
	 * Log EMS telegrams in hexadecimal
	 */
	LOG_HEX: string
	/**
	 * Enable Syslog
	 */
	ENABLE_SYSLOG: string
	/**
	 * Mark Interval
	 */
	MARK_INTERVAL: string
	/**
	 * seconds
	 */
	SECONDS: string
	/**
	 * minutes
	 */
	MINUTES: string
	/**
	 * Restart
	 */
	RESTART: string
	/**
	 * hours
	 */
	HOURS: string
	/**
	 * EMS-ESP needs to be restarted to apply changed system settings
	 */
	RESTART_TEXT: string
	/**
	 * Command
	 */
	COMMAND: string
	/**
	 * All customizations have been removed. Restarting...
	 */
	CUSTOMIZATIONS_RESTART: string
	/**
	 * Selected entities exceeded limit. Please save in batches
	 */
	CUSTOMIZATIONS_FULL: string
	/**
	 * Customizations saved
	 */
	CUSTOMIZATIONS_SAVED: string
	/**
	 * Select a device and customize the entities options or click to rename
	 */
	CUSTOMIZATIONS_HELP_1: string
	/**
	 * mark as favorite
	 */
	CUSTOMIZATIONS_HELP_2: string
	/**
	 * disable write action
	 */
	CUSTOMIZATIONS_HELP_3: string
	/**
	 * exclude from MQTT and API
	 */
	CUSTOMIZATIONS_HELP_4: string
	/**
	 * hide from Dashboard
	 */
	CUSTOMIZATIONS_HELP_5: string
	/**
	 * Select a device
	 */
	SELECT_DEVICE: string
	/**
	 * set all
	 */
	SET_ALL: string
	/**
	 * Options
	 */
	OPTIONS: string
	/**
	 * Name
	 */
	NAME: string
	/**
	 * Are you sure you want remove all customizations including the custom settings of the Temperature and Analog sensors?
	 */
	CUSTOMIZATIONS_RESET: string
	/**
	 * Device Entities
	 */
	DEVICE_ENTITIES: string
	/**
	 * User Customization
	 */
	USER_CUSTOMIZATION: string
	/**
	 * Support Information
	 */
	SUPPORT_INFORMATION: string
	/**
	 * Click Here
	 */
	CLICK_HERE: string
	/**
	 * Visit the online wiki to get instructions on how to configure EMS-ESP
	 */
	HELP_INFORMATION_1: string
	/**
	 * For live community chat join our Discord server
	 */
	HELP_INFORMATION_2: string
	/**
	 * To request a feature or report a bug
	 */
	HELP_INFORMATION_3: string
	/**
	 * remember to download and attach your system information for a faster response when reporting an issue
	 */
	HELP_INFORMATION_4: string
	/**
	 * EMS-ESP is a free and open-source project. Please support its future development by giving it a star on Github!
	 */
	HELP_INFORMATION_5: string
	/**
	 * Support Info
	 */
	SUPPORT_INFO: string
	/**
	 * Upload
	 */
	UPLOAD: string
	/**
	 * Download
	 */
	DOWNLOAD: string
	/**
	 * aborted
	 */
	ABORTED: string
	/**
	 * failed
	 */
	FAILED: string
	/**
	 * successful
	 */
	SUCCESSFUL: string
	/**
	 * System
	 */
	SYSTEM: string
	/**
	 * Log
	 */
	LOG: string
	/**
	 * Status
	 */
	STATUS: string
	/**
	 * Upload/Download
	 */
	UPLOAD_DOWNLOAD: string
	/**
	 * You are currently running version
	 */
	SYSTEM_VERSION_RUNNING: string
	/**
	 * to apply the new firmware
	 */
	SYSTEM_APPLY_FIRMWARE: string
	/**
	 * Close
	 */
	CLOSE: string
	/**
	 * Use
	 */
	USE: string
	/**
	 * Factory Reset
	 */
	FACTORY_RESET: string
	/**
	 * Device has been factory reset and will now restart
	 */
	SYSTEM_FACTORY_TEXT: string
	/**
	 * Are you sure you want to reset the device to its factory defaults?
	 */
	SYSTEM_FACTORY_TEXT_DIALOG: string
	/**
	 * Version Check
	 */
	VERSION_CHECK: string
	/**
	 * The latest
	 */
	THE_LATEST: string
	/**
	 * Device (Platform / SDK)
	 */
	PLATFORM: string
	/**
	 * System Uptime
	 */
	UPTIME: string
	/**
	 * CPU Frequency
	 */
	CPU_FREQ: string
	/**
	 * Heap (Free / Max Alloc)
	 */
	HEAP: string
	/**
	 * PSRAM (Size / Free)
	 */
	PSRAM: string
	/**
	 * Flash Chip (Size / Speed)
	 */
	FLASH: string
	/**
	 * File System (Used / Total)
	 */
	FILESYSTEM: string
	/**
	 * Buffer Size
	 */
	BUFFER_SIZE: string
	/**
	 * Compact
	 */
	COMPACT: string
	/**
	 * Enable OTA Updates
	 */
	ENABLE_OTA: string
	/**
	 * Download the entity customizations
	 */
	DOWNLOAD_CUSTOMIZATION_TEXT: string
	/**
	 * Download the application settings. Be careful when sharing your settings as this file contains passwords and other sensitive system information
	 */
	DOWNLOAD_SETTINGS_TEXT: string
	/**
	 * Upload a new firmware (.bin) file, settings or customizations (.json) file below
	 */
	UPLOAD_TEXT: string
	/**
	 * Uploading
	 */
	UPLOADING: string
	/**
	 * Drop file or click here
	 */
	UPLOAD_DROP_TEXT: string
	/**
	 * Unexpected Error, please try again
	 */
	ERROR: string
	/**
	 * Time set
	 */
	TIME_SET: string
	/**
	 * Manage Users
	 */
	MANAGE_USERS: string
	/**
	 * is Admin
	 */
	IS_ADMIN: string
	/**
	 * You must have at least one admin user configured
	 */
	USER_WARNING: string
	/**
	 * Add
	 */
	ADD: string
	/**
	 * Access Token for
	 */
	ACCESS_TOKEN_FOR: string
	/**
	 * The token below is used with REST API calls that require authorization. It can be passed either as a Bearer token in the Authorization header or in the access_token URL query parameter.
	 */
	ACCESS_TOKEN_TEXT: string
	/**
	 * Generating token
	 */
	GENERATING_TOKEN: string
	/**
	 * User
	 */
	USER: string
	/**
	 * Modify
	 */
	MODIFY: string
	/**
	 * The su (super user) password is used to sign authentication tokens and also enable admin privileges within the Console.
	 */
	SU_TEXT: string
	/**
	 * Not enabled
	 */
	NOT_ENABLED: string
	/**
	 * Errors
	 */
	ERRORS: string
	/**
	 * Disconnect Reason
	 */
	DISCONNECT_REASON: string
	/**
	 * Enable MQTT
	 */
	ENABLE_MQTT: string
	/**
	 * Optional
	 */
	OPTIONAL: string
	/**
	 * Formatting
	 */
	FORMATTING: string
	/**
	 * Format
	 */
	FORMAT: string
	/**
	 * Nested in a single topic
	 */
	MQTT_NEST_1: string
	/**
	 * As individual topics
	 */
	MQTT_NEST_2: string
	/**
	 * Publish command output to a `response` topic
	 */
	MQTT_RESPONSE: string
	/**
	 * Publish single value topics on change
	 */
	MQTT_PUBLISH_TEXT_1: string
	/**
	 * Publish to command topics (ioBroker)
	 */
	MQTT_PUBLISH_TEXT_2: string
	/**
	 * Enable MQTT Discovery (Home Assistant, Domoticz)
	 */
	MQTT_PUBLISH_TEXT_3: string
	/**
	 * Prefix for the Discovery topics
	 */
	MQTT_PUBLISH_TEXT_4: string
	/**
	 * Publish Intervals
	 */
	MQTT_PUBLISH_INTERVALS: string
	/**
	 * Boilers and Heat Pumps
	 */
	MQTT_INT_BOILER: string
	/**
	 * Thermostats
	 */
	MQTT_INT_THERMOSTATS: string
	/**
	 * Solar Modules
	 */
	MQTT_INT_SOLAR: string
	/**
	 * Mixer Modules
	 */
	MQTT_INT_MIXER: string
	/**
	 * Default
	 */
	DEFAULT: string
	/**
	 * Set Clean Session
	 */
	MQTT_CLEAN_SESSION: string
	/**
	 * Always set Retain flag
	 */
	MQTT_RETAIN_FLAG: string
	/**
	 * Inactive
	 */
	INACTIVE: string
	/**
	 * Active
	 */
	ACTIVE: string
	/**
	 * Unknown
	 */
	UNKNOWN: string
	/**
	 * Set Time
	 */
	SET_TIME: string
	/**
	 * Enter local date and time below to set the time
	 */
	SET_TIME_TEXT: string
	/**
	 * Local Time
	 */
	LOCAL_TIME: string
	/**
	 * UTC Time
	 */
	UTC_TIME: string
	/**
	 * Enable NTP
	 */
	ENABLE_NTP: string
	/**
	 * Time Zone
	 */
	TIME_ZONE: string
	/**
	 * Access Point
	 */
	ACCESS_POINT: string
	/**
	 * Enable Access Point
	 */
	AP_PROVIDE: string
	/**
	 * always
	 */
	AP_PROVIDE_TEXT_1: string
	/**
	 * when WiFi is disconnected
	 */
	AP_PROVIDE_TEXT_2: string
	/**
	 * never
	 */
	AP_PROVIDE_TEXT_3: string
	/**
	 * Preferred Channel
	 */
	AP_PREFERRED_CHANNEL: string
	/**
	 * Hide SSID
	 */
	AP_HIDE_SSID: string
	/**
	 * Scan WiFi Networks
	 */
	NETWORK_SCAN: string
	/**
	 * Idle
	 */
	IDLE: string
	/**
	 * Lost
	 */
	LOST: string
	/**
	 * Scanning
	 */
	SCANNING: string
	/**
	 * Scan again
	 */
	SCAN_AGAIN: string
	/**
	 * Network Scanner
	 */
	NETWORK_SCANNER: string
	/**
	 * No WiFi networks found
	 */
	NETWORK_NO_WIFI: string
	/**
	 * leave blank to disable WiFi
	 */
	NETWORK_BLANK_SSID: string
	/**
	 * Power
	 */
	POWER: string
	/**
	 * Disable WiFi Sleep Mode
	 */
	NETWORK_DISABLE_SLEEP: string
	/**
	 * Use Lower WiFi Bandwidth
	 */
	NETWORK_LOW_BAND: string
	/**
	 * Enable mDNS Service
	 */
	NETWORK_USE_DNS: string
	/**
	 * Enable IPv6 support
	 */
	NETWORK_ENABLE_IPV6: string
	/**
	 * Use Fixed IP address
	 */
	NETWORK_FIXED_IP: string
	/**
	 * Admin
	 */
	ADMIN: string
	/**
	 * Guest
	 */
	GUEST: string
	/**
	 * New
	 */
	NEW: string
	/**
	 * Rename
	 */
	RENAME: string
}

export type TranslationFunctions = {
	/**
	 * Language
	 */
	LANGUAGE: () => LocalizedString
	/**
	 * Retry
	 */
	RETRY: () => LocalizedString
	/**
	 * Loading
	 */
	LOADING: () => LocalizedString
	/**
	 * is required
	 */
	IS_REQUIRED: () => LocalizedString
	/**
	 * Sign In
	 */
	SIGN_IN: () => LocalizedString
	/**
	 * Sign Out
	 */
	SIGN_OUT: () => LocalizedString
	/**
	 * Username
	 */
	USERNAME: () => LocalizedString
	/**
	 * Password
	 */
	PASSWORD: () => LocalizedString
	/**
	 * Dashboard
	 */
	DASHBOARD: () => LocalizedString
	/**
	 * Settings
	 */
	SETTINGS: () => LocalizedString
	/**
	 * saved
	 */
	SAVED: () => LocalizedString
	/**
	 * Help
	 */
	HELP: () => LocalizedString
	/**
	 * Logged in as {name}
	 */
	LOGGED_IN: (arg: { name: unknown }) => LocalizedString
	/**
	 * Please sign in to continue
	 */
	PLEASE_SIGNIN: () => LocalizedString
	/**
	 * Upload successful
	 */
	UPLOAD_SUCCESSFUL: () => LocalizedString
	/**
	 * Download successful
	 */
	DOWNLOAD_SUCCESSFUL: () => LocalizedString
	/**
	 * Invalid login details
	 */
	INVALID_LOGIN: () => LocalizedString
	/**
	 * Network
	 */
	NETWORK: () => LocalizedString
	/**
	 * Security
	 */
	SECURITY: () => LocalizedString
	/**
	 * ON/OFF
	 */
	ONOFF_CAP: () => LocalizedString
	/**
	 * on/off
	 */
	ONOFF: () => LocalizedString
	/**
	 * Type
	 */
	TYPE: () => LocalizedString
	/**
	 * Description
	 */
	DESCRIPTION: () => LocalizedString
	/**
	 * Entities
	 */
	ENTITIES: () => LocalizedString
	/**
	 * Refresh
	 */
	REFRESH: () => LocalizedString
	/**
	 * Export
	 */
	EXPORT: () => LocalizedString
	/**
	 * Device Details
	 */
	DEVICE_DETAILS: () => LocalizedString
	/**
	 * Brand
	 */
	BRAND: () => LocalizedString
	/**
	 * Entity Name
	 */
	ENTITY_NAME: () => LocalizedString
	/**
	 * Value
	 */
	VALUE: () => LocalizedString
	/**
	 * only show favorites
	 */
	SHOW_FAV: () => LocalizedString
	/**
	 * Device and Sensor Data
	 */
	DEVICE_SENSOR_DATA: () => LocalizedString
	/**
	 * Devices & Sensors
	 */
	DEVICES_SENSORS: () => LocalizedString
	/**
	 * Attached EMS-ESP Sensors
	 */
	ATTACHED_SENSORS: () => LocalizedString
	/**
	 * Call Command
	 */
	RUN_COMMAND: () => LocalizedString
	/**
	 * Change Value
	 */
	CHANGE_VALUE: () => LocalizedString
	/**
	 * Cancel
	 */
	CANCEL: () => LocalizedString
	/**
	 * Reset
	 */
	RESET: () => LocalizedString
	/**
	 * Send
	 */
	SEND: () => LocalizedString
	/**
	 * Save
	 */
	SAVE: () => LocalizedString
	/**
	 * Remove
	 */
	REMOVE: () => LocalizedString
	/**
	 * Problem updating
	 */
	PROBLEM_UPDATING: () => LocalizedString
	/**
	 * Problem loading
	 */
	PROBLEM_LOADING: () => LocalizedString
	/**
	 * Access Denied
	 */
	ACCESS_DENIED: () => LocalizedString
	/**
	 * Analog Sensor
	 */
	ANALOG_SENSOR: () => LocalizedString
	/**
	 * Analog Sensors
	 */
	ANALOG_SENSORS: () => LocalizedString
	/**
	 * Updated
	 */
	UPDATED: () => LocalizedString
	/**
	 * Update
	 */
	UPDATE: () => LocalizedString
	/**
	 * Removed
	 */
	REMOVED: () => LocalizedString
	/**
	 * Deletion
	 */
	DELETION: () => LocalizedString
	/**
	 * Offset
	 */
	OFFSET: () => LocalizedString
	/**
	 * Factor
	 */
	FACTOR: () => LocalizedString
	/**
	 * Frequency
	 */
	FREQ: () => LocalizedString
	/**
	 * Start value
	 */
	STARTVALUE: () => LocalizedString
	/**
	 * Warning: be careful when assigning a GPIO!
	 */
	WARN_GPIO: () => LocalizedString
	/**
	 * Edit
	 */
	EDIT: () => LocalizedString
	/**
	 * Temperature Sensor
	 */
	TEMP_SENSOR: () => LocalizedString
	/**
	 * Temperature Sensors
	 */
	TEMP_SENSORS: () => LocalizedString
	/**
	 * Write command {cmd}
	 */
	WRITE_COMMAND: (arg: { cmd: unknown }) => LocalizedString
	/**
	 * EMS bus disconnected. If this warning still persists after a few seconds please check settings and board profile
	 */
	EMS_BUS_WARNING: () => LocalizedString
	/**
	 * Scanning for EMS devices...
	 */
	EMS_BUS_SCANNING: () => LocalizedString
	/**
	 * Connected
	 */
	CONNECTED: () => LocalizedString
	/**
	 * Tx issues - try a different Tx Mode
	 */
	TX_ISSUES: () => LocalizedString
	/**
	 * Disconnected
	 */
	DISCONNECTED: () => LocalizedString
	/**
	 * Are you sure you want to initiate a full device scan of the EMS bus?
	 */
	EMS_SCAN: () => LocalizedString
	/**
	 * EMS Bus Status
	 */
	EMS_BUS_STATUS: () => LocalizedString
	/**
	 * Active Devices & Sensors
	 */
	ACTIVE_DEVICES: () => LocalizedString
	/**
	 * Device
	 */
	DEVICE: () => LocalizedString
	/**
	 * SUCCESS
	 */
	SUCCESS: () => LocalizedString
	/**
	 * FAIL
	 */
	FAIL: () => LocalizedString
	/**
	 * QUALITY
	 */
	QUALITY: () => LocalizedString
	/**
	 * Scan for new devices
	 */
	SCAN_DEVICES: () => LocalizedString
	/**
	 * EMS Bus & Activity Status
	 */
	EMS_BUS_STATUS_TITLE: () => LocalizedString
	/**
	 * Scan
	 */
	SCAN: () => LocalizedString
	STATUS_NAMES: {
		/**
		 * EMS Telegrams Received (Rx)
		 */
		'0': () => LocalizedString
		/**
		 * EMS Reads (Tx)
		 */
		'1': () => LocalizedString
		/**
		 * EMS Writes (Tx)
		 */
		'2': () => LocalizedString
		/**
		 * Temperature Sensor Reads
		 */
		'3': () => LocalizedString
		/**
		 * Analog Sensor Reads
		 */
		'4': () => LocalizedString
		/**
		 * MQTT Publishes
		 */
		'5': () => LocalizedString
		/**
		 * API Calls
		 */
		'6': () => LocalizedString
		/**
		 * Syslog Messages
		 */
		'7': () => LocalizedString
	}
	/**
	 * {num} Device{{s}}
	 */
	NUM_DEVICES: (arg: { num: string | number | boolean }) => LocalizedString
	/**
	 * {num} Temperature Sensor{{s}}
	 */
	NUM_TEMP_SENSORS: (arg: { num: string | number | boolean }) => LocalizedString
	/**
	 * {num} Analog Sensor{{s}}
	 */
	NUM_ANALOG_SENSORS: (arg: { num: string | number | boolean }) => LocalizedString
	/**
	 * {num} Day{{s}}
	 */
	NUM_DAYS: (arg: { num: string | number | boolean }) => LocalizedString
	/**
	 * {num} Second{{s}}
	 */
	NUM_SECONDS: (arg: { num: string | number | boolean }) => LocalizedString
	/**
	 * {num} Hour{{s}}
	 */
	NUM_HOURS: (arg: { num: string | number | boolean }) => LocalizedString
	/**
	 * {num} Minute{{s}}
	 */
	NUM_MINUTES: (arg: { num: string | number | boolean }) => LocalizedString
	/**
	 * Application Settings
	 */
	APPLICATION_SETTINGS: () => LocalizedString
	/**
	 * Customization
	 */
	CUSTOMIZATION: () => LocalizedString
	/**
	 * EMS-ESP is restarting
	 */
	APPLICATION_RESTARTING: () => LocalizedString
	/**
	 * Select a pre-configured interface board profile from the list below or choose Custom to configure your own hardware settings
	 */
	BOARD_PROFILE_TEXT: () => LocalizedString
	/**
	 * Board Profile
	 */
	BOARD_PROFILE: () => LocalizedString
	/**
	 * Button
	 */
	BUTTON: () => LocalizedString
	/**
	 * Temperature
	 */
	TEMPERATURE: () => LocalizedString
	/**
	 * disabled
	 */
	DISABLED: () => LocalizedString
	/**
	 * General Options
	 */
	GENERAL_OPTIONS: () => LocalizedString
	/**
	 * Language (for device entities)
	 */
	LANGUAGE_ENTITIES: () => LocalizedString
	/**
	 * Hide LED
	 */
	HIDE_LED: () => LocalizedString
	/**
	 * Enable Telnet Console
	 */
	ENABLE_TELNET: () => LocalizedString
	/**
	 * Enable Analog Sensors
	 */
	ENABLE_ANALOG: () => LocalizedString
	/**
	 * Convert temperature values to Fahrenheit
	 */
	CONVERT_FAHRENHEIT: () => LocalizedString
	/**
	 * Bypass Access Token authorization on API calls
	 */
	BYPASS_TOKEN: () => LocalizedString
	/**
	 * Enable read-only mode (blocks all outgoing EMS Tx Write commands)
	 */
	READONLY: () => LocalizedString
	/**
	 * Underclock CPU speed
	 */
	UNDERCLOCK_CPU: () => LocalizedString
	/**
	 * Enable Shower Timer
	 */
	ENABLE_SHOWER_TIMER: () => LocalizedString
	/**
	 * Enable Shower Alert
	 */
	ENABLE_SHOWER_ALERT: () => LocalizedString
	/**
	 * Trigger Time
	 */
	TRIGGER_TIME: () => LocalizedString
	/**
	 * Cold Shot Duration
	 */
	COLD_SHOT_DURATION: () => LocalizedString
	/**
	 * Formatting Options
	 */
	FORMATTING_OPTIONS: () => LocalizedString
	/**
	 * Boolean Format Dashboard
	 */
	BOOLEAN_FORMAT_DASHBOARD: () => LocalizedString
	/**
	 * Boolean Format API/MQTT
	 */
	BOOLEAN_FORMAT_API: () => LocalizedString
	/**
	 * Enum Format API/MQTT
	 */
	ENUM_FORMAT: () => LocalizedString
	/**
	 * Index
	 */
	INDEX: () => LocalizedString
	/**
	 * Enable parasite power
	 */
	ENABLE_PARASITE: () => LocalizedString
	/**
	 * Logging
	 */
	LOGGING: () => LocalizedString
	/**
	 * Log EMS telegrams in hexadecimal
	 */
	LOG_HEX: () => LocalizedString
	/**
	 * Enable Syslog
	 */
	ENABLE_SYSLOG: () => LocalizedString
	/**
	 * Mark Interval
	 */
	MARK_INTERVAL: () => LocalizedString
	/**
	 * seconds
	 */
	SECONDS: () => LocalizedString
	/**
	 * minutes
	 */
	MINUTES: () => LocalizedString
	/**
	 * Restart
	 */
	RESTART: () => LocalizedString
	/**
	 * hours
	 */
	HOURS: () => LocalizedString
	/**
	 * EMS-ESP needs to be restarted to apply changed system settings
	 */
	RESTART_TEXT: () => LocalizedString
	/**
	 * Command
	 */
	COMMAND: () => LocalizedString
	/**
	 * All customizations have been removed. Restarting...
	 */
	CUSTOMIZATIONS_RESTART: () => LocalizedString
	/**
	 * Selected entities exceeded limit. Please save in batches
	 */
	CUSTOMIZATIONS_FULL: () => LocalizedString
	/**
	 * Customizations saved
	 */
	CUSTOMIZATIONS_SAVED: () => LocalizedString
	/**
	 * Select a device and customize the entities options or click to rename
	 */
	CUSTOMIZATIONS_HELP_1: () => LocalizedString
	/**
	 * mark as favorite
	 */
	CUSTOMIZATIONS_HELP_2: () => LocalizedString
	/**
	 * disable write action
	 */
	CUSTOMIZATIONS_HELP_3: () => LocalizedString
	/**
	 * exclude from MQTT and API
	 */
	CUSTOMIZATIONS_HELP_4: () => LocalizedString
	/**
	 * hide from Dashboard
	 */
	CUSTOMIZATIONS_HELP_5: () => LocalizedString
	/**
	 * Select a device
	 */
	SELECT_DEVICE: () => LocalizedString
	/**
	 * set all
	 */
	SET_ALL: () => LocalizedString
	/**
	 * Options
	 */
	OPTIONS: () => LocalizedString
	/**
	 * Name
	 */
	NAME: () => LocalizedString
	/**
	 * Are you sure you want remove all customizations including the custom settings of the Temperature and Analog sensors?
	 */
	CUSTOMIZATIONS_RESET: () => LocalizedString
	/**
	 * Device Entities
	 */
	DEVICE_ENTITIES: () => LocalizedString
	/**
	 * User Customization
	 */
	USER_CUSTOMIZATION: () => LocalizedString
	/**
	 * Support Information
	 */
	SUPPORT_INFORMATION: () => LocalizedString
	/**
	 * Click Here
	 */
	CLICK_HERE: () => LocalizedString
	/**
	 * Visit the online wiki to get instructions on how to configure EMS-ESP
	 */
	HELP_INFORMATION_1: () => LocalizedString
	/**
	 * For live community chat join our Discord server
	 */
	HELP_INFORMATION_2: () => LocalizedString
	/**
	 * To request a feature or report a bug
	 */
	HELP_INFORMATION_3: () => LocalizedString
	/**
	 * remember to download and attach your system information for a faster response when reporting an issue
	 */
	HELP_INFORMATION_4: () => LocalizedString
	/**
	 * EMS-ESP is a free and open-source project. Please support its future development by giving it a star on Github!
	 */
	HELP_INFORMATION_5: () => LocalizedString
	/**
	 * Support Info
	 */
	SUPPORT_INFO: () => LocalizedString
	/**
	 * Upload
	 */
	UPLOAD: () => LocalizedString
	/**
	 * Download
	 */
	DOWNLOAD: () => LocalizedString
	/**
	 * aborted
	 */
	ABORTED: () => LocalizedString
	/**
	 * failed
	 */
	FAILED: () => LocalizedString
	/**
	 * successful
	 */
	SUCCESSFUL: () => LocalizedString
	/**
	 * System
	 */
	SYSTEM: () => LocalizedString
	/**
	 * Log
	 */
	LOG: () => LocalizedString
	/**
	 * Status
	 */
	STATUS: () => LocalizedString
	/**
	 * Upload/Download
	 */
	UPLOAD_DOWNLOAD: () => LocalizedString
	/**
	 * You are currently running version
	 */
	SYSTEM_VERSION_RUNNING: () => LocalizedString
	/**
	 * to apply the new firmware
	 */
	SYSTEM_APPLY_FIRMWARE: () => LocalizedString
	/**
	 * Close
	 */
	CLOSE: () => LocalizedString
	/**
	 * Use
	 */
	USE: () => LocalizedString
	/**
	 * Factory Reset
	 */
	FACTORY_RESET: () => LocalizedString
	/**
	 * Device has been factory reset and will now restart
	 */
	SYSTEM_FACTORY_TEXT: () => LocalizedString
	/**
	 * Are you sure you want to reset the device to its factory defaults?
	 */
	SYSTEM_FACTORY_TEXT_DIALOG: () => LocalizedString
	/**
	 * Version Check
	 */
	VERSION_CHECK: () => LocalizedString
	/**
	 * The latest
	 */
	THE_LATEST: () => LocalizedString
	/**
	 * Device (Platform / SDK)
	 */
	PLATFORM: () => LocalizedString
	/**
	 * System Uptime
	 */
	UPTIME: () => LocalizedString
	/**
	 * CPU Frequency
	 */
	CPU_FREQ: () => LocalizedString
	/**
	 * Heap (Free / Max Alloc)
	 */
	HEAP: () => LocalizedString
	/**
	 * PSRAM (Size / Free)
	 */
	PSRAM: () => LocalizedString
	/**
	 * Flash Chip (Size / Speed)
	 */
	FLASH: () => LocalizedString
	/**
	 * File System (Used / Total)
	 */
	FILESYSTEM: () => LocalizedString
	/**
	 * Buffer Size
	 */
	BUFFER_SIZE: () => LocalizedString
	/**
	 * Compact
	 */
	COMPACT: () => LocalizedString
	/**
	 * Enable OTA Updates
	 */
	ENABLE_OTA: () => LocalizedString
	/**
	 * Download the entity customizations
	 */
	DOWNLOAD_CUSTOMIZATION_TEXT: () => LocalizedString
	/**
	 * Download the application settings. Be careful when sharing your settings as this file contains passwords and other sensitive system information
	 */
	DOWNLOAD_SETTINGS_TEXT: () => LocalizedString
	/**
	 * Upload a new firmware (.bin) file, settings or customizations (.json) file below
	 */
	UPLOAD_TEXT: () => LocalizedString
	/**
	 * Uploading
	 */
	UPLOADING: () => LocalizedString
	/**
	 * Drop file or click here
	 */
	UPLOAD_DROP_TEXT: () => LocalizedString
	/**
	 * Unexpected Error, please try again
	 */
	ERROR: () => LocalizedString
	/**
	 * Time set
	 */
	TIME_SET: () => LocalizedString
	/**
	 * Manage Users
	 */
	MANAGE_USERS: () => LocalizedString
	/**
	 * is Admin
	 */
	IS_ADMIN: () => LocalizedString
	/**
	 * You must have at least one admin user configured
	 */
	USER_WARNING: () => LocalizedString
	/**
	 * Add
	 */
	ADD: () => LocalizedString
	/**
	 * Access Token for
	 */
	ACCESS_TOKEN_FOR: () => LocalizedString
	/**
	 * The token below is used with REST API calls that require authorization. It can be passed either as a Bearer token in the Authorization header or in the access_token URL query parameter.
	 */
	ACCESS_TOKEN_TEXT: () => LocalizedString
	/**
	 * Generating token
	 */
	GENERATING_TOKEN: () => LocalizedString
	/**
	 * User
	 */
	USER: () => LocalizedString
	/**
	 * Modify
	 */
	MODIFY: () => LocalizedString
	/**
	 * The su (super user) password is used to sign authentication tokens and also enable admin privileges within the Console.
	 */
	SU_TEXT: () => LocalizedString
	/**
	 * Not enabled
	 */
	NOT_ENABLED: () => LocalizedString
	/**
	 * Errors
	 */
	ERRORS: () => LocalizedString
	/**
	 * Disconnect Reason
	 */
	DISCONNECT_REASON: () => LocalizedString
	/**
	 * Enable MQTT
	 */
	ENABLE_MQTT: () => LocalizedString
	/**
	 * Optional
	 */
	OPTIONAL: () => LocalizedString
	/**
	 * Formatting
	 */
	FORMATTING: () => LocalizedString
	/**
	 * Format
	 */
	FORMAT: () => LocalizedString
	/**
	 * Nested in a single topic
	 */
	MQTT_NEST_1: () => LocalizedString
	/**
	 * As individual topics
	 */
	MQTT_NEST_2: () => LocalizedString
	/**
	 * Publish command output to a `response` topic
	 */
	MQTT_RESPONSE: () => LocalizedString
	/**
	 * Publish single value topics on change
	 */
	MQTT_PUBLISH_TEXT_1: () => LocalizedString
	/**
	 * Publish to command topics (ioBroker)
	 */
	MQTT_PUBLISH_TEXT_2: () => LocalizedString
	/**
	 * Enable MQTT Discovery (Home Assistant, Domoticz)
	 */
	MQTT_PUBLISH_TEXT_3: () => LocalizedString
	/**
	 * Prefix for the Discovery topics
	 */
	MQTT_PUBLISH_TEXT_4: () => LocalizedString
	/**
	 * Publish Intervals
	 */
	MQTT_PUBLISH_INTERVALS: () => LocalizedString
	/**
	 * Boilers and Heat Pumps
	 */
	MQTT_INT_BOILER: () => LocalizedString
	/**
	 * Thermostats
	 */
	MQTT_INT_THERMOSTATS: () => LocalizedString
	/**
	 * Solar Modules
	 */
	MQTT_INT_SOLAR: () => LocalizedString
	/**
	 * Mixer Modules
	 */
	MQTT_INT_MIXER: () => LocalizedString
	/**
	 * Default
	 */
	DEFAULT: () => LocalizedString
	/**
	 * Set Clean Session
	 */
	MQTT_CLEAN_SESSION: () => LocalizedString
	/**
	 * Always set Retain flag
	 */
	MQTT_RETAIN_FLAG: () => LocalizedString
	/**
	 * Inactive
	 */
	INACTIVE: () => LocalizedString
	/**
	 * Active
	 */
	ACTIVE: () => LocalizedString
	/**
	 * Unknown
	 */
	UNKNOWN: () => LocalizedString
	/**
	 * Set Time
	 */
	SET_TIME: () => LocalizedString
	/**
	 * Enter local date and time below to set the time
	 */
	SET_TIME_TEXT: () => LocalizedString
	/**
	 * Local Time
	 */
	LOCAL_TIME: () => LocalizedString
	/**
	 * UTC Time
	 */
	UTC_TIME: () => LocalizedString
	/**
	 * Enable NTP
	 */
	ENABLE_NTP: () => LocalizedString
	/**
	 * Time Zone
	 */
	TIME_ZONE: () => LocalizedString
	/**
	 * Access Point
	 */
	ACCESS_POINT: () => LocalizedString
	/**
	 * Enable Access Point
	 */
	AP_PROVIDE: () => LocalizedString
	/**
	 * always
	 */
	AP_PROVIDE_TEXT_1: () => LocalizedString
	/**
	 * when WiFi is disconnected
	 */
	AP_PROVIDE_TEXT_2: () => LocalizedString
	/**
	 * never
	 */
	AP_PROVIDE_TEXT_3: () => LocalizedString
	/**
	 * Preferred Channel
	 */
	AP_PREFERRED_CHANNEL: () => LocalizedString
	/**
	 * Hide SSID
	 */
	AP_HIDE_SSID: () => LocalizedString
	/**
	 * Scan WiFi Networks
	 */
	NETWORK_SCAN: () => LocalizedString
	/**
	 * Idle
	 */
	IDLE: () => LocalizedString
	/**
	 * Lost
	 */
	LOST: () => LocalizedString
	/**
	 * Scanning
	 */
	SCANNING: () => LocalizedString
	/**
	 * Scan again
	 */
	SCAN_AGAIN: () => LocalizedString
	/**
	 * Network Scanner
	 */
	NETWORK_SCANNER: () => LocalizedString
	/**
	 * No WiFi networks found
	 */
	NETWORK_NO_WIFI: () => LocalizedString
	/**
	 * leave blank to disable WiFi
	 */
	NETWORK_BLANK_SSID: () => LocalizedString
	/**
	 * Power
	 */
	POWER: () => LocalizedString
	/**
	 * Disable WiFi Sleep Mode
	 */
	NETWORK_DISABLE_SLEEP: () => LocalizedString
	/**
	 * Use Lower WiFi Bandwidth
	 */
	NETWORK_LOW_BAND: () => LocalizedString
	/**
	 * Enable mDNS Service
	 */
	NETWORK_USE_DNS: () => LocalizedString
	/**
	 * Enable IPv6 support
	 */
	NETWORK_ENABLE_IPV6: () => LocalizedString
	/**
	 * Use Fixed IP address
	 */
	NETWORK_FIXED_IP: () => LocalizedString
	/**
	 * Admin
	 */
	ADMIN: () => LocalizedString
	/**
	 * Guest
	 */
	GUEST: () => LocalizedString
	/**
	 * New
	 */
	NEW: () => LocalizedString
	/**
	 * Rename
	 */
	RENAME: () => LocalizedString
}

export type Formatters = {}
