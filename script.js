

  function myFunction () {

    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var fname = row.insertCell(0);
    var lname = row.insertCell(1);
    var address = row.insertCell(2);
    var pincode = row.insertCell(3);
    var gender = row.insertCell(4);
    var food = row.insertCell(5);
    var state = row.insertCell(6);
    var country = row.insertCell(7);

    fname.innerHTML = document.getElementById("fname").value;
    lname.innerHTML = document.getElementById("lname").value;
    address.innerHTML = document.getElementById("address").value;
    pincode.innerHTML = document.getElementById("pincode").value;
    gender.innerHTML = document.querySelector("input[name=gender]:checked").value;
    let foods=[];
let checkboxes= document.getElementsByName('choiceOfFood');
for( let i=0; i<checkboxes.length; i++){
  if(checkboxes[i].checked){
    foods.push(checkboxes[i].value);
  }
}
let fruits= foods;
    food.innerHTML = fruits;
    state.innerHTML = document.getElementById("state").value;
    country.innerHTML = document.getElementById("country").value;
    

  
  }