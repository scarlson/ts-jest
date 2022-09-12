"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[414],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),f=a,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||s;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(6010),s="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},4259:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7462),a=n(7294),s=n(6010),o=n(1048),i=n(3609),l=n(1943),u=n(2957),p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t,n,o=e.lazy,c=e.block,f=e.defaultValue,d=e.values,g=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var T=null===f?f:null!=(t=null!=f?f:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==T&&!y.some((function(e){return e.value===T})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.U)(),j=k.tabGroupChoices,x=k.setTabGroupChoices,N=(0,a.useState)(T),w=N[0],C=N[1],S=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=j[g];null!=E&&E!==w&&y.some((function(e){return e.value===E}))&&C(E)}var _=function(e){var t=e.currentTarget,n=S.indexOf(t),r=y[n].value;r!==w&&(O(t),C(r),null!=g&&x(g,String(r)))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=S.indexOf(e.currentTarget)+1;n=null!=(r=S[a])?r:S[0];break;case"ArrowLeft":var s,o=S.indexOf(e.currentTarget)-1;n=null!=(s=S[o])?s:S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return S.push(e)},onKeyDown:Z,onFocus:_,onClick:_},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function f(e){var t=(0,o.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},3859:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return f}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),o=n(4259),i=n(425),l=["components"],u={title:"AST transformers option"},p=void 0,m={unversionedId:"getting-started/options/astTransformers",id:"getting-started/options/astTransformers",title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/docs/getting-started/options/astTransformers.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/astTransformers",permalink:"/ts-jest/docs/next/getting-started/options/astTransformers",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/astTransformers.md",tags:[],version:"current",lastUpdatedBy:"Ahn",lastUpdatedAt:1662988724,formattedLastUpdatedAt:"Sep 12, 2022",frontMatter:{title:"AST transformers option"}},c={},f=[{value:"Examples",id:"examples",level:3},{value:"Basic Transformers",id:"basic-transformers",level:4},{value:"Configuring transformers with options",id:"configuring-transformers-with-options",level:4},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",level:3}],d={toc:f};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," by default does hoisting for a few ",(0,s.kt)("inlineCode",{parentName:"p"},"jest")," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," to include into compilation process."),(0,s.kt)("p",null,"The option is ",(0,s.kt)("inlineCode",{parentName:"p"},"astTransformers")," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"before")," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",(0,s.kt)("inlineCode",{parentName:"li"},"import")," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"require")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"define")," )."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"after")," means your transformers get run after TS ones, which gets transpiled syntax."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"afterDeclarations")," means your transformers get run during ",(0,s.kt)("inlineCode",{parentName:"li"},"d.ts")," generation phase, allowing you to transform output type declarations.")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("h4",{id:"basic-transformers"},"Basic Transformers"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: ['my-custom-transformer'],\n        },\n      },\n    ],\n  },\n}\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from './types'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: ['my-custom-transformer'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,s.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      "<regex_match_files>": [\n        "ts-jest",\n        {\n          "astTransformers": {\n            "before": ["my-custom-transformer"]\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,s.kt)("h4",{id:"configuring-transformers-with-options"},"Configuring transformers with options"),(0,s.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: [\n            {\n              path: 'my-custom-transformer-that-needs-extra-opts',\n              options: {}, // extra options to pass to transformers here\n            },\n          ],\n        },\n      },\n    ],\n  },\n}\n"))),(0,s.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from './types'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    '<regex_match_files>': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: [\n            {\n              path: 'my-custom-transformer-that-needs-extra-opts',\n              options: {}, // extra options to pass to transformers here\n            },\n          ],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,s.kt)(i.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      "<regex_match_files>": [\n        "ts-jest",\n        {\n          "astTransformers": {\n            "before": [\n              {\n                "path": "my-custom-transformer-that-needs-extra-opts",\n                "options": {} // extra options to pass to transformers here\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,s.kt)("h3",{id:"writing-custom-typescript-ast-transformers"},"Writing custom TypeScript AST transformers"),(0,s.kt)("p",null,"To write a custom TypeScript AST transformers, one can take a look at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest/tree/main/src/transformers"},"the one")," that ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," is using."))}g.isMDXComponent=!0}}]);