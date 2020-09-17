import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import {Provider} from "react-redux";
import {appStore} from "../../redux/store";
import {DarkThemeContextWrapper} from "../dark-theme-context-wrapper/DarkThemeContextWrapper";
import {AddressContextWrapper} from "../address-context-wrapper/AddressContextWrapper";

import Header from "../header/Header";
import HomePage from "../home-page/HomePage";
import SearchPage from "../search-page/SearchPage";

function App() {
    return (

        <DarkThemeContextWrapper>
            <AddressContextWrapper>
                <Provider store={appStore}>
                    <Router>
                        <Header/>
                        <Switch>
                            <Route path='/home-page'>
                                <HomePage/>
                            </Route>

                            <Route path='/search-page'>
                                <SearchPage/>
                            </Route>

                            <Redirect from="*" to='home-page' exact/>
                        </Switch>
                    </Router>
                </Provider>
            </AddressContextWrapper>
        </DarkThemeContextWrapper>
    );
}

export default App;
