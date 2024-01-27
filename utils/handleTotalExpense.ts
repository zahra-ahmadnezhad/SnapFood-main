export const handleTotalExpense = (cart: []) => {
    console.log(cart)
    return cart.reduce((init, item: any) => init + (item.price * item.count), 0)
}