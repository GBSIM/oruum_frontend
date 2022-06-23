export const CHANGE_HOME_MENU = "HOME/CHANGE_HOME_MENU";

export const changeHomeMenu = (menu) => ({ type: CHANGE_HOME_MENU, menu });

const initialState = {
    menu: "주식 데이터"
  };

  const home = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_HOME_MENU:
        
        return {
          ...state,
          menu: action.menu
        };
      
      default:
        return state;
    }
  };
  
  export default home;