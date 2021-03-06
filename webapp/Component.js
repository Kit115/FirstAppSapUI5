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
                
                newProduct : {
                    ProductID: "",
                    ProductName: "",
                    Category: "",
                    Price: "",
                    Supplier: "",
                    InStock: true
                },
                SortByTest : ""

            });

            this.setModel(oModel, "productTemplate");

            
        }
    }); 
});