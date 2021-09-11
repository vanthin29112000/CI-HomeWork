Lecture 02 -  Prepare before getting into ReactJS world
link notion : https://verbose-case-539.notion.site/Lecture-02-Prepare-before-getting-into-ReactJS-world-e76ce3292c0c410d9e2ac010da1aa47a

## Timeline

- Homework review
- Asynchronous Programming: Callback, Promise, Async/Await.
- Class
- Lab

---

### What is callback?

 `callback` = `call` + `back` ⇒ "I will call back later"

- A callback is a function `passed as an argument` to another function
- This technique allows a `function to call another function`
- A callback function can `run after another function has finished`

```jsx
function introduceMySelf(param) {
  if (typeof param === "function") {
    param("Hung");
  }
}

function greeting(name) {
  console.log("Hello my name is", name);
}

introduceMySelf(greeting);
```

- Synchronous/Asynchronous

```jsx
console.log(1);

setTimeout(() => {
	console.log(2);
}, 0);

console.log(3);

/*
	Output: 1 -> 2 -> 3
  Output: 1 -> 3 -> 2 ??? Why => Callstack, event quece
*/
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2aab2934-0976-47ae-a36f-1ac8a5581338/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2aab2934-0976-47ae-a36f-1ac8a5581338/Untitled.png)

- Asynchronous function: **`setTimeout`**, **`setInterval`**, **`fetch`**, **`I/O: read/write file`** , ....
- OPTIONALS (read more): the deep inside of event loop
    - Macro tasks: `setTimeout, setInterval,IO, UI Rendering ...`
    - Micro tasks: `Promise, process.nextTick,...`

    ⇒ Micro tasks will be executed before macro tasks

```jsx
console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);
Promise.resolve().then(() => console.log(3));

console.log(4);

//Output: 1 -> 4 -> 3 -> 2 ???? Why
```

### Callback hell

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/92d79f74-7c3d-449d-9c08-5bc134a15835/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/92d79f74-7c3d-449d-9c08-5bc134a15835/Untitled.png)

### What is Promise?

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 😱😱😱😱 😭

**Ok, let's move to the real example:**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb24e7b5-46a9-4e93-ac95-faad7cf1a87c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eb24e7b5-46a9-4e93-ac95-faad7cf1a87c/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78281906-003f-4aac-bb19-6e2f705b47dc/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/78281906-003f-4aac-bb19-6e2f705b47dc/Untitled.png)

**State of Promise:**

- Pending
- Fulfilled: ⇒ resolve()
- Rejected ⇒ reject()

```jsx
const promise = new Promise(
  //Executor function
  function (resolve, reject) {
    //Login to handle async event

    // Success => resolve()
    resolve([
      {
        id: 1,
        name: "Learn Frontend Web",
      },
    ]);

    // Failure => reject()
    reject("Bad connection");
  }
);

// Promise chain
promise
  .then(function (courses) {
    const result = courses.map((course) => {
      return {
        ...course,
        courseName: `Khoa hoc: ${course.name}`,
      };
    });
    return result;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("Failure:", error);
  })
  .finally(function () {
    console.log("Done!");
  });
```

### What is async/await?

```jsx
const fetchAllCourse = () => {
  return new Promise(function (resolve, reject) {
    resolve([
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Angular",
      },
    ]);
  });
};

const renderCourse = async () => {
  const data = await fetchAllCourse();
  console.log(data);
};

renderCourse();
```

---

### Call api with fetch

```jsx
const url="https://www.themealdb.com/api/json/v1/1/random.php"
// Soluiton 1
const getData=()=>{
		fetch(url).then((data)=>{
				// Logic when call API successfully
				return data.json();
			
		}).then((data)=>{
				console.log(data)
		})
		.catch((error)=>{
					// Logic when call API fail

		})
}

//Solution 2
const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw error;
  }
};
```

---

## OOP  Object  Oriented Programming

Some terms:

- **`class`:** are user-defined data types that act as the blueprint for individual objects, attributes and methods.
- **`object`:** are instances of a class created with specifically defined data. Objects can correspond to real-world objects or an abstract entity. When class is defined initially, the description is the only object that is defined.
- **`method`:** are functions that are defined inside a class that describe the behaviors of an object. Each method contained in class definitions starts with a reference to an instance object. Additionally, the subroutines contained in an object are called instance methods. Programmers use methods for reusability or keeping functionality encapsulated inside one object at a time.
- **`attribute`:** are defined in the class template and represent the state of an object. Objects will have data stored in the attributes field. Class attributes belong to the class itself.

```jsx
//Javascript prototype
//ES5: Create an object - Constructor function
function Course(name, price){
	 this.name= name;
   this.price= price;
   this.showCourseInformation= function(){
			console.log(`Course name: ${this.name} - Price: ${this.price}`);
	}
}

//ES6: 2015
class Course{

	constructor(name, price){
			this.name= name;
			this.price= price;
	}

	showCourseInformation(){
			console.log( `Course name: ${this.name} - Price: ${this.price}`);
	}

}

const jsCourse = new Course("JS", 20);
const phpCourse =new  Course("PHP", 40);
phpCourse.showCourseInformation();

```

**4 main principles of OOP**

- Inheritance (Tính kế thừa)
- Abstraction (Tính trừu tượng)
- Polymorphism (Tính đa hình)
- Encapsulation (Tính đóng gói)

### Bài Tập
### Problem 1 Reverse number

Implement **`a Javascript function`** that satisfies the following requirement:

- Input: the Integer number
- Output: the reverse of input number

Notes:

- Input number cannot be converted to string
- Must be handled by mathematical operators

```jsx
Example 1:
  Input: 123
  Output: 321

Example 2:
  Input: -123
  Output: -321

Example 3:
	Input: 1111
  Output: 1111

Example 4:
	Input: 0
  Output: 0
```

```jsx
/*
  num= -315
  => baseNum=315
  
  Loop:
    reminder = 5 (chia lấy dư 315 cho 10)
    baseNum= 31 (chia lấy nguyên 315 cho 10)
    reverseNum = 0 * 10 + 5 =5

    reminder = 1
    baseNum= 3
    reverseNum = 5 * 10 + 1 = 51

    reminder = 3 
    baseNum= 0
    reverseNum = 51 * 10 + 3 = 513

    => baseNum = 0 => Stop loop

	  Nếu 
		+ num < 0 (số âm) => return reverseNum * (-1)
    + num > 0 =>  return reverseNum 
*/

function reverseNumber(num) {
  let reverseNum = 0;
  let baseNum = Math.abs(num);

  while (baseNum > 0) {
    let remainder = baseNum % 10;
    baseNum = Math.floor(baseNum / 10); 
    reverseNum = reverseNum * 10 + remainder;
  }

  return num > 0 ? reverseNum : reverseNum * (-1);
}
```

### Problem 2: Roman number to Integer number

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

```jsx
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, `2` is written as `II` in Roman numeral, just two one's added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

**Example 1:**

```jsx
Input: s = "III"
Output: 3
```

Example 2:

```jsx
Input: s = "IV"
Output: 4
```

Example 3:

```jsx
Input: s = "IX"
Output: 9
```

Example 4

```jsx
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

Example 5

```jsx
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

```jsx

function romanToInt(str) {
  const keys = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    if (keys[str[i]] < keys[str[i + 1]]) {
      total += keys[str[i + 1]] - keys[str[i]];
      i++;
    } else {
			total += keys[str[i]];
		}
  }

  return total;
}
```

---

### Problem 3

Build a website that satisfies the following requirements:

- Link demo: [https://mindx-ecommerce.netlify.app/](https://mindx-ecommerce.netlify.app/)
- API to fetch all products: [https://60ae0d5e80a61f00173324bc.mockapi.io/products](https://60ae0d5e80a61f00173324bc.mockapi.io/products)
- Freedom to create animation
- Recommend to make your website responsive: PC, Tablet, Mobile
