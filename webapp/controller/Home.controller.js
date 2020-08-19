sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/Sorter" 
], (Controller, Fragment, Sorter) => {
    "use strict";

    return Controller.extend("sap.ui.selfmade.appOne.controller.Home", {
        onOpenDialog : function () {
            var oView = this.getView(); 

            if(!this.byId("helloDialog")) {
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.selfmade.appOne.view.AddProductDialog",
                    controller: this
                }).then(function(oDialog){
                    oView.addDependent(oDialog); 
                    oDialog.open(); 
                });
            }
            else {
                this.byId("helloDialog").open(); 
            }
        },
        onCancelDialog : function () {
            this.byId("helloDialog").close(); 
            var oProductTemplate = this.getView().getModel("productTemplate");
            oProductTemplate.setProperty("/newProduct/ProductName", "");
            oProductTemplate.setProperty("/newProduct/Category", "");
            oProductTemplate.setProperty("/newProduct/Price", "");
            oProductTemplate.setProperty("/newProduct/Supplier", "");
            oProductTemplate.setProperty("/newProduct/InStock", true);
        },
        onAddProduct : function () {
            var oView = this.getView(); 
            var oProductTemplate = oView.getModel("productTemplate"); 
            var oProductModel = oView.getModel("productModel");

            var newProduct = {
                ProductID :     oProductModel.oData.Products.length + 1,
                ProductName :   oProductTemplate.getProperty("/newProduct/ProductName"),
                Category :      oProductTemplate.getProperty("/newProduct/Category"),
                Price :         oProductTemplate.getProperty("/newProduct/Price"),
                Supplier :      oProductTemplate.getProperty("/newProduct/Supplier"),
                InStock :       oProductTemplate.getProperty("/newProduct/InStock")
            }
            oProductModel.oData.Products.push(newProduct); 
            oProductModel.refresh(); 
            console.log(newProduct);

            oProductTemplate.setProperty("/newProduct/ProductName", "");
            oProductTemplate.setProperty("/newProduct/Category", "");
            oProductTemplate.setProperty("/newProduct/Price", "");
            oProductTemplate.setProperty("/newProduct/Supplier", "");
            oProductTemplate.setProperty("/newProduct/InStock", true);
            this.byId("helloDialog").close();
        },
        onSelectChange : function () {

            var oAttribute = this.getView().getModel("productTemplate").getProperty("/SortByTest");

            var oSorter = new Sorter({
                path: oAttribute,
                descending: false,
                group: (oAttribute === "Price") ? false : true
            })
            var oList = this.byId("productTable");
            oList.getBinding("items").sort(oSorter);
        },
        onSelectProduct : function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
            oRouter.navTo("detail", {
                productPath: window.encodeURIComponent(oItem.getBindingContext("productModel").getPath().substr(1))
            }); 
        }
    });
});