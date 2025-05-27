// Problem solving  1   Page - 119
for(let i = 20;i<= 50;i++){
    if(i % 7 == 0){
        console.log(i)
    }
}
// Problem solving  2
for(let i = 40;i<= 80;i++){
    if(i % 7 == 0 || i% 5){
        console.log("Use Or Oparetor",i)
    }
}
// Problem solving  3
for(let i = 1;i<= 50;i= i+4){
   console.log(i)
}
// Problem solving  4
let count = 0;
for(let i = 1;i<= 50;i++){
   if(i % 3 == 0 || i% 4){
        count = i + count
    }
}
console.log("Divisible Total",count)