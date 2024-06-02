import { reactive } from 'vue'

export const store = reactive({
    cart: [],

    addToCart(product) {
        const existingProduct = this.cart.find(item => item.title === product.title);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            this.cart.push({ ...product, quantity: 1})
        }
    },

    removeFromCart(product) {
        const index = this.cart.find(item => item.title === product.title);
        if (index !== -1) {
            this.cart.splice(index, 1)
        }
    },

    increaseQuantity(product) {
        const existingProduct = this.cart.find(item => item.title === product.title) 
        if (existingProduct) {
            existingProduct.quantity++
        }
    },

    decreaseQuantity(product) {
        const existingProduct = this.cart.find(item => item.title === product.title)
        if(existingProduct && existingProduct.quantity > 1) {
            existingProduct.quantity--
        }
    },

});