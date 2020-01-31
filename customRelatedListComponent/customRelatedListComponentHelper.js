({
	setFieldNames : function(component) {
		component.set("v.fieldNameList",component.get("v.fieldNames").split(","));
	},
    fillListOfData : function(component){
        var dataList = component.get("v.recordsQueried");
        var APIFields = component.get("v.fieldAPINames").split(",");
        var APIFieldLenght = APIFields.length;
        var newList = [];
        for(var i in dataList){
            newList[i]=[];
            console.log(">>>>"+JSON.stringify(dataList[i]));
            //console.log(APIFields);
            for(var j=0; j<APIFieldLenght; j++){
				newList[i][j]=dataList[i][APIFields[j]];
                console.log(APIFields[j]+' -> '+dataList[i][APIFields[j]]);
            }
            console.log("TEST "+dataList[0]);
        }
        component.set("v.fieldDataList", newList);
	}
})