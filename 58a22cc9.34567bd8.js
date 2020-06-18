(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{247:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return r})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(4),i=t(11),l=(t(0),t(394)),o={},r={id:"generated-config/typescript-apollo-angular",title:"typescript-apollo-angular",description:"This plugin generates Apollo services (Query, Mutation and Subscription) with TypeScript typings.",source:"@site/docs/generated-config/typescript-apollo-angular.md",permalink:"/docs/generated-config/typescript-apollo-angular",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/generated-config/typescript-apollo-angular.md"},c=[{value:"Installation",id:"installation",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"<code>ngModule</code>",id:"ngmodule",children:[]},{value:"<code>namedClient</code>",id:"namedclient",children:[]},{value:"<code>serviceName</code>",id:"servicename",children:[]},{value:"<code>serviceProvidedInRoot</code>",id:"serviceprovidedinroot",children:[]},{value:"<code>sdkClass</code>",id:"sdkclass",children:[]},{value:"<code>querySuffix</code>",id:"querysuffix",children:[]},{value:"<code>mutationSuffix</code>",id:"mutationsuffix",children:[]},{value:"<code>subscriptionSuffix</code>",id:"subscriptionsuffix",children:[]},{value:"<code>apolloAngularPackage</code>",id:"apolloangularpackage",children:[]},{value:"<code>noGraphQLTag</code>",id:"nographqltag",children:[]},{value:"<code>gqlImport</code>",id:"gqlimport",children:[]},{value:"<code>noExport</code>",id:"noexport",children:[]},{value:"<code>dedupeOperationSuffix</code>",id:"dedupeoperationsuffix",children:[]},{value:"<code>omitOperationSuffix</code>",id:"omitoperationsuffix",children:[]},{value:"<code>operationResultSuffix</code>",id:"operationresultsuffix",children:[]},{value:"<code>documentVariablePrefix</code>",id:"documentvariableprefix",children:[]},{value:"<code>documentVariableSuffix</code>",id:"documentvariablesuffix",children:[]},{value:"<code>fragmentVariablePrefix</code>",id:"fragmentvariableprefix",children:[]},{value:"<code>fragmentVariableSuffix</code>",id:"fragmentvariablesuffix",children:[]},{value:"<code>documentMode</code>",id:"documentmode",children:[]},{value:"<code>importOperationTypesFrom</code>",id:"importoperationtypesfrom",children:[]},{value:"<code>importDocumentNodeExternallyFrom</code>",id:"importdocumentnodeexternallyfrom",children:[]},{value:"<code>scalars</code>",id:"scalars",children:[]},{value:"<code>namingConvention</code>",id:"namingconvention",children:[]},{value:"<code>typesPrefix</code>",id:"typesprefix",children:[]},{value:"<code>skipTypename</code>",id:"skiptypename",children:[]},{value:"<code>nonOptionalTypename</code>",id:"nonoptionaltypename",children:[]}]}],p={rightToc:c};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This plugin generates Apollo services (",Object(l.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Mutation")," and ",Object(l.b)("inlineCode",{parentName:"p"},"Subscription"),") with TypeScript typings."),Object(l.b)("p",null,"It will generate a strongly typed Angular service for every defined query, mutation or subscription. The generated Angular services are ready to inject and use within your Angular component."),Object(l.b)("p",null,"It extends the basic TypeScript plugins: ",Object(l.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript"),", ",Object(l.b)("inlineCode",{parentName:"p"},"@graphql-codegen/typescript-operations")," - and thus shares a similar configuration."),Object(l.b)("p",null,"To shed some more light regards this template, it's recommended to go through the this article: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"http://apollographql.com/docs/angular/basics/services.html"}),"http://apollographql.com/docs/angular/basics/services.html")," , and to read the Code Generation with Apollo Angular: ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://the-guild.dev/blog/apollo-angular-12"}),"https://the-guild.dev/blog/apollo-angular-12")),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("div",{className:"admonition admonition-shell"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"})),Object(l.b)("path",Object(a.a)({parentName:"svg"},{d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"})))),"Using ",Object(l.b)("inlineCode",{parentName:"h5"},"yarn"))),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("pre",{parentName:"div"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn add -D @graphql-codegen/typescript-apollo-angular\n")))),Object(l.b)("h2",{id:"api-reference"},"API Reference"),Object(l.b)("h3",{id:"ngmodule"},Object(l.b)("inlineCode",{parentName:"h3"},"ngModule")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,"Allows to define ",Object(l.b)("inlineCode",{parentName:"p"},"ngModule")," as part of the plugin's config so it's globally available."),Object(l.b)("h4",{id:"usage-examples"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  ngModule: ./path/to/module#MyModule\n")),Object(l.b)("h3",{id:"namedclient"},Object(l.b)("inlineCode",{parentName:"h3"},"namedClient")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,"Defined the global value of ",Object(l.b)("inlineCode",{parentName:"p"},"namedClient"),"."),Object(l.b)("h4",{id:"usage-examples-1"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namedClient: 'customName'\n")),Object(l.b)("h3",{id:"servicename"},Object(l.b)("inlineCode",{parentName:"h3"},"serviceName")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,"Defined the global value of ",Object(l.b)("inlineCode",{parentName:"p"},"serviceName"),"."),Object(l.b)("h4",{id:"usage-examples-2"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  serviceName: 'MySDK'\n")),Object(l.b)("h3",{id:"serviceprovidedinroot"},Object(l.b)("inlineCode",{parentName:"h3"},"serviceProvidedInRoot")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,"Defined the global value of ",Object(l.b)("inlineCode",{parentName:"p"},"serviceProvidedInRoot"),"."),Object(l.b)("h4",{id:"usage-examples-3"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  serviceProvidedInRoot: false\n")),Object(l.b)("h3",{id:"sdkclass"},Object(l.b)("inlineCode",{parentName:"h3"},"sdkClass")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," in order to generate a SDK service class that uses all generated services."),Object(l.b)("h3",{id:"querysuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"querySuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"GQL")),Object(l.b)("p",null,"Allows to define a custom suffix for query operations."),Object(l.b)("h4",{id:"usage-examples-4"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  querySuffix: 'QueryService'\n")),Object(l.b)("h3",{id:"mutationsuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"mutationSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"GQL")),Object(l.b)("p",null,"Allows to define a custom suffix for mutation operations."),Object(l.b)("h4",{id:"usage-examples-5"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  mutationSuffix: 'MutationService'\n")),Object(l.b)("h3",{id:"subscriptionsuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"subscriptionSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"GQL")),Object(l.b)("p",null,"Allows to define a custom suffix for Subscription operations."),Object(l.b)("h4",{id:"usage-examples-6"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  subscriptionSuffix: 'SubscriptionService'\n")),Object(l.b)("h3",{id:"apolloangularpackage"},Object(l.b)("inlineCode",{parentName:"h3"},"apolloAngularPackage")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"'apollo-angular'")),Object(l.b)("p",null,"Allows to define a custom Apollo-Angular package to import types from."),Object(l.b)("h3",{id:"nographqltag"},Object(l.b)("inlineCode",{parentName:"h3"},"noGraphQLTag")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Deprecated. Changes the documentMode to ",Object(l.b)("inlineCode",{parentName:"p"},"documentNode"),"."),Object(l.b)("h3",{id:"gqlimport"},Object(l.b)("inlineCode",{parentName:"h3"},"gqlImport")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"gql#graphql-tag")),Object(l.b)("p",null,"Customize from which module will ",Object(l.b)("inlineCode",{parentName:"p"},"gql")," be imported from.\nThis is useful if you want to use modules other than ",Object(l.b)("inlineCode",{parentName:"p"},"graphql-tag"),", e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"graphql.macro"),"."),Object(l.b)("h4",{id:"usage-examples-7"},"Usage Examples"),Object(l.b)("h5",{id:"graphqlmacro"},"graphql.macro"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: graphql.macro#gql\n")),Object(l.b)("h5",{id:"gatsby"},"Gatsby"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  gqlImport: gatsby#graphql\n")),Object(l.b)("h3",{id:"noexport"},Object(l.b)("inlineCode",{parentName:"h3"},"noExport")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set this configuration to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if you wish to tell codegen to generate code with no ",Object(l.b)("inlineCode",{parentName:"p"},"export")," identifier."),Object(l.b)("h3",{id:"dedupeoperationsuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"dedupeOperationSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set this configuration to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if you wish to make sure to remove duplicate operation name suffix."),Object(l.b)("h3",{id:"omitoperationsuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"omitOperationSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Set this configuration to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if you wish to disable auto add suffix of operation name, like ",Object(l.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Mutation"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Subscription"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Fragment"),"."),Object(l.b)("h3",{id:"operationresultsuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"operationResultSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"Adds a suffix to generated operation result type names"),Object(l.b)("h3",{id:"documentvariableprefix"},Object(l.b)("inlineCode",{parentName:"h3"},"documentVariablePrefix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"Changes the GraphQL operations variables prefix."),Object(l.b)("h3",{id:"documentvariablesuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"documentVariableSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"Document")),Object(l.b)("p",null,"Changes the GraphQL operations variables suffix."),Object(l.b)("h3",{id:"fragmentvariableprefix"},Object(l.b)("inlineCode",{parentName:"h3"},"fragmentVariablePrefix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"Changes the GraphQL fragments variables prefix."),Object(l.b)("h3",{id:"fragmentvariablesuffix"},Object(l.b)("inlineCode",{parentName:"h3"},"fragmentVariableSuffix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"FragmentDoc")),Object(l.b)("p",null,"Changes the GraphQL fragments variables suffix."),Object(l.b)("h3",{id:"documentmode"},Object(l.b)("inlineCode",{parentName:"h3"},"documentMode")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"DocumentMode"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"graphQLTag")),Object(l.b)("p",null,"Declares how DocumentNode are created:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"graphQLTag"),": ",Object(l.b)("inlineCode",{parentName:"li"},"graphql-tag")," or other modules (check ",Object(l.b)("inlineCode",{parentName:"li"},"gqlImport"),") will be used to generate document nodes. If this is used, document nodes are generated on client side i.e. the module used to generate this will be shipped to the client"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"documentNode"),": document nodes will be generated as objects when we generate the templates."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"documentNodeImportFragments"),": Similar to documentNode except it imports external fragments instead of embedding them."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"external"),": document nodes are imported from an external file. To be used with ",Object(l.b)("inlineCode",{parentName:"li"},"importDocumentNodeExternallyFrom"))),Object(l.b)("h3",{id:"importoperationtypesfrom"},Object(l.b)("inlineCode",{parentName:"h3"},"importOperationTypesFrom")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"This config is used internally by presets, but you can use it manually to tell codegen to prefix all base types that it's using.\nThis is useful if you wish to generate base types from ",Object(l.b)("inlineCode",{parentName:"p"},"typescript-operations")," plugin into a different file, and import it from there."),Object(l.b)("h3",{id:"importdocumentnodeexternallyfrom"},Object(l.b)("inlineCode",{parentName:"h3"},"importDocumentNodeExternallyFrom")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"This config should be used if ",Object(l.b)("inlineCode",{parentName:"p"},"documentMode")," is ",Object(l.b)("inlineCode",{parentName:"p"},"external"),". This has 2 usage:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"any string: This would be the path to import document nodes from. This can be used if we want to manually create the document nodes e.g. Use ",Object(l.b)("inlineCode",{parentName:"li"},"graphql-tag")," in a separate file and export the generated document"),Object(l.b)("li",{parentName:"ul"},"'near-operation-file': This is a special mode that is intended to be used with ",Object(l.b)("inlineCode",{parentName:"li"},"near-operation-file")," preset to import document nodes from those files. If these files are ",Object(l.b)("inlineCode",{parentName:"li"},".graphql")," files, we make use of webpack loader.")),Object(l.b)("h4",{id:"usage-examples-8"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: path/to/document-node-file\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  documentMode: external\n  importDocumentNodeExternallyFrom: near-operation-file\n")),Object(l.b)("h3",{id:"scalars"},Object(l.b)("inlineCode",{parentName:"h3"},"scalars")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"ScalarsMap")),Object(l.b)("p",null,"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),Object(l.b)("h4",{id:"usage-examples-9"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),'config:\n  scalars:\n    DateTime: Date\n    JSON: "{ [key: string]: any }"\n')),Object(l.b)("h3",{id:"namingconvention"},Object(l.b)("inlineCode",{parentName:"h3"},"namingConvention")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"pascal-case#pascalCase")),Object(l.b)("p",null,"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",Object(l.b)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",Object(l.b)("inlineCode",{parentName:"p"},"typeNames"),", ",Object(l.b)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',Object(l.b)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),Object(l.b)("h4",{id:"usage-examples-10"},"Usage Examples"),Object(l.b)("h5",{id:"override-all-names"},"Override All Names"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: lower-case#lowerCase\n")),Object(l.b)("h5",{id:"upper-case-enum-values"},"Upper-case enum values"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    enumValues: upper-case#upperCase\n")),Object(l.b)("h5",{id:"keep-names-as-is"},"Keep names as is"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention: keep\n")),Object(l.b)("h5",{id:"remove-underscores"},"Remove Underscores"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  namingConvention:\n    typeNames: pascal-case#pascalCase\n    transformUnderscore: true\n")),Object(l.b)("h3",{id:"typesprefix"},Object(l.b)("inlineCode",{parentName:"h3"},"typesPrefix")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),Object(l.b)("p",null,"Prefixes all the generated types."),Object(l.b)("h4",{id:"usage-examples-11"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  typesPrefix: I\n")),Object(l.b)("h3",{id:"skiptypename"},Object(l.b)("inlineCode",{parentName:"h3"},"skipTypename")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Does not add __typename to the generated types, unless it was specified in the selection set."),Object(l.b)("h4",{id:"usage-examples-12"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  skipTypename: true\n")),Object(l.b)("h3",{id:"nonoptionaltypename"},Object(l.b)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),Object(l.b)("p",null,"type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Automatically adds ",Object(l.b)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),Object(l.b)("h4",{id:"usage-examples-13"},"Usage Examples"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yml"}),"config:\n  nonOptionalTypename: true\n")))}b.isMDXComponent=!0},394:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),b=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=b(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(t),u=a,m=d["".concat(o,".").concat(u)]||d[u]||s[u]||l;return t?i.a.createElement(m,r(r({ref:n},p),{},{components:t})):i.a.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=u;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var p=2;p<l;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);