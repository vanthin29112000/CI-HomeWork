const productContainer = document.querySelector(".product__container");

const fetchAPI = async ()=> {
        const url = "https://60ae0d5e80a61f00173324bc.mockapi.io/products";
        const reponse = await fetch(url);
        const dataTemp = await reponse.json();
        const data = dataTemp.map((ele)=>{
            return {
                ...ele,
                image : ele.image || "https://lh3.googleusercontent.com/9t4ddHZRUlpZWJqdzDcMKDu95AN-2mUuZ0NtFwjTZrbxmvutQP0c6uJsQN4H0kHmXPB4NxRnEtSO1_vfATHwBHrrCVkq-3EV9Q=w500-rw",
                color : ele.color ?? 0
            }
        })
        console.log(data);
        addItemProduct(data);
}

fetchAPI();

const addItemProduct = (arr)=>{
    arr.forEach(element => {
        const {color , errorDescription, id, image, name, sku} = element;
        productContainer.innerHTML += `
        <div class="product">
            <img src="${image}" alt="">
            <ul class="product__info">
                <li class="name__product">${name}</li>
                <li class="error__product"><p>Error :</p>${errorDescription} </li>
                <li class="sku__product"><p>SKU :</p> ${sku}</li>
                <li class="id_product"><p>ID :</p> ${id}</li>
                <li class="color_product"><p>Color :</p> ${color}</li>
            </ul>
        </div>`;
    });
}