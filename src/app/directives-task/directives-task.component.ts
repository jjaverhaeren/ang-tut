import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-task',
  templateUrl: './directives-task.component.html',
  styleUrls: ['./directives-task.component.css'],
})
export class DirectivesTaskComponent implements OnInit {
  shown = false;
  log = [];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.shown = !this.shown;
    this.log.push(this.log.length + 1);
  }
}
