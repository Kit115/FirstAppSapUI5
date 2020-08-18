sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("sap.ui.selfmade.appOne.controller.Home", {
        onButtonPress : function () {
            MessageToast.show("Hello");
            console.log(sap.ui.getCore().getModel("productModel").getJSON());
        },
        onSelectChange : function () {
            alert(this.getView().getModel("productTemplate").getProperty("/SortByTest"));
        }
    });
});