import { connect } from 'react'
import 'primeflex/primeflex.css';
import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'fullcalendar/dist/fullcalendar.css';
import './layout/layout.css';
import {AppTopbar} from './secured/AppTopbar';
import {AppFooter} from './secured/AppFooter';
import {AppMenu} from './secured/AppMenu';
import {AppInlineProfile} from './secured/AppInlineProfile';

const SecureLayout = ({ SecureLayoutComponent, ...componentProps }) => {
	
	onWrapperClick = (event) => {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }
	
	return (
		<div className={wrapperClass} onClick={this.onWrapperClick}>
		   <AppTopbar onToggleMenu={this.onToggleMenu}/>
		   <div ref={(el) =>
		      this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>
		      <ScrollPanel ref={(el) =>
		         this.layoutMenuScroller = el} style={{height:'100%'}}>
		         <div className="layout-sidebar-scroll-content" >
		            <div className="layout-logo">
		               <img alt="Logo" src={logo} />
		            </div>
		            <AppInlineProfile />
		            <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
		         </div>
		      </ScrollPanel>
		   </div>
		   <div className="layout-main">
		      <SecureLayoutComponent {...componentProps} />
		   </div>
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

export const withSecureLayout = SecureLayoutComponent => componentProps => (
	<ConnectedLayout {...componentProps} SecureLayoutComponent={SecureLayoutComponent} />
)

