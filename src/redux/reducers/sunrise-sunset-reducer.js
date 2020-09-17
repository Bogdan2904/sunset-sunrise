import {LOAD_FORECAST} from "../action-types";

const defaultValue = {
    myTodayForecast: {},
    myTomorrowForecast: {}
}

export const sunriseSunsetForecast=(store=defaultValue, action)=> {
    switch (action.type) {
        case LOAD_FORECAST:{
            return {
                myTodayForecast: action.payload.today,
                myTomorrowForecast: action.payload.tomorrow
            }

        }
        default: return store;
    }

};
