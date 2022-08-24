import type { IComputedValue } from "mobx";
export interface TrayMenuItem {
    id: string;
    parentId: string | null;
    orderNumber: number;
    enabled: IComputedValue<boolean>;
    visible: IComputedValue<boolean>;
    label?: IComputedValue<string>;
    click?: () => Promise<void> | void;
    tooltip?: string;
    separator?: boolean;
}
export declare const trayMenuItemInjectionToken: import("@ogre-tools/injectable").InjectionToken<TrayMenuItem, void>;
declare const _default: () => void;
export default _default;
