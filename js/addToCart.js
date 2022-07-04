function addToCart(event) {
    const cart = JSON.parse(localStorage.getItem('cart') || []);
    let itemGroup = event.path[1];
    if (itemGroup) {
        let item = {
            id: itemGroup.querySelector('h4').innerHTML,
            price: parseFloat(itemGroup.querySelector('h5').innerHTML.replace('$', '')).toFixed(2),
        };
        localStorage.setItem('cart', JSON.stringify([...cart, item]))
    }
}

window.addEventListener('load', function (event) {
    const addToCartButtons = document.querySelectorAll('button.button-primary');
    addToCartButtons.forEach(element => {
        element.addEventListener('click', event => {
            addToCart(event);
        })
    });
});
