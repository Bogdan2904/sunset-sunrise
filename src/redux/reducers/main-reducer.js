
import {combineReducers} from "redux";
import {sunriseSunsetForecast} from './sunrise-sunset-reducer'
// import {geolocation} from "./geolocation-reducer";

export const createRootReducer = () => {
    return combineReducers({
        sunriseSunsetForecast

    });
};
