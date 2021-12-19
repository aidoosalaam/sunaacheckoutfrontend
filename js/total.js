
	// let start = document.getElementById('start')
	// let end = document.getElementById('end')
	// let room = document.getElementById('room')
	// let adults = document.getElementById('adults')
	// let children = document.getElementById('children')
	// let number = document.getElementById('number')
	// let email = document.getElementById('email')

	// let error = document.getElementById('error')

	 let total = document.getElementById('total')
	
	 let button = document.getElementById('total')

	// let pay = document.getElementById('pay')

	button.addEventListener('click', function(e){
		e.preventDefault()
		
		let data = {
			start : new Date(start.value),
			end: new Date(end.value),
			room: room.value,
			adults: adults.value,
			children: children.value,
			number: number.value,
			email: email.value,
		}

		let days = (new Date(end.value) - new Date(start.value)) / 86400000

		total.innerHTML = "<span style='color: white'> GHS" + `${days * room.value}` + "</span>"
	})

	// pay.addEventListener('click', function(e){
	// 	e.preventDefault()
		
	// 	let number_of_days = (new Date(end.value) - new Date(start.value)) / 86400000
	// 	let amount = number_of_days * room.value

		// let apidata = {
		// 	days: number_of_days,
		// 	room: room.value,
		// 	total: amount
		// }

		// console.log(apidata);
	// })