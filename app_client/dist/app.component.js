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
var session_service_1 = require("./service/session.service");
var AppComponent = (function () {
    function AppComponent(router, sessionService, activatedRoute) {
        var _this = this;
        this.router = router;
        this.sessionService = sessionService;
        this.activatedRoute = activatedRoute;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (!_this.sessionService.getAuthToken() && event.url !== '/') {
                    _this.router.navigate(['../'], { relativeTo: _this.activatedRoute });
                }
                else if (event.url === '/' && _this.sessionService.getAuthToken()) {
                    _this.router.navigate(['home'], { relativeTo: _this.activatedRoute });
                }
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/app.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        session_service_1.SessionService,
        router_1.ActivatedRoute])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map