import React, {useState} from "react";
import {AddressContext, address} from "../../context/AddressContext";

export function AddressContextWrapper(props){
    const [addressName, setAddressName] = useState(address);

    const changeAddress = (newAddress) =>{
        setAddressName(newAddress);
    }

    const {children} = props;

    return (
        <AddressContext.Provider value={{addressName, changeAddress}}>
            {children}
        </AddressContext.Provider>
    )
}
