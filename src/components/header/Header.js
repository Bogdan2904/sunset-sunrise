import React from "react";

import {withRouter} from "react-router-dom";

import SearchForm from "../search-form/SearchForm";
import {DarkThemeContext} from "../../context/DarkThemeContext";

import BootstrapSwitchButton from "bootstrap-switch-button-react/lib/bootstrap-switch-button-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";

import './Header.scss'
import './HeaderMedia.scss'
import * as bs from 'bootstrap/dist/css/bootstrap.css';


function Header() {
    return (
        <DarkThemeContext.Consumer>
            {
                (value => {
                    const {isDarkTheme, toggleTheme} = value
                    return (
                        <div className='may-header'>

                            <div className='may-header-logo'>
                                <FontAwesomeIcon icon={faSun}/>
                                <span className='logo-name'>Sunrise Sunset</span>
                            </div>

                            <div className='may-header-search'>
                                <SearchForm className='search-form'/>
                            </div>

                            <div className='may-header-toggle-theme'>
                                <BootstrapSwitchButton
                                    checked={isDarkTheme}
                                    onlabel='ON'
                                    offlabel='OF'
                                    onstyle="secondary"
                                    onChange={toggleTheme}
                                />
                            </div>
                        </div>
                    )
                })
            }
        </DarkThemeContext.Consumer>
    )
}

export default withRouter(Header);
