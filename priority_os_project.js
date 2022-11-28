let waiting_time = [];
let turnaround_time = [];
let completion_time = [];
let ATt = [];
let PPt = [];
let avg_waiting_time = 0;
let avg_turnaround_time = 0;
let total_waiting_time = 0;
let total_turnaround_time = 0;

function solve() {
  let n = arrival_time.length;
  let time = 0;
  let NoP = n;
  let LAT = 0;

  for (let i = 0; i < n; i++) {
    PPt[i] = priority[i];
    ATt[i] = arrival_time[i];
  }

  for (let i = 0; i < n; i++) if (arrival_time[i] > LAT) LAT = arrival_time[i];

  let MAX_P = 0;
  for (i = 0; i < n; i++) if (PPt[i] > MAX_P) MAX_P = PPt[i];

  let ATi = 0;
  let P1 = PPt[0];
  let P2 = PPt[0];

  let j = -1;
  while (NoP > 0 && time <= 1000) {
    for (let i = 0; i < n; i++) {
      if (ATt[i] <= time && ATt[i] != LAT + 10) {
        if (PPt[i] != MAX_P + 1) {
          P2 = PPt[i];
          j = 1;

          if (P2 < P1) {
            j = 1;
            ATi = i;
            P1 = PPt[i];
            P2 = PPt[i];
          }
        }
      }
    }

    if (j == -1) {
      time = time + 1;
      continue;
    } else {
      waiting_time[ATi] = time - ATt[ATi];
      time = time + burst_time[ATi];
      turnaround_time[ATi] = time - ATt[ATi];
      ATt[ATi] = LAT + 10;
      j = -1;
      PPt[ATi] = MAX_P + 1;
      ATi = 0;
      P1 = MAX_P + 1;
      P2 = MAX_P + 1;
      NoP = NoP - 1;
    }
  }

  let AvgWT = 0;
  let AVGTaT = 0;
  for (let i = 0; i < n; i++) {
    total_waiting_time += waiting_time[i];
    total_turnaround_time += turnaround_time[i];
  }

  for (let i = 0; i < n; i++) {
    completion_time[i] = arrival_time[i] + turnaround_time[i];
  }

  avg_waiting_time = total_waiting_time / n;
  avg_turnaround_time = total_turnaround_time / n;

  createTable();
  createAvgBlock();
  ganttData();
  pieTat();
  pieWt();
}
