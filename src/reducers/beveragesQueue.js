//Beverages queue reducer

const beveragesQueueDefaultState = []

export default (state = beveragesQueueDefaultState, action) => {
  switch (action.type) {
    //add beverage to the queue
    case 'ADD_BEVERAGE':
      console.log('beverage added', action.beverage)
      return [
        ...state,
        action.beverage
      ];

    //update the status of order
    case 'EDIT_ORDER':
      return state.map((beverage) => {
        console.log('beveragenot edited', beverage)
        if (beverage.OrderCreatedTimeStamp === action.id) {
          console.log('beverage edited', beverage)
          return {
            ...beverage,
            ...action.updates
          };
        } else {
          return beverage;
        };
      });
    default:
      return state;
  }
};
