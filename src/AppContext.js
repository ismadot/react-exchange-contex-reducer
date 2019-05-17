import React, { createContext,useReducer } from 'react';
import moment from 'moment';
import {INCREMENT, GET_DATA,REQUEST,SUCCESS,ERROR, INITDATE,ENDDATE} from './actions/app'

const AppContext = createContext();
let initialState = {
  count:0,
  loading: false,
  error: null,
  payload: null,
  status: null,
  response: null,
  initDate:moment(new Date()).format('YYYY-MM-DD'),
  endDate: moment(new Date()).format('YYYY-MM-DD'),
};


const actionsMap = {
  [INCREMENT]: (state) => {
    const initDate = state.count++;
    return {
      ...state,
      initDate
    }
  },
  [INITDATE]: (state,action) => {
    const initDate = action.payload;
    return {
      ...state,
      initDate
    }
  },[ENDDATE]: (state,action) => {
    const endDate = action.payload;
    return {
      ...state,
      endDate
    }
  },
  [GET_DATA]:(state,action)=>{
    return {
      ...state,
      loading: true,
      error: null,
      response: null,
    };
  },
  [REQUEST]:(state,action)=>{
    return {
      ...state,
      loading: true,
      error: null,
      payload: null,
    };
  },
  [SUCCESS]:(state,action)=>{
    let response=action.payload.data.Dolares;
    
    return {
      ...state,
      loading: null,
      error: null,
      response,
    };
  },
  [ERROR]:(state,action)=>{
    return {
      ...state,
      loading: null,
      error: true,
      response: null,
    };
  },
};

const reducerMap = (state = initialState, action = {}) => {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}

const AppContextProvider = ({children}) => {
  let [state, dispatch] = useReducer(reducerMap, initialState);
  let value = { state, dispatch };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

let AppContextConsumer = AppContext.Consumer;


export { AppContext,AppContextProvider,AppContextConsumer };
