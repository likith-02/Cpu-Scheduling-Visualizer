let turnaround_time = [];
let waiting_time = [];
let avg_turnaround_time = 0.0;
let avg_waiting_time = 0.0;
let copy_arrival = [];
let sort_arrival = [];
let completion_time = [];
let copy_completion = [];

function solve() {
  let n = proc_array.length;
  let j = 0;
  let i = 0;

  for (i = 0; i < n; i++) {
    turnaround_time.push(0);
    waiting_time.push(0);
    copy_arrival.push(0);
    sort_arrival.push(0);
    completion_time.push(0);
    copy_completion.push(0);
  }

  for (i = 0; i < n; i++) {
    copy_arrival[i] = arrival_time[i];
  }
  let minim = 999;
  let count = 0;
  for (i = 0; i < n; i++) {
    minim = 999;
    for (j = 0; j < n; j++) {
      if (copy_arrival[j] < minim) {
        minim = copy_arrival[j];
        count = j;
      }
    }
    copy_arrival[count] = 999;
    sort_arrival[i] = minim;
  }

  for (i = 0; i < n; i++) {
    copy_arrival[i] = arrival_time[i];
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (sort_arrival[i] == copy_arrival[j]) {
        copy_arrival[j] = 999;
        break;
      }
    }
    completion_time[i] = burst_time[j];
  }

  for (i = 1; i < n; i++) {
    completion_time[i] = completion_time[i] + completion_time[i - 1];
  }

  for (i = 0; i < n; i++) {
    copy_arrival[i] = arrival_time[i];
    copy_completion[i] = completion_time[i];
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (sort_arrival[i] == copy_arrival[j]) {
        copy_arrival[j] = 999;
        break;
      }
    }
    completion_time[j] = copy_completion[i];
  }

  for (i = 0; i < n; i++) {
    turnaround_time[i] = completion_time[i] - arrival_time[i];
  }

  for (i = 0; i < n; i++) {
    waiting_time[i] = turnaround_time[i] - burst_time[i];
  }

  let sum1 = 0.0;
  let sum2 = 0.0;

  for (i = 0; i < n; i++) {
    sum1 = sum1 + turnaround_time[i];
    sum2 = sum2 + waiting_time[i];
  }

  avg_turnaround_time = sum1 / n;
  avg_waiting_time = sum2 / n;

  createTable();
  createAvgBlock();
  ganttData();
  pieTat();
  pieWt();
}
