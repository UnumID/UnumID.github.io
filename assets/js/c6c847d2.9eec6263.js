(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{106:function(e,t,n){"use strict";var a=n(0),i=n(107);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},107:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},121:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(106),o=n(96),l=n(56),s=n.n(l);var c=37,d=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,b=e.groupId,p=e.className,m=Object(r.a)(),h=m.tabGroupChoices,v=m.setTabGroupChoices,g=Object(a.useState)(l),O=g[0],j=g[1],y=a.Children.toArray(e.children),f=[];if(null!=b){var N=h[b];null!=N&&N!==O&&u.some((function(e){return e.value===N}))&&j(N)}var D=function(e){var t=e.target,n=f.indexOf(t),a=y[n].props.value;j(a),null!=b&&(v(b,a),setTimeout((function(){var e,n,a,i,r,o,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&r<=c&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case d:var a=f.indexOf(e.target)+1;n=f[a]||f[0];break;case c:var i=f.indexOf(e.target)-1;n=f[i]||f[f.length-1]}null===(t=n)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},u.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return f.push(e)},onKeyDown:w,onFocus:D,onClick:D},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},122:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},199:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/presentation-request-7fb200092a3431648a3fceaec755b757.png"},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/android-scanner-a86e4a33b484ec9cf54fc455429f1f27.png"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(98)),o=n(121),l=n(122),s=(n(100),n(101)),c={id:"mobile-sdk-android",title:"Mobile SDK - Android",sidebar_label:"Android",slug:"/mobile-sdk-android"},d={unversionedId:"mobile-sdk-android",id:"mobile-sdk-android",isDocsHomePage:!1,title:"Mobile SDK - Android",description:"Docs for the iOS SDK are here.",source:"@site/docs/mobile-sdk-android.mdx",slug:"/mobile-sdk-android",permalink:"/mobile-sdk-android",version:"current",sidebar_label:"Android",sidebar:"sidebar",previous:{title:"Mobile SDK - Overview",permalink:"/mobile-sdk-overview"},next:{title:"Mobile SDK - iOS",permalink:"/mobile-sdk-ios"}},u=[{value:"Overview",id:"overview",children:[{value:"Minimum Requirements",id:"minimum-requirements",children:[]},{value:"Required Permissions",id:"required-permissions",children:[]}]},{value:"Setup",id:"setup",children:[{value:"Installation",id:"installation",children:[]},{value:"Initialization",id:"initialization",children:[]},{value:"Deep Links",id:"deep-links",children:[]},{value:"QR Code Scanner",id:"qr-code-scanner",children:[]},{value:"Logging",id:"logging",children:[]},{value:"Callback",id:"callback",children:[]}]},{value:"Handling Multiple Users",id:"handling-multiple-users",children:[{value:"Example Flow",id:"example-flow",children:[]}]}],b={toc:u};function p(e){var t=e.components,c=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Docs for the iOS SDK are ",Object(r.b)("a",{parentName:"em",href:"mobile-sdk-ios"},"here"),".")),Object(r.b)("p",null,"This is a lightweight, fully native SDK that allows a host app to receive and store ",Object(r.b)(s.a,{type:"credential",mdxType:"Tip"},"credentials"),", receive ",Object(r.b)(s.a,{type:"request",mdxType:"Tip"},"requests"),", and share ",Object(r.b)(s.a,{type:"presentation",mdxType:"Tip"},"presentations"),". It works with both Kotlin and Java native apps."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Before you begin:")," You need to be registered as Unum ID customer, and you need to register at least one ",Object(r.b)(s.a,{type:"holder app",mdxType:"Tip"}),". (You can register zero to many, depending on your use case.) You'll receive a holder app API key to use with this SDK."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"More detailed but less styled documentation can be found ",Object(r.b)("a",{parentName:"p",href:"http://docs.unum.id/Holder-SDK-Android/"},"here"),". This serves as a useful technical reference."))),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("h3",{id:"minimum-requirements"},"Minimum Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Android 6.0 (Marshmallow) and above")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"English language")," (internationalization coming soon)")),Object(r.b)("h3",{id:"required-permissions"},"Required Permissions"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Camera:")," requested when you show the QR code scanner"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Biometrics/Passcode:")," requested when you call ",Object(r.b)("inlineCode",{parentName:"li"},"initialize()"))),Object(r.b)("p",null,"These permissions are requested by the SDK \u2014 no action is required by the host app. "),Object(r.b)("p",null,"Because the SDK leverages the secure hardware of the user's device for cryptographic operations, it requires OS level user authentication. This means ",Object(r.b)("strong",{parentName:"p"},"the user must have a lock screen biometric, passcode, or similar.")," If the user doesn't have this set up, the SDK will prompt the user and direct them to the correct place in Settings to do so."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Device biometrics are typically ",Object(r.b)("em",{parentName:"p"},"aliases")," for passcodes (or similar options like PINs and patterns) and fall back to those. This is all handled at the OS level."))),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,"When you register a ",Object(r.b)(s.a,{type:"holder app",mdxType:"Tip"}),", we will send you a artifactory username and password"),Object(r.b)("p",null,"In the top level build.gradle add your artifactory username, password, and artifactory url to the all projects block"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-groovy"},"allprojects {\n    repositories {\n        maven {\n            credentials {\n                username 'username'\n                password 'password'\n                url 'https://unumid.jfrog.io/artifactory/android-SDK/'\n            }\n\n        }\n    }\n}\n")),Object(r.b)("p",null,"In the app level build.gradle add the reference to the SDK"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-groovy"},'implementation "id.unum:androidSDK:1.20.0"\n')),Object(r.b)("h3",{id:"initialization"},"Initialization"),Object(r.b)("p",null,"You should initialize the SDK when the app starts up. This will ensure the SDK is set up properly. "),Object(r.b)("p",null,"You can optionally include a ",Object(r.b)(s.a,{type:"DID",mdxType:"Tip"})," (",Object(r.b)("inlineCode",{parentName:"p"},"did"),"), which identifies a user (technically called a ",Object(r.b)(s.a,{type:"subject",mdxType:"Tip"}),") in the Unum ID ecosystem. A returning user will already have a DID, so you should include this to ensure the SDK loads any new credentials associated with that DID as part of the initialization process. "),Object(r.b)("p",null,"You can optionally include the ",Object(r.b)("inlineCode",{parentName:"p"},"UnumCallback")," to be notified of the result of the initialization call."),Object(r.b)(o.a,{groupId:"languages",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},"initialize({\n    customerId(BuildConfig.CUSTOMER_ID) // your customer UUID\n    apiKey(BuildConfig.API_KEY) // your holder app API key\n    onError(::onErrorFunction) // (optional) run if there's an error\n    did(did) // (optional) include this for returning users \u2014 otherwise leave empty\n},\nobject : UnumCallback {\n    override fun onSuccess(data: String?) {\n        data?.let {\n            val did = data\n            // store DID \u2014 associate with user in your database\n         }\n    }\n\n    override fun onSDKError(error: String?) {\n\n    }\n\n    override fun onAPIError(code: Int, error: String?) {\n\n    }\n})\n"))),Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'UnumInitializationConfiguration configuration = new UnumInitializationConfiguration.Builder()\n    .customerId(BuildConfig.CustomerId) // your customer UUID\n    .apiKey(BuildConfig.ApiKey) // your holder app API key\n    .onError(() -> { // (optional) run if there\'s an error\n        onErrorFunction();\n        return null;\n    })\n    .did(did) // (optional) include this for returning users \u2014 otherwise leave empty\n    .build();\n\nUnumId.INSTANCE.initialize(configuration, new UnumCallback() {\n    @Override\n    public void onSuccess(Object data) {\n        if (data != null && data instanceof String) {\n            // returned data is string version of subject (user) DID\n            // store DID \u2014 associate with user in your database\n        }\n    }\n\n    @Override\n    public void onSDKError(@Nullable String error) {\n        Log.e("MainActivity", "SDK Error");\n    }\n\n    @Override\n    public void onAPIError(int code, @Nullable String error) {\n        Log.e("MainActivity", "API Error");\n    }\n});\n')))),Object(r.b)("p",null,"The initialization process involves creating private keys for the user using the secure hardware of the device. This requires OS level authentication, so the user will be prompted to pass a biometric check, enter their passcode, or authenticate in an analogous way. If they don't have this set up, the SDK will direct them to the correct place in Settings to do so."),Object(r.b)("h3",{id:"deep-links"},"Deep Links"),Object(r.b)("p",null,"In the context of Unum ID, a ",Object(r.b)("strong",{parentName:"p"},"deep link")," is a URL that opens a specific ",Object(r.b)(s.a,{type:"holder app",mdxType:"Tip"}),". For example, a link that opens the ACME Bank mobile app might look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"unumid://acme/presentationRequest/88d37012-f83b-453a-a1f1-d4a1bcf86aa3\n")),Object(r.b)("p",null,"The SDK uses deep links to retrieve and display a ",Object(r.b)(s.a,{type:"request",mdxType:"Tip"})," to a user, who decides whether to share data in response. Users will typically encounter deep links displayed in the ",Object(r.b)("a",{parentName:"p",href:"/web-sdk"},"Web SDK")," (in QR code or button form) or sent over a communication channel (like push notification, SMS, or email)."),Object(r.b)("p",null,"You need to pass Unum ID deep links to the SDK to be processed. To do so, set up an activity as shown below. This will catch a deep link like the example one shown above."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<activity android:name=".MainActivity">\n    <intent-filter>\n        <action android:name="android.intent.action.VIEW" />\n\n        <category android:name="android.intent.category.DEFAULT" />\n        <category android:name="android.intent.category.BROWSABLE" />\n\n        <data\n            android:host="unumid"\n            android:scheme="acme" />\n    </intent-filter>\n</activity>\n')),Object(r.b)("p",null,"When it receives a deep link, the SDK will display a system alert, asking the user how they want to respond to the ",Object(r.b)(s.a,{type:"request",mdxType:"Tip"})," (that the deep link references)."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Credential Request Popup",src:n(199).default})),Object(r.b)("p",null,"The SDK will do the following based on the user's action. If the user clicks:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},'"Yes":')," the SDK will send a ",Object(r.b)(s.a,{type:"presentation",mdxType:"Tip"})," (of the requested ",Object(r.b)(s.a,{type:"credentiaal",mdxType:"Tip"},"credentials"),") to the company that made the request."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},'"No":')," the SDK will send an empty presentation that indicates that the user declined the request."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},'"Something\'s wrong...":')," the SDK will flag the request as suspicious.")),Object(r.b)("h3",{id:"qr-code-scanner"},"QR Code Scanner"),Object(r.b)("p",null,"The Unum ID ",Object(r.b)("a",{parentName:"p",href:"#/deep-links"},"deep links")," described above can be displayed in QR code form. This is important for cases when a user is on a non-mobile device. For example, the ACME Bank website might request that a user share an authentication credential to log into the ACME website on desktop. ACME would do so by displaying a QR code that the user scans. This would open the ACME mobile app on the user's phone and prompt the user to share the requested data."),Object(r.b)("p",null,"Any QR code scanner can read an Unum ID deep link in QR code form. Some but not all devices support scanning directly from the native camera, so you should make it possible for the user to scan codes from within your app. "),Object(r.b)("p",null,"If you already have a QR code scanner, you can pass QR codes directly to the SDK like so:"),Object(r.b)(o.a,{groupId:"languages",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},"UnumId.handleLink(Uri.parse(qrCode))\n"))),Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"UnumId.INSTANCE.handleLink(Uri.parse(qrCode));\n")))),Object(r.b)("p",null,"If you don't have a QR code scanner, you can use the one included in the SDK. Simply start the QR code activity as shwon below. This will automatically pass the deep link to the SDK \u2014 no further action is needed from the host app."),Object(r.b)(o.a,{groupId:"languages",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},"private fun showQRCodeScanner() {\n    val launchIntent = UnumQRCodeActivity.getLaunchIntent(this, true, false)\n    startActivityForResult(launchIntent, REQUEST_CODE)\n}\n\noverride fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {\n    super.onActivityResult(requestCode, resultCode, data)\n\n    if (requestCode == REQUEST_CODE && data != null) {\n        val barcode: Barcode? =\n            data.getParcelableExtra(UnumQRCodeActivity.KEY_CAPTURED_BARCODE)\n        barcode?.let {\n            Toast.makeText(this, barcode.rawValue, Toast.LENGTH_LONG).show()\n        }\n    }\n }\n"))),Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"private void startQRCodeScanner() {\n    Intent launch = UnumQRCodeActivity.Companion.getLaunchIntent(\n            QrCodeScannerActivity.this,\n            true,\n            false);\n    startActivityForResult(launch, REQUEST_CODE);\n}\n\n@Override\nprotected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {\n    super.onActivityResult(requestCode, resultCode, data);\n\n    if (requestCode == REQUEST_CODE && data != null) {\n        Barcode barcode = data.getParcelableExtra(UnumQRCodeActivity.Companion.getKEY_CAPTURED_BARCODE());\n        if (barcode != null) {\n            Toast.makeText(this, barcode.rawValue, Toast.LENGTH_LONG).show();\n        }\n    }\n}\n")))),Object(r.b)("p",null,'You can call this on a trigger of your choice. For example, you can create a "Scan QR Code" button that starts the activity when the user clicks it:'),Object(r.b)(o.a,{groupId:"languages",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},"qrButton.setOnClickListener {\n    showQRCodeScanner()\n}\n"))),Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"findViewById(R.id.qrButton).setOnClickListener(new View.OnClickListener() {\n    @Override\n    public void onClick(View v) {\n        startQRCodeScanner();\n    }\n});\n")))),Object(r.b)("p",null,"The QR code scanner lookss like this:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"QR code scanner",src:n(200).default})),Object(r.b)("h3",{id:"logging"},"Logging"),Object(r.b)("p",null,"You can turn SDK logging on and off and set the log level:"),Object(r.b)(o.a,{groupId:"languages",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},"// Turn the SDK logger on or off\nUnumLogger.enableUnumLogging = true\n// If logger enabled, set desired message log level\nUnumLogger.loggingLevel = UnumLogger.VERBOSE\n"))),Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"\n    // Turn the Unum ID logger on or off. This will allow\n    // you to show or hide log messages from the SDK\n    UnumLogger.Companion.setEnableUnumLogging(true);\n\n    // If the SDK Logger is enabled, set the desired message log level\n    UnumLogger.Companion.setLoggingLevel(UnumLogger.VERBOSE);\n")))),Object(r.b)("h3",{id:"callback"},"Callback"),Object(r.b)("p",null,"You can pass the ",Object(r.b)("inlineCode",{parentName:"p"},"UnumCallback")," to most method calls within the SDK. This adds a listener that records the result of the method call \u2013 a successful call, an SDK error, or an API error. The ",Object(r.b)("a",{parentName:"p",href:"#initialization"},"Initialization")," section shows one example of this, and here's another:"),Object(r.b)(o.a,{groupId:"languages",defaultValue:"kotlin",values:[{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"kotlin",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-kotlin"},'initialize({\n    customerId(BuildConfig.CUSTOMER_ID)\n    apiKey(BuildConfig.API_KEY)\n    onError(::onErrorFunction)\n},\nobject : UnumCallback {\n    override fun onSuccess(data: Any?) {\n        data?.let {\n            if (it is String && it.isNotEmpty()) {\n                // do something with returned data\n            }\n         }\n    }\n\n    override fun onSDKError(error: String?) {\n        Log.e("MainActivity", "SDK Error");\n        // view string error\n    }\n\n    override fun onAPIError(code: Int, error: String?) {\n        Log.e("MainActivity", "API Error");\n        // view string error\n    }\n})\n'))),Object(r.b)(l.a,{value:"java",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'\nUnumId.INSTANCE.initialize(configuration, new UnumCallback() {\n    @Override\n    public void onSuccess(Object data) {\n        if (data != null && data instanceof String) {\n            // do something with returned data\n        }\n    }\n\n    @Override\n    public void onSDKError(@Nullable String error) {\n        Log.e("MainActivity", "SDK Error");\n        // view string error\n    }\n\n    @Override\n    public void onAPIError(int code, @Nullable String error) {\n        Log.e("MainActivity", "API Error");\n        // view string error\n    }\n});\n')))),Object(r.b)("h2",{id:"handling-multiple-users"},"Handling Multiple Users"),Object(r.b)("p",null,"Each user is identified by some user ID in your system and by a ",Object(r.b)(s.a,{type:"DID",mdxType:"Tip"})," in the Unum ID ecosystem. You simply need to store an association between each user ID and DID. That way, when your host app has a particular user ID (for example once a user is logged into your existing account system), it can pass the corresponding DID to the SDK."),Object(r.b)("p",null,"If you don't have existing user IDs, you ",Object(r.b)("em",{parentName:"p"},"could")," use the DIDs themselves as user IDs. However, we recommend using separate identifiers (internal to your company), to distinguish them from DIDs, which are global to the Unum ID ecosystem."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The technical details of DIDs are not relevant to deploying or using Unum ID. You can think of DIDs as identifiers in the normal sense \u2014 unique, random strings of characters like UUIDs."))),Object(r.b)("p",null,"When you ",Object(r.b)("a",{parentName:"p",href:"#initialize"},"initialize")," the SDK, you can optionally include a DID. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Don't include a DID for user who's new to the SDK.")," The SDK will generate a new one that you should store, associated with the user ID in your system."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Do include a DID for a user who returns to the SDK.")," The SDK will use this DID to access the correct stored data for that user.")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"DIDs are the ",Object(r.b)("em",{parentName:"p"},"only")," identifiers the SDK understands, so it relies entirely on the host app to pass the correct one. "),Object(r.b)("p",{parentName:"div"},"For example, suppose Users 1 and 2 are associated with DIDs 1 and 2, respectively. If User 1 is using the host app, but the app passes DID 2 to the SDK, the SDK will give User 1 access to to User 2's data."))),Object(r.b)("h3",{id:"example-flow"},"Example Flow"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"New User 1 logs into host app."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SDK is initialized with no DID."),Object(r.b)("li",{parentName:"ul"},"SDK returns newly generated DID 1."),Object(r.b)("li",{parentName:"ul"},"Host app stores DID 1 and associates it with User 1."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"New User 2 logs into host app."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SDK is initialized with no DID."),Object(r.b)("li",{parentName:"ul"},"SDK returns newly generated DID 2."),Object(r.b)("li",{parentName:"ul"},"Host app stores DID 2 and associates it with User 2."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Returning User 1 logs into host app."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Host app retrieves DID 1 and includes it in SDK initialization."),Object(r.b)("li",{parentName:"ul"},"SDK recognizes this is a returning user and does not generate a new DID.")))))}p.isMDXComponent=!0},96:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}}}]);