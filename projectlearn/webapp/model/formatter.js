sap.ui.define([

], function() {
    "use strict";

    return {
        formatName: function(FirstName){
            return "Mr  " + FirstName ;
        },
        formatColourCountry: function(Country){
            if(Country ==="USA"){
            return "Success";
            }
            else{
            return "Error";
            }
        },
        formatBirthDate: function(Dob){
            var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
                    pattern: "dd-MM-yyyy"
                },sap.ui.getCore().getConfiguration().getLocale());
                return oDateFormat.format(Dob);
            }
    };

});