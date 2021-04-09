import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-bindng-task',
  templateUrl: './two-way-bindng-task.component.html',
  styleUrls: ['./two-way-bindng-task.component.css'],
})
export class TwoWayBindngTaskComponent implements OnInit {
  userName = '';

  constructor() {}

  ngOnInit(): void {}
}
