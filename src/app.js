/**
 * created by hushicai on 2017/9/29
 */

import React from 'react';

import {StyleSheet} from 'react-native';

import CustomWebView from './components/CustomWebView';

const HTML = `
<html>
<head>
    <style>
        div{margin: 20px;}
    </style>
    <title>File Upload in WebView</title>
    <body>
        <div>
            <input type="file" name="uploadFile" />
        </div>
        <div><a href="https://github.com/hushicai/ReactNativeAndroidWebView/blob/master/src/resources/test.pdf" download="test.pdf">test.pdf</a></div>
    </body>
</html>
`;

class App extends React.Component {
    render() {
        return (
            <CustomWebView
                style={styles.container}
                source={{html: HTML}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={true}
                uploadEnabled={true}
                downloadEnabled={true}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default App;
