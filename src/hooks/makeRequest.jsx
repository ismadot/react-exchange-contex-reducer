import axios from "axios";
import { request, success, error } from "../actions/app";

const API_KEY=`9c84db4d447c80c74961a72245371245cb7ac15f`
const API_URL=`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo`
const API_FORMAT=`json`
const ApiRequest = async (dispatch,dateInit,dateEnd, { verb = "get", params = {} } = {}) => {
  let dateInitSplit=dateInit.split("-");
  let dateEndSplit=dateEnd.split("-");
  let strDateInitSplit=`/${dateInitSplit[0]}/${dateInitSplit[1]}/dias_i/${dateInitSplit[2]}`;
  let strDateEndSplit=`/${dateEndSplit[0]}/${dateEndSplit[1]}/dias_f/${dateEndSplit[2]}`;
  
  const API_ENDPOINT=`${API_URL}${strDateInitSplit}${strDateEndSplit}?apikey=${API_KEY}&formato=${API_FORMAT}` 
  
  dispatch(request());
  try {
    const response = await axios[verb](API_ENDPOINT, params);
    dispatch(success(response));
  } catch (e) {
    dispatch(error(e));
  }
};

export default ApiRequest;
