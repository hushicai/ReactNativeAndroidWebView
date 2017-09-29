package com.CustomWebView;

import android.net.Uri;
import android.os.Build;
import android.webkit.ConsoleMessage;
import android.webkit.GeolocationPermissions;
import android.webkit.JsResult;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

import com.facebook.infer.annotation.SuppressLint;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.webview.ReactWebViewManager;

/**
 * Created by hushicai on 2017/9/29.
 */

public class CustomWebViewManager extends ReactWebViewManager {
    private CustomWebViewPackage aPackage;

    public String getName() {
        return "CustomWebView";
    }

    @ReactProp(name = "uploadEnabledAndroid")
    public void uploadEnabledAndroid(WebView view, boolean enabled) {
        if (enabled) {
            view.setWebChromeClient(new CustomWebChromeClient());
        }
    }

    protected class CustomWebChromeClient extends WebChromeClient {
        @Override
        public boolean onConsoleMessage(ConsoleMessage message) {
            if (ReactBuildConfig.DEBUG) {
                return super.onConsoleMessage(message);
            }
            // Ignore console logs in non debug builds.
            return true;
        }

        @Override
        public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback callback) {
            callback.invoke(origin, true, false);
        }

        // patch for webview file upload
        @Override
        public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
            getModule().showAlert(url, message, result);
            return true;
        }

        // For Android 4.1+
        @SuppressWarnings("unused")
        public void openFileChooser(ValueCallback<Uri> uploadMsg, String acceptType, String capture) {
            getModule().startFileChooserIntent(uploadMsg, acceptType);
        }

        // For Android 5.0+
        @SuppressLint("NewApi")
        public boolean onShowFileChooser(WebView webView, ValueCallback<Uri[]> filePathCallback, FileChooserParams fileChooserParams) {
            return getModule().startFileChooserIntent(filePathCallback, fileChooserParams);
        }
        // end patch
    }

    public CustomWebViewModule getModule() {
        return this.aPackage.getModule();
    }


    public void setPackage(CustomWebViewPackage aPackage){
        this.aPackage = aPackage;
    }

    public CustomWebViewPackage getPackage(){
        return this.aPackage;
    }
}

