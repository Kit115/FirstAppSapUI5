sap.ui.require([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel"
], (JSONModel, XMLView, ResourceModel) => {
    "use strict" 
    sap.ui.getCore().attachInit(() => {
        var oModel = new JSONModel({
            firstName : "Johnny",
            lastName : "Silverhand",
            isBadass : true,
            age : 50
        });
        sap.ui.getCore().setModel(oModel, "personModel"); 

        var oModel2 = new JSONModel(); 
        oModel2.loadData("./models/Products.json"); 

        sap.ui.getCore().setModel(oModel2, "productModel");
        var oResourceModel = new ResourceModel({
            bundleName : "sap.ui.selfmade.appOne.i18n.i18n",
            supportedLocales : ["", "de"],
            fallbackLocale : ""
        });

        sap.ui.getCore().setModel(oResourceModel, "i18n"); 

        var oView = new XMLView({
            viewName : "sap.ui.selfmade.appOne.view.Home"
        });

        sap.ui.getCore().getMessageManager().registerObject(oView, true); 

        oView.placeAt("content"); 


    });

});