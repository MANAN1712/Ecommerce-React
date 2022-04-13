import { useReducer } from "react";
import Cartcontext from "./Cartcontext";
import Cartreducer from "./Cartreducer";
import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  checkedlogin,
  logout,
  SAVE_ORDER,
  CANCEL_ORDER,
} from "./Carttype";

const Cartstate = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    user: null,
    Order: [],
  };

  const [state, dispatch] = useReducer(Cartreducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const increment = (item) => {
    return dispatch({ type: "increment", payload: item });
  };

  const decrement = (item) => {
    return dispatch({ type: "decrement", payload: item });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const emptyCart = () => {
    dispatch({
      type: "EMPTY_CART",
    });
  };

  const userLogin = (obj) => {
    dispatch({ type: checkedlogin, payload: obj });
  };

  const userLogout = () => {
    dispatch({ type: logout });
  };

  const cancelorder = (id) => {
    dispatch({ type: CANCEL_ORDER, payload: id });
  };

  const saveorder = (fetchResults) => {
    dispatch({ type: SAVE_ORDER, payload: fetchResults });
  };
  return (
    <Cartcontext.Provider
      value={{
        cartItems: state.cartItems,
        ...state,
        addToCart,
        showHideCart,
        removeItem,
        increment,
        decrement,
        emptyCart,
        userLogin,
        userLogout,
        cancelorder,
        saveorder,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
};
export default Cartstate;
