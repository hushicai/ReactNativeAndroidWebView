/**
 * created by hushicai on 2017/9/29
 */

import React from 'react';

import {
    Dimensions
} from 'react-native';

import CustomWebView from './CustomWebView';

const HTML = `
<html>
<head>
    <style>
        div{text-align:center}
    </style>
    <title>File Upload in WebView</title>
    <body>
        <div>
            <input type="file" name="uploadFile" />
        </div>
    </body>
</html>
`;

class App extends React.Component {
    render() {
        return (
            <CustomWebView
                style={{height: Dimensions.get('window').height}}
                source={{html: HTML}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={true}
            />
        );
    }
}

export default App;