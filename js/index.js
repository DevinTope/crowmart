const BASE_URL = 'https://api.sandbox.blackcrow.ai/v1/events/view';
let url = window.location.pathname;

function updateSession(newSession) {
    const sessionInfo = JSON.parse(this.localStorage.getItem('sessionInfo'));
    this.localStorage.setItem('sessionInfo', JSON.stringify({
        ...sessionInfo,
        history_id: newSession.history_id,
    }));
}

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function pageLoad() {
    const filename = url.substring(url.lastIndexOf('/') + 1).split('.')[0];
    const cart = JSON.parse(this.localStorage.getItem('cart'));
    const sessionInfo = JSON.parse(this.localStorage.getItem('sessionInfo'));

    let pageDetails = {
        site_name: 'BLACKCROW',
        page_id: filename === 'index' ? 'home' : 'other',
        page_title: document.title,
        page_url: window.location.href,
        page_referrer_url: document.referrer,
        history_id: sessionInfo.history_id || '',
        device_info: navigator.userAgent,
        visitor_ip_address: '',
        visitor_id: sessionInfo.visitor_id || '',
        member_id: sessionInfo.member_id || '',
        is_logged_in_user: false,
        user_has_subscription: false,
        store_id: 'crowmart_id',
        cart: cart,
    }

    postData(BASE_URL, pageDetails).then(data => {
        updateSession({ history_id: data.history_id });
    });
}

window.addEventListener('load', function () {
    //initialize cart to empty array if null
    const cart = this.localStorage.getItem('cart');
    if (cart === null) {
        this.localStorage.setItem('cart', JSON.stringify([]))
    }

    // initialize session info
    const sessionInfo = this.localStorage.getItem('sessionInfo');
    if (sessionInfo === null) {
        this.localStorage.setItem('sessionInfo', JSON.stringify({
            visitor_id: 'testing_vis_id',
            member_id: 'testing_mem_id',
            history_id: '',
        }));
    }

    pageLoad()
});
