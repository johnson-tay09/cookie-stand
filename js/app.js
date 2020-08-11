'use strict';

// //loop for iterating time as a string
var timeArr = [];
for (var i=0; i<14; i++){
  if (i<6){
    var varTime = `${i+6}am:`;
    timeArr.push(varTime);
  }else if(i === 6){
    var varTime = `${i+6}pm:`;
    timeArr.push(varTime);
  }else if(i>6){
    var varTime = `${i-6}pm:`;
    timeArr.push(varTime);
  }
}

// object named after city listing each property
// var seattle = {
//   minCustRate:23,
//   maxCustRate:65,
//   avgCookieSale:6.3,
// };
// this is the object for the city tokyo
var tokyo = {
  minCustRate:3,
  maxCustRate:24,
  avgCookieSale:1.2,
  avgCookieArr:[],
  cookieTotal:0,
  //function to find random customer rate within our min max range
  randomMath: function(){
    return Math.ceil(Math.random() * (this.maxCustRate - this.minCustRate + 1)) + this.minCustRate;
  },
  //this function finds the average cookies/hr based on the random customer rate and average cookies per customer.
  generateSales: function(){
    var total=0;
    for (var i=0; i<14; i++){
      var avg = this.randomMath() * this.avgCookieSale;
      this.avgCookieArr.push(Math.ceil(avg));
      total += avg;
    }
    console.log(total);
    this.cookieTotal= Math.ceil(total);
  },
  // this creatures an arry of the average cookies per hour for the city.
  //this function displays the values of the array as an unordered list.
  render: function(){
    //directs us to the DOM tokyo element
    var list = document.getElementById('tokyo');
    for (var i=0; i<14; i++){
      //creat a DOM list item
      var listItem = document.createElement('li');
      //give it content
      listItem.textContent = `${timeArr[i]} ${this.avgCookieArr[i]} cookies`;
      //append the dom
      list.appendChild(listItem);
    }
    var lastItem = document.createElement('li');
    lastItem.textContent = `Total: ${this.cookieTotal} cookies`;
    list.appendChild(lastItem);
  }
};
tokyo.generateSales();
console.log(tokyo.avgCookieArr);
tokyo.render();
console.log(tokyo.cookieTotal);




// var dubai = {
//   minCustRate:11,
//   maxCustRate:38,
//   avgCookieSale:3.7,
// };
// var paris = {
//   minCustRate:20,
//   maxCustRate:38,
//   avgCookieSale:2.3,
// };
// var lima = {
//   minCustRate:2,
//   maxCustRate:16,
//   avgCookieSale:4.6,
// };
