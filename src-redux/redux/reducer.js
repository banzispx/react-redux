export default function count(state=1, action) {
  console.log(state, action, 'action');
  switch (action.type) {
    case 'INCREMENT':
      
      return state + action.data
    case 'DEL':
    
      return state - action.data
    default:
      return state;
  }
}