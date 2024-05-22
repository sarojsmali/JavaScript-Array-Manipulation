import { createTableView } from "./createTableView.js";
import { array } from "./appendData.js";

export function addElementAtIndex(){

let arrayLength = array.length;

let index = prompt(`Enter index number in between 1 to ${arrayLength} `, );

index = Number(index-1);

let element = prompt ("enter Data to add seprated by comma");

element =element.split(",");

element ={
    fname: element[0],
    lname: element[1],
    email: element[2],
    mobile: element[3]
}

array.splice(index, 0, element);

createTableView(array);

}