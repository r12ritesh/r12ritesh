sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.project.learn.projectlearn.controller.CRUDQ", {
        onInit() {
        },
        // Logic to navigate to 2nd view
        onPressBackBtn : function(){
           history.go(-1);
        },
        onPressBtnSimpleForm: function(){
            this.getOwnerComponent().getRouter().navTo("RouteFormLayout");       
         }
        
    });
});