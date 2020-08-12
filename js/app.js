// 'use strict';

// // //loop for iterating time as a string
// var timeArr = [];
// for (var i=0; i<14; i++){
//   if (i<6){
//     var varTime = `${i+6}am:`;
//     timeArr.push(varTime);
//   }else if(i === 6){
//     var varTime2 = `${i+6}pm:`;
//     timeArr.push(varTime2);
//   }else if(i>6){
//     var varTime3 = `${i-6}pm:`;
//     timeArr.push(varTime3);
//   }
// }

// // object named after city listing each property
// var seattle = {
//   name: 'Seattle',
//   minCustRate:23,
//   maxCustRate:65,
//   avgCookieSale:6.3,
//   avgCookieArr:[],
//   cookieTotal:0,
//   cityName: function(){
//     var grabName = document.getElementById('store-one-name');
//     grabName.textContent = `${this.name}`;
//   },
//   //function to find random customer rate within our min max range
//   //I got this from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   randomMath: function(){
//     return Math.ceil(Math.random() * (this.maxCustRate - this.minCustRate + 1)) + this.minCustRate;
//   },
//   //this function finds the average cookies/hr based on the random customer rate and average cookies per customer.
//   generateSales: function(){
//     var total=0;
//     for (var i=0; i<14; i++){
//       var avg = this.randomMath() * this.avgCookieSale;
//       this.avgCookieArr.push(Math.ceil(avg));
//       total += avg;
//     }
//     // console.log(total);
//     this.cookieTotal= Math.ceil(total);
//   },
//   // this creatures an arry of the average cookies per hour for the city.
//   //this function displays the values of the array as an unordered list.
//   render: function(){
//     //directs us to the DOM tokyo element
//     var list = document.getElementById('seattle');
//     for (var i=0; i<14; i++){
//       //creat a DOM list item
//       var listItem = document.createElement('li');
//       //give it content
//       listItem.textContent = `${timeArr[i]} ${this.avgCookieArr[i]} cookies`;
//       //append the dom
//       list.appendChild(listItem);
//     }
//     var lastItem = document.createElement('li');
//     lastItem.textContent = `Total: ${this.cookieTotal} cookies`;
//     list.appendChild(lastItem);
//   }
// };
// seattle.cityName();
// seattle.generateSales();
// // console.log(seattle.avgCookieArr);
// seattle.render();
// // console.log(seattle.cookieTotal);

// // this is the object for the city tokyo
// var tokyo = {
//   name: 'Tokyo',
//   minCustRate:3,
//   maxCustRate:24,
//   avgCookieSale:1.2,
//   avgCookieArr:[],
//   cookieTotal:0,
//   //function to find random customer rate within our min max range
//   randomMath: function(){
//     return Math.ceil(Math.random() * (this.maxCustRate - this.minCustRate + 1)) + this.minCustRate;
//   },
//   //this function finds the average cookies/hr based on the random customer rate and average cookies per customer.
//   generateSales: function(){
//     var total=0;
//     for (var i=0; i<14; i++){
//       var avg = this.randomMath() * this.avgCookieSale;
//       this.avgCookieArr.push(Math.ceil(avg));
//       total += avg;
//     }
//     console.log(total);
//     this.cookieTotal= Math.ceil(total);
//   },
//   //function to add the name property to the h2 element
//   cityName: function(){
//     var grabName = document.getElementById('store-two-name');
//     grabName.textContent = `${this.name}`;
//   },
//   // this creatures an arry of the average cookies per hour for the city.
//   //this function displays the values of the array as an unordered list.
//   render: function(){
//     //directs us to the DOM tokyo element
//     var list = document.getElementById('tokyo');
//     for (var i=0; i<14; i++){
//       //creat a DOM list item
//       var listItem = document.createElement('li');
//       //give it content
//       listItem.textContent = `${timeArr[i]} ${this.avgCookieArr[i]} cookies`;
//       //append the dom
//       list.appendChild(listItem);
//     }
//     var lastItem = document.createElement('li');
//     lastItem.textContent = `Total: ${this.cookieTotal} cookies`;
//     list.appendChild(lastItem);
//   }
// };
// tokyo.cityName();
// tokyo.generateSales();
// // console.log(tokyo.avgCookieArr);
// tokyo.render();
// // console.log(tokyo.cookieTotal);


// var dubai = {
//   name: 'Dubai',
//   minCustRate:11,
//   maxCustRate:38,
//   avgCookieSale:3.7,
//   avgCookieArr:[],
//   cookieTotal:0,
//   cityName: function(){
//     var grabName = document.getElementById('store-three-name');
//     grabName.textContent = `${this.name}`;
//   },
//   //function to find random customer rate within our min max range
//   randomMath: function(){
//     return Math.ceil(Math.random() * (this.maxCustRate - this.minCustRate + 1)) + this.minCustRate;
//   },
//   //this function finds the average cookies/hr based on the random customer rate and average cookies per customer.
//   generateSales: function(){
//     var total=0;
//     for (var i=0; i<14; i++){
//       var avg = this.randomMath() * this.avgCookieSale;
//       this.avgCookieArr.push(Math.ceil(avg));
//       total += avg;
//     }
//     console.log(total);
//     this.cookieTotal= Math.ceil(total);
//   },
//   // this creatures an arry of the average cookies per hour for the city.
//   //this function displays the values of the array as an unordered list.
//   render: function(){
//     //directs us to the DOM tokyo element
//     var list = document.getElementById('dubai');
//     for (var i=0; i<14; i++){
//       //creat a DOM list item
//       var listItem = document.createElement('li');
//       //give it content
//       listItem.textContent = `${timeArr[i]} ${this.avgCookieArr[i]} cookies`;
//       //append the dom
//       list.appendChild(listItem);
//     }
//     var lastItem = document.createElement('li');
//     lastItem.textContent = `Total: ${this.cookieTotal} cookies`;
//     list.appendChild(lastItem);
//   }
// };
// dubai.cityName();
// dubai.generateSales();
// // console.log(dubai.avgCookieArr);
// dubai.render();
// // console.log(dubai.cookieTotal);

// var paris = {
//   name: 'Paris',
//   minCustRate:20,
//   maxCustRate:38,
//   avgCookieSale:2.3,
//   avgCookieArr:[],
//   cookieTotal:0,
//   cityName: function(){
//     var grabName = document.getElementById('store-four-name');
//     grabName.textContent = `${this.name}`;
//   },
//   //function to find random customer rate within our min max range
//   randomMath: function(){
//     return Math.ceil(Math.random() * (this.maxCustRate - this.minCustRate + 1)) + this.minCustRate;
//   },
//   //this function finds the average cookies/hr based on the random customer rate and average cookies per customer.
//   generateSales: function(){
//     var total=0;
//     for (var i=0; i<14; i++){
//       var avg = this.randomMath() * this.avgCookieSale;
//       this.avgCookieArr.push(Math.ceil(avg));
//       total += avg;
//     }
//     console.log(total);
//     this.cookieTotal= Math.ceil(total);
//   },
//   // this creatures an arry of the average cookies per hour for the city.
//   //this function displays the values of the array as an unordered list.
//   render: function(){
//     //directs us to the DOM tokyo element
//     var list = document.getElementById('paris');
//     for (var i=0; i<14; i++){
//       //creat a DOM list item
//       var listItem = document.createElement('li');
//       //give it content
//       listItem.textContent = `${timeArr[i]} ${this.avgCookieArr[i]} cookies`;
//       //append the dom
//       list.appendChild(listItem);
//     }
//     var lastItem = document.createElement('li');
//     lastItem.textContent = `Total: ${this.cookieTotal} cookies`;
//     list.appendChild(lastItem);
//   }
// };
// paris.cityName();
// paris.generateSales();
// // console.log(paris.avgCookieArr);
// paris.render();
// // console.log(paris.cookieTotal);

// var lima = {
//   name: 'Lima',
//   minCustRate:2,
//   maxCustRate:16,
//   avgCookieSale:4.6,
//   avgCookieArr:[],
//   cookieTotal:0,
//   cityName: function(){
//     var grabName = document.getElementById('store-five-name');
//     grabName.textContent = `${this.name}`;
//   },
//   //function to find random customer rate within our min max range
//   randomMath: function(){
//     return Math.ceil(Math.random() * (this.maxCustRate - this.minCustRate + 1)) + this.minCustRate;
//   },
//   //this function finds the average cookies/hr based on the random customer rate and average cookies per customer.
//   generateSales: function(){
//     var total=0;
//     for (var i=0; i<14; i++){
//       var avg = this.randomMath() * this.avgCookieSale;
//       this.avgCookieArr.push(Math.ceil(avg));
//       total += avg;
//     }
//     console.log(total);
//     this.cookieTotal= Math.ceil(total);
//   },
//   // this creatures an arry of the average cookies per hour for the city.
//   //this function displays the values of the array as an unordered list.
//   render: function(){
//     //directs us to the DOM tokyo element
//     var list = document.getElementById('lima');
//     for (var i=0; i<14; i++){
//       //creat a DOM list item
//       var listItem = document.createElement('li');
//       //give it content
//       listItem.textContent = `${timeArr[i]} ${this.avgCookieArr[i]} cookies`;
//       //append the dom
//       list.appendChild(listItem);
//     }
//     var lastItem = document.createElement('li');
//     lastItem.textContent = `Total: ${this.cookieTotal} cookies`;
//     list.appendChild(lastItem);
//   }
// };
// lima.cityName();
// lima.generateSales();
// lima.render();

// //loop for iterating time as a string
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
//make a contstructor function to generate multiple objects that share keys
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
var seattle = new City('Seattle',23, 65, 6.3); //instances of the constructor object
var tokyo = new City('Tokyo',3, 24, 1.2);
var dubai = new City('Dubai',11, 38, 3.7);
var paris = new City('Paris',20, 38, 2.3);
var lima = new City('Lima',2, 16, 4.6);

//constructor prototype new object have access to proto functions: This generate a random customer count based on min/max
City.prototype.randomCustomer = function(){
  return Math.ceil(Math.random() * (this.maxCookie - this.minCookie + 1)) + this.minCookie;
};

//loops through city object array
for(var i=0; i<cityArry.length; i++){
  var total = 0;
  //@ i run 2nd loop 13 times or hours.length
  for(var j=0; j<14; j++){
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
//select table element by id
var parentTable = document.getElementById('table');
//this function creates my header that is independant of the objects in my constructor. 14ths in our first tr
function generateHeader(){
  //create a tr element
  var tableRow = document.createElement('tr');
  // append tr to parent
  var tableHead = document.createElement('th');
  tableHead.textContent = ' ';
  tableRow.appendChild(tableHead);
  parentTable.appendChild(tableRow);
  for(var i=0; i<timeArry.length; i++){
    //create a th element
    var tableHead2 = document.createElement('th');
    // give th text content time
    tableHead2.textContent = `${timeArry[i]}`;
    //append to tr
    tableRow.appendChild(tableHead2);
  }
  // add daily location totals
  var tableHead3 = document.createElement('th');
  tableHead3.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHead3);
}
// function generateFooter(){
//   //create a tr element
//   var tableRow = document.createElement('tr');
//   // append tr to parent
//   var tableHead = document.createElement('th');
//   tableHead.textContent = ' ';
//   tableRow.appendChild(tableHead);
//   parentTable.appendChild(tableRow);
//   for(var i=0; i<timeArry.length; i++){
//     //create a th element
//     var tableHead2 = document.createElement('th');
//     // give th text content time
//     tableHead2.textContent = `${timeArry[i]}`;
//     //append to tr
//     tableRow.appendChild(tableHead2);
//   }
//   // add daily location totals
//   var tableHead3 = document.createElement('th');
//   tableHead3.textContent = 'Daily Location Total';
//   tableRow.appendChild(tableHead3);
// }


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
    var cookieData = document.createElement('td');
    // fill it with content
    cookieData.textContent = this.randomHourSale[i];
    // append to the tr
    tableRow.appendChild(cookieData);
  }
  // console.log(this.randomHourSale);
  var totalData = document.createElement('td');
  totalData.textContent = this.totalCookiesPerDay;
  // append to the tr
  tableRow.appendChild(totalData);
};
// generateFooter();
generateHeader();
for(var n=0; n<cityArry.length; n++){
  cityArry[n].renderTableList();
}

// function render(){
//   parentTable.innerHTML = null;
//   generateHeader();
//   for (var i=0; i<cityArry.length; i++){
//     cityArry[i].body();
//   }

// }

// var totalData = document.createElement('td');
// totalData.textContent = this.randomHourSale[i];
// // append to the tr
// tableRow.appendChild(totalData);


//genereate header for each object instance in the array allPets
// for(var i=0; i<cityArry.length; i++){
//   generateHeader();
// }

// City.prototype.renderTableList = function(){
//   var tableRow = document.createElement('tr');
//   parentElement.appendChild(tableRow);
//   var tableData = document.createElement('td');
//   tableData.textContent = this.petName;
//   tableRow.appendChild(tableData);
// }
