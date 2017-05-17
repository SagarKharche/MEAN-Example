"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var task_service_1 = require("../service/task.service");
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        this.taskService = taskService;
        this.parentSubject = new Subject_1.Subject();
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getAllTasks().subscribe(function (respose) {
            _this.tasks = respose;
        });
        this.name = 'Parent';
    };
    TasksComponent.prototype.addTask = function () {
        var _this = this;
        var data = {
            title: this.title,
            isDone: false
        };
        this.taskService.addTask(data).subscribe(function (respose) {
            console.log(respose);
            _this.tasks.push(respose);
        });
    };
    TasksComponent.prototype.deleteTask = function (id) {
        this.taskService.deleteTask(id).subscribe(function (respose) {
            console.log(respose);
        });
    };
    TasksComponent.prototype.updateIsDone = function (task) {
        task.isDone = !task.isDone;
        this.taskService.updateTask(task).subscribe(function (respose) {
            console.log(respose);
        });
    };
    TasksComponent.prototype.getMessageFromChild = function (data) {
        console.log(data);
    };
    TasksComponent.prototype.notifyChild = function () {
        this.name = 'Parent';
        this.parentSubject.next({ message: 'Hello' });
    };
    return TasksComponent;
}());
TasksComponent = __decorate([
    core_1.Component({
        selector: 'tasks',
        templateUrl: 'app/tasks/tasks.component.html'
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TasksComponent);
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map