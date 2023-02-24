import axios from "axios";
import { User, Student } from "./interface";

const typeDataString: string = "Test";
const typeDataNumber: number = 1;
const typeDataBoolean: boolean = true;
const typeDataObject: object = { name: "fatwa", major: "comp sci" };
const typeDataArrayString: string[] = ["Test 1", "Test 2"];
const typeDataArrayNumber: number[] = [1, 2];
const typeDataArrayObject: object[] = [
  { name: "fatwa", major: "compsci" },
  { name: "fira", major: "law" },
];
const typeDataArrayAny: any[] = ["Test", 1];

console.log("String : ", typeDataString);
console.log("Number : ", typeDataNumber);
console.log("Boolean : ", typeDataBoolean);
console.log("Object : ", typeDataObject);
console.log("Array String : ", typeDataArrayString);
console.log("Array Number : ", typeDataArrayNumber);
console.log("Array Object : ", typeDataArrayObject);
console.log("Array Any : ", typeDataArrayAny);

const dataStudent: Student = {
  id: 100,
  name: "Ica",
  address: "Malang",
  major: "comp sci",
};

const dataUser: User = {
  id: 1,
  name: "fatwa",
  email: "fatwa@gmail.com",
  username: "fatwa",
};

console.log("Data Student : ", dataStudent);
console.log("Data User : ", dataUser);

function greetings(message: string): void {
  console.log(message);
}
greetings("Tes Void");

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newPoint = new Point(13, 56);
console.log(newPoint);

enum DataEnum {
  JAN,
  FEB,
  MAR,
  APR,
  MAY,
  JUN,
  JUL,
  AUG,
  SEP,
  OCT,
  NOV,
  DEC,
}
console.log("Enum Value : ", DataEnum.JAN);
console.log("Enum Array : ", DataEnum[0]);

async function getUsers() {
  try {
    const { data, status } = await axios.get<getUserAxios>(
      "https://jsonplaceholder.typicode.com/users",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    console.log("Data", JSON.stringify(data));
    console.log("Status : ", status);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

getUsers();
