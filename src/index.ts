// @ts-ignore
export default (di,
                // Note: Remining arguments are kludge for the demo.
                injectable, mobx, trayMenuItemInjectionToken, showMessageBoxInjectable) => {
  const mikkoTrayMenuItemInjectable = injectable.getInjectable({
    id: "mikko-tray-menu-item",

    instantiate: (di: any) => {
      const showErrorPopup = di.inject(showMessageBoxInjectable);

      return ({
        id: "mikko",
        parentId: null,
        orderNumber: 42,
        enabled: mobx.computed(() => true),
        visible: mobx.computed(() => true),
        label: mobx.computed(() => "Mikko1000"),

        click: () => {
          showErrorPopup('Mikko', 'muuttaa maalle')
        },
      });
    },

    injectionToken: trayMenuItemInjectionToken,
  });


  di.register(mikkoTrayMenuItemInjectable);
}
