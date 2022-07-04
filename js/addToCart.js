function addToCart(event){
    const cart = JSON.parse(localStorage.getItem('cart') || []);
    let itemGroup = event.path[1];
    if(itemGroup){
        let item = {
            name: itemGroup.querySelector('h4').innerHTML,
            price: itemGroup.querySelector('h5').innerHTML,
        };
        localStorage.setItem('cart', JSON.stringify([...cart, item]))
    }
}

window.addEventListener('load', function(event) {
    const addToCartButtons = document.querySelectorAll('button.button-primary');
    addToCartButtons.forEach(element => {
        element.addEventListener('click', event => {
            addToCart(event);
        })
    });
});
