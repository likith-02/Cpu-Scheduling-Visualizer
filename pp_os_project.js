let waiting_time = [];
let turnaround_time = [];
let completion_time = [];
let remaining_time = [];
let avg_waiting_time = 0;
let avg_turnaround_time = 0;
let total_waiting_time = 0;
let total_turnaround_time = 0;
let timeline = [];

function solve() {
  for (let i = 0; i < 100; i++) remaining_time[i] = burst_time[i];
  let r = 0;

  let n = arrival_time.length;
  let smallest = 1000;
  let count = 0;
  priority[n] = 10000;
  let time = 0;

  while (count < n) {
    smallest = n;
    let i = 0;
    while (i < n) {
      if (
        arrival_time[i] <= time &&
        priority[i] < priority[smallest] &&
        remaining_time[i] > 0
      ) {
        smallest = i;
        r = 1;
      }
      i++;
    }

    if (r == 0) {
      time++;
      continue;
    }

    if (timeline.length == 0) {
      timeline.push([time, time + 1, smallest]);
    } else if (timeline[timeline.length - 1][2] != smallest) {
      timeline[timeline.length - 1][1] = time;
      timeline.push([time, time + 1, smallest]);
    }

    remaining_time[smallest]--;
    if (remaining_time[smallest] == 0) {
      count++;
      completion_time[smallest] = time + 1;
      waiting_time[smallest] =
        completion_time[smallest] -
        arrival_time[smallest] -
        burst_time[smallest];
      turnaround_time[smallest] =
        completion_time[smallest] - arrival_time[smallest];
    }
    time++;
  }

  if (timeline.length != 0) {
    timeline[timeline.length - 1][1] = time;
  }

  for (let i = 0; i < n; i++) {
    total_waiting_time += waiting_time[i];
    total_turnaround_time += turnaround_time[i];
  }

  avg_waiting_time = total_waiting_time / n;
  avg_turnaround_time = total_turnaround_time / n;

  createTablePriority();
  createAvgBlock();
  ganttData();
  pieTat();
  pieWt();
}
