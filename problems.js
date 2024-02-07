//  first problem solved **********************

// function calculateMoney(number){
//         const waste = 500 + 8*50;
//         if(number<0){
//                 return "Invalid Number";
//         }

//         const earning = number * 120 - waste;
//         return earning;
// }

// *******************************************

//second problem starts ************************************

// function checkName(str) {
//   // let words = str.split("");
//   let lw = str[str.length - 1];
//   if (typeof str !== "string") {
//         return "invalid";
//       }
//   if (
//     lw == "a" ||
//     lw == "y" ||
//     lw == "i" ||
//     lw == "e" ||
//     lw == "o" ||
//     lw == "u" ||
//     lw == "w" ||
//     lw == "a" ||
//     lw == "Y" ||
//     lw == "I" ||
//     lw == "E" ||
//     lw == "O" ||
//     lw == "U" ||
//     lw == "W"
//   ) {
//     return "Good Name";
//   } else {
//     return "Bad Name";
//   }
// }

// second problem ends*********************




//  third problem starts *******************

// 


// function deleteInvalids(arr) {
//   if (!Array.isArray(arr)) {
//     return "Invalid Array";
//   }
//   const numbers = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && !isNaN(arr[i])) {
//       numbers.push(arr[i]);
//     }
//   }

//   return numbers;
// }
// // third problem ends ******************

// const mixedArray = {num:[1,2,3]};
// const numbers = deleteInvalids(mixedArray);
// console.log(numbers);



//  fourth problem starts***********************




// function password(obj){
//         const siteName = obj.siteName.charAt(0).toUpperCase()+obj.siteName.slice(1) ;
//         const birthYear = obj.birthYear;
//         const name = obj.name;
//         if(!siteName || !birthYear || !name || birthYear<1000 || birthYear>9999 ){
//                 return "invalid";
//         }
//         const str = siteName+"#"+name+"@"+birthYear;
//         return str;
// }
// console.log(password({siteName:"google", birthYear:199,name:"kolimuddin"}));

// fourth problem ends here **********************


// fifth problem starts from here *******************

// function monthlySavings(arr,livingCost){
//         if(!Array.isArray(arr) || typeof livingCost !== "number"){
//                 return "invalid input";
//         }
//         let totalEarning = 0;
//         for(let i of arr){
//                 if(i>=3000){
//                 totalEarning += i*0.8;
//                 }
//                 else
//                 {
//                         totalEarning = totalEarning+i;
//                 }
//         }
//                const saving = totalEarning -livingCost;
//                if(saving<0){
//                 return "earn more"
//         }
//                 return saving;
// }
//       const totalSum = monthlySavings([900,2700,3400],10000);
//       console.log(totalSum);


// fifth problem ends here **************************