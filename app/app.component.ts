import {Component} from '@angular/core';

@Component({
    /*
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
    */
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})
export class AppComponent {
    title: string;
    taskList: string[];

    constructor() {
        this.title = 'ANGULAR2';
        this.taskList = [/*'Learn JavaScript', 'Learn ES6', 'Learn Angular2', 'Learn something'*/];
    }

    addTask() {
        
    }
}