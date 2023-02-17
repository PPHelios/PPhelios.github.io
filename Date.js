
//To gettimestamp
let now = Date.now()
let now2 = new Date().getTime()

// To convert timestamp to date object
const date = new Date(now)

// To get date object
const date2 = new Date()




const darr = [1671424613627, 1671422613627, 1671422613627, 1671422513627, 1671422613627, 1671422613627, 1621422613627, 1671422913627, 1671422713627, 1671422613627, ]


for (let d of darr.sort()){
    

 const dateFormat = new Date(d)
  
     console.log(now)
     console.log(now2) 
     console.log(date2)
     console.log(dateFormat)
     console.log("local "+date.toLocaleString())
	console.log("time "+date.toTimeString())

  
console.log("Date: "+ dateFormat.getDate()+
           "/"+(dateFormat.getMonth()+1)+
           "/"+dateFormat.getFullYear()+
           " "+dateFormat.getHours()+
           ":"+dateFormat.getMinutes()+
           ":"+dateFormat.getSeconds());
}




	console.log(today.getDay()) // 0 sunday to 6 saturday
	console.log(today.getDate()) // Days from 0 to 31
	console.log(today.getMonth()) // 0 janusary to 11 December
	console.log(today.getYear()) // from 1900
	console.log(today.getFullYear())
	// set to change time
	console.log(today.setDate(14)) //output in ms
	console.log(today) //changes today and i have to console.log today to see the output
	console.log(today.setMonth(10))
	console.log(today)
	// to changes the format but doesnt change today
