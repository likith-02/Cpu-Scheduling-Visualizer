let start_time = [];
let completion_time = [];
let turnaround_time = [];
let waiting_time = [];
let avg_turnaround_time;
let avg_waiting_time;
let total_turnaround_time = 0;
let total_waiting_time = 0;
let total_response_time = 0;
let is_completed = [];

for (let i = 0; i < 100; i++) {
  is_completed[i] = 0;
}

function solve() {
  let n = arrival_time.length;
  let current_time = 0;
  let completed = 0;
  let prev = 0;

  while (completed != n) {
    let idx = -1;
    let mn = 10000000;
    for (let i = 0; i < n; i++) {
      if (arrival_time[i] <= current_time && is_completed[i] == 0) {
        if (burst_time[i] < mn) {
          mn = burst_time[i];
          idx = i;
        }
        if (burst_time[i] == mn) {
          if (arrival_time[i] < arrival_time[idx]) {
            mn = burst_time[i];
            idx = i;
          }
        }
      }
    }

    if (idx != -1) {
      start_time[idx] = current_time;
      completion_time[idx] = start_time[idx] + burst_time[idx];
      turnaround_time[idx] = completion_time[idx] - arrival_time[idx];
      waiting_time[idx] = turnaround_time[idx] - burst_time[idx];
      total_waiting_time += waiting_time[idx];
      total_turnaround_time += turnaround_time[idx];
      is_completed[idx] = 1;
      completed += 1;
      current_time = completion_time[idx];
      prev = current_time;
    } else {
      current_time += 1;
    }
  }

  avg_turnaround_time = total_turnaround_time / n;
  avg_waiting_time = total_waiting_time / n;

  createTable();
  createAvgBlock();
  ganttData();
  pieTat();
  pieWt();
}
