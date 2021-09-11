
// -------Problem 01------
const users = [
	{name: "Angelina Jolie",  age: 8},
	{name: "Eric Jones",  age: 2},
	{name: "Paris Hilton",  age: 5},
	{name: "Kayne West", age: 16},
	{ name: "Bob Ziroll", age: 100}
]

const resultProblem1 = users.map((ele)=>`<div><h1>${ele.name}</h1><h2>${ele.age}</h2></div>`)
console.log(resultProblem1);

// -------Problem 02------
const students = [
	{ name: 'Lan', gender: 'female' },
	{ name: 'Linh', gender: 'female' },
	{ name: 'Trung', gender: 'male' },
	{ name: 'Peter', gender: 'gay' }
];

const resProblem2 = students.filter((ele)=> ele.gender != "female");
console.log(resProblem2);

// -------Problem 03------

const strs = ["eat","tea","tan","ate","nat","bat"];
const strs1 = [""];
const strs2 = ["a"];

const resProblem3 = (arr) =>{
    let tempArray = [];
    arr.forEach((ele)=>{
        let temp = ele.split("").sort().join("");
        console.log(temp);
        if(!tempArray.hasOwnProperty(temp)){
          tempArray[temp] = [];
          tempArray[temp].push(ele);
        }
        else{
          tempArray[temp].push(ele);
        }
    })
    console.log(Object.values(tempArray));
};

resProblem3(strs);
resProblem3(strs1);
resProblem3(strs2);

// -------Problem 04------

var nums = [2,2,1,3];
var nums1 = [4,1,2,1,2];
var nums2 = [];

const resProblem4 = (arr)=>{
    const number = [];
    let count = [];
    arr.forEach((ele)=>{
        if(!number.includes(ele))
        {
            number.push(ele);
            count.push(1);
        }
        else{
            count[(number.indexOf(ele))]++;
        }
    })
    // for(let i= 0;i<count.length; i++){
    //     if(count[i] == 1){
    //         console.log(number[i]);
    //     }
    // }
    console.log(number[count.indexOf(1)]);
}

console.log("=======");
resProblem4(nums);
console.log("=======");
resProblem4(nums1);
resProblem4(nums2);

// let person = 'Mike';
// let age = 28;

// function myTag(strings, personExp, ageExp) {
//   let str0 = strings[0]; // "That "
//   let str1 = strings[1]; // " is a "
//   let str2 = strings[2]; // "."

//   let ageStr;
//   if (ageExp > 99){
//     ageStr = 'centenarian';
//   } else {
//     ageStr = 'youngster';
//   }

//   // We can even return a string built using a template literal
//   return `${str0}${personExp}${str1}${ageStr}${str2}`;
// }

// let output = myTag`That is a ${ person } ${ age }.`;

// console.log(output);
// // That Mike is a youngster..

// function template(strings, ...keys) {
//     return (function(...values) {
//       let dict = values[values.length - 1] || {};
//       let result = [strings[0]];
//       console.log(dict)
//       keys.forEach(function(key, i) {
//         let value = Number.isInteger(key) ? values[key] : dict[key];
//         result.push(value, strings[i + 1]);
//         console.log("res",result);
//       });
//       console.log(result.join());
//       return result.join('');
//     });
//   }
  
//   let t1Closure = template`${0}${1}${0}!`;
//   //let t1Closure = template(["","","","!"],0,1,0);
//   console.log(t1Closure('Y', 'A')); 

//   function dispatch (s) {
//       fn();
//   }
  
//   //Cách 1: khai báo một function để làm tham số.
//   var fn = () => { console.log( "Hello !"); }
//   // gọi function dispatch()
//   dispatch();

//   function tag(strings) {
//     console.log(strings);
//   }
  
//   let str = String.raw`Hi\n${2+3}!`;
//   console.log(str);

//   function f1()
// {
//     var N = 0; // N luon duoc khoi tao khoi ham f1 dduowcj thuc thi
//     console.log(N);
//     function f2() // Ham f2
//     {
//         N += 1; // cong don cho bien N
//         console.log('-->>',N);
//     }

//     return f2;
// }

// var result = f1();
// result();
// result();
// result();
