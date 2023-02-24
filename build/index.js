"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const typeDataString = "Test";
const typeDataNumber = 1;
const typeDataBoolean = true;
const typeDataObject = { name: "fatwa", major: "comp sci" };
const typeDataArrayString = ["Test 1", "Test 2"];
const typeDataArrayNumber = [1, 2];
const typeDataArrayObject = [
    { name: "fatwa", major: "compsci" },
    { name: "fira", major: "law" },
];
const typeDataArrayAny = ["Test", 1];
console.log("String : ", typeDataString);
console.log("Number : ", typeDataNumber);
console.log("Boolean : ", typeDataBoolean);
console.log("Object : ", typeDataObject);
console.log("Array String : ", typeDataArrayString);
console.log("Array Number : ", typeDataArrayNumber);
console.log("Array Object : ", typeDataArrayObject);
console.log("Array Any : ", typeDataArrayAny);
const dataStudent = {
    id: 100,
    name: "Ica",
    address: "Malang",
    major: "comp sci",
};
const dataUser = {
    id: 1,
    name: "fatwa",
    email: "fatwa@gmail.com",
    username: "fatwa",
};
console.log("Data Student : ", dataStudent);
console.log("Data User : ", dataUser);
function greetings(message) {
    console.log(message);
}
greetings("Tes Void");
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const newPoint = new Point(13, 56);
console.log(newPoint);
var DataEnum;
(function (DataEnum) {
    DataEnum[DataEnum["JAN"] = 0] = "JAN";
    DataEnum[DataEnum["FEB"] = 1] = "FEB";
    DataEnum[DataEnum["MAR"] = 2] = "MAR";
    DataEnum[DataEnum["APR"] = 3] = "APR";
    DataEnum[DataEnum["MAY"] = 4] = "MAY";
    DataEnum[DataEnum["JUN"] = 5] = "JUN";
    DataEnum[DataEnum["JUL"] = 6] = "JUL";
    DataEnum[DataEnum["AUG"] = 7] = "AUG";
    DataEnum[DataEnum["SEP"] = 8] = "SEP";
    DataEnum[DataEnum["OCT"] = 9] = "OCT";
    DataEnum[DataEnum["NOV"] = 10] = "NOV";
    DataEnum[DataEnum["DEC"] = 11] = "DEC";
})(DataEnum || (DataEnum = {}));
console.log("Enum Value : ", DataEnum.JAN);
console.log("Enum Array : ", DataEnum[0]);
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data, status } = yield axios_1.default.get("https://jsonplaceholder.typicode.com/users", {
                headers: {
                    Accept: "application/json",
                },
            });
            console.log("Data", JSON.stringify(data));
            console.log("Status : ", status);
            return data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.log("error message: ", error.message);
                return error.message;
            }
            else {
                console.log("unexpected error: ", error);
                return "An unexpected error occurred";
            }
        }
    });
}
getUsers();
