// Practice 1              Page -- 83
const amout = 4500
if(amout > 6000){
    const discount = (amout * (15/100))
    const pay = amout - discount
    console.log("Pay Taka",pay)
}else if(amout > 3000){
    const discount = (amout * (5/100))
    const pay = amout - discount
    console.log("Pay Taka",pay)
}

// Practice 2
const age = 4 
const taka = 3333
if(age < 12 ){
    console.log("Tumake freee khawabe")
}else if(age > 60 ){
    const discount = ( taka* (50/100))
    const pay = taka - discount
    console.log("Pay Taka",pay)
}else{
    console.log("Full taka Pay",taka)
}
// practice 3
const bankBalance = 970
if(bankBalance < 1000){
    console.log("You will do Deposit")
}else if(bankBalance < 1000 || bankBalance < 5000){
    console.log("You will do enjoy")
}else {
    console.log("You will do Biye")
}
// Practice 4
const mark = 84
if(mark <= 50){
    console.log("You are fail")
}else if(mark <= 80){
    console.log("You are pass")
}else{
    console.log("You are A+")
}

// Practice 5
const page = 502
if(page <= 100){
    console.log("small book")
}else if(page <= 500){
    console.log("Medium book")
}else{
    console.log("Heart Attack size Book")
}

//  practice 6
const temmeprature = 22
if(temmeprature <= 0){
    console.log("Ice")
}else if(temmeprature <= 20){
    console.log("Cool Cool")
}else{
    console.log("Hot Hot")
}

// Practice 7
const playerLeveal = 54
if(playerLeveal < 10){
    console.log("You are novice player")
}else if(playerLeveal < 50){
    console.log("You are Expert player")
}else{
    console.log("You are Pro player")
}