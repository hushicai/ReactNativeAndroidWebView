# ReactNativeAndroidWebView

Android webview does not support file upload by default, I make this project to show solution for this problem.

## Situation

There are some relate [issues](https://github.com/facebook/react-native/issues/11230) talking about this.

And there is already some solution for this，such as：

* [react-native-webview-file-upload](https://github.com/dongyaQin/react-native-webview-file-upload)
* [react-native-webview-android](https://github.com/lucasferreira/react-native-webview-android)

But, unfortunately, they are outdated.

In addition, [here](https://github.com/facebook/react-native/pull/12807) is a PR that wants to fix this issue, 
but is still unmerged.

## Solution

This solution is based on the other solution mentioned above.

I tested on android 6+, and it worked fine...

## TODO

For now, RN does not allow us to extend built-in components, like `WebView`.

This project's webview implemention just copy `WebView.android.js`.

Luckily, when this [PR](https://github.com/facebook/react-native/pull/15016) is released in the feature, 
we can removed the ugly redudant js code from `WebView.android.js`.
