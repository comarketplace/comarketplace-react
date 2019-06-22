import React, { Component } from 'react';

export const AppFooter = () => {

    return  (
        <div className="layout-footer">
            <span className="footer-text" style={{'marginRight': '5px'}}>CoBookshoppe</span>
            <img src="assets/layout/images/logo.svg" alt="" width="80"/>
            <span className="footer-text" style={{'marginLeft': '5px'}}>Powered by CoMarketplace Platform</span>
        </div>
    );
}