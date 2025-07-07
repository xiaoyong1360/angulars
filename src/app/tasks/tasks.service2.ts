import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})
export class TasksService{
    private  tasks = dummyTasks;
    

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTask(userId: string){
        return this.tasks.filter((task) => task.userId === userId );
    }

    addTask(taskData: NewTaskData, userId: string){
        this.tasks.unshift({
          id: new Date().getTime.toString(),
          userId: userId,
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.date
        });
        this.saveTasks();
    }    

    removeTask(userId: string){
        this.tasks = this.tasks.filter((task) => task.id !== userId);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}