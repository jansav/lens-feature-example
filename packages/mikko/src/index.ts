import {getInjectionToken, getInjectable, DiContainer} from "@ogre-tools/injectable";
import { computed } from "mobx";
import { trayMenuItemInjectionToken } from "@lensapp/tray"

export const mikkoInjectionToken = getInjectionToken<() => void>({ id : 'some-injection-token'})

const mikkoTrayMenuItemInjectable = getInjectable({
  id: "mikko-tray-menu-item",

  instantiate: (di) => {
    const mikkos = di.injectMany(mikkoInjectionToken);

    return ({
      id: "mikko",
      parentId: null,
      orderNumber: 42,
      enabled: computed(() => true),
      visible: computed(() => true),
      label: computed(() => "Mikko1000"),

      click: () => {
        mikkos.forEach(mikko => mikko())
      },
    });
  },

  injectionToken: trayMenuItemInjectionToken
});


export default (di: DiContainer) => {
  console.log('register mikko');
  di.register(mikkoTrayMenuItemInjectable);
}
