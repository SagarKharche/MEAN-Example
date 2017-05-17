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
var authentication_service_1 = require("../service/authentication.service");
var RegisterComponent = (function () {
    function RegisterComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.credentials = {};
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.registerUser = function () {
        console.log('register');
        this.authenticationService.register(this.credentials).subscribe(function (response) {
            console.log(response);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register-user',
        templateUrl: 'app/register/register.component.html'
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map