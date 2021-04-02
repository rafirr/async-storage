(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(9),o=(n(0),n(158)),l=n(161),c={id:"brownfield",title:"Brownfield integration",sidebar_label:"Brownfield integration"},i={id:"advanced/brownfield",title:"Brownfield integration",description:'import PlatformSupport from "../../src/components/Platform.js"',source:"@site/docs/advanced/BrownfieldIntegration.md",permalink:"/async-storage/docs/advanced/brownfield",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/advanced/BrownfieldIntegration.md",sidebar_label:"Brownfield integration",sidebar:"docs",previous:{title:"Jest integration",permalink:"/async-storage/docs/advanced/jest"},next:{title:"Database backup exclusion",permalink:"/async-storage/docs/advanced/backup"}},s=[{value:"The procotol",id:"the-procotol",children:[{value:"allKeys",id:"allkeys",children:[]},{value:"mergeValues",id:"mergevalues",children:[]},{value:"removeAllValues",id:"removeallvalues",children:[]},{value:"removeValuesForKeys",id:"removevaluesforkeys",children:[]},{value:"setValues",id:"setvalues",children:[]},{value:"valuesForKeys",id:"valuesforkeys",children:[]},{value:"passthrough",id:"passthrough",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Access storage",id:"access-storage",children:[{value:"Kotlin (recommended)",id:"kotlin-recommended",children:[]},{value:"Java",id:"java",children:[]}]}],b={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Supported platforms:")),Object(o.b)(l.a,{title:"iOS/MacOS",platformIcon:"icon_ios.svg",mdxType:"PlatformSupport"}),Object(o.b)(l.a,{title:"Android",platformIcon:"icon_android.svg",mdxType:"PlatformSupport"}),Object(o.b)("hr",null),Object(o.b)("h1",{id:"ios"},"iOS"),Object(o.b)("p",null,"If you're embedding React Native into native application, you can also integrate\nAsync Storage module, so that both worlds will use one storage solution."),Object(o.b)("p",null,"AsyncStorage can be controlled by the hosting app via the delegate on\n",Object(o.b)("inlineCode",{parentName:"p"},"RNCAsyncStorage"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"RNCAsyncStorage *asyncStorage = [bridge moduleForClass:[RNCAsyncStorage class]];\nasyncStorage.delegate = self;\n")),Object(o.b)("h2",{id:"the-procotol"},"The procotol"),Object(o.b)("p",null,"The delegate must conform to the ",Object(o.b)("inlineCode",{parentName:"p"},"RNCAsyncStorageDelegate")," protocol:"),Object(o.b)("h3",{id:"allkeys"},"allKeys"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)allKeys:(RNCAsyncStorageResultCallback)block;\n")),Object(o.b)("p",null,"Returns all keys currently stored. If none, an empty array is returned.\nCalled by ",Object(o.b)("inlineCode",{parentName:"p"},"getAllKeys")," in JS."),Object(o.b)("h3",{id:"mergevalues"},"mergeValues"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)mergeValues:(NSArray<NSString *> *)values\n            forKeys:(NSArray<NSString *> *)keys\n         completion:(RNCAsyncStorageResultCallback)block;\n")),Object(o.b)("p",null,"Merges values with the corresponding values stored at specified keys.\nCalled by ",Object(o.b)("inlineCode",{parentName:"p"},"mergeItem")," and ",Object(o.b)("inlineCode",{parentName:"p"},"multiMerge")," in JS."),Object(o.b)("h3",{id:"removeallvalues"},"removeAllValues"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)removeAllValues:(RNCAsyncStorageCompletion)block;\n")),Object(o.b)("p",null,"Removes all values from the store. Called by ",Object(o.b)("inlineCode",{parentName:"p"},"clear")," in JS."),Object(o.b)("h3",{id:"removevaluesforkeys"},"removeValuesForKeys"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)removeValuesForKeys:(NSArray<NSString *> *)keys\n                 completion:(RNCAsyncStorageResultCallback)block;\n")),Object(o.b)("p",null,"Removes all values associated with specified keys.\nCalled by ",Object(o.b)("inlineCode",{parentName:"p"},"removeItem")," and ",Object(o.b)("inlineCode",{parentName:"p"},"multiRemove")," in JS."),Object(o.b)("h3",{id:"setvalues"},"setValues"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)setValues:(NSArray<NSString *> *)values\n          forKeys:(NSArray<NSString *> *)keys\n       completion:(RNCAsyncStorageResultCallback)block;\n")),Object(o.b)("p",null,"Sets specified key-value pairs. Called by ",Object(o.b)("inlineCode",{parentName:"p"},"setItem")," and ",Object(o.b)("inlineCode",{parentName:"p"},"multiSet")," in JS."),Object(o.b)("h3",{id:"valuesforkeys"},"valuesForKeys"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)valuesForKeys:(NSArray<NSString *> *)keys\n           completion:(RNCAsyncStorageResultCallback)block;\n")),Object(o.b)("p",null,"Returns values associated with specified keys.\nCalled by ",Object(o.b)("inlineCode",{parentName:"p"},"getItem")," and ",Object(o.b)("inlineCode",{parentName:"p"},"multiGet")," in JS."),Object(o.b)("h3",{id:"passthrough"},"passthrough"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"@optional\n@property (nonatomic, readonly, getter=isPassthrough) BOOL passthrough;\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Optional:")," Returns whether the delegate should be treated as a passthrough.\nThis is useful for monitoring storage usage among other things. Returns ",Object(o.b)("inlineCode",{parentName:"p"},"NO")," by\ndefault."),Object(o.b)("hr",null),Object(o.b)("h1",{id:"android"},"Android"),Object(o.b)("p",null,"The recommended approach here is to use Kotlin language to leverage coroutines when accessing the storage.\nJava is also supported (through Kotlin interop), but the approach is more cumbersome."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/async-storage/docs/advanced/next"}),"Next storage feature")," enabled."),Object(o.b)("li",{parentName:"ol"},"Add dependency on ",Object(o.b)("inlineCode",{parentName:"li"},"coroutines-android")," in your app's ",Object(o.b)("inlineCode",{parentName:"li"},"build.gradle"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),'\ndependencies {\n  // other dependencies\n\n\n  // will work with coroutines 1.3.0 and up\n+ implementation "org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.9"\n\n}\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Your library of choice for parsing JSON storage values (since there are strings only)")),Object(o.b)("h2",{id:"access-storage"},"Access storage"),Object(o.b)("h3",{id:"kotlin-recommended"},"Kotlin (recommended)"),Object(o.b)("p",null,"We use Coroutines to handle asynchronous code. Each method on storage is ",Object(o.b)("inlineCode",{parentName:"p"},"suspend")," method, so you need to\ncall it from within a coroutine."),Object(o.b)("h4",{id:"reading-value"},"Reading value"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),"suspend fun readValue(ctx: Context, keys: List<String>) {\n    // get instance of the Storage by providing context object\n    val asyncStorage = StorageModule.getStorageInstance(ctx)\n\n    val entries: List<Entry> = asyncStorage.getValues(keys)\n    doSomethingWithValues(entries)\n}\n")),Object(o.b)("h4",{id:"saving-value"},"Saving value"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-kotlin"}),'suspend fun saveValue(ctx: Context) {\n    val asyncStorage = StorageModule.getStorageInstance(ctx)\n\n    val entries = listOf(\n        Entry("myKey", "myValue")\n    )\n    asyncStorage.setValues(entries)\n}\n')),Object(o.b)("h3",{id:"java"},"Java"),Object(o.b)("p",null,"You can access AsyncStorage form Java, but you're still required to add Kotlin dependencies.\nThere's no one way of accessing the data and there's more than one way to parse it."),Object(o.b)("h4",{id:"reading-from-storage"},"Reading from storage"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"void readStorageValue(Context ctx, String key) {\n    AsyncStorageAccess asyncStorage = StorageModule.getStorageInstance(ctx);\n\n    BuildersKt.launch(GlobalScope.INSTANCE,\n            Dispatchers.getIO(),\n            CoroutineStart.DEFAULT,\n            (scope, continuation) -> {\n                List<String> keys = new ArrayList<>();\n                keys.add(key);\n\n                List<Entry> entries = (List<Entry>) asyncStorage.getValues(keys, (Continuation<? super List<? extends Entry>>) continuation);\n                doSomethingWithValues(entries);\n\n                return Unit.INSTANCE;\n            });\n\n}\n")),Object(o.b)("h4",{id:"saving-to-storage"},"Saving to storage"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"void saveStorageValue(Context ctx, String key, String value) {\n  AsyncStorageAccess asyncStorage = StorageModule.getStorageInstance(ctx);\n\n  BuildersKt.launch(GlobalScope.INSTANCE,\n          Dispatchers.getIO(),\n          CoroutineStart.DEFAULT,\n          (scope, continuation) -> {\n\n            List<Entry> entries = new ArrayList<>();\n            Entry entry = new Entry(key, value);\n            entries.add(entry);\n\n            asyncStorage.setValues(entries, continuation);\n\n            return Unit.INSTANCE;\n          });\n}\n")))}u.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,g=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return n?r.a.createElement(g,c({ref:t},s,{components:n})):r.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.platformIcon,n=e.title;return r.a.createElement("div",{style:{display:"flex",margin:"10px 20px",alignItems:"center",flexDirection:"row"}},r.a.createElement("img",{style:{width:34,height:34},src:"/async-storage/img/"+t}),r.a.createElement("p",{style:{margin:"0 0 0 10px",padding:0}},n))}}}]);