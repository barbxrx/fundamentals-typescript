"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    CreateCourseService_1.default.execute({
        educator: "Barbara",
        name: "Nodejs",
        duration: 50
    });
    CreateCourseService_1.default.execute({
        // educator: "",
        name: "mysql",
        duration: 5
    });
    return response.send();
}
exports.createCourse = createCourse;