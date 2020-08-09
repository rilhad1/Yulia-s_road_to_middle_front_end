import React, {useContext} from 'react';
import AuthContext from "../../context/AuthContext";

const CustomerSelector = () => {
    const auth = useContext(AuthContext);
    console.log('auth', auth)
    return <div>CUSTOMER_SELECTOR</div>;
};

export default CustomerSelector;