import { Component, OnInit } from '@angular/core';

import { Task } from './task';
import { TasksService } from '../core/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.all()
      .subscribe(res => this.tasks = res);
  }

}
