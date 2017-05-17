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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
/* */
var session_service_1 = require("./session.service");
var AuthenticationService = (function () {
    function AuthenticationService(http, sessionService) {
        this.http = http;
        this.sessionService = sessionService;
    }
    AuthenticationService.prototype.login = function (user) {
        return this.http.post('http://localhost:3000/api/login', user).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.register = function (user) {
        return this.http.post('http://localhost:3000/api/register', user).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.createAuthHeader = function () {
        var token = this.sessionService.getAuthToken();
        var header = new http_1.Headers({ Authorization: 'Bearer ' + token });
        header.append('Content-Type', 'application/json; charset=utf-8');
        return new http_1.RequestOptions({ headers: header });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        session_service_1.SessionService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map