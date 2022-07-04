window.addEventListener('load', function(event) {
    const cart = JSON.parse(localStorage.getItem('cart') || []);

    if(cart){
        let total = 0;
        cart.forEach(item => {
            let itemTotal = parseFloat(item.price.replace('$', ''))
            total = total + itemTotal
        });
        this.document.getElementById('count').innerHTML = "You have " + cart.length + " items in cart";
        this.document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
    }
});
