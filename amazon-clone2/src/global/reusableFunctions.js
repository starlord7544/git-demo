export function addToCart(productToAdd, currentCart, updateCart) {
  let product = currentCart.find(
    (item) => item.product_id === productToAdd.product_id
  ) || { ...productToAdd, quantity: 0 };
  product.quantity += 1;
  product.selected = true;
  updateCart(
    currentCart.map((item) =>
      item.product_id != product.product_id ? item : product
    )
  );
}

export function removeFromCart(productToRemove, currentCart, updateCart) {
  let product = currentCart.find(
    (item) => item.product_id === productToRemove.product_id
  );
  if (product.quantity > 1) {
    product.quantity -= 1;
    updateCart(cart);
  } else
    updateCart(cart.filter((item) => item.product_id != product.product_id));
}

export function changeCartSelection(product, currentCart, updateCart) {
  console.log(product, "Toggle");
  product.selected = !product.selected;
  updateCart(
    currentCart.map((item) =>
      item.product_id != product.product_id ? item : product
    )
  );
}
