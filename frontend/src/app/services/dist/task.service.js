"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TaskService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
    })
};
var apiUrl = "http://localhost:4000/api/tasks";
var TaskService = /** @class */ (function () {
    function TaskService(http, router) {
        this.http = http;
        this.router = router;
    }
    TaskService.prototype.getAll = function () {
        return this.http.get(apiUrl);
    };
    TaskService.prototype.getTaskByUserId = function (id) {
        return this.http.get(apiUrl + "/user/" + id);
    };
    TaskService.prototype.addTask = function (task) {
        var bodyEncoded = new URLSearchParams();
        bodyEncoded.append("title", task.title);
        bodyEncoded.append("description", task.description);
        bodyEncoded.append("done", task.done.toString());
        bodyEncoded.append("userId", task.userId.toString());
        var body = bodyEncoded.toString();
        return this.http.post(apiUrl + "/", body, httpOptions);
    };
    TaskService.prototype.getTaskById = function (id) {
        return this.http.get(apiUrl + "/" + id);
    };
    TaskService.prototype.updateTask = function (task, id) {
        var bodyEncoded = new URLSearchParams();
        bodyEncoded.append("title", task.title);
        bodyEncoded.append("description", task.description);
        var body = bodyEncoded.toString();
        return this.http.put(apiUrl + "/" + id, body, httpOptions);
    };
    TaskService.prototype.deleteTask = function (id) {
        console.log(apiUrl + "/" + id);
        return this.http["delete"](apiUrl + "/" + id);
    };
    TaskService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
