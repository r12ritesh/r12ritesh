sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.project.learn.projectlearn.controller.FormLayout", {
        onInit() {
        },
        // Logic to navigate to 2nd view
        onPressFormBack: function(){
            history.go(-1);
        }
        
    });
});