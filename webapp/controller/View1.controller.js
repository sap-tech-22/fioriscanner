sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ndc/BarcodeScanner"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("samplefiorisap.controller.View1", {
            onInit: function () {

            },

            scanBarcode: function(oEvt) {
                try {
                    //cordova.plugins.barcodeScanner.scan(function(result){
                    sap.ndc.BarcodeScanner.scan(function(result){
                        sap.m.MessageBox.show(result.text);    
                    }, function(error){
                        sap.m.MessageBox.show("Not available");    
                    });

                    
                }
                catch(e){
                    sap.m.MessageBox.show("Not available");
                }
            }
        });
    });
