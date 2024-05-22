import {createTableView} from "./createTableView.js"

export let array= [];
export function getInput(){
  
    let fnameInput= document.getElementById("fname").value;
    let lnameInput= document.getElementById("lname").value;
    let emailInput= document.getElementById("email").value;
    let mobileNumberInput= document.getElementById("mobile").value;

    console.log(fnameInput);
    array.push({fname: fnameInput, lname: lnameInput, email: emailInput, mobile: mobileNumberInput});
    let result= createTableView(array);
 }