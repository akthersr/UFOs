var afterJQ = [];

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
}  
  let filterValue = filterElement.property("vlaue");
  console.log(filterValue);
  
  let filterId = filterElement.attr("id");
  console.log(filterId);

  if (filterValue) {
    filters[filterId] = filterValue;
  }
  else{filters={};

};

filterTable(filters);

function filterTable(obj) {
  let filterData = tableData;


Object.entries(obj).forEach(([key,val])=> {
  filterData = filterData.filter((row)=> row[key]==val)

});

buildTable(filteredData)
};

  d3.selectAll("input").on("change",updateFilters);
  buildTable(tableData);
