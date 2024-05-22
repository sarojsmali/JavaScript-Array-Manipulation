
let table = '<table>';  
table += '<tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Email</th></tr>';  

export function createTableView(data) {
  let table = '<table>';  
  table += '<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Mobile</th></tr>';  
  data.map(item => {  
  table += `<tr><td>${item.fname}</td><td>${item.lname}</td><td>${item.email}</td><td>${item.mobile}</td></tr>`;  
  });  
  table += '</table>';  
  document.getElementById("dataView").innerHTML = table; 
  return table;

}
