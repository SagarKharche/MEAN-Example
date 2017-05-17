"use strict";
var tasks_component_1 = require("./tasks/tasks.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
exports.ROUTES = [
    { path: '', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'tasks', component: tasks_component_1.TasksComponent }
];
//# sourceMappingURL=app.routes.js.map