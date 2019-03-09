const initialState = {
  stocks: [],
  selectedStock: {},
  sectorData: []
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
      return { ...state, sectorData: action.sectorData };
    }
    default:
      return state;
  }
};

export default stockReducer;
