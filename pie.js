function makePieChart(labels, Data, backgroundColor, borderColor, chart, labl) {
  // setup
  const data = {
    labels,
    datasets: [
      {
        label: labl,
        data: Data,
        backgroundColor,
        borderColor,
      },
    ],
  };

  // config
  const config = {
    type: "pie",
    data,
    options: {},
  };

  // render init block
  const myChart = new Chart(document.querySelector("#" + chart), config);
}

function pieTat() {
  let labels = [];
  let backgroundColor = [];
  let borderColor = [];

  for (let i = 0; i < proc_array.length; i++) {
    labels.push("process" + String(proc_array[i]));
  }

  for (let i = 0; i < proc_array.length; i++) {
    let color =
      "rgba(" +
      String(Math.random() * 255) +
      "," +
      String(Math.random() * 255) +
      "," +
      String(Math.random() * 255) +
      ",1)";

    backgroundColor.push(color);
    borderColor.push(color);
    var x = document.querySelector(".tathead");
    if (x.style.display === "none") {
      x.style.display = "block";
    }
  }

  makePieChart(
    labels,
    turnaround_time,
    backgroundColor,
    borderColor,
    "myChart1",
    "Turn Around Time"
  );
}

function pieWt() {
  let labels = [];
  let backgroundColor = [];
  let borderColor = [];

  for (let i = 0; i < proc_array.length; i++) {
    labels.push("process" + String(proc_array[i]));
  }

  for (let i = 0; i < proc_array.length; i++) {
    let color =
      "rgba(" +
      String(Math.random() * 255) +
      "," +
      String(Math.random() * 255) +
      "," +
      String(Math.random() * 255) +
      ",1)";
    backgroundColor.push(color);
    borderColor.push(color);
  }

  makePieChart(
    labels,
    waiting_time,
    backgroundColor,
    borderColor,
    "myChart2",
    "Waiting Time"
  );
  var x = document.querySelector(".wthead");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
}
