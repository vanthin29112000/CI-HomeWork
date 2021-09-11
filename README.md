## Lab

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/709267ed-e028-4f07-93c6-9858fdcce52c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/709267ed-e028-4f07-93c6-9858fdcce52c/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed6ef2e8-95fd-4863-abff-aeeec2f9e6a3/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed6ef2e8-95fd-4863-abff-aeeec2f9e6a3/Untitled.png)

## Ôn tập JS core

### Bài 1 Humanize Format

Hãy giúp chúng tôi thiết lập một Function Javascript sao cho: dữ liệu nhận vào là một **`number` và dữ liệu đầu ra là một chuỗi thõa mãn yêu cầu sau:**

1 ⇒ "1st"

32 ⇒ "32nd"

208 ⇒ "208th"

403 ⇒ "403rd"

```jsx

// st: 1
// nd: 2
// rd: 3
// 4,5,6,7,8,8 : th
//Input: Number
//Outout: String 
function humanizeFormat(num){
	

}
```

### Bài 2 Repeat String

Viết hàm Javascript thõa mãn yêu cầu sau.

Hàm sẽ nhận 2 tham số đầu vào: chuỗi **`str`** cần repeat và count là số lần `**repeat**`

```jsx

repeatString('Ha!',3) → 'Ha!Ha!Ha!'
Ha!Ha!Ha!
repeatString('VietNam',4) → 'VietNamVietNamVietNamVietNam'
repeatString('Javascript',1) → 'Javascript'

function repeatString(str, count){
		

}
```

### Bài 3

Xóa các phần tử trùng trong mảng một chiều

```jsx
// input = [9, 9, 9, 0, 0, 0, 44, 44, 9, 9, 555, 0, 555];
// output = [9, 0, 44, 555];

{
	9: 9,
	0: 0,
  44: 44,
	555: 555
}
//Solution
res=[9,9]

```

## Sự khác nhau giữa let, var và const

### Arrow function

- Mục đích cơ bản
    - Viết function ngắn gọn hơn
    - Arrow function không có context undefine
    - Không thể dùng arrow function là constructor function

```jsx
//deceleration
function logger(log){
	console.log(log);
}
	
//expression funciton
const logger= function(log){
	console.log(log)
}

//Arrow function
const logger = (log) =>{
	console.log(log)

}

const sum = (a,b)=>{
	return a+b;
}

const sum=(a,b)=> a+b;
```

### Map, filter, reduce

- map:

```jsx
let courses=[
	{
			id: 1,
      name : "javascript co ban 1",
			price: 10
	},
	{
				id: 2,
	      name : "javascript co ban 2",
				price: 20
	},
	{
				id: 3,
	      name : "javascript co ban 3",
				price: 30
	},
	{
			id: 4,
      name : "javascript co ban 4",
			price: 40
	},
	{
			id: 5,
      name : "javascript co ban 5",
			price: 50
	}
]
```

- filter

- Tại sao lại không dùng **`map`** có điều kiện mà phải dùng **`filter`**

### Bài Tập

### Problem 01

Write a function that takes an array of users that satisfy the following requirement. Use array map make an array of the names in <h1></h1> and the ages in <h2></h2>.

```jsx
Input: const users = [
	{name: "Angelina Jolie",  age: 8},
	{name: "Eric Jones",  age: 2},
	{name: "Paris Hilton",  age: 5},
	{name: "Kayne West", age: 16},
	{ name: "Bob Ziroll", age: 100}
]

Output: result = [
  “<div><h1>Angelina Jolie</h1><h2>8</h2></div>”,
  “<div><h1>Eric Jonies</h1><h2>2</h2></div>”
  ..... and more
]

//Solution
function bai1(arr = []) {
  let res = arr.map((user) => {
    return `<div><h1>${user.name}</h1><h2>${user.age}</h2></div>`;
  });
  return res;
}
// console.log(bai1(users));

```

### Problem 2

Write a function that takes an array of students that satisfy the following requirement. 

- Filter out non-female:

```jsx
//Input:  
const students = [
	{ name: 'Lan', gender: 'female' },
	{ name: 'Linh', gender: 'female' },
	{ name: 'Trung', gender: 'male' },
	{ name: 'Peter', gender: 'other' }
];

//Output: 
[
 { name: 'Trung', gender: 'male' },
 { name: 'Peter', gender: 'other' }
]

// Solution
function bai2(arr = []) {
  return arr.filter((item) => item.gender !== "female");
}

```

### Problem 3

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by re-arranging the letters of a different word or phrase, typically using all the original letters exactly once.

```jsx
//Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//Example 2:
Input: strs = [""]
Output: [[""]]

//Example 3:
Input: strs = ["a"]
Output: [["a"]]

// Solution
const sortStr = (str) => {
  let newStr = str.split("").sort();
  let resut = "";
  for (let i = 0; i < newStr.length; i++) {
    resut += newStr[i];
  }
  return resut;
};

function anagrams(list = []) {
  if (list.length == 1) return [[list[0]]];
  let memoization = {};
  for (let i = 0; i < list.length; i++) {
    let temp = sortStr(list[i]);
    if (temp in memoization) {
      memoization[temp].push(list[i]);
    } else {
      memoization[temp] = [list[i]];
    }
  }
  // let result = [];
  // for (let key in memoization) {
  //   result.push(memoization[key]);
  // }
  // console.log(result);
  return Object.values(memoization);
}
	// console.log(anagrams(strs));
```

### Problem 4

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

```jsx
//Example 1:
Input: nums = [2,2,1]
Output: 1

//Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

//Example 3:
Input: nums = [1]
Output: 1

//Solution1 
function bai4(arr = []) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (key in obj) {
      obj[key] = obj[key] + 1;
    } else {
      obj[key] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] == 1) return key;
  }

  // if (arr.length == 1) {
  //   return arr[0];
  // }
  // let res = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   res = res ^ arr[i];
  // }
  // return res;
}

//Solution 2
function bai4(arr = []) {
   if (arr.length == 1) {
	    return arr[0];
		 }
		 let res = arr[0];
		 for (let i = 1; i < arr.length; i++) {
	    res = res ^ arr[i];
	  }
	  
	return res;
}

console.log(bai4(nums));
```
