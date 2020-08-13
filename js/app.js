'use strict';
// //loop for iterating time as an array
var timeArry = [];
for (var t=0; t<14; t++){
  if (t<6){
    var varTime = `${t+6}am:`;
    timeArry.push(varTime);
  }else if(t === 6){
    var varTime2 = `${t+6}pm:`;
    timeArry.push(varTime2);
  }else if(t>6){
    var varTime3 = `${t-6}pm:`;
    timeArry.push(varTime3);
  }
}
//container for city objects generated
var cityArry=[];
//select table element by id
var parentTable = document.getElementById('table');
//select listener variable globally
var fishForm = document.getElementById('form');
//make a contstructor function to generate multiple objects that share keys--------------------------------------
function City(name, minCookie, maxCookie, avgSale){
  this.cityName = name;
  this.minCookie = minCookie;
  this.maxCookie = maxCookie;
  this.avgSale = avgSale;
  this.hourlyCustomer = []; //-storage location for prototype values
  this.randomHourSale = [];
  this.totalCookiesPerDay = 0;
  cityArry.push(this); //pushes object into cityArr
}
var seattle = new City('Seattle',23, 65, 6.3); //instances of the constructor object-------------------------------
var tokyo = new City('Tokyo',3, 24, 1.2);
var dubai = new City('Dubai',11, 38, 3.7);
var paris = new City('Paris',20, 38, 2.3);
var lima = new City('Lima',2, 16, 4.6);

//function for what happens when submit occurs, it adds a new city from the form information----------
function formSubmit(event){
  event.preventDefault();
  console.log('this is mylocationName.value', event.target.locationName.value);
  console.log('this is my minCookies.value', event.target.minCookies.value);
  console.log('this is my maxCookies.value', event.target.maxCookies.value);
  console.log('this is my avgPerCustomer.value', event.target.avgPerCustomer.value);
  var inputLocation = event.target.locationName.value;
  var inputMin = parseInt(event.target.minCookies.value);
  var inputMax= parseInt(event.target.maxCookies.value);
  var inputAvgPerCustomer = parseInt(event.target.avgPerCustomer.value);
  new City(inputLocation, inputMin, inputMax, inputAvgPerCustomer);
  console.log(cityArry);
  //reset HTML elemnts tied to parentTable
  parentTable.innerHTML = '';
  cookieMath();
  generateHeader();
  generateContent();
  generateFooter();
}
fishForm.addEventListener('submit', formSubmit);
//constructor prototype new object have access to proto functions: This generate a random customer count based on min/max
City.prototype.randomCustomer = function(){
  return Math.ceil(Math.random() * (this.maxCookie - this.minCookie + 1)) + this.minCookie;
};
//loops through city object array calculating random customers per hour and cookie sales per hour based on that.
function cookieMath(){
  for(var i=0; i<cityArry.length; i++){
    var total = 0;
    //@ i run 2nd loop 13 times or hours.length
    for(var j=0; j<timeArry.length; j++){
    //this sets a variable for random customer per hour and calculates it useing randomCustomer proto
      var hourCust = cityArry[i].randomCustomer();
      //this finds the average sale per hour by multiplying the hourCust by the key in our object labeled avgSale
      var hourSale = hourCust*cityArry[i].avgSale;
      //inside the object @ cityArry[i], access the randomHourSale (which is an array) key and pushes the hourSale value rounded up into it.
      cityArry[i].randomHourSale.push(Math.ceil(hourSale));
      total += hourSale;
    }
    //sends the total cookie value to the key of the object.
    cityArry[i].totalCookiesPerDay = Math.ceil(total);
  // console.log('this is the average sale per hour', cityArry[i].randomHourSale);
  // console.log('this is the total cookies', cityArry[i].totalCookiesPerDay);
  }
}
cookieMath();
//Generates a header for out table populated with times from timeArry--------------------------------------
function generateHeader(){
  //create a tr element
  var tableRow = document.createElement('tr');
  // create a table header cell
  var tableHead = document.createElement('th');
  //put a blank table header cell
  tableHead.textContent = ' ';
  //append blank tablehead to the parent row
  tableRow.appendChild(tableHead);
  //append the row to the html id = 'Table' which we declared globally
  parentTable.appendChild(tableRow);
  for(var i=0; i<timeArry.length; i++){
    //create a th element
    var tableHead2 = document.createElement('th');
    // give th text content time
    tableHead2.textContent = `${timeArry[i]}`;
    //append to tr called tableRow
    tableRow.appendChild(tableHead2);
  }
  // add daily location totals
  var tableHead3 = document.createElement('th');
  tableHead3.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHead3);
}

//creates a row for each city and a td for each time sale value-------------------------------------
City.prototype.renderTableList = function(){
  // create a tr
  var tableRow = document.createElement('tr');
  // append it to the table - parent element
  parentTable.appendChild(tableRow);
  // create a td
  var tableData = document.createElement('td');
  // fill it with content
  tableData.textContent = this.cityName;
  // append to the tr
  tableRow.appendChild(tableData);
  for(var i=0; i<timeArry.length; i++){
    //create a table data cell
    var cookieData = document.createElement('td');
    // fill it with content
    cookieData.textContent = this.randomHourSale[i];
    // append to the tr
    tableRow.appendChild(cookieData);
  }
  //populate total cookies per day
  var totalData = document.createElement('td');
  totalData.textContent = this.totalCookiesPerDay;
  // append to the tr
  tableRow.appendChild(totalData);
};
//function to create a footer with total cookies per hour and grandTotal cookies-----------------------
function generateFooter(){
  // create a tr
  var tableRow = document.createElement('tr');
  // append it to the table - parent element
  parentTable.appendChild(tableRow);
  // create a td
  var tableData = document.createElement('td');
  // fill it with content
  tableData.textContent = 'Hourly Total';
  // append to the tr
  tableRow.appendChild(tableData);
  //this for depends on each hour
  var grandTotal = 0;
  for(var i=0; i<timeArry.length; i++){
    //create a table data cell
    var cookieData = document.createElement('td');
    var dailyCookies = 0;
    for(var j=0; j<cityArry.length; j++){
      // fill it with content
      dailyCookies += cityArry[j].randomHourSale[i];
      // append to the tr
      tableRow.appendChild(cookieData);
    }
    cookieData.textContent = dailyCookies;
    tableRow.appendChild(cookieData);
  }
  //populate total cookies per day
  var totalData = document.createElement('td');
 
  for(var n=0; n<cityArry.length; n++){
    grandTotal += cityArry[n].totalCookiesPerDay;
  }
  totalData.textContent = grandTotal;
  // append to the tr
  tableRow.appendChild(totalData);
}

//create a loop for calling the renderTableList function for each object.
function generateContent(){
  for(var n=0; n<cityArry.length; n++){
    cityArry[n].renderTableList();
    // cityArry[n].renderFooter();
  }
}

//call our function to create the header
generateHeader();
//call our fucntion to create the table
generateContent();
generateFooter();
