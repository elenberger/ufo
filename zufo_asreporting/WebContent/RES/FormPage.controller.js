sap.ui.controller("RES.FormPage", {

	
onSaveDialog: function(evt) {
 this.nav.onSaveDialog(evt);	
},

onCloseDialog: function(evt) {
	 this.nav.onCloseDialog(evt);	
	},
	
/**
 * Called when a controller is instantiated and its View controls (if available)
 * are already created. Can be used to modify the View before it is displayed,
 * to bind event handlers and do other one-time initialization.
 * 
 * @memberOf RES.FormPage
 */
// onInit: function() {
//
// },

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf RES.FormPage
 */
	onBeforeRendering: function() {
		var oSmartForm = this.getView().byId("idForm1");
		
		var oGrCha = this.getView().byId("idGrCha");
	     oGrCha.setEditMode(false);
	     oGrElements = oGrCha.getGroupElements();
	     
//	     var aSFields = oSmartForm.getSmartFields();
//			for (i=0; i<aSFields.length; i++) {
//				var oField = aSFields[i];
//				oField.setEditable(false);
//				oField.setEnabled(false);
//			}	
	     
// for (i=0; i<aSFields.length; i++) {
// var oField = aSFields[i];
// oSmartForm.setEditable(bEditable);
// oField.setEnabled(true);
				
	}

/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf RES.FormPage
 */
 //  onAfterRendering: function() {
//
// },

/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf RES.FormPage
 */
// onExit: function() {
//
// }

});