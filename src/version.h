#define EMSESP_APP_VERSION "3.5.0b10"

#if CONFIG_IDF_TARGET_ESP32C3
#define EMSESP_PLATFORM "ESP32-C3";
#elif CONFIG_IDF_TARGET_ESP32S2
#define EMSESP_PLATFORM "ESP32-S2";
#elif CONFIG_IDF_TARGET_ESP32 || EMSESP_STANDALONE
#define EMSESP_PLATFORM "ESP32";
#else
#error Target CONFIG_IDF_TARGET is not supported
#endif
