// Get the table elements
var table1 = document.getElementById("table1");
var table2 = document.getElementById("table2");

// Define the data for Table 1
var table1Data = {
  A1: 41,
  A2: 18,
  A3: 21,
  A4: 63,
  A5: 2,
  A6: 53,
  A7: 5,
  A8: 57,
  A9: 60,
  A10: 93,
  A11: 28,
  A12: 3,
  A13: 90,
  A14: 39,
  A15: 80,
  A16: 88,
  A17: 49,
  A18: 60,
  A19: 26,
  A20: 28
};

// Populate Table 1 with data
for (var key in table1Data) {
  if (table1Data.hasOwnProperty(key)) {
    var row = table1.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = table1Data[key];
  }
}

// Calculate and populate values for Table 2
var alphaValue = table1Data.A5 + table1Data.A20;
var betaValue = table1Data.A15 / table1Data.A7;
var charlieValue = table1Data.A13 * table1Data.A12;

var table2Data = {
  Alpha: alphaValue,
  Beta: betaValue,
  Charlie: charlieValue
};

// Populate Table 2 with calculated values
for (var key in table2Data) {
  if (table2Data.hasOwnProperty(key)) {
    var row = table2.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = key;
    cell2.innerHTML = table2Data[key];
  }
}
