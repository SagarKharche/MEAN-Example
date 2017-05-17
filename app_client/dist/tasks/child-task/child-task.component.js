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
var ChildTaskComponent = (function () {
    function ChildTaskComponent() {
        this.notifyParent = new core_1.EventEmitter();
        this.parentSubject = new Subject_1.Subject();
        this.nameChange = new core_1.EventEmitter();
    }
    ChildTaskComponent.prototype.ngOnInit = function () {
        this.parentSubject.subscribe(function (value) {
            console.log('Subject from parent ' + value.message);
        });
    };
    ChildTaskComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    ChildTaskComponent.prototype.notify = function () {
        this.name = 'Child';
        this.nameChange.emit(this.name);
        this.notifyParent.emit({ name: 'Changed from Child' });
    };
    return ChildTaskComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ChildTaskComponent.prototype, "notifyParent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildTaskComponent.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Subject_1.Subject)
], ChildTaskComponent.prototype, "parentSubject", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ChildTaskComponent.prototype, "nameChange", void 0);
ChildTaskComponent = __decorate([
    core_1.Component({
        selector: 'child-task',
        templateUrl: 'app/tasks/child-task/child-task.component.html'
    }),
    __metadata("design:paramtypes", [])
], ChildTaskComponent);
exports.ChildTaskComponent = ChildTaskComponent;
//# sourceMappingURL=child-task.component.js.map