"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* Importing angular core */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
/* Importing Services */
var authentication_service_1 = require("./service/authentication.service");
var session_service_1 = require("./service/session.service");
var task_service_1 = require("./service/task.service");
/* Importing Component */
var app_component_1 = require("./app.component");
var tasks_component_1 = require("./tasks/tasks.component");
var child_task_component_1 = require("./tasks/child-task/child-task.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var app_routes_1 = require("./app.routes");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            tasks_component_1.TasksComponent,
            child_task_component_1.ChildTaskComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot(app_routes_1.ROUTES)
        ],
        providers: [
            task_service_1.TaskService,
            authentication_service_1.AuthenticationService,
            session_service_1.SessionService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map