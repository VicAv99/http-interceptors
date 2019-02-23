import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss']
})
export class TasksDetailsComponent {
  currentTask: Task;
  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set selectedTask(value: Task) {
    this.currentTask = Object.assign({}, value);
  }
}
