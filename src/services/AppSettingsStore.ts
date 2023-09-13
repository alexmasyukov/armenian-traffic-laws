import { light } from '../theme/theme';
import { AppSettings } from '../../types.d';

export class AppSettingsStore {
  private static appSettingsKey = 'app-settings';
  private static initialAppSettings: AppSettings = {
    lang: 'ru',
    theme: 'light',
    fontSize: light.fontSize,
  };

  private static getAppSettings = (): AppSettings => {
    try {
      const appSettings =
        (JSON.parse(localStorage.getItem(AppSettingsStore.appSettingsKey) || 'null') as AppSettings) ??
        AppSettingsStore.initialAppSettings;

      return appSettings;
    } catch (_) {
      console.error('Error while parsing app settings', _);
      return AppSettingsStore.initialAppSettings;
    }
  };

  static getTheme = (): AppSettings['theme'] => {
    const appSettings = AppSettingsStore.getAppSettings();
    return appSettings.theme;
  };

  static getLang = (): AppSettings['lang'] => {
    const appSettings = AppSettingsStore.getAppSettings();
    return appSettings.lang;
  };

  static getFontSize = (): AppSettings['fontSize'] => {
    const appSettings = AppSettingsStore.getAppSettings();

    return appSettings.fontSize;
  };

  static setTheme = (theme: AppSettings['theme']): void => {
    const appSettings = AppSettingsStore.getAppSettings();
    appSettings.theme = theme;

    localStorage.setItem(AppSettingsStore.appSettingsKey, JSON.stringify(appSettings));
  };

  static setLang = (lang: AppSettings['lang']): void => {
    const appSettings = AppSettingsStore.getAppSettings();
    appSettings.lang = lang;

    localStorage.setItem(AppSettingsStore.appSettingsKey, JSON.stringify(appSettings));
  };

  static setFontSize = (fontSize: Partial<AppSettings['fontSize']>): void => {
    const appSettings = AppSettingsStore.getAppSettings();
    appSettings.fontSize = {
      ...appSettings.fontSize,
      ...fontSize,
    };

    localStorage.setItem(AppSettingsStore.appSettingsKey, JSON.stringify(appSettings));
  };

  static resetAppSettings = (): void => {
    localStorage.setItem(
      AppSettingsStore.appSettingsKey,
      JSON.stringify(AppSettingsStore.initialAppSettings)
    );
  };
}
