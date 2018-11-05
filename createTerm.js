// add customize term items to term store 
factory.addSubTerm=function addSubTerm(termName){
    var termSetId = "09bcd123-ed29-48c9-aa99-c67503fa9e7e"
    var newGuid = SP.Guid.newGuid().toString();

    var context = SP.ClientContext.get_current();
    var taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
    var termStore = taxSession.getDefaultSiteCollectionTermStore();
    var termSet = termStore.getTermSet(termSetId);
    var newTerm = termSet.createTerm(termName, 1033, newGuid);
    context.load(newTerm);

    context.executeQueryAsync(function () {
        // alert("success!");
        termStore.updateCache();
    }, function (sender, args) {
        console.log(args.get_message());
    });
}
//need to modify later
factory.deleteTerm=function deleteTerm(termName){
    var termSetId = "09bcd123-ed29-48c9-aa99-c67503fa9e7e"
    var newGuid = SP.Guid.newGuid().toString();

    var context = SP.ClientContext.get_current();
    var taxSession = SP.Taxonomy.TaxonomySession.getTaxonomySession(context);
    var termStore = taxSession.getDefaultSiteCollectionTermStore();
    var termGroup = termStore.termGroup.getByName("System");
    var termSet = termStore.getByName(termName);
    
    termSet.deleteObject();

    context.load(newTerm);

    context.executeQueryAsync(function () {
        //alert("success!");
        console.log("Create Term sucess");
        termStore.updateCache();
    }, function (sender, args) {
        console.log(args.get_message());
    });
}