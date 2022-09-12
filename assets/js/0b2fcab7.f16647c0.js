"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[5519],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,g=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5147:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],s={id:"migration",title:"Migration from <=23.10"},c=void 0,l={unversionedId:"migration",id:"version-27.0/migration",title:"Migration from <=23.10",description:"You can use the config:migrate tool of ts-jest CLI if you're coming from an older version to help you migrate your Jest configuration.",source:"@site/versioned_docs/version-27.0/migration.md",sourceDirName:".",slug:"/migration",permalink:"/ts-jest/docs/27.0/migration",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/migration.md",tags:[],version:"27.0",lastUpdatedBy:"Ahn",lastUpdatedAt:1662988724,formattedLastUpdatedAt:"Sep 12, 2022",frontMatter:{id:"migration",title:"Migration from <=23.10"},sidebar:"version-27.0-docs",previous:{title:"Babel7 or TypeScript",permalink:"/ts-jest/docs/27.0/babel7-or-ts"},next:{title:"Debugging ts-jest",permalink:"/ts-jest/docs/27.0/debugging"}},p={},u=[{value:"NPM",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"NPM",id:"npm-1",level:3},{value:"Yarn",id:"yarn-1",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"config:migrate")," tool of ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," CLI if you're coming from an older version to help you migrate your Jest configuration."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you're using ",(0,a.kt)("inlineCode",{parentName:"em"},"jest.config.js"),":")),(0,a.kt)("h3",{id:"npm"},"NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-jest config:migrate jest.config.js\n")),(0,a.kt)("h3",{id:"yarn"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn ts-jest config:migrate jest.config.js\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you're using ",(0,a.kt)("inlineCode",{parentName:"em"},"jest")," config property of ",(0,a.kt)("inlineCode",{parentName:"em"},"package.json"),":")),(0,a.kt)("h3",{id:"npm-1"},"NPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-jest config:migrate package.json\n")),(0,a.kt)("h3",{id:"yarn-1"},"Yarn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn ts-jest config:migrate package.json\n")))}f.isMDXComponent=!0}}]);