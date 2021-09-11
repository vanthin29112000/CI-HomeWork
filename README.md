Lecture 02 -  Prepare before getting into ReactJS world

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
