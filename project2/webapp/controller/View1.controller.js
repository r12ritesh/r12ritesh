sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.project2.learn.project2.controller.View1", {
        onInit() {
        },
        OnPressBtn: function(){
            // alert("Button is pressed");
            this.getOwnerComponent().getRouter().navTo("View2");
        }
    });
});