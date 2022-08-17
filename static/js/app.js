// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {

}
function buildTable(data) {
  tbody.html("");
}
data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

var filters = {};

function updateFilters() {

  let filterElement = d3.select(this);
 
  let filterValue = filterElement.property("value");
  console.log(filterValue);
  
  let filterId = filterElement.attr("id");
  console.log(filterId);

  if (filterValue) {
    filters[filterId] = filterValue;
  }
  else{
    delete filters[filterId];

};

filterTable(filters);
};

function filterTable() {
  let filterdData = tableData;


  Object.keys(filters).forEach((key) => {
    let userInput = d3.select("#"+key).property("value");
    if (userInput){
      filterdData = filterdData.filter(row => row[key] === userInput)};


  });


buildTable(filteredData)
};

  d3.selectAll("input").on("change",updateFilters);
  buildTable(tableData);




