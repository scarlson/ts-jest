"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4990],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=s.createContext({}),u=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,f=m["".concat(i,".").concat(b)]||m[b]||c[b]||r;return n?s.createElement(f,o(o({ref:t},p),{},{components:n})):s.createElement(f,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(7294),a=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return s.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>x});var s=n(7462),a=n(7294),r=n(6010),o=n(2957),l=n(6775),i=n(5238),u=n(3609),p=n(2560);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=m(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[i,u]=f({queryString:n,groupId:s}),[c,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,p.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),g=(()=>{const e=i??c;return b({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),d(e)}),[u,d,r]),tabValues:r}}var g=n(1048);const j="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),s=u[n].value;s!==l&&(c(t),i(s))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,s.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:b,onClick:m},o,{className:(0,r.Z)("tabs__item",h,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s}))))}function v(e){const t=d(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",j)},a.createElement(y,(0,s.Z)({},e,t)),a.createElement(k,(0,s.Z)({},e,t)))}function x(e){const t=(0,g.Z)();return a.createElement(v,(0,s.Z)({key:String(t)},e))}},1366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var s=n(7462),a=(n(7294),n(4137)),r=n(3992),o=n(425);const l={title:"Babel Config option"},i=void 0,u={unversionedId:"getting-started/options/babelConfig",id:"getting-started/options/babelConfig",title:"Babel Config option",description:"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript.",source:"@site/docs/getting-started/options/babelConfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/babelConfig",permalink:"/ts-jest/docs/next/getting-started/options/babelConfig",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/babelConfig.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1679867694,formattedLastUpdatedAt:"Mar 26, 2023",frontMatter:{title:"Babel Config option"}},p={},c=[{value:"Examples",id:"examples",level:3},{value:"Use default <code>babelrc</code> file",id:"use-default-babelrc-file",level:4},{value:"Path to a <code>babelrc</code> file",id:"path-to-a-babelrc-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4}],m={toc:c};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," by default does ",(0,a.kt)("strong",{parentName:"p"},"NOT")," use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," can call the BabelJest processor once TypeScript has transformed the source into JavaScript."),(0,a.kt)("p",null,"The option is ",(0,a.kt)("inlineCode",{parentName:"p"},"babelConfig")," and it works pretty much as the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig")," option, except that it is disabled by default. Here is the possible values it can take:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false"),": the default, disables the use of Babel"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),": enables Babel processing. ",(0,a.kt)("inlineCode",{parentName:"li"},"ts-jest")," will try to find a ",(0,a.kt)("inlineCode",{parentName:"li"},".babelrc"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".babelrc.js"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"babel.config.js")," file or a ",(0,a.kt)("inlineCode",{parentName:"li"},"babel")," section in the ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," file of your project and use it as the config to pass to ",(0,a.kt)("inlineCode",{parentName:"li"},"babel-jest")," processor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{ ... }"),": inline ",(0,a.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/next/options"},"Babel options"),". You can also set this to an empty object (",(0,a.kt)("inlineCode",{parentName:"li"},"{}"),") so that the default Babel config file is not used.")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"use-default-babelrc-file"},"Use default ",(0,a.kt)("inlineCode",{parentName:"h4"},"babelrc")," file"),(0,a.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: true,\n      },\n    ],\n  },\n}\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: true,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,a.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "babelConfig": true\n        }\n      ]\n    }\n  }\n}\n')))),(0,a.kt)("h4",{id:"path-to-a-babelrc-file"},"Path to a ",(0,a.kt)("inlineCode",{parentName:"h4"},"babelrc")," file"),(0,a.kt)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",(0,a.kt)("inlineCode",{parentName:"p"},"\\<rootDir>")," in the path, or use an absolute path (this last one is strongly not recommended)."),(0,a.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: 'babelrc.test.js',\n      },\n    ],\n  },\n}\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: 'babelrc.test.js',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,a.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "babelConfig": "babelrc.test.js"\n        }\n      ]\n    }\n  }\n}\n')))),(0,a.kt)("p",null,"or importing directly the config file:"),(0,a.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: require('./babelrc.test.js'),\n      },\n    ],\n  },\n}\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\nimport babelConfig from './babelrc.test.js'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig,\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n")))),(0,a.kt)("h4",{id:"inline-compiler-options"},"Inline compiler options"),(0,a.kt)("p",null,"Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/next/options"},"Babel options")," to know what can be used there."),(0,a.kt)(r.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: {\n          comments: false,\n          plugins: ['@babel/plugin-transform-for-of'],\n        },\n      },\n    ],\n  },\n}\n"))),(0,a.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        babelConfig: {\n          comments: false,\n          plugins: ['@babel/plugin-transform-for-of'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,a.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "babelConfig": {\n            "comments": false,\n            "plugins": ["@babel/plugin-transform-for-of"]\n          }\n        }\n      ]\n    }\n  }\n}\n')))))}b.isMDXComponent=!0}}]);