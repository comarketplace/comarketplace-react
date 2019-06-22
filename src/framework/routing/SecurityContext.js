import React from 'react';

const initialContext = {
    keycloak: null,
    authenticated: false
};

/**
 * @author Edward P. Legaspi
 * @version 0.0.1
 */
export default React.createContext(initialContext);