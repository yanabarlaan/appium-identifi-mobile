/**
 * The name of the extension type for drivers
 */
export const DRIVER_TYPE: "driver";
/**
 * The name of the extension type for plugins
 */
export const PLUGIN_TYPE: "plugin";
/**
 * The `server` command of the `appium` CLI
 */
export const SERVER_SUBCOMMAND: "server";
/**
 * The value of `--use-plugins` if _all_ plugins should be loaded
 */
export const USE_ALL_PLUGINS: "all";
export const KNOWN_PLUGINS: Readonly<{
    readonly images: "@appium/images-plugin";
    readonly 'execute-driver': "@appium/execute-driver-plugin";
    readonly 'relaxed-caps': "@appium/relaxed-caps-plugin";
}>;
export const KNOWN_DRIVERS: Readonly<{
    readonly uiautomator2: "appium-uiautomator2-driver";
    readonly xcuitest: "appium-xcuitest-driver";
    readonly youiengine: "appium-youiengine-driver";
    readonly windows: "appium-windows-driver";
    readonly mac: "appium-mac-driver";
    readonly mac2: "appium-mac2-driver";
    readonly espresso: "appium-espresso-driver";
    readonly tizen: "appium-tizen-driver";
    readonly flutter: "appium-flutter-driver";
    readonly safari: "appium-safari-driver";
    readonly gecko: "appium-geckodriver";
}>;
/**
 * Relative path to directory containing any Appium internal files
 */
export const CACHE_DIR_RELATIVE_PATH: string;
/**
 * Relative path to hashfile (from `APPIUM_HOME`) of consuming project's `package.json` (if it exists)
 */
export const PKG_HASHFILE_RELATIVE_PATH: string;
export const EXT_SUBCOMMAND_LIST: "list";
export const EXT_SUBCOMMAND_INSTALL: "install";
export const EXT_SUBCOMMAND_UNINSTALL: "uninstall";
export const EXT_SUBCOMMAND_UPDATE: "update";
export const EXT_SUBCOMMAND_RUN: "run";
//# sourceMappingURL=constants.d.ts.map