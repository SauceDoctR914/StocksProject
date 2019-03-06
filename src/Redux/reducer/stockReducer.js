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
      return { ...state, selectedStock: action.payload };
    }
    case "GET_SECTORDATA": {
      return { ...state, sectorData: action.payoad };
    }
    default:
      return state;
  }
};

export default stockReducer;
