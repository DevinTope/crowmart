const BASE_URL = 'https://api.sandbox.blackcrow.ai';
let url = window.location.pathname;

const pageLoad = function (props) {
    console.log('Calling pageLoad', props)
    let filename = url.substring(url.lastIndexOf('/')+1).split('.')[0];
    let pageDetails = {
        site_name: 'BLACKCROW',
        page_id: filename === 'index' ? 'home' : 'other',   
        page_title: document.title,
        page_url: window.location.href,
        page_referrer_url: document.referrer,
        history_id: 'history_id',
        device_info: '',
        visitor_ip_address: '',
        visitor_id: '',
        member_id: '',
        is_logged_in_user: false,
        user_has_subscription: false,
        store_id: 'crowmart_id',
        referrer_source: '',
        referrer_channel: '',
        referrer_query: '',
        cart: JSON.stringify([]),
        wishlist: JSON.stringify([]),
        wishlist_count: 0,
        items: JSON.stringify([]),
        filters: undefined,
        sort_type: undefined,
        search_query: undefined,
        result_set: undefined,
        categories: undefined,
        shipping_method: undefined,
        shipping_price: undefined,
        zip_code: undefined,
        coupon: undefined,
        total_price: undefined,
        event_id: undefined,
        partner_controlled_experiments: JSON.stringify([]),
    }
    console.log(pageDetails)
}

window.addEventListener('load', function(event) {
    pageLoad(event)

    //initialize cart to empty array if null
    const cart = this.localStorage.getItem('cart');
    if(cart === null){
        this.localStorage.setItem('cart', JSON.stringify([]))
    }

    // initialize session info
    const sessionInfo = this.localStorage.getItem('sessionInfo');
    if(sessionInfo === null){
        this.localStorage.setItem('sessionInfo', JSON.stringify({
            visitor_id: 'testing_vis_id',
            member_id: 'testing_mem_id',

        }))
    }
});
