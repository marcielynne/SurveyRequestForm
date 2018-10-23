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
var thead = document.getElementById("thead");
var btnDiv = document.getElementById("button-div")



btnSubmit.addEventListener("click", function insert ( ) {
        var uniqueRequest = {
        projectNames: projectNameInput.value.toUpperCase(),
        projectSRIDs: projectSRIDInput.value,
        projectBillNumTypes: projectBillNumTypeInput.value,
        projectBillNumValues: projectBillNumValueInput.value.toUpperCase(),
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
        
        var submitMessage ="Yay! You added a thing!";
        alert(submitMessage);
             
});


function compareObjects(o1, o2) {
    var k = '';
    for(k in o1) if(o1[k] != o2[k]) return false;
    for(k in o2) if(o1[k] != o2[k]) return false;
    return true;
  }
  
  function itemExists(haystack, needle) {
    for(var i=0; i<haystack.length; i++) if(compareObjects(haystack[i], needle)) return true;
    return false;
  }


btnSearch.addEventListener("click", function () {
    searchResults=[];
    var searchValueUpper = searchValueInput.value.toUpperCase();
    if(searchValueUpper.length!=0) {
        for(var i=0; i < surveyRequests.length; i++) {
            for(key in surveyRequests[i]) {
                if(surveyRequests[i][key].indexOf(searchValueUpper)!=-1) {
                    if(!itemExists(searchResults, surveyRequests[i]))
                    searchResults.push(surveyRequests[i]);
                } 
            }
        }
    } 

    if (searchResults.length > 0) {
        saveAndShow();
    } else {
        tbody.innerHTML="";
        thead.innerHTML="";
        document.getElementById("btnClear").style.display = "none";
        searchValueInput.value="";

        var searchMessage ="No results found.";
        alert(searchMessage);
    }  
})



function saveAndShow() {
    tbody.innerHTML="";
    thead.innerHTML="";
    for (var i=0; i < searchResults.length; i += 1) {
        var tr="<tr>";
        var th="<tr><th>SRID</th>" + "<th>ProjectName</th>" + "<th>Billing Number</th></tr>";

        tr += "<td>" + searchResults[i].projectSRIDs + "</td>" + "<td>" + searchResults[i].projectNames + "</td>" + "<td>" + searchResults[i].projectBillNumValues + "</td></tr>";

        thead.innerHTML = th;
        tbody.innerHTML += tr;
        
        document.getElementById("btnClear").style.display = "inline";
    }
}



btnClear.addEventListener("click", function () {
    tbody.innerHTML="";
    thead.innerHTML="";
    searchValueInput.value="";
    document.getElementById("btnClear").style.display = "none";
})


