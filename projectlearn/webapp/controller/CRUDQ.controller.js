sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sap.project.learn.projectlearn.controller.CRUDQ", {
        onInit() {
                        // get odata model and json model
            // var oModel= this.getModel();                    // this will get the odata model
            // var custModel=this.getModel("custjsonModel");    // this will get the json model

            // oModel.read("/Customers" , {
            //     success: function(data){
            //         custModel.setData(data); 

            //     },
            //     error: function(){

            //     }
            // });

            // var ojsonModel= new sap.ui.model.json.JSONModel();
            // ojsonModel.loadData("model/model.json");         // Adjust path if needed
            // this.getView().setModel(ojsonModel, "custjsonModel");
            
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