sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.project.learn.projectlearn.controller.View1", {
        onInit() {
        },
        // Logic to navigate to 2nd view
        onPressBtn : function(){
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        onSubmitPress: function(){
     // Change the text to Welcome to Name when user click on submit button
           var sMessage= "Welcome to " + this.getView().byId("idIpname").getValue();
            this.getView().byId("idTxWlcome").setText(sMessage);
     //Change the button colour to Green after clicking on it
            this.getView().byId("idSubmit").setType("Accept");
     // When user clicks on Submit entire text should align to left
            this.getView().byId("idTxWlcome").setTextAlign("Right");
     // When user clicks on Submit the star mark on Label (required) should be removed
            this.getView().byId("idLabel").setRequired(false);
     // When user clicks on Submit the input value should be disabled
          this.getView().byId("idIpname").setEnabled(false);
        }

    });
});