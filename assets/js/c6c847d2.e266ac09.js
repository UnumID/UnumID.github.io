(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),i=(t(0),t(94)),o={id:"mobile-sdk-android",title:"Mobile SDK - Android",sidebar_label:"Android",slug:"/mobile-sdk-android"},l={unversionedId:"mobile-sdk-android",id:"mobile-sdk-android",isDocsHomePage:!1,title:"Mobile SDK - Android",description:"Installation",source:"@site/docs/mobile-sdk-android.mdx",slug:"/mobile-sdk-android",permalink:"/mobile-sdk-android",version:"current",sidebar_label:"Android",sidebar:"sidebar",previous:{title:"Server SDK",permalink:"/server-sdk"},next:{title:"Mobile SDK - iOS",permalink:"/mobile-sdk-ios"}},c=[],d={toc:c};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h4",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy"},'implementation "org.unumid:holdersdk:1.0"\n')),Object(i.b)("h4",{id:"initialization"},"Initialization"),Object(i.b)("p",null,"Upon application start up, the Unum ID initialization methods should be called. This will ensure that the SDK is setup properly. If the DID value is included, then the SDK will load any new credentials associated with that DID as part of the initialization process. The UnumCallback is also an optional parameter that can be included to be notified of the result of the initialization call."),Object(i.b)("p",null,"Kotlin"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"initialize({\n    customerId(BuildConfig.CUSTOMER_ID)\n    apiKey(BuildConfig.API_KEY)\n    onError(::onErrorFunction)\n    did(did) // if stored did, use here\n},\nobject : UnumCallback {\n    override fun onSuccess(data: String?) {\n        data?.let { \n            val did = data\n            // store DID\n         }\n    }\n\n    override fun onSDKError(error: String?) {\n        \n    }\n\n    override fun onAPIError(code: Int, error: String?) {\n        \n    }\n})\n")),Object(i.b)("p",null,"Java"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"UnumInitializationConfiguration configuration = new UnumInitializationConfiguration.Builder()\n                .customerId(BuildConfig.CustomerId)\n                .apiKey(BuildConfig.ApiKey)\n                .onError(() -> {\n                    onErrorFunction();\n                    return null;\n                })\n                .did(did)\n                .build();\n\nUnumId.INSTANCE.initialize(configuration, new UnumCallback() {\n            @Override\n            public void onSuccess(@Nullable String data) {\n                String did = data;\n                // store DID\n            }\n\n            @Override\n            public void onSDKError(@Nullable String error) {\n            }\n\n            @Override\n            public void onAPIError(int code, @Nullable String error) {\n            }\n        });\n")),Object(i.b)("p",null,"Because the SDK supports having multiple users, a DID for each user should be stored in order to properly access that users saved credentials. For a first time user, a new DID will be returned with the initialization call. Once a user returns, the saved DID should be included as part of the initialization call. The initialization call can be made each time a user is identified in the client application. An example of this would be when one user logs out and a new one logs in."),Object(i.b)("h4",{id:"deep-links"},"Deep Links"),Object(i.b)("p",null,"The Unum ID SDK does make use of Deep Links. For the Deep Links to work, at least one activity will need to be setup to recieve Unum ID deep links."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-xml"},'<activity android:name=".MainActivity">\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n\n        <data\n            android:host="www.unumid.org"\n            android:scheme="https" />\n    </intent-filter>\n</activity>\n')),Object(i.b)("h4",{id:"unum-callback"},"Unum Callback"),Object(i.b)("p",null,"A UnumCallback object is available to be passed to most method calls within the SDK. This adds a listener that will be called with the result of the Unum method call. It can result in a successful call, and SDK error, or an API error. Refer to the Initialization section for an exmple of using the Unum Callback."),Object(i.b)("h4",{id:"qr-code-scanner"},"QR Code Scanner"),Object(i.b)("p",null,"Accessing the QR Code can be done by simply starting the QR Code activity. This activity will then return a URI in the results."),Object(i.b)("p",null,"Kotlin"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},"private fun showQRCodeScanner() {\n        val launchIntent = UnumQRCodeActivity.getLaunchIntent(this, true, false)\n        startActivityForResult(launchIntent, REQUEST_CODE)\n    }\n\noverride fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {\n        super.onActivityResult(requestCode, resultCode, data)\n\n        if (requestCode == REQUEST_CODE && data != null) {\n            val barcode: Barcode? =\n                data.getParcelableExtra(UnumQRCodeActivity.KEY_CAPTURED_BARCODE)\n            barcode?.let {\n                Toast.makeText(this, barcode.rawValue, Toast.LENGTH_LONG).show()\n            }\n        }\n    }\n")),Object(i.b)("p",null,"Java"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"private void startQRCodeScanner() {\n        Intent launch = UnumQRCodeActivity.Companion.getLaunchIntent(\n                QrCodeScannerActivity.this,\n                true,\n                false);\n        startActivityForResult(launch, REQUEST_CODE);\n    }\n\n@Override\n    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {\n        super.onActivityResult(requestCode, resultCode, data);\n\n        if (requestCode == REQUEST_CODE && data != null) {\n            Barcode barcode = data.getParcelableExtra(UnumQRCodeActivity.Companion.getKEY_CAPTURED_BARCODE());\n            if (barcode != null) {\n                Toast.makeText(this, barcode.rawValue, Toast.LENGTH_LONG).show();\n            }\n        }\n    }\n")),Object(i.b)("h4",{id:"troubleshooting"},"TroubleShooting"),Object(i.b)("h5",{id:"secure-lock-screen-not-set"},"Secure lock screen not set"),Object(i.b)("p",null,"Before the initialization call can be completed successfully, the android secure lock screen will need to be enabled. If it is not enabled an SDKError error will\nbe returned with the following message:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"java.lang.IllegalStateException: Secure lock screen must be enabled to create keys requiring user authentication")),Object(i.b)("p",null,"A way to check for this would be to check for this error in the SDKError message, and then send the user to the secure lock setup screen. Once the user has setup the\nlock, a result code will be sent back to the application, and the initialization process can be restarted."),Object(i.b)("p",null,"Kotlin"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kotlin"},'fun goToLockScreenSetup() {\n        val intent = Intent(DevicePolicyManager.ACTION_SET_NEW_PASSWORD)\n        startActivityForResult(intent, LOCK_CODE)\n    }\n\noverride fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {\n        super.onActivityResult(requestCode, resultCode, data)\n\n        if (requestCode == LOCK_CODE) {\n            makeToast("Lock Screen set")\n            initializeSDK()\n        }\n    }\n\n')))}s.isMDXComponent=!0},94:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),s=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return t?a.a.createElement(m,l(l({ref:n},d),{},{components:t})):a.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);