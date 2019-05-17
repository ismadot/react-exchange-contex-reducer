export const  
  INCREMENT='increment',
  GET_DATA ='get-data',
  REQUEST = 'request',
  SUCCESS='succes',
  ERROR='error',
  INITDATE='init-date',
  ENDDATE='end-date'
  


export function increment() {
  return {
    type: INCREMENT,
  };
}

export function getAuth( arg ) {
  return {
    type: GET_DATA,
    payload:{ arg }
  };
}

export const initDate = (date) => ({
  type: INITDATE, 
  payload:date
 });
 export const endDate = (date) => ({
    type: ENDDATE,
    payload: date
   });

export const request = () => ({
   type: REQUEST 
  });

  export const success = response => ({
   type: SUCCESS, payload:response 
  });

  export const error = response => ({
   type: ERROR, payload:{ ...response } 
  });