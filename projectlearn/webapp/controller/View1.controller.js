sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.project.learn.projectlearn.controller.View1", {
        onInit() {
        },
        onPressBtn : function(){
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        }
    });
});