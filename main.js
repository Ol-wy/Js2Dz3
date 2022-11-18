let wrap = document.querySelector('.wrapper')
let menu = document.querySelector('.menu')

const getProducts = (category) => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
        .then((res) => res.json())
        .then((res) => {
            res.forEach((item) => {
                menu.innerHTML += `
                    <div class ="card">
                    <img class = "card__img" src = "${item.category.image}" alt = ""/>
                    <h2 class = "card__title">${item.title}</h2>
                    <p class ="card__subtitle">${item.description}</p>
                    <p class ="card__price">цена: ${item.price}</p>
                 
                `
            })
        })
}

getProducts()