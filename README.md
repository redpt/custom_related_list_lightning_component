# custom_related_list_lightning_component
This is currently incomplete and has a few issues with it:
1) Fields do not display by type (dates do not appear as formatted dates, for example)
2) Field values coming from related records do not populate

Note: This does require the LightningUtilities extensible Lightning component

Example communities implementation:
1) Drag to desired location
2) Fill the required fields:
	Related List Objects: API Name: Entitlement_Asset__c
	Name of the Related List: Entitlements
	List of Field Names: Entitlement,Star Date,End Date
	List of Corresponding API Names: Entitlement__r.Name,Entitlement__r.StartDate,Entitlement__r.EndDate
	Hide Links: true (uncheck)
	Icon Label: utility:automate
	Related Record Child Field API Name: Asset__c
	Record Query Limit: 200
	Disable 'View All' Functionality: true (checked)
	Maximum View: -1 (maximum)