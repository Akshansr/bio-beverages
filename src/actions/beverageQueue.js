//ADD BEVERAGE TO QUEUE
export const addBeverage = (
  {

    OrderCreatedTimeStamp = '',
    BeverageBarOrderId = '',
    OrderedBeverage = {
      BeverageId: '',
      Name: ''
    },
    OrderQuantity = 0,
    IsBeingMixed = false,
    IsReadyToCollect = false,
    IsCollected = false,
    BeverageBarUserId = "",
    BeverageBarUserFirstName = "",
    OrderDeliveredTimeStamp = ""

  } = {}
) => ({
  type: 'ADD_BEVERAGE',
  beverage: {
    OrderCreatedTimeStamp,
    BeverageBarOrderId,
    OrderedBeverage,
    OrderQuantity,
    IsBeingMixed,
    IsReadyToCollect,
    IsCollected,
    BeverageBarUserId,
    BeverageBarUserFirstName,
    OrderDeliveredTimeStamp
  }
});


// EDIT ORDER PROCESSING STATUS
export const editOrderStatus = (id, updates) => ({
  type: 'EDIT_ORDER',
  id,
  updates
});
