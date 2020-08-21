sap.ui.require([
    "sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
    "use strict" 
    
    new ComponentContainer({
        name : "sap.ui.selfmade.appOne",
        settings : {
            id : "appOne"
        },
        async : true
    }).placeAt("content"); 
});