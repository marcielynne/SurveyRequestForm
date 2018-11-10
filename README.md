# CodeLou_FrontEnd

## Description
```
My project is based on a custom Access Database that I built for my job to track basic information about survey requests (work orders) entered by customers. The map interface is crucial to identify where the project work is being done. My company uses Esri products which is why I incorporated the ArcGIS API for JavaScript into my project. 

The user should fill out all of the information under the Enter New Survey Request form. I have written validation code to ensure that all input fields are filled out when the user clicks the Submit button. An alert message should appear if any fields are missing. The lat/lon fields are automatically filled out based on a location that the user clicks on the map.

Once the user submits a request, the information is stored in an object on the backend. An alert message appears indicating that the request has been entered. The user can then search for that request based on any field that they filled out. 

If the search yields no results, an alert message appears indicating that no results were found. If the search is successful, matching records will appear in a table below the search button. The table only displays the Project Name, Survey Request ID (SRID), and the Billing Number. The user can click on a row in the table and the map will zoom to that point and display the project name and SRID for that result. All of the pertinent information for that result will appear in the corresponding input fields under the New Survey Request form.

The user can zoom in and out of the map and drag it, but they cannot add a new point until the clear button has been pressed to clear all of the fields. An alert message will appear explaining all of this to the user if they try to click the map. 

```



## Custom CSS Classes
```
The class(es) I created are:

1. body{} - Formats the main body with justify-content and align-items.
2. .main-nav{}- Formats the navigation menu with background, padding, border-radius, and box-shadow.
3. .nav{} - Formats the navigation menu with justify-content, padding, list-style, and margin. Also sets the display to flex with flex-direction set to row and flex-wrap set to wrap.
4. .nav a, .nav img, h1{} - Formats the navigation text and h1 tag with color, text-align, text-decoration, font-size, font-family, and font-weight.
5. .nav a:hover{} - Formats the navigation text on hover.
6. #index .main-nav .nav #item-1 a, #validation .main-nav .nav .item-2 a, #invoicing .main-nav .nav .item-3 a, #time .main-nav .nav .item-4 a{} - Formats the navigation text to be underlined to show which page is active.
7. .logo{} - Formats the logo with margin-left and margin-right.
8. .overall-flex, .fieldset{} - Formats the overall container and input form container with display set to flex, flex-direction, justify-content, border, and flex-wrap.
9. #mapDiv{} - Formats the map div with flex set to 2, min-width, max-width, and position.
10. .fieldset{} - Formats the form container with flex set to 1, margin, and align-self.
11. .mapText{} - Formats the text that tells a user to click on the map to add a point with position, top, right, color, z-index, font-size, font-family, background-color, padding.
12. .search-display-flex, .form-flex{}
13. h2{} - Formats the margin for the input and search form titles.
14. input, select{} - Formats the input and search textboxes and listboxes with border, height, box-sizing, -mox-box-sizing, -webkit-box-sizing, color, padding, text-transformation, and margin.
15. #projectLon, #projectLat{} - Formats the background color of the lat/lon input fields.
16. input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button,input[type=date]::-webkit-inner-spin-button, input[type=date]::-webkit-outer-spin-button {} - Removes the arrows from the number and date input boxes.
17. .button{} - Formats the buttons with color, background, border, padding, border-radius, font-weight, font-size, outline, width, and margin.
18. .button:hover{} - Formats the buttons on hover with border, box-shadow, color, and background.
19. .button:active{} - Formats the buttons when they are clicked with box-shadow.
20. table{} - Formats the search results table with max-width, width, margin, and font-size.
21. td, th{} - Formats the table header with border, text-align, and padding.
22. table tbody tr:nth-child(odd){} - Formats the table rows to make every other row a different color with background-color.
23. table tbody tr:hover{} - Formats the table rows on hover and changes the mouse pointer to a hand.
24. #buttonClear{} - Sets the Clear button display to none.
25. @media only screen and (max-width: 455px){} - Formatting for screen sizes less than 455px. Adjust .logo, .main-nav, .nav li:not(.logo), .nav, .nav a, input, select, #mapDiv, #existingRequests, h2, .mapText, and #resultsTable.
26. @media only screen and (min-width: 456px){} - Formatting for screen sizes greater than 456px. Adjust .logo, .main-nav, .nav li:not(.logo), .nav a, input, select, #mapDiv, #existingRequests, h2, and .fieldset.
27. @media only screen and (min-width: 801px){} - Formatting for screen sizes greater than 801px. Adjust .fieldset, #existingRequests, and #mapDiv.
28. @media only screen and (min-width: 1140px){} - Formatting for screen sizes greater than 1140px. Adjust .logo, .nav li:not(.logo), .nav a, #existingRequests, .fieldset, and #mapDiv.


```



## Custom JavaScript Functions
```
The javascript functions I created are:

1. map.on("click", function(evt) {} - When the map is clicked add a point graphic to the map that shows the lat/lon. Populate the lat/lon values into the corresponding lat/lon input fields. Also checks to see if the Clear button is visible. If it is, prompt the user to hit the Clear button before adding a new record. If it is not visible, allow user to click a point on the map to view the lat/lon.
2. function showCoordinates() {} - Adds a point to the map based on the values in the lat/lon input fields. It also zooms to that point.
3. resultsTable.addEventListener("click", function() {} - Calls the showCoordinates function when a user clicks on the resultsTable. Also clears an existing point graphic and hides an info box if they are visible on the map.
4. function validateForm() {} - Checks that user input is a number. Dislpays an alert message if a non-numeric character is entered. 
5. projectSRID.addEventListener("input", function() {} - Calls the validateForm function when a user clicks inside the SRID input field.
6. function clearSubmit() {} - Clears the submit fields and the graphics on the map.
7. btnSubmit.addEventListener("click", function insert ( ) {} - When the user clicks the Submit button, create a new array called uniqueRequest to store the values entered by the user into the input fields. Check that the input fields for project name, SRID, bill number type, bill number value, vendor, date requested, asset area, project type, lat, and lon are not null before pushing to the surveyRequests object. Validate the date. If all values are filled out and the date value is correct, push values to the surveyRequests object, call the clearSubmit() function, and show an alert that the values have been added.
8. function compareObjects(o1, o2) {} - Compares values added to an object. If a record does not exactly match another record, return false. Ultimately, records that match exactly will not be shown in the results table. 
9. function itemExists(arr, obj) {} - Used with the compareObjects function, the itemExists function searchs an object to see if a value exists.
10. btnSearch.addEventListener("click", function () {} - Search button used to search for values in the surveyRequests object. Uses itemExists function to see if a value in the surveyRequests object matches user's input. Identical entries in surveyRequests are not pushed to searchResults. If a value was pushed to searchResults, call the saveAndShow function. Else, clear values and show an alert that no results were found. If the search value is in the object, push it to the searchResults object and display the results in a table displayed below the Search button. 
11. function saveAndShow() {} - Builds a table to show the results pushed to the searchResults object. A hidden clear button is also displayed.
12. btnClear.addEventListener("click", function() {} - Clears values in the table created in the saveAndShow function. Also hides the Clear button, clears values in the submit form, and places focus in the Project Name Input box.

```
