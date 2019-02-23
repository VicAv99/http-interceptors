import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  @Input() tasks: Task[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
