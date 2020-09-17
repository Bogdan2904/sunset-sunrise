import React, {useContext} from "react";
import {useHistory} from "react-router";

import usePlacesAutocomplete from "use-places-autocomplete";
import {getGeocode, getLatLng} from "use-places-autocomplete";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import {AddressContext} from "../../context/AddressContext";

import './SearchForm.scss'


function SearchForm() {

    let history = useHistory();

    const darkThemeContext = useContext(AddressContext);
    const {changeAddress} = darkThemeContext;

    const {value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 49.8383, lng: () => 24.0232},
            radius: 200 * 1000
        }
    })

    async function redirectWithCoordinates(address) {
        try {
            const result = await getGeocode({address});
            const {lat, lng} = await getLatLng(result[0])
            setValue('')
            clearSuggestions()
            history.push(`search-page?lat=${lat}&lng=${lng}`)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='may-search-form'>
            <Combobox onSelect={(address) => {
                changeAddress(address)
                redirectWithCoordinates(address)
            }}>
                <ComboboxInput className='may-search-form-combobox-input'

                               value={value}
                               onChange={(e) => {
                                   setValue(e.target.value)
                               }}
                               placeholder='Enter an address'
                />
                <ComboboxPopover>
                    {status === "OK" && data.map(({place_id, description}) => (
                        <ComboboxOption key={place_id} value={description}/>
                    ))}
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default SearchForm;
