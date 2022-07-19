//1)
// let data = [
//     ["The","red", "horse"],
//     ["Plane","over","the","ocean"],
//     ["Chocolate","ice","cream","is","awesome"],
//     ["this","is","a","long","sentence"]
//   ]

//   let result=[]
//   function groupeWords(array) {
//      array.map(arr=>{result.push(arr.join())})
//   }
//   groupeWords(data)
//   console.log(result)

//2)
// function Calculator() {
//   return (this.calc = function (a, b, operator) {
//     switch (operator) {
//       case "+": {
//         return a + b;
//       }

//       case "-": {
//         return a - b;
//       }

//       case "*": {
//         return a * b;
//       }

//       case "/": {
//         return a / b;
//       }
//     }
//   });
// }

// let calc = new Calculator();
// console.log(calc(1, 2, "*"));

//3)
// let dupes = [1,2,3,'a','a','f',3,4,2,'d','d'];
// function removeDups(arr) {
//     let obj={}
//     arr.map(el=>obj[el]=0)
//     arr=Object.keys(obj)
//     arr=arr.map(el=>{
//         if(el.charCodeAt(0)>=48 && el.charCodeAt(0)<=57){
//            return Number(el)
//         }
//         return el
//     })
//     return arr
// };
// console.log(removeDups(dupes))

//4
// let arr = [
//     {name: 'Alice', job: 'Data Analyst', country: 'AU'},
//     {name: 'Bob', job: 'Pilot', country: 'US'},
//     {name: 'Lewis', job: 'Pilot', country: 'US'},
//     {name: 'Karen', job: 'Software Eng', country: 'CA'},
//     {name: 'Jona', job: 'Painter', country: 'CA'},
//     {name: 'Jeremy', job: 'Artist', country: 'SP'},
//   ];

//   function groupe(arr, prop) {
//     let obj={}
//     arr.map(item=>{
//         obj[item[prop]]=arr.filter(el=>el[prop]==item[prop])
//     })
//     return obj;
// }
// console.log(groupe(arr,'country'))

//5

// let s ='i.like.this.program.very.much'
// s=s.split('.')
// s.reverse()
// s=s.join('.')
// console.log(s)
