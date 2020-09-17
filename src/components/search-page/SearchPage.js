import React, {useEffect, useContext} from "react";
import {
    GoogleMap
} from "@react-google-maps/api";

import {withRouter} from 'react-router';

import {connect} from "react-redux";

import queryString from 'query-string';

import {getMyForecast} from "../../redux/ations/forecast-action";


import Sunrise from './../../image/sunrise/sunrise-100px.svg'
import Sunset from './../../image/sunset/sunset-100px.svg'
import BrightMapStyles from "../../StylesForGoogleMap/BrightMapStyles";
import DarkMapStyles from "../../StylesForGoogleMap/DarkMapStyles";
import {DarkThemeContext} from "../../context/DarkThemeContext";
import {AddressContext} from "../../context/AddressContext";

import './SearchPage.scss'
import './SearchPageMedia.scss'


const mapContainerStyle = {
    width: "100%",
    height: "100%"
}

function SearchPage(props) {

    const {lat, lng} = queryString.parse(props.location.search)
    const addressContext = useContext(AddressContext);
    const {addressName} = addressContext;

    const loadingSunsetSunrise = () => {
        props.getMyForecast(lt, lg);
    }
    useEffect(() => {
        loadingSunsetSunrise();
    }, [])

    useEffect(() => {
        loadingSunsetSunrise();
    }, [lat, lng])

    const lt = parseFloat(lat);
    const lg = parseFloat(lng);

    const {myTodayForecast, myTomorrowForecast} = props;

    return (
        <DarkThemeContext.Consumer>
            {
                (value => {
                    const {isDarkTheme} = value

                    return (
                        <div className='may-search-page'>
                            <div className={`may-search-page-info ${isDarkTheme && 'may-search-page-info-dark-theme'}`}>
                                <div
                                    className={`may-search-page-info-street ${isDarkTheme && 'white-text'}`}>{addressName}
                                </div>
                                <p className={`${isDarkTheme && 'white-text'}`}>Check out today's sunrise and sunset
                                    time in {addressName ? addressName : <span>your dislocation</span>}, as well as the
                                    whole calendar for September 2020.
                                </p>
                                <div className='may-search-page-info-line'/>
                                <div className='may-search-page-info-today-forecast'>
                                    <img src={Sunrise} alt="Sunrise"/>
                                    {!!myTodayForecast &&
                                    <div className={`${isDarkTheme && 'white-text'}`}>{myTodayForecast.sunrise}</div>}
                                </div>
                                <div className='may-search-page-info-line'/>

                                <div className='may-search-page-info-today-forecast'>
                                    <img src={Sunset} alt="Sunset"/>
                                    {!!myTodayForecast &&
                                    <div className={`${isDarkTheme && 'white-text'}`}>{myTodayForecast.sunset}</div>}
                                </div>
                                <div className='may-search-page-info-line'/>
                                <div className='may-search-page-info-tomorrow'>
                                    <p className={`${isDarkTheme && 'white-text'}`}>Tomorrow:</p>
                                    <div className='may-search-page-info-tomorrow-forecast'>
                                        <div className='forecast'>
                                            <img src={Sunrise} alt="Sunrise"/>
                                            <p className={`${isDarkTheme && 'white-text'}`}>{!!myTomorrowForecast && myTomorrowForecast.sunrise}</p>
                                        </div>
                                        <div className='forecast'>
                                            <img src={Sunset} alt="Sunset"/>
                                            <p className={`${isDarkTheme && 'white-text'}`}>{!!myTomorrowForecast && myTomorrowForecast.sunset}</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className='may-search-page-google-map'>
                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    zoom={14}
                                    center={{
                                        lat: parseFloat(lt),
                                        lng: parseFloat(lg)
                                    }}
                                    options={isDarkTheme ? {styles: DarkMapStyles} : {styles: BrightMapStyles}}
                                    onClick={e => console.log(e)}

                                />
                            </div>
                        </div>
                    )
                })
            }
        </DarkThemeContext.Consumer>
    )
}

const mapStateToProps = (store) => {
    const {sunriseSunsetForecast: {myTodayForecast, myTomorrowForecast}} = store;
    return {
        myTodayForecast: myTodayForecast.results,
        myTomorrowForecast: myTomorrowForecast.results
    }
};

const mapDispatchToProps = ({
    getMyForecast
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchPage));
