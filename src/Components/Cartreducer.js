import {
  SHOW_HIDE_CART,
  ADD_TO_CART,
  REMOVE_ITEM,
  increment,
  decrement,
  emptyCart,
  checkedlogin,
  logout,
  SAVE_ORDER,
  CANCEL_ORDER,
} from "./Carttype";

const cartreducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      if (state.cartItems.length === 0) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      } else {
        let obj = state.cartItems.filter(
          (item) => item.id === action.payload.id
        );

        if (obj.length === 1) {
          return {
            ...state,
            cartItems: [...state.cartItems],
          };
        } else {
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
        }
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    case increment: {
      console.log(action.payload, "sss");
      let updatedcart = state.cartItems.map((curElem) => {
        console.log(curElem);
        if (curElem.id === action.payload) {
          return {
            ...curElem,
            quantity: curElem.quantity + 1,
            totalPrice: (curElem.quantity + 1) * Number(curElem.price),
          };
        }
        return curElem;
      });

      return {
        ...state,
        cartItems: updatedcart,
      };
    }

    case decrement: {
      let updatedcart = state.cartItems
        .map((curElem) => {
          console.log(curElem);

          if (curElem.id === action.payload) {
            return {
              ...curElem,
              quantity: curElem.quantity - 1,

              totalPrice: (curElem.quantity - 1) * Number(curElem.price),
            };
          }
          return curElem;
        })
        .filter((item) => {
          if (item.quantity !== 0) {
            return item;
          }
        });

      return {
        ...state,
        cartItems: updatedcart,
      };
    }

    case emptyCart: {
      return {
        ...state,
        cartItems: [],
      };
    }

    case checkedlogin: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case logout: {
      return {
        ...state,
        user: null,
      };
    }

    case SAVE_ORDER: {
      return {
        ...state,
        Order: action.payload,
      };
    }

    case CANCEL_ORDER: {
      return {
        ...state,
        Order: [...state.Order, action.payload],
      };
    }
  }
};
export default cartreducer;
