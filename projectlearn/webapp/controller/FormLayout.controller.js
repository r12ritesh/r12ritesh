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
        },
        onPressNextPage: function(){
            this.getOwnerComponent().getRouter().navTo("RouteView4");
        },
        onsubmitForm: function(){

            // VALIDATION  --> Mandatory field Validation
            var empId= this.getView().byId("idipemployeeid").getValue();
            if(empId === ""){
                this.getView().byId("idipemployeeid").setValueState("Error");
                this.getView().byId("idipemployeeid").setValueStateText("Emp Id is mandatory");         
            }
            else{
                this.getView().byId("idipemployeeid").setValueState("None"); 
                
              //     ************** DATA format Validation    ******************** 
              // 1. length validation  
               if(empId.length !== 10){
                this.getView().byId("idipemployeeid").setValueState("Error");
                this.getView().byId("idipemployeeid").setValueStateText("Please enter 10 digit emp Id");  
               }
               else{
                this.getView().byId("idipemployeeid").setValueState("None"); 
               }
                
            }
            // 2. Alphabet Validation using Regular Expression (REg Exp= /^[a-zA-Z]+$/)
            var empName= this.getView().byId("idEmpName").getValue();
            var regExp = /^[a-zA-Z]+$/ ;

            if(!empName.match(regExp)){
                this.getView().byId("idEmpName").setValueState("Error");
                this.getView().byId("idEmpName").setValueStateText("Please enter alphabet only");
            }
            else{
                this.getView().byId("idEmpName").setValueState("None");
            }

            // 3. Numeric Validation 
            // Only Regular expression will change   var regExp = /^[0-9]+$/  

            //4. AlphaNumeric Validation
            // Only Regular expression will change   var regExp = /^[a-zA-Z0-9]+$/  
         
            }
    });
});