export const reducer = (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((curEle) => {
                return curEle.id !== action.payload;
            })
        }
    }

    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            item: [],
        };
    };

    if (action.type === "INCREMENT") {
        const updatedCart = state.item.map((curElem) => {
            if (curElem.id === action.payload) {
                return { ...curElem, quantity: curElem.quantity + 1 };
            };
            return curElem;
        });
        return { ...state, item: updatedCart };
    };

    if (action.type === "DECREMENT") {
        const updatedCart = state.item.map((curElemnt) => {
            if (curElemnt.id === action.payload) {
                return { ...curElemnt, quantity: curElemnt.quantity - 1 };
            };
            return curElemnt;
        }).filter((curElemnt) => curElemnt.quantity !== 0);
        return { ...state, item: updatedCart };
    };

    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
          (accum, curVal) => {
            let { price, quantity } = curVal;
    
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;
    
            accum.totalItem += quantity;
            return accum;
          },
          {
            totalItem: 0,
            totalAmount: 0,
          }
        );
        return { ...state, totalItem, totalAmount };
      }

    return state;
};