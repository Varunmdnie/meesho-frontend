
export let AddToCart = (item) =>({
    payload:item,
    type:"ADD_TO_CART"
})

export let RemoveFromCart = (item) => ({
    payload:item,
    type:"REMOVE_FROM_CART"
})

export let IncrementCartCounter = () => ({
    type:"INCREMENT_CART_COUNTER"
})

export let DecrementCartCounter = () => ({
    type:"DECREMENT_CART_COUNTER"
})