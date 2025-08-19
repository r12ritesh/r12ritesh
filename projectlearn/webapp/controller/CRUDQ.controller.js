sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "com/sap/project/learn/projectlearn/model/formatter"
], function(Controller, formatter) {
    "use strict";

    return Controller.extend("com.sap.project.learn.projectlearn.controller.CRUDQ", {
        f: formatter,
        onInit() { 

        },
        // Logic to navigate to previous view
        onPressBackBtn : function(){
           history.go(-1);
        },
        onPressBtnSimpleForm: function(){
            this.getOwnerComponent().getRouter().navTo("RouteFormLayout");       
         }
        
    });
});