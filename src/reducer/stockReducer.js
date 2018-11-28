const initialState = {
  stocks: [],
  selectedStock: {}
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STOCKS": {
      return { ...state, stocks: action.stocks };
    }
    case "SELECT_STOCK": {
      
      return {...state, selectedStock: action.payload}
    }
    default:
      return state;
  }
};

export default stockReducer;
