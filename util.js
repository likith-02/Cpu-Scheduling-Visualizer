let procId = 1;

function addRow() {
  var table = document.getElementById("table");
  let row =
    "<tr><td>Process_" +
    procId +
    "</td><td><input" +
    ' type="number" class="arrival_time" /></td><td><input' +
    ' type="number" class="burst_time" /></td>';
  table.innerHTML += row;
  procId += 1;
}

function addRowPriority() {
  var table = document.getElementById("table");
  let row =
    "<tr><td>Process_" +
    procId +
    "</td><td><input" +
    ' type="number" class="arrival_time" /></td><td><input' +
    ' type="number" class="burst_time" /></td>' +
    "<td><input" +
    ' type="number" class="priority" /></td>';
  table.innerHTML += row;
  procId += 1;
}

function loadValues() {
  let arrivalInputs = document.getElementsByClassName("arrival_time");
  let burstTimeInputs = document.getElementsByClassName("burst_time");
  let n = arrivalInputs.length;
  proc_array = [];
  arrival_time = [];
  burst_time = [];

  for (let i = 1; i < n + 1; i++) {
    proc_array[i - 1] = i;
  }

  for (let inp of arrivalInputs) {
    arrival_time.push(parseInt(inp.value));
  }

  for (let inp of burstTimeInputs) {
    burst_time.push(parseInt(inp.value));
  }
  solve();
}

function loadValuesPriority() {
  let arrivalInputs = document.getElementsByClassName("arrival_time");
  let burstTimeInputs = document.getElementsByClassName("burst_time");
  let priorityInputs = document.getElementsByClassName("priority");
  let n = arrivalInputs.length;
  proc_array = [];
  arrival_time = [];
  burst_time = [];
  priority = [];

  for (let i = 1; i < n + 1; i++) {
    proc_array[i - 1] = i;
  }

  for (let inp of arrivalInputs) {
    arrival_time.push(parseInt(inp.value));
  }

  for (let inp of burstTimeInputs) {
    burst_time.push(parseInt(inp.value));
  }

  for (let inp of priorityInputs) {
    priority.push(parseInt(inp.value));
  }
  solve();
}

function createTable() {
  let outputDiv = document.querySelector(".output");
  outputDiv.innerHTML =
    "<h1>Output Table</h1>" +
    "<table>" +
    "<thead>" +
    "<tr>" +
    '<th class="col1">Process Name</th>' +
    '<th class="col2">Arrival Time</th>' +
    '<th class="col2">Burst Time</th>' +
    '<th class="col3">Completion Time</th>' +
    '<th class="col3">Turn-around Time</th>' +
    '<th class="col3">Waiting Time</th>' +
    "</tr>" +
    "</thead>" +
    '<tbody id="outputTable">' +
    outputTable() +
    "</tbody>" +
    "</table>";
}

function createTablePriority() {
  let outputDiv = document.querySelector(".output");
  outputDiv.innerHTML =
    "<h1>Output Table</h1>" +
    "<table>" +
    "<thead>" +
    "<tr>" +
    '<th class="col1">Process Name</th>' +
    '<th class="col2">Arrival Time</th>' +
    '<th class="col2">Burst Time</th>' +
    '<th class="col2">Priority</th>' +
    '<th class="col3">Completion Time</th>' +
    '<th class="col3">Turn-around Time</th>' +
    '<th class="col3">Waiting Time</th>' +
    "</tr>" +
    "</thead>" +
    '<tbody id="outputTable">' +
    outputTablePriority() +
    "</tbody>" +
    "</table>";
}

function outputTable() {
  let n = completion_time.length;
  res = "";
  for (let i = 0; i < n; i++) {
    let row =
      "<tr><td>P" +
      (i + 1) +
      "</td>" +
      "<td>" +
      arrival_time[i] +
      "</td>" +
      "<td>" +
      burst_time[i] +
      "</td>" +
      "<td>" +
      completion_time[i] +
      "</td>" +
      "<td>" +
      turnaround_time[i] +
      "</td>" +
      "<td>" +
      waiting_time[i] +
      "</td>" +
      "</tr>";
    res += row;
  }
  return res;
}

function outputTablePriority() {
  let n = completion_time.length;
  res = "";
  for (let i = 0; i < n; i++) {
    let row =
      "<tr><td>P" +
      i +
      "</td>" +
      "<td>" +
      arrival_time[i] +
      "</td>" +
      "<td>" +
      burst_time[i] +
      "</td>" +
      "<td>" +
      priority[i] +
      "</td>" +
      "<td>" +
      completion_time[i] +
      "</td>" +
      "<td>" +
      turnaround_time[i] +
      "</td>" +
      "<td>" +
      waiting_time[i] +
      "</td>" +
      "</tr>" +
      "</tr>";
    res += row;
  }
  return res;
}

function createAvgBlock() {
  let avgDiv = document.querySelector(".avg");
  let text =
    "<div class='data'>" +
    "<h3>Average turn-around time:</h3>" +
    "<p><b>" +
    avg_turnaround_time +
    "</b></p>" +
    "<h3>Average waiting time:</h3>" +
    "<p><b>" +
    avg_waiting_time +
    "</b></p>" +
    "</div>";
  avgDiv.innerHTML = text;
}
