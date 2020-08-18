sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], (UIComponent, JSONModel) => {
    "use strict"
    return UIComponent.extend("sap.ui.selfmade.appOne.Component", {
        metadata : {
            manifest : "json"
        },
        init : function () {
            UIComponent.prototype.init.apply(this, arguments);
            
            var oModel = new JSONModel({
                Product : {
                    ProductID: "",
                    ProductName: "",
                    Category: "",
                    Price: "",
                    Supplier: "",
                    InStock: ""
                },
                SortByTest : ""
            });

            this.setModel(oModel, "productTemplate");

            
        }
    }); 
});