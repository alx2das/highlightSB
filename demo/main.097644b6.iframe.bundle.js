(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FilePreview/style.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".steps-preview {\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\ttop: 10px;\n\theight: calc(100vh - 20px);\n\tbackground: #f2f4f5;\n\tborder-radius: 16px;\n}\n",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/ViewCode/style.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,'.view-code {\n\tdisplay: grid;\n\toverflow-y: hidden;\n}\n\n.view-code pre {\n\tpadding: 0 0 30px 0;\n\tmargin: 0;\n}\n\n.view-code span.vc-line {\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tpadding: 0 15px 0 15px;\n}\n\n.view-code span.vc-line._added {\n\tbackground: rgba(32, 212, 98, 0.08);\n\tborder-left: 4px solid #205dd4;\n\tpadding-left: 11px;\n}\n\n.view-code span.vc-line._removed > .vc-line-number::before {\n\tcontent: "";\n\tposition: absolute;\n\ttop: -5px;\n\tleft: -15px;\n\twidth: 0;\n\theight: 0;\n\tborder-top: 5px solid transparent;\n\tborder-left: 10px solid #9ea8ba;\n\tborder-bottom: 5px solid transparent;\n}\n\n.view-code span.vc-line._update {\n\tbackground: rgba(32, 93, 212, 0.08);\n\tborder-left: 4px solid #205dd4;\n\tpadding-left: 11px;\n}\n\n.view-code span.vc-line .vc-line-number {\n\tposition: relative;\n\tmin-width: 20px;\n\ttext-align: right;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t        user-select: none;\n}\n\n.view-code span.vc-line .vc-line-content {\n\tpadding-left: 20px;\n}\n',""]),module.exports=exports},"./src/components/FilePreview/style.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FilePreview/style.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/ViewCode/style.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/ViewCode/style.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/index.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return LessonSection_LessonSection})),__webpack_require__.d(__webpack_exports__,"c",(function(){return LessonSteps_LessonSteps})),__webpack_require__.d(__webpack_exports__,"a",(function(){return FilePreview_FilePreview})),__webpack_require__.d(__webpack_exports__,"d",(function(){return ViewCode_ViewCode}));__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var LessonSection_LessonSection=function LessonSection(props){return function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure undefined")}(props),Object(jsx_runtime.jsx)("div",{children:"LessonSection"})};LessonSection_LessonSection.displayName="LessonSection";try{LessonSection_LessonSection.displayName="LessonSection",LessonSection_LessonSection.__docgenInfo={description:"",displayName:"LessonSection",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LessonSection/LessonSection.tsx#LessonSection"]={docgenInfo:LessonSection_LessonSection.__docgenInfo,name:"LessonSection",path:"src/components/LessonSection/LessonSection.tsx#LessonSection"})}catch(__react_docgen_typescript_loader_error){}var LessonSteps_LessonSteps=function LessonSteps(props){return function LessonSteps_objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure undefined")}(props),Object(jsx_runtime.jsx)("div",{children:"LessonSteps"})};LessonSteps_LessonSteps.displayName="LessonSteps";try{LessonSteps_LessonSteps.displayName="LessonSteps",LessonSteps_LessonSteps.__docgenInfo={description:"",displayName:"LessonSteps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LessonSteps/LessonSteps.tsx#LessonSteps"]={docgenInfo:LessonSteps_LessonSteps.__docgenInfo,name:"LessonSteps",path:"src/components/LessonSteps/LessonSteps.tsx#LessonSteps"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");var lib=__webpack_require__("./node_modules/highlight.js/lib/index.js"),lib_default=__webpack_require__.n(lib),diff=__webpack_require__("./node_modules/diff/dist/diff.js");function searchMarkers(prev,next){if(!prev||!next)return{};var _arrDiff$reduce=diff.diffLines(prev,next).reduce((function(accum,change){return(change.added||change.removed)&&(accum.markers=function create(_ref){for(var markers=_ref.markers,type=_ref.type,_ref$number=_ref.number,number=void 0===_ref$number?0:_ref$number,_ref$count=_ref.count,count=void 0===_ref$count?0:_ref$count,_count="removed"===type?1:count,i=0;i<_count;i++){var line=number+i;markers[line]=Object.assign({},markers[line]||{}),markers[line][type]=!0}return markers}({markers:accum.markers,number:accum.number,type:change.added?"added":"removed",count:change.count})),change.removed||(accum.number+=change.count||0),accum}),{markers:{},number:0});return _arrDiff$reduce.markers}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ViewCodeLine_ViewCodeLine=function ViewCodeLine(_ref){var content=_ref.content,number=_ref.number,marker=_ref.marker,hideNumber=_ref.hideNumber;return Object(jsx_runtime.jsxs)("span",{"data-line":number,className:classnames_default()("vc-line",{_added:marker.added&&!marker.removed,_removed:!marker.added&&marker.removed,_update:marker.added&&marker.removed}),children:[!hideNumber&&Object(jsx_runtime.jsx)("span",{className:"vc-line-number",children:number}),Object(jsx_runtime.jsx)("span",{className:"vc-line-content",dangerouslySetInnerHTML:{__html:content}})]})};ViewCodeLine_ViewCodeLine.displayName="ViewCodeLine";var ViewCode_ViewCodeLine=ViewCodeLine_ViewCodeLine;try{ViewCodeLine_ViewCodeLine.displayName="ViewCodeLine",ViewCodeLine_ViewCodeLine.__docgenInfo={description:"",displayName:"ViewCodeLine",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},marker:{defaultValue:null,description:"",name:"marker",required:!0,type:{name:"Marker"}},hideNumber:{defaultValue:null,description:"",name:"hideNumber",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ViewCode/ViewCodeLine.tsx#ViewCodeLine"]={docgenInfo:ViewCodeLine_ViewCodeLine.__docgenInfo,name:"ViewCodeLine",path:"src/components/ViewCode/ViewCodeLine.tsx#ViewCodeLine"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/ViewCode/style.css");var ViewCode_ViewCode=function ViewCode(props){var nextValue=props.nextValue,_props$prevValue=props.prevValue,prevValue=void 0===_props$prevValue?"":_props$prevValue,_props$startNumber=props.startNumber,startNumber=void 0===_props$startNumber?1:_props$startNumber,_props$hideNumber=props.hideNumber,hideNumber=void 0!==_props$hideNumber&&_props$hideNumber,markers=searchMarkers(prevValue,nextValue),htmlLines=function lineNumbering(value){var _lines,html=lib_default.a.highlightAuto(value).value,lines=function getLines(value){return value.length?value.split(/\r?\n/g):[]}(html);return html?(""===(null===(_lines=lines[lines.length-1])||void 0===_lines?void 0:_lines.trim())&&lines.pop(),lines.length?lines:[html]):[value]}(nextValue);return Object(jsx_runtime.jsx)("div",{className:"view-code",children:Object(jsx_runtime.jsx)("pre",{children:Object(jsx_runtime.jsx)("code",{children:htmlLines.map((function(line,index){return Object(jsx_runtime.jsx)(ViewCode_ViewCodeLine,{content:line,number:startNumber+index,marker:markers[index]||{},hideNumber:Boolean(hideNumber)},index+"-line")}))})})})};ViewCode_ViewCode.displayName="ViewCode";try{ViewCode_ViewCode.displayName="ViewCode",ViewCode_ViewCode.__docgenInfo={description:"",displayName:"ViewCode",props:{nextValue:{defaultValue:null,description:"",name:"nextValue",required:!0,type:{name:"string"}},prevValue:{defaultValue:null,description:"",name:"prevValue",required:!1,type:{name:"string"}},startNumber:{defaultValue:null,description:"",name:"startNumber",required:!1,type:{name:"number"}},hideNumber:{defaultValue:null,description:"",name:"hideNumber",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ViewCode/ViewCode.tsx#ViewCode"]={docgenInfo:ViewCode_ViewCode.__docgenInfo,name:"ViewCode",path:"src/components/ViewCode/ViewCode.tsx#ViewCode"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/FilePreview/style.css");var _excluded=["fileName","image"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FilePreview_FilePreview=function FilePreview(props){var fileName=props.fileName,image=props.image,otherProps=_objectWithoutProperties(props,_excluded);return Object(jsx_runtime.jsxs)("div",{className:"steps-preview",id:"preview-file",children:[fileName&&Object(jsx_runtime.jsx)("div",{className:"steps-preview__name",children:fileName}),image&&Object(jsx_runtime.jsx)("div",{className:"steps-preview__image",children:image}),Object(jsx_runtime.jsx)("div",{className:"steps-preview__code",children:Object(jsx_runtime.jsx)(ViewCode_ViewCode,Object.assign({},otherProps))})]})};FilePreview_FilePreview.displayName="FilePreview";try{FilePreview_FilePreview.displayName="FilePreview",FilePreview_FilePreview.__docgenInfo={description:"",displayName:"FilePreview",props:{fileName:{defaultValue:null,description:"",name:"fileName",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},nextValue:{defaultValue:null,description:"",name:"nextValue",required:!0,type:{name:"string"}},prevValue:{defaultValue:null,description:"",name:"prevValue",required:!1,type:{name:"string"}},startNumber:{defaultValue:null,description:"",name:"startNumber",required:!1,type:{name:"number"}},hideNumber:{defaultValue:null,description:"",name:"hideNumber",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FilePreview/FilePreview.tsx#FilePreview"]={docgenInfo:FilePreview_FilePreview.__docgenInfo,name:"FilePreview",path:"src/components/FilePreview/FilePreview.tsx#FilePreview"})}catch(__react_docgen_typescript_loader_error){}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./FilePreview.stories.tsx":"./stories/FilePreview.stories.tsx","./LessonSection.stories.tsx":"./stories/LessonSection.stories.tsx","./LessonSteps.stories.tsx":"./stories/LessonSteps.stories.tsx","./ViewCode.stories.tsx":"./stories/ViewCode.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/FilePreview.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/data.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"FilePreview",component:_src__WEBPACK_IMPORTED_MODULE_2__.a,argTypes:{fileName:{control:"text"},image:{control:"text"},prevValue:{control:"text"},nextValue:{control:"text"},startNumber:{control:{type:"number",min:1,max:30}},hideNumber:{control:"boolean",defaultValue:!1}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.a,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={fileName:"ReminderListDataSource.swift",image:"IMAGE",nextValue:_data__WEBPACK_IMPORTED_MODULE_3__.a,prevValue:_data__WEBPACK_IMPORTED_MODULE_3__.b},Primary.parameters=Object.assign({storySource:{source:"(args) => (\n\t<FilePreview {...args} />\n)"}},Primary.parameters)},"./stories/LessonSection.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"LessonSection",component:_src__WEBPACK_IMPORTED_MODULE_2__.b,argTypes:{}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.b,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={},Primary.parameters=Object.assign({storySource:{source:"(args) => (\n\t<LessonSection {...args} />\n)"}},Primary.parameters)},"./stories/LessonSteps.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"LessonSteps",component:_src__WEBPACK_IMPORTED_MODULE_2__.c,argTypes:{}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.c,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={},Primary.parameters=Object.assign({storySource:{source:"(args) => (\n\t<LessonSteps {...args} />\n)"}},Primary.parameters)},"./stories/ViewCode.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var _src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/data.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"ViewCode",component:_src__WEBPACK_IMPORTED_MODULE_2__.d,argTypes:{prevValue:{control:"text"},nextValue:{control:"text"},startNumber:{control:{type:"number",min:1,max:30}},hideNumber:{control:"boolean",defaultValue:!1}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_src__WEBPACK_IMPORTED_MODULE_2__.d,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={prevValue:_data__WEBPACK_IMPORTED_MODULE_3__.b,nextValue:_data__WEBPACK_IMPORTED_MODULE_3__.a},Primary.parameters=Object.assign({storySource:{source:"(args) => (\n\t<ViewCode {...args} />\n)"}},Primary.parameters)},"./stories/data.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return prevValue})),__webpack_require__.d(__webpack_exports__,"a",(function(){return nextValue}));var prevValue='{\n    "@babel/core": "^7.18.6",\n    "@storybook/addon-actions": "^6.5.9",\n    "@storybook/addon-essentials": "^6.5.9",\n    "@storybook/addon-interactions": "^6.5.9",\n    "@storybook/addon-links": "^6.5.9",\n    "@storybook/builder-webpack4": "^6.5.9",\n    "@storybook/manager-webpack4": "^6.5.9",\n    "@storybook/react": "^6.5.9",\n    "@storybook/testing-library": "^0.0.13",\n    "@types/diff": "^5.0.2",\n    "@types/node": "^18.0.3",\n    "@types/react": "^17.0.47",\n    "@types/react-dom": "^17.0.17",\n    "babel-loader": "^8.2.5",\n    "eslint-config-prettier": "^8.5.0",\n    "husky": "^8.0.1",\n    "lint-staged": "^13.0.3",\n    "prettier": "^2.7.1",\n    "react": "^17.0.2",\n    "react-dom": "^17.0.2",\n    "typescript": "^4.7.4"\n}',nextValue='{\n    "@babel/core": "^7.18.6",\n    "@babel/cli": "^7.18.6",\n    "@storybook/addon-actions": "^6.5.9",\n    "@storybook/addon-essentials": "^6.5.9",\n    "@storybook/addon-interactions": "^6.5.9",\n    "@storybook/addon-links": "^6.5.9",\n    "@storybook/builder-webpack4": "^6.5.9",\n    "@storybook/manager-webpack4": "^6.5.9",\n    "@storybook/react": "^6.5.9",\n    "@storybook/testing-library": "^0.0.13",\n    "babel-loader": "^8.2.5",\n    "eslint-config-prettier": "^8.5.0",\n    "husky": "^8.0.1",\n    "lint-staged": "^13.0.3",\n    "prettier": "^2.7.1",\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "typescript": "^4.7.4"\n}'},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);