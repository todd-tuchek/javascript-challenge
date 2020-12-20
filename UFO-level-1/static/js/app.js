// from data.js
var tableData = data;

// Select table body (tbody)
var tbody = d3.select("tbody");
console.log("Level 1")

// Loop through each UFO object in the table body
tableData.forEach((ufo) => {

        // use d3 to append on table row 'tr' for each ufo object
        var row = tbody.append("tr");

        // Use 'Obeject.entries' and forEach to iterate through keys and values
        Object.entries(ufo).forEach(([key, value]) => {

                // Use d3 to append one ell per ufo object value (date, city, state, country, shape...
                // ...duration, and comments)
                var cell = row.append("td");
                cell.text(value);
        });
});

// Use a date form in your HTML document and write JavaScript code that will...
// ..listen for events and search through the `date/time` coulmn to find rows that match user input.

// Select Button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form")

// Create Event Handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event Handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element...get raw HTML 
    var inputElement = d3.select(".form-control");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // use the form input to filter the data by datetime
        var results = tableData.filter(ufo => ufo.datetime === inputValue);

        // Clear our the current contents in table
        tbody.html("");

        // Create "no value" string for NO results
        if (results.length === 0) {
            tbody.text('No UFO sightings on  that date.');
        }

        // When dates with sightings are chosen, display those results in the table
        else {
                results.forEach((ufo) => {
                        var row = tbody.append("tr");
                        Object.entries(ufo).forEach(([key, value]) => {
                                var cell = row.append("td");
                                cell.text(value);
                        });
                });
        };
};





