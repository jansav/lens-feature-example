import {DiContainer, getInjectable} from "@ogre-tools/injectable";
import {computed} from "mobx";
import { trayMenuItemInjectionToken } from "@lensapp/tray";

const jariTrayMenuItemInjectable = getInjectable({
  id: "jari-tray-menu-item",

  instantiate: (di) => {
    return ({
      id: "jari",
      parentId: null,
      orderNumber: 42,
      enabled: computed(() => true),
      visible: computed(() => true),
      label: computed(() => "Jari1000"),

      click: () => {
        console.log('jari koodaa')
      },
    });
  },

  injectionToken: trayMenuItemInjectionToken
});


export default (di: DiContainer) => {
  console.log('register jari');
  di.register(jariTrayMenuItemInjectable);
}
