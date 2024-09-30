import cartTmpl from './cartTmpl.hbs'
import {products} from './cart'

const cartMarkup = cartTmpl(products)
const listRef = document.querySelector('.list')

console.log(cartMarkup);

listRef.insertAdjacentHTML('beforeend', cartMarkup)