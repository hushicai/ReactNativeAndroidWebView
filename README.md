# ReactNativeAndroidWebView

Android webview does not support file upload、file download and web contents debugging by default, I make this project to show solution for this problem.

## React Native v0.50.0-

For RN v0.50.0-, RN do not allow us to extend built-in components.

So [CustomWebView](https://github.com/hushicai/ReactNativeAndroidWebView/blob/2f8a3dc66ff9372e2681e3a223781d3d2370e27e/src/components/CustomWebView/CustomWebView.android.js) have to copy the code from [react-native/Libraries/Components/WebView/WebView.android.js](https://github.com/facebook/react-native/blob/0.49-stable/Libraries/Components/WebView/WebView.android.js).

## React Native v0.50.0 and v0.50.0+

For RN v0.50.0 and v0.50.0+, RN allow us to "[Add props for overriding native component in WebView](https://github.com/facebook/react-native/pull/15016)".

So we can use the new feature to implement our [CustomWebView](https://github.com/hushicai/ReactNativeAndroidWebView/blob/97b4582a24a2f166ca9c20de3f1f5cd12edc9f87/src/components/CustomWebView/CustomWebView.android.js).

As we can see, the new implemention is brief.

