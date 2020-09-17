import {LOAD_FORECAST} from "../action-types";


export const getMyForecast=(lat, lng)=>{
  return (dispatch)=>{
      return fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`)
          .then(response => response.json())
          .then((data)=>{
              fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=tomorrow`)
                  .then(tomorrow => tomorrow.json())
                  .then((tomorrow_data)=>{
                      dispatch({
                          type: LOAD_FORECAST,
                          payload: {today: data, tomorrow: tomorrow_data}
                      })
                  })
          })
          .catch(error => console.log(error));
  }
}
