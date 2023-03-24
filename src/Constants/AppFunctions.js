const onAdd = ( product, formatPrice, cartItems, setCartItems) => {
  const exists = cartItems.find((item) => item === product);

  if (exists) {
    setCartItems(
      cartItems.map((item) =>
        item === product
          ? {
              ...exists,
              quantity: exists.quantity + 1,
            }
          : item
      )
    );
  } else {
    setCartItems((previousCartItems) => {
      return [
        ...previousCartItems,
        { ...product, quantity: 1, formatPrice: formatPrice },
      ];
    });
  }
};

const onRemove = (product, cartItems, setCartItems) => {
  const exists = cartItems.find((item) => item === product);
  if (exists.quantity === 1) {
    onDelete(product);
  } else {
    setCartItems(
      cartItems.map((item) =>
        item === product
          ? {
              ...exists,
              quantity: exists.quantity - 1,
            }
          : item
      )
    );
  }
};

const onDelete = (product, setCartItems) => {
  setCartItems((previousCartItems) => {
    return previousCartItems.filter((item) => item !== product);
  });
};

const emptyCart = (setCartItems) => {
  setCartItems([]);
};

export { onAdd, onRemove, onDelete, emptyCart };