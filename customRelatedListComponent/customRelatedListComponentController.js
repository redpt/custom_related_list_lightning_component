({
    getEntitlementRecords : function(component, event, helper) {
        helper.setFieldNames(component);
        var fields = component.get("v.fieldAPINames");
        var objectType = component.get("v.relatedObjectAPIName");
        var condition = component.get("v.FieldRelatedToRecordId")+"= \'"+component.get("v.recordId")+"\'";;
        helper.runSOQLQueryToGetRecords(
            component,
            fields,
            objectType,
            condition,
            null,
            component.get("v.relatedRecordLimit")
        );
    },
    showAll : function(component, event, helper){
        var relatedListEvent = $A.get("e.force:navigateToURL ");
        relatedListEvent.setParams({
            "url": "/relatedlist/"+component.get("v.recordId")+"/Entitlements__r",
            "isredirect": false
        });
        relatedListEvent.fire();
    },
    setDataTables : function(component, event, helper){
        try{
        helper.fillListOfData(component, event, helper);
        }catch(e){
			console.log(e);
        }
    }
})