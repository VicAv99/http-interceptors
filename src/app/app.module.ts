import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TasksDetailsComponent } from './tasks/tasks-details/tasks-details.component';

import { TasksService } from './core/tasks.service';
import { BlockerInterceptor } from './core/interceptors/blocker-interceptor.service';
import { PizzaInterceptor } from './core/interceptors/pizza-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksListComponent,
    TasksDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    TasksService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BlockerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PizzaInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
