import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  //find if item is in existing cart items
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);
 
  if(existingCartItem) {
    //if cart item to add matches an item arleady in the cart increment count by 1 else add item
    return cartItems.map((cartItem) => 
      cartItem.id === itemToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1} :
         cartItem);
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);

  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) => 
      cartItem.id === itemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1} :
         cartItem);
 
}

const deleteCartItem = (cartItems, itemToDelete) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToDelete.id);

  if (existingCartItem) {
    return cartItems.filter(cartItem => cartItem.id !== itemToDelete.id);
  }
}

export const CartContext = createContext({

  cartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  setCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart: () => {}

});

export const CartProvider = ({children}) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd));
  }

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  }

  const deleteItemFromCart = (itemToDelete) => {
    setCartItems(deleteCartItem(cartItems, itemToDelete));
  }

  //Updates current item count in cart
  useEffect(() => {
    const updatedCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(updatedCartCount);
  }, [cartItems])

  //Updates total value of items in cart
  useEffect(() => {
    const updatedCartTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    setCartTotal(updatedCartTotal);
  }, [cartItems])

  const value = { 
    cartOpen,
    setCartOpen,
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    cartItems,
    cartCount,
    cartTotal 
  };

  return <CartContext.Provider value={value} >{children}</CartContext.Provider>
}