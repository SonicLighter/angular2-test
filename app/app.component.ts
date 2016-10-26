import { Component } from '@angular/core';
import { TasksListComponent } from './tasks/tasks-list.component';

@Component({
    /*
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
    */
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TasksListComponent],
})
export class AppComponent {
    title: string;
    taskList: string[];

    constructor() {
        this.title = 'ANGULAR2';
        this.taskList = [/*'Learn JavaScript', 'Learn ES6', 'Learn Angular2', 'Learn something'*/];
    }

    addTask(title: string/*event: anytitleInput: HTMLInputElement*/) {
        //console.log(titleInput.value);
        /*
        let title = titleInput.value;
        titleInput.value = '';
        this.taskList.push(title);
        */
        /*if(event.type === 'keyup' && event.which === 13){
            this.taskList.push(event.target.value);
        }*/
        //console.log(event);
        this.taskList.push(title);
    }
}