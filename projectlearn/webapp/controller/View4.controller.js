sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.project.learn.projectlearn.controller.View4", {
        onInit() {
        },
        // Logic to navigate to 2nd view
        onPressGoBackBtn : function(){
            history.go(-1);
        },
        onPressBtnSimpleForm: function(){
            this.getOwnerComponent().getRouter().navTo("RouteFormLayout");       
         }
     
    });

});


