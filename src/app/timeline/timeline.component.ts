import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  timelineForm:any
  today = new Date().toISOString().split('T')[0].replace(/-/g, '/')
  newTimeLine = {
    title: '', time: (new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: (new Date()).toISOString().split('T')[0].replace(/-/g, '/'), color: 'gray'
  }
  timelineItems = [
    {
      title: 'Activity 1',
      time: '10:05 AM',
      date: '2023/04/25',
      color: "blue"
    },
    {
      title: 'Activity 2',
      time: '17:40 PM',
      date: '2023/04/26',
      color: "green"
    },
    {
      title: 'Activity 3',
      time: '19:25 PM',
      date: '2023/04/27',
      color: "red"
    }
  ];


  constructor() { }

  ngOnInit(): void {
    this.sortDateTime()
    this.timelineForm = new FormGroup({
      'date': new FormControl(this.newTimeLine.date),
      'title': new FormControl(''),
      'time':new FormControl(this.newTimeLine.time)

    })
    this.timelineForm.valueChanges.subscribe((value:any) => {
      this.newTimeLine.time = value.time;
      this.newTimeLine.date = value.date;
      this.newTimeLine.title = value.title;
    });
  }
  addNewTimeline() {
 
    this.newTimeLine.color = 'gray'
    this.timelineItems.push(this.newTimeLine)
    this.newTimeLine = {
      title: '', time: (new Date()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: (new Date()).toISOString().split('T')[0].replace(/-/g, '/'), color: ''
    }
    this.sortDateTime()
    this.timelineForm.reset(this.newTimeLine)

  }

  sortDateTime() {
    this.timelineItems.sort((a, b) => {
      const dateA = new Date(a.date.replace(/\//g, '-') + 'T' + a.time.split(" ")[0])
      const dateB = new Date(b.date.replace(/\//g, '-') + 'T' + b.time.split(" ")[0])

      if (dateA.getTime() > dateB.getTime()) {
        return -1
      }
      else if (dateA.getTime() <= dateB.getTime()) {
        return 1
      }
      else {
        return 0
      }
    })
  }

}
