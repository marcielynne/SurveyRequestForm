var searchResults = [];
var surveyRequests = [];
var request;

var projectNameInput = document.getElementById("projectName");
var projectSRIDInput = document.getElementById("projectSRID");
var projectBillNumTypeInput = document.getElementById("projectBillNumType");
var projectBillNumValueInput = document.getElementById("projectBillNumValue");
var projectVendorInput = document.getElementById("projectVendor");
var projectDateReqInput = document.getElementById("projectDateReq");
var projectAssetAreaInput = document.getElementById("projectAssetArea");
var projectTypeInput = document.getElementById("projectType");

var searchTypeInput = document.getElementById("searchType");
var searchValueInput = document.getElementById("searchValue");

var tbody = document.getElementById("tbody");


btnSubmit.addEventListener("click", function insert ( ) {
        var uniqueRequest = {
        projectNames: projectNameInput.value,
        projectSRIDs: projectSRIDInput.value,
        projectBillNumTypes: projectBillNumTypeInput.value,
        projectBillNumValues: projectBillNumValueInput.value,
        projectVendors: projectVendorInput.value,
        projectDateReqs: projectDateReqInput.value,
        projectAssetAreas: projectAssetAreaInput.value,
        projectTypes: projectTypeInput.value
    };
        surveyRequests.push(uniqueRequest);
        projectNameInput.value = "";
        projectSRIDInput.value = "";
        projectBillNumTypeInput.value = "";
        projectBillNumValueInput.value = "";
        projectVendorInput.value = "";
        projectDateReqInput.value = "";
        projectAssetAreaInput.value = "";
        projectTypeInput.value = "";
        console.table(surveyRequests);
             
});


btnSearch.addEventListener("click", function () {
    for(var i=0; i < surveyRequests.length; i++) {
        for(key in surveyRequests[i]) {
          if(surveyRequests[i][key].indexOf(searchValueInput.value)!=-1) {
            searchResults.push(surveyRequests[i]);
          } 
        }
    }
    if (searchResults.length > 0) {
        saveAndShow();
    } else {
        var message ="No results found.";
        alert(message);
        searchValueInput.value="";
    }
})


function saveAndShow() {
    for (var i=0; i < surveyRequests.length; i += 1) {
        var tr="<tr>";
        //tr += "<th>SRID</th>" + "<th>ProjectName</th>" + "<th>Billing Number</th></tr>";
        tr += "<td>" + searchResults[i].projectSRIDs + "</td>" + "<td>" + searchResults[i].projectNames + "</td>" + "<td>" + searchResults[i].projectBillNumValues + "</td></tr>";
        tbody.innerHTML += tr;
    }
}




