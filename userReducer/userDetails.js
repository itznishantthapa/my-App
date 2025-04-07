export const user_details_initial_state = {
    name: '',
    email: '',
    age: ''
  }

  export const user_details_reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.field]: action.value };
      default:
        return state;
    }
  }