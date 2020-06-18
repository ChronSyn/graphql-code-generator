(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{278:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"metadata",(function(){return c})),n.d(a,"rightToc",(function(){return i})),n.d(a,"default",(function(){return s}));var t=n(4),r=n(11),p=(n(0),n(394)),o={id:"java-resolvers",title:"Java Resolvers"},c={id:"plugins/java-resolvers",title:"Java Resolvers",description:"The java-resolvers plugin creates Java interfaces for the resolvers signature.",source:"@site/docs/plugins/java-resolvers.md",permalink:"/docs/plugins/java-resolvers",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/java-resolvers.md",sidebar:"sidebar",previous:{title:"Java",permalink:"/docs/plugins/java"},next:{title:"Java Apollo Android",permalink:"/docs/plugins/java-apollo-android"}},i=[{value:"Prepare your environment",id:"prepare-your-environment",children:[]}],b={rightToc:i};function s(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(t.a)({},b,n,{components:a,mdxType:"MDXLayout"}),Object(p.b)("p",null,"The ",Object(p.b)("inlineCode",{parentName:"p"},"java-resolvers")," plugin creates Java ",Object(p.b)("inlineCode",{parentName:"p"},"interface"),"s for the resolvers signature."),Object(p.b)("p",null,"It works with ",Object(p.b)("inlineCode",{parentName:"p"},"graphql-java")," library and it uses it's ",Object(p.b)("inlineCode",{parentName:"p"},"DataFetcher")," API."),Object(p.b)("p",null,"You can use this plugin to generate interfaces and later implement them, this way you can always tell if one of the fields is missing a resolvers:"),Object(p.b)("pre",null,Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"import com.my.app.generated.Resolvers;\nimport com.my.app.models.User;\nimport graphql.schema.DataFetcher;\n\nexport class QueryResolvers implements Resolvers.Query {\n  public DataFetcher<String> id() {\n        return environment -> environment.<User>getSource().getId();\n    }\n}\n")),Object(p.b)("h2",{id:"prepare-your-environment"},"Prepare your environment"),Object(p.b)("p",null,Object(p.b)("p",{parentName:"p"},"To use the GraphQL Code Generator with Java, start by adding the ",Object(p.b)("a",Object(t.a)({parentName:"p"},{href:"https://plugins.gradle.org/plugin/com.moowork.node"}),"com.moowork.node")," Gradle plugin to your ",Object(p.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),'plugins {\n  id "com.moowork.node" version "1.3.1"\n}\n')),Object(p.b)("p",{parentName:"p"},"Then, add the following in order to make sure you are running the code-generator on each build:"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"build.dependsOn yarn\n")),Object(p.b)("p",{parentName:"p"},"Then, create a ",Object(p.b)("inlineCode",{parentName:"p"},"package.json")," file in your project root, with the following content:"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "java-app",\n  "scripts": {\n    "postinstall": "graphql-codegen"\n  },\n  "dependencies": {\n    "graphql": "14.5.8",\n    "@graphql-codegen/cli": "1.7.0",\n    "@graphql-codegen/RELEVANT_PLUGIN": "1.7.0"\n  }\n}\n')),Object(p.b)("blockquote",{parentName:"p"},Object(p.b)("p",{parentName:"blockquote"},"Make sure to use the latest version of codegen and the plugins, and replace ",Object(p.b)("inlineCode",{parentName:"p"},"RELEVANT_PLUGIN")," with your plugin name.")),Object(p.b)("p",{parentName:"p"},"Then, create ",Object(p.b)("inlineCode",{parentName:"p"},"codegen.yml")," file in your root directory, pointing to your schema, and add the plugins you need. For example:"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"schema: src/main/resources/schema.graphqls\ngenerates:\n  src/main/java/com/my-name/my-app/generated/File.java:\n    - RELEVANT_PLUGIN\n")),Object(p.b)("blockquote",{parentName:"p"},Object(p.b)("p",{parentName:"blockquote"},"Replace ",Object(p.b)("inlineCode",{parentName:"p"},"RELEVANT_PLUGIN")," with your plugin name.")),Object(p.b)("p",{parentName:"p"},"Also, make sure you add the following to your ",Object(p.b)("inlineCode",{parentName:"p"},".gitignore")," file:"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"yarn.lock\nnode_modules\n")),Object(p.b)("p",{parentName:"p"},"Now, run ",Object(p.b)("inlineCode",{parentName:"p"},"gradle yarn")," to install the dependencies for the first time."),Object(p.b)("p",{parentName:"p"},"Next time, the codegen will run automatically each time you run your Gradle build script.")),Object(p.b)("p",null,Object(p.b)("h2",{parentName:"p"},"Installation"),Object(p.b)("div",Object(t.a)({parentName:"p"},{className:"admonition admonition-shell"}),Object(p.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(p.b)("h5",{parentName:"div"},Object(p.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(p.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(p.b)("path",Object(t.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(p.b)("path",Object(t.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(p.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(p.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(p.b)("pre",{parentName:"div"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/java-resolvers\n")))),Object(p.b)("h2",{parentName:"p"},"API Reference"),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"package")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string")),Object(p.b)("p",{parentName:"p"},"Customize the Java package name. The default package name will be generated according to the output file path."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      package: custom.package.name\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"mappers")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"object")),Object(p.b)("p",{parentName:"p"},"Allow you to replace specific GraphQL types with your custom model classes. This is useful when you want to make sure your resolvers returns the correct class.\nThe default value is the values set by ",Object(p.b)("inlineCode",{parentName:"p"},"defaultMapper")," configuration.\nYou can use a direct path to the package, or use ",Object(p.b)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      mappers:\n        User: com.app.models#UserObject\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"defaultMapper")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"Object")),Object(p.b)("p",{parentName:"p"},"Sets the default mapper value in case it's not specified by ",Object(p.b)("inlineCode",{parentName:"p"},"mappers"),".\nYou can use a direct path to the package, or use ",Object(p.b)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported.\nThe default mapper is Java's ",Object(p.b)("inlineCode",{parentName:"p"},"Object"),"."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      defaultMapper: my.app.models.BaseEntity\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"className")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"Resolvers")),Object(p.b)("p",{parentName:"p"},"Allow you to customize the parent class name."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      className: MyResolvers\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"listType")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"Iterable")),Object(p.b)("p",{parentName:"p"},"Allow you to customize the list type."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      listType: Map\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"scalars")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(p.b)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(p.b)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(p.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(p.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(p.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(p.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(p.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("h5",{parentName:"p"},"Override All Names"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(p.b)("h5",{parentName:"p"},"Upper-case enum values"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(p.b)("h5",{parentName:"p"},"Keep names as is"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(p.b)("h5",{parentName:"p"},"Remove Underscores"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(p.b)("p",{parentName:"p"},"Prefixes all the generated types."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(p.b)("h3",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(p.b)("p",{parentName:"p"},"type: ",Object(p.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(p.b)("inlineCode",{parentName:"p"},"false")),Object(p.b)("p",{parentName:"p"},"Automatically adds ",Object(p.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(p.b)("h4",{parentName:"p"},"Usage Examples"),Object(p.b)("pre",{parentName:"p"},Object(p.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n"))))}s.isMDXComponent=!0},394:function(e,a,n){"use strict";n.d(a,"a",(function(){return l})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function p(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){p(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var a=r.a.useContext(b),n=a;return e&&(n="function"==typeof e?e(a):c(c({},a),e)),n},l=function(e){var a=s(e.components);return r.a.createElement(b.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},j=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,p=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),l=s(n),j=t,d=l["".concat(o,".").concat(j)]||l[j]||m[j]||p;return n?r.a.createElement(d,c(c({ref:a},b),{},{components:n})):r.a.createElement(d,c({ref:a},b))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var p=n.length,o=new Array(p);o[0]=j;var c={};for(var i in a)hasOwnProperty.call(a,i)&&(c[i]=a[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var b=2;b<p;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);