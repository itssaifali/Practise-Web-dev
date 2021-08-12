var hotel = {
    hname:"Hotel Renaissance", rate:"8000.00", discounted: function() {
        return this.rate-(this.rate*0.15);
    }
};

document.getElementById("title").innerHTML= hotel.hname;
document.getElementById("price").innerHTML= "Room Charge per day : Rs " + hotel.rate;
document.getElementById("dis").innerHTML= "Discounted Charge : Rs " + hotel.discounted();

// function nextweek(){
//     var today = new Date();
//     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     var nextweek = new Date(today.getDate()+7,months[today.getMonth()],today.getFullYear());
//     return nextweek;
// }
// function nextweek(){
//     var today = new Date();
//     var nextweek = new Date(today.getMonth());
//     return nextweek;
// }
// const d = new Date()
// const year = d.getFullYear() // 2021
// const date = d.getDate() // 10

const today = new Date();

// Getting required values
const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

// Creating a new Date (with the delta)
const finalDate = new Date(year, month, day + 7);

console.log(finalDate);// 31 March 2019

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const monthName = months[finalDate.getMonth()]
  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]
 const date = finalDate.toString().slice(7,10);
  const dayName = days[finalDate.getDay()]
  const formatted = `${date} ${monthName} ${year}`
  const dayy = `${dayName}`
  


document.getElementById("dat").innerHTML= "Offer is valid till"+" "+ dayy;
document.getElementById("da").innerHTML= "(" + formatted +")";

