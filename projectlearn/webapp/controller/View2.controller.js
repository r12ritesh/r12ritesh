sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.project.learn.projectlearn.controller.View2", {
        onInit() {
        },
        onPressBtnViewFooter: function(){
            history.go(-1);
        }
    });
});