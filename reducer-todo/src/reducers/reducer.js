import uuid from 'uuid';

export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}]

export const reducer = (state, action) => {
  switch(action.type) {
      case 'ADD':
          console.log(state);
          return [...state, {item:action.payload, completed:false, id:uuid.v4()}];

      case 'TOGGLE':
          let updatedState = state.filter(item => {
              return item.id !== action.payload.id;
          })

          let place = state.indexOf(action.payload)
          let updatedItem = {
              item: action.payload.item,
              completed: !action.payload.completed,
              id:action.payload.id}

          updatedState.splice(place, 0, updatedItem);
          return updatedState;

      case 'CLEAR':
          let completedCleared = state.filter(item => {
              return item.completed !== true;
          })

          return completedCleared;


      default:
          return state;
  }
}
