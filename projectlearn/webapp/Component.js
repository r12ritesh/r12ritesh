sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/sap/project/learn/projectlearn/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("com.sap.project.learn.projectlearn.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            var ojsonOdataModel=new sap.ui.model.json.JSONModel();
            this.setModel(ojsonOdataModel, "ojsonOdataModel");

            var oOdataModel= this.getModel();      // This gives the odata model
            // ojsonOdataModel= this.getModel("jsonodatamodel");           // This gives the JSON moodel
            oOdataModel.read("/Orders", {
                success: function(data) {
                    ojsonOdataModel.setData(data);
                    console.log("Orders loaded", data);
                },
                error: function(){
                    console.error("Failed to load the orders data");
                }
            });
            this.setModel(ojsonOdataModel, "oOdataModel");
            

        }
    });
});