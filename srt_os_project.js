let remaining_time = [];
let turnaround_time = [];
let waiting_time = [];
let completion_time = [];
let avg_waiting_time;
let avg_turnaround_time;
let total_time;
let complete = 0;
let shortest = 0;
let timeline = [];

function solve() {
  for (let i = 0; i < 100; i++) remaining_time[i] = burst_time[i];

  let r = 0;
  let t = 0;
  let n = arrival_time.length;
  let total_waiting_time = 0;
  let total_turnaround_time = 0;
  let minm = 10000;

  while (complete < n) {
    for (let j = 0; j < n; j++) {
      if (
        arrival_time[j] <= t &&
        remaining_time[j] < minm &&
        remaining_time[j] > 0
      ) {
        minm = remaining_time[j];
        shortest = j;
        r = 1;
      }
    }

    if (r == 0) {
      t++;
      continue;
    }

    if (timeline.length == 0) {
      timeline.push([t, t + 1, shortest]);
    } else if (timeline[timeline.length - 1][2] != shortest) {
      timeline[timeline.length - 1][1] = t;
      timeline.push([t, t + 1, shortest]);
    }

    remaining_time[shortest]--;
    minm = remaining_time[shortest];

    if (minm == 0) minm = 10000;

    if (remaining_time[shortest] == 0) {
      completion_time[shortest] = t + 1;
      complete += 1;
      r = 0;
      total_time = t + 1;
      waiting_time[shortest] =
        total_time - burst_time[shortest] - arrival_time[shortest];

      if (waiting_time[shortest] < 0) waiting_time[shortest] = 0;
    }
    t++;
  }

  if (timeline.length != 0) {
    timeline[timeline.length - 1][1] = total_time;
  }

  for (let i = 0; i < n; i++) {
    turnaround_time[i] = burst_time[i] + waiting_time[i];
    total_waiting_time += waiting_time[i];
    total_turnaround_time += turnaround_time[i];
  }

  avg_waiting_time = total_waiting_time / n;
  avg_turnaround_time = total_turnaround_time / n;

  createTable();
  createAvgBlock();
  ganttData();
  pieTat();
  pieWt();
}
