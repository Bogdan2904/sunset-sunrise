import React, {useContext} from "react";

import {useHistory} from "react-router";

import SearchForm from "../search-form/SearchForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStreetView} from "@fortawesome/free-solid-svg-icons";
import {AddressContext} from "../../context/AddressContext";
import {DarkThemeContext} from "../../context/DarkThemeContext";
import {GOOGLE_MAPS_API_KEY} from "../../constants/constants";

import Graph from '../../image/graph/graph.svg'
import Astronomers from '../../image/astronomers/astronomers.png'
import Explorers from '../../image/explorers/explorers.png'
import Golfers from '../../image/golfers/golfers.png'
import Lovers from '../../image/lovers/lovers.png'
import Photographers from '../../image/photographers/photographers.png'

import './HomePage.scss'
import './HomePageMedia.scss'


function HomePage() {

    let history = useHistory();
    const darkThemeContext = useContext(DarkThemeContext);
    const {isDarkTheme} = darkThemeContext;

    const addressContext = useContext(AddressContext)
    const {changeAddress} = addressContext;


    const redirectWithCoordinates = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            let crd = pos.coords;
            setAddress(crd.latitude, crd.longitude)
            history.push(`search-page?lat=${crd.latitude}&lng=${crd.longitude}`)
        })
    }

    const setAddress = async (lat, lng) => {
        debugger
        await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`)
            .then(res => res.json())
            .then(r => {
                changeAddress(r.results[1].formatted_address)
            })
    }


    return (
        <div className='may-home-page'>
            <div className={`may-home-page-main-part ${isDarkTheme && 'may-home-page-main-part-dark-theme'}`}>
                <div className='container-current-location' onClick={redirectWithCoordinates}>
                    <div className='container-current-location-button'
                         onMouseLeave={e => e.target.style.backgroundColor = '#c16060'}
                         onMouseEnter={(e) => e.target.style.backgroundColor = '#ad3636'}>
                        <FontAwesomeIcon icon={faStreetView}/>
                    </div>
                </div>
                <div className={`may-home-page-main-part-title `}>SUNSET AND SUNRISE TIMES</div>
                <div className='may-home-page-main-part-title-text'>Check sunrise, sunset, dusk and dawn times for
                    any location in the world!
                </div>
                <div className='may-home-page-main-part-form'>
                    <SearchForm/>
                </div>
            </div>
            <div className={`may-home-page-intro ${isDarkTheme && 'may-home-page-intro-dark-theme'}`}>
                <div className={` ${isDarkTheme && 'white-text'}`}>
                    Sunrise-Sunset is a free online tool that provides users information about day length, twilight,
                    sunrise and sunset times for any location of the world. Our purpose is to make it easy to
                    everybody to access Sun related information through simple tools that offers accurate
                    information.
                </div>
                <h3>WHAT EXACTLY ARE THE SUNRISE AND SUNSET?</h3>
                <p className={` ${isDarkTheme && 'white-text'}`}>It's important to note that both sunrise and sunset are
                    'instants'. The time range during which
                    the day becomes night or vice versa is called twilight. We can distinguish between the morning
                    twilight, that happens between dawn and sunrise and the evening twilight, that happens between
                    sunset and dusk each day. Duration of twilight actually depends on our position on Earth and
                    date of year. For example at Arctic and Antarctic latitudes, on winter, night never gets
                    completely dark.
                </p>

                <div className='may-home-page-intro-graph'>
                    <img src={Graph} alt=""/>
                </div>
                <p className={` ${isDarkTheme && 'white-text'}`}>The sunrise is the exact instant at which the upper
                    edge of the Sun becomes visible over the
                    eastern horizon, in the morning. It's also called sun up.
                </p>
                <p className={` ${isDarkTheme && 'white-text'}`}>With sunset we refer to the instant when the trailing
                    edge of the Sun stops being visible and
                    disappears below the western horizon in the evening.</p>
                <h3>DAYLENGTH</h3>
                <p className={` ${isDarkTheme && 'white-text'}`}>As you may have noticed, daylength or length of daytime
                    varies over the year. In the north
                    hemisphere, summer days are longer while winter days are shorter and dusk happens very early.
                    Daylength also changes depending on latitude and, during winter, the higher the latitude, the
                    shorter the days.

                </p>
                <p className={` ${isDarkTheme && 'white-text'}`}>Our tools will let you know, accurately, how long the
                    daytime of a given day is going to be on
                    any place of the world and how the daylength evolves during the year.

                </p>
                <p className={` ${isDarkTheme && 'white-text'}`}>As a curiosity, because of the decreasing rotation
                    speed of the Earth, days keep getting a bit
                    longer over time. The average day, a century ago, was 1.7 milliseconds shorter than today.
                </p>
                <div className='may-home-page-intro-line'/>
                <div className='may-home-page-intro-what-for'>
                    <div className='may-home-page-intro-what-for-box'>

                        <div className='may-home-page-intro-what-for-box-image'>
                            <img src={Photographers} alt="Explorers"/>
                        </div>

                        <h6>PHOTOGRAPHERS</h6>
                        <p className={` ${isDarkTheme && 'white-text'}`}>Sunrise and sunset create the perfect natural
                            light for photo and movie shoots.
                        </p>
                    </div>
                    <div className='may-home-page-intro-what-for-box'>

                        <div className='may-home-page-intro-what-for-box-image'>
                            <img src={Astronomers} alt="Explorers"/>
                        </div>

                        <h6>ASTRONOMERS</h6>
                        <p className={` ${isDarkTheme && 'white-text'}`}>Explore the fascinating changes of the sky
                            during a twilight spectacle.
                        </p>
                    </div>
                    <div className='may-home-page-intro-what-for-box'>
                        <div className='may-home-page-intro-what-for-box-image'>

                            <img src={Explorers} alt="Explorers"/>
                        </div>

                        <h6>EXPLORERS</h6>

                        <p className={` ${isDarkTheme && 'white-text'}`}>Plan your hike around sunrise and sunset to get
                            the most out of your day.
                        </p>
                    </div>
                    <div className='may-home-page-intro-what-for-box'>
                        <div className='may-home-page-intro-what-for-box-image'>

                            <img src={Golfers} alt="Explorers"/>
                        </div>

                        <h6>GOLFERS</h6>
                        <p className={` ${isDarkTheme && 'white-text'}`}>Know when to reserve a tee time at your
                            favorite golf course.
                        </p>
                    </div>
                    <div className='may-home-page-intro-what-for-box'>
                        <div className='may-home-page-intro-what-for-box-image'>

                            <img src={Lovers} alt="Explorers"/>
                        </div>

                        <h6>LOVERS</h6>
                        <p className={` ${isDarkTheme && 'white-text'}`}>Prepare a romantic date and enjoy the sunrise
                            or sunset together.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;
