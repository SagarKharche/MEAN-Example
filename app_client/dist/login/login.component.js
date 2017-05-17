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
var router_1 = require("@angular/router");
var authentication_service_1 = require("../service/authentication.service");
var session_service_1 = require("../service/session.service");
var LoginComponent = (function () {
    function LoginComponent(authenticationService, sessionService, router, activatedRoute) {
        this.authenticationService = authenticationService;
        this.sessionService = sessionService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.credentials = {};
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.credentials).subscribe(function (response) {
            _this.sessionService.setAuthToken(response.token);
            _this.router.navigate(['tasks'], { relativeTo: _this.activatedRoute });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-component',
        templateUrl: 'app/login/login.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
        session_service_1.SessionService,
        router_1.Router,
        router_1.ActivatedRoute])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map