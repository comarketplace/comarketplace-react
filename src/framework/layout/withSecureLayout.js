import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { isValidElementType } from 'react-is';
import classNames from 'classnames';
import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'fullcalendar/dist/fullcalendar.css';
import '../../layout/layout.css';
import {AppFooter} from './secured/AppFooter';

const SecureLayout = ({ SecureLayoutComponent, ...componentProps }) => {
	console.log("SecureLayout " + JSON.stringify(componentProps))
	let menuClick = false
    
	const logo = this.state.layoutColorMode === 'dark' ? 'assets/layout/images/logo-white.svg': 'assets/layout/images/logo.svg';

	const wrapperClass = classNames('layout-wrapper', {
        'layout-overlay': this.state.layoutMode === 'overlay',
        'layout-static': this.state.layoutMode === 'static',
        'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
        'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
        'layout-mobile-sidebar-active': this.state.mobileMenuActive
    });

	const sidebarClassName = classNames("layout-sidebar", {'layout-sidebar-dark': this.state.layoutColorMode === 'dark'});

	const onWrapperClick = (event) => {
        if (!menuClick) {
//            this.setState({
//                overlayMenuActive: false,
//                mobileMenuActive: false
//            });
        }

        menuClick = false;
    }
	
	return (
		<div className={wrapperClass} onClick={onWrapperClick}>
            <SecureLayoutComponent {...componentProps} />
            <AppFooter />

            <div className="layout-mask"></div>
        </div>
    );
}

SecureLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  SecureLayoutComponent: (props, propName) => {
    if (props[propName] && !isValidElementType(props[propName])) {
      return new Error(
        `Invalid prop 'SecureLayoutComponent' supplied to 'SecureLayout': the prop is not a valid React component`,
      );
    }
  },
};

const ConnectedLayout = connect(({home}) => ({home: home}))(SecureLayout);

export const withPublicLayout = SecureLayoutComponent => componentProps => (
	<ConnectedLayout {...componentProps} SecureLayoutComponent={SecureLayoutComponent} />
)