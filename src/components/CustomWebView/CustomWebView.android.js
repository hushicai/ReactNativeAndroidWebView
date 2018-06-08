/**
 * created by hushicai on 2017/9/29
 */

import React from 'react';
import PropTypes from 'prop-types';
import {WebView, requireNativeComponent} from 'react-native';

export default class CustomWebView extends React.Component {
    static propTypes = {
        ...WebView.propTypes,

        // make file upload available
        uploadEnabled: PropTypes.bool,

        // make file download avaible
        downloadEnabled: PropTypes.bool,

        // make chrome remote inspect
        webContentsDebuggingEnabled: PropTypes.bool
    };

    render() {
        return (
            <WebView
                {...this.props}
                nativeConfig={{
                    component: RCTCustomWebView,
                    props: {
                        uploadEnabled: this.props.uploadEnabled,
                        downloadEnabled: this.props.downloadEnabled,
                        webContentsDebuggingEnabled: this.props.webContentsDebuggingEnabled
                    }
                }}
            />
        );
    }
}

const RCTCustomWebView = requireNativeComponent(
    'CustomWebView',
    CustomWebView,
    WebView.extraNativeComponentConfig
);


