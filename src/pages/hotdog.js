const content = document.querySelector('#content')

export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
];

export const renderToppings = () => {

    toppings.forEach((topping) => {
        content.innerHTML += `
        <div class='topping'>
        <h3>${topping.name}</h3>
        <p>${topping.price}Kč</p>
        </div>`
    })

    const classTopping = document.querySelectorAll('.topping')

    classTopping.forEach((topping, index) => {
        topping.addEventListener("click", () => {

            topping.classList.toggle("topping--selected")
            toggleTopping(index)

        })
    })
}

export const toggleTopping = (index) => {

    toppings[index].selected === true ? toppings[index].selected = false : toppings[index].selected = true
}