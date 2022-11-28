function ganttData() {
  let labels = [];
  let data = [];
  let backgroundColor = [];
  let borderColor = [];

  for (let i = 0; i < timeline.length; i++) {
    labels.push("P" + String(timeline[i][2] + 1));
  }

  for (let i = 0; i < timeline.length; i++) {
    data.push([timeline[i][0], timeline[i][1]]);
    let color =
      "rgba(" +
      String(Math.random() * 255) +
      "," +
      String(Math.random() * 255) +
      "," +
      String(Math.random() * 255) +
      ",0.7)";
    backgroundColor.push(color);
    borderColor.push(color);
  }

  makeChart(labels, data, backgroundColor, borderColor);
}

function makeChart(labels, Data, backgroundColor, borderColor) {
  console.log(Data, backgroundColor);
  // setup
  const data = {
    labels,
    datasets: [
      {
        label: "Process_Execution",
        data: Data,
        backgroundColor,
        borderColor,
        barPercentage: 0.2,
      },
    ],
  };

  // config
  const config = {
    type: "bar",
    data,
    options: {
      indexAxis: "y",
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  // render init block
  const myChart = new Chart(document.getElementById("myChart"), config);
  var x = document.querySelector(".gantthead");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
