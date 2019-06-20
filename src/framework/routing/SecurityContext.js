import React from 'react';

const initialContext = {
    keycloak: null,
    authenticated: false
};

/**
 * @author Edward P. Legaspi
 * @since 1.0
 */
export default React.createContext(initialContext);