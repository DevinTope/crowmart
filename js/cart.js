window.addEventListener('load', function (event) {
    const cart = JSON.parse(localStorage.getItem('cart') || []);

    if (cart) {
        let total = 0;
        cart.forEach(item => {
            total = total + parseFloat(item.price)
        });
        this.document.getElementById('count').innerHTML = `You have ${cart.length === 1 ? cart.length + " item " : cart.length + " items "} in cart`;
        this.document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
    }
});
