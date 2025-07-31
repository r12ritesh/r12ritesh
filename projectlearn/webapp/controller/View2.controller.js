sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.project.learn.projectlearn.controller.View2", {
        onInit() {
        },
        onPressBack : function(){
            // this.getOwnerComponent().getRouter().navTo("RouteView1");
            history.go(-1);
        }
    });
});