import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isValidElementType } from 'react-is';

const PublicLayout = ({ PublicLayoutComponent, ...componentProps }) => {
	
    return (
        <div>
            <PublicLayoutComponent {...componentProps} />
        </div>
    );
}

PublicLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  PublicLayoutComponent: (props, propName) => {
    if (props[propName] && !isValidElementType(props[propName])) {
      return new Error(
        `Invalid prop 'PublicLayoutComponent' supplied to 'PublicLayout': the prop is not a valid React component`,
      );
    }
  },
};

const ConnectedLayout = connect()(PublicLayout);

const withPublicLayout = PublicLayoutComponent => componentProps => (
	<ConnectedLayout {...componentProps} PublicLayoutComponent={PublicLayoutComponent} />
)

export default withPublicLayout