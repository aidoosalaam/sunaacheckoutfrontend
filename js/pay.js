function rString(length, chars) {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

let name = document.getElementById("name");
let number = document.getElementById("number");
let email = document.getElementById("email");
let productID = document.getElementById("room");
let productname = document.getElementById("room");
let roomtype = document.getElementById("room");
var refID = rString(
  10,
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
);

console.log("hello");
let pay = document.getElementById("pay");

pay.addEventListener("click", (e) => {
  console.log("hello2");
  e.preventDefault();
  const dataToSend = {
    amount: 40.0,
    desc: "testing_payment",
    referenceID: "76534YT435",
    productID: "Duplex200",
    email: "esiegyimah@gmail.com",
    customerMobile: "233242360764",
    merchantlogo:
      "http://www.suntaabeachboxx.com/wp-content/uploads/2021/05/suntaalogo.png",
    merchantName: "Suntaa Beach Box",
    currency: "GHS",
    customerName: "Laila",
    roomType: "Double Touble Room",
  };

  console.log(JSON.stringify(dataToSend));
  let dataReceived = "";

  let headers = new Headers();
  headers.append(
    "Content-type",
    "application/json; charset=UTF-8;application/*+json"
  );

  fetch("http://booking.suntaabeachboxx.com:8888/checkout/booking/initiate", {
    method: "post",
    credentials: "include",
    mode: "no-cors",
    headers: headers,
    body: JSON.stringify(dataToSend),
  })
    .then((resp) => {
      if (resp.status === 200) {
        console.log(resp);
      } else {
        console.log("Status: " + resp.status);
        // return Promise.reject("server")
      }
    })
    .catch((err) => {
      if (err === "server") return;
      console.log("checkout ERROR" + err);
    });

  //   console.log(`Received: ${dataReceived}`);
  // e.preventDefault()
  // let data = JSON.stringify({
  // 	amount: 40.00,
  // 	desc : "testing_payment",
  // 	referenceID : "76534YT4355",
  // 	productID : "Duplex200",
  // 	email : "esiegyimah@gmail.com",
  // 	customerMobile : "233242360764",
  // 	merchantlogo: "http://www.suntaabeachboxx.com/wp-content/uploads/2021/05/suntaalogo.png",
  // 	merchantName: "Suntaa Beach Box",
  // 	currency : "GHS",
  // 	customerName : "Laila",
  // 	roomType : "Double Touble Room"
});

// console.log(JSON.stringify({ x: 5, y: 6 }));
// console.log(JSON.stringify({"data":data}));
// makePayment(data)
// });

// const url = `http://booking.suntaabeachboxx.com:8888/checkout/booking/initiate`

// let makePayment = async function(data) {
// 	try {
// 		console.log("inside make payment")
// 		const response = await fetch(url,
// 		{
// 			mode: 'no-cors',
// 			method: "POST",
// 			body: JSON.stringify(data),
// 			headers: {
// 				"Content-type": "application/json; charset=UTF-8",
// 				"Accept": "application/json",
// 				// "Access-Control-Allow-Origin" : "http://127.0.0.1:5500"

// 			}
// 		})
// 		console.log(response)
// 		// const jsonResponse = await response.json()

// 		// If the response is OK
// 		if (response.ok) {
// 			console.log(response)
// 		} else {
// 			console.log("Nothing happened")
// 		}

// 	} catch (error) {
// 		console.error("make payment error" + error)
// 	}
// }

// Listen to submit button click

// $(document).ready(function () {
//   $("#pay").click(function (e) {
//     e.preventDefault();
//     console.log(">>>>>>>>>>>>>>>>>>>> Wo");
//   });
// });

// $(document).ready(function () {
//   console.log("ready!");
// });
