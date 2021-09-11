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

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b02afcf-bc8e-436c-859a-e32f7ff081a0/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b02afcf-bc8e-436c-859a-e32f7ff081a0/Untitled.png)

- Tại sao lại không dùng **`map`** có điều kiện mà phải dùng **`filter`**
