import {createTableView} from "./createTableView.js";
import { array } from "./appendData.js";

 export function addElementToTop(){
    
    let fnameInput= document.getElementById("fname").value;
    let lnameInput= document.getElementById("lname").value;
    let emailInput= document.getElementById("email").value;
    let mobileNoInput= document.getElementById("mobile").value;

    let person = {
        fname: fnameInput,
        lname: lnameInput,
        email: emailInput,
        mobile: mobileNoInput
    }
   
   console.log(person);
    array.unshift(person);
    createTableView(array);

}