(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FilePreview/style.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".steps-preview {\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\ttop: 10px;\n\theight: calc(100vh - 20px);\n\tbackground: #f2f4f5;\n\tborder-radius: 16px;\n}\n",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/LessonSection/style.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".info {\n\tfont-size: 18px;\n\tline-height: 28px;\n}\n.info__order-name {\n\tmargin-bottom: 10px;\n}\n.info__title {\n\tmargin-bottom: 20px;\n}\n",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/LessonSteps/style.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,'.page-section._steps {\n\tdisplay: grid;\n\tgrid-template-columns: 390px minmax(0, auto); /* 37.8640776699% = 390px / 1030px * 100 */\n\t-moz-column-gap: 40px;\n\t     column-gap: 40px;\n\tmargin-top: 80px;\n\twidth: 100%;\n}\n\n.steps {\n\tmargin-bottom: 92vh;\n}\n\n/* step item */\n.steps-item {\n\tfont-size: 14px;\n\tline-height: 22px;\n}\n.steps-item + .steps-item {\n\tmargin-top: 100px;\n}\n\n/* step block*/\n.steps-item .inner-block {\n\tposition: relative;\n\tpadding: 30px 20px 30px 28px;\n\tborder: 1px solid #c8d1d7;\n\tborder-radius: 16px;\n\toverflow: hidden;\n}\n.steps-item._active .inner-block::before {\n\tcontent: "";\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tbottom: 0;\n\tborder-left: 8px solid #205dd4;\n}\n/* step title */\n.steps-item .inner-title {\n\tmargin-bottom: 20px;\n}\n/* step comment */\n.steps-item .inner-comment {\n\tmargin-top: 20px;\n}\n\n/* steps preview code & video */\n.steps-preview {\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\ttop: 10px;\n\theight: calc(100vh - 20px);\n\tbackground: #f2f4f5;\n\tborder-radius: 16px;\n}\n',""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/ViewCode/style.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,'.view-code {\n\tdisplay: grid;\n\toverflow-y: hidden;\n}\n\n.view-code pre {\n\tpadding: 0 0 30px 0;\n\tmargin: 0;\n}\n\n.view-code span.vc-line {\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tpadding: 0 15px 0 15px;\n}\n\n.view-code span.vc-line._added {\n\tbackground: rgba(32, 212, 98, 0.08);\n\tborder-left: 4px solid #205dd4;\n\tpadding-left: 11px;\n}\n\n.view-code span.vc-line._removed > .vc-line-number::before {\n\tcontent: "";\n\tposition: absolute;\n\ttop: -5px;\n\tleft: -15px;\n\twidth: 0;\n\theight: 0;\n\tborder-top: 5px solid transparent;\n\tborder-left: 10px solid #9ea8ba;\n\tborder-bottom: 5px solid transparent;\n}\n\n.view-code span.vc-line._update {\n\tbackground: rgba(32, 93, 212, 0.08);\n\tborder-left: 4px solid #205dd4;\n\tpadding-left: 11px;\n}\n\n.view-code span.vc-line .vc-line-number {\n\tposition: relative;\n\tmin-width: 20px;\n\ttext-align: right;\n\t-webkit-user-select: none;\n\t   -moz-user-select: none;\n\t        user-select: none;\n}\n\n.view-code span.vc-line .vc-line-content {\n\tpadding-left: 20px;\n}\n',""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/Layout/fonts.css":function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js"),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__("./stories/Layout/fonts/GothamPro-Bold.woff2"),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__("./stories/Layout/fonts/GothamPro-Medium.woff2"),___CSS_LOADER_URL_IMPORT_2___=__webpack_require__("./stories/Layout/fonts/GothamPro.woff2");exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);exports.push([module.i,'@font-face {\n\tfont-family: "Gotham Pro";\n\tsrc: url('+___CSS_LOADER_URL_REPLACEMENT_0___+') format("woff2");\n\tfont-weight: 700;\n\tfont-style: normal;\n\tfont-display: swap;\n}\n\n@font-face {\n\tfont-family: "Gotham Pro";\n\tsrc: url('+___CSS_LOADER_URL_REPLACEMENT_1___+') format("woff2");\n\tfont-weight: 500;\n\tfont-style: normal;\n\tfont-display: swap;\n}\n\n@font-face {\n\tfont-family: "Gotham Pro";\n\tsrc: url('+___CSS_LOADER_URL_REPLACEMENT_2___+') format("woff2");\n\tfont-weight: normal;\n\tfont-style: normal;\n\tfont-display: swap;\n}\n',""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/Layout/reset.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\nbody {\n\tline-height: normal;\n}\nol,\nul {\n\tlist-style: none;\n}\nblockquote,\nq {\n\tquotes: none;\n}\nblockquotebefore,\nblockquoteafter,\nqbefore,\nqafter {\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*,\n*::after,\n*::before {\n\tbox-sizing: border-box;\n}\n",""]),module.exports=exports},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/Layout/style.css":function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_AT_RULE_IMPORT_0___=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/Layout/fonts.css"),___CSS_LOADER_AT_RULE_IMPORT_1___=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/Layout/reset.css");(exports=___CSS_LOADER_API_IMPORT___(!1)).i(___CSS_LOADER_AT_RULE_IMPORT_0___),exports.i(___CSS_LOADER_AT_RULE_IMPORT_1___),exports.push([module.i,'/*  VARS\n\t-------------------------------------------------- */\n:root {\n\t--text-color: rgba(49, 62, 98, 0.8);\n}\n\n/*  STYLES\n\t-------------------------------------------------- */\nbody {\n\tpadding: 45px;\n\tfont-family: "Gotham Pro";\n\tcolor: var(--text-color);\n\tbackground: #f2f4f5;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n}\n\n.layout {\n\tbackground: #fff;\n\tborder-radius: 20px;\n\tpadding: 80px 40px 40px;\n\tmax-width: 1100px;\n}\n',""]),module.exports=exports},"./src/components/FilePreview/style.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FilePreview/style.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/LessonSection/style.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/LessonSection/style.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/LessonSteps/style.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/LessonSteps/style.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/ViewCode/style.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/ViewCode/style.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./LessonSection.stories.tsx":"./stories/LessonSection.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/Layout/fonts/GothamPro-Bold.woff2":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/GothamPro-Bold.0368e961.woff2"},"./stories/Layout/fonts/GothamPro-Medium.woff2":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/GothamPro-Medium.131a263e.woff2"},"./stories/Layout/fonts/GothamPro.woff2":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/GothamPro.7f75ddbf.woff2"},"./stories/Layout/style.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./stories/Layout/style.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./stories/LessonSection.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js");var react=__webpack_require__("./node_modules/react/index.js"),classnames=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames_default=__webpack_require__.n(classnames),lib=(__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/highlight.js/styles/github.css"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/highlight.js/lib/index.js")),lib_default=__webpack_require__.n(lib),diff=__webpack_require__("./node_modules/diff/dist/diff.js");function searchMarkers(prev,next){if(!prev||!next)return{};var _arrDiff$reduce=diff.diffLines(prev,next).reduce((function(accum,change){return(change.added||change.removed)&&(accum.markers=function create(_ref){for(var markers=_ref.markers,type=_ref.type,_ref$number=_ref.number,number=void 0===_ref$number?0:_ref$number,_ref$count=_ref.count,count=void 0===_ref$count?0:_ref$count,_count="removed"===type?1:count,i=0;i<_count;i++){var line=number+i;markers[line]=Object.assign({},markers[line]||{}),markers[line][type]=!0}return markers}({markers:accum.markers,number:accum.number,type:change.added?"added":"removed",count:change.count})),change.removed||(accum.number+=change.count||0),accum}),{markers:{},number:0});return _arrDiff$reduce.markers}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ViewCodeLine_ViewCodeLine=function ViewCodeLine(_ref){var content=_ref.content,number=_ref.number,marker=_ref.marker,hideNumber=_ref.hideNumber;return Object(jsx_runtime.jsxs)("span",{"data-line":number,className:classnames_default()("vc-line",{_added:marker.added&&!marker.removed,_removed:!marker.added&&marker.removed,_update:marker.added&&marker.removed}),children:[!hideNumber&&Object(jsx_runtime.jsx)("span",{className:"vc-line-number",children:number}),Object(jsx_runtime.jsx)("span",{className:"vc-line-content",dangerouslySetInnerHTML:{__html:content}})]})};ViewCodeLine_ViewCodeLine.displayName="ViewCodeLine";var ViewCode_ViewCodeLine=ViewCodeLine_ViewCodeLine;try{ViewCodeLine_ViewCodeLine.displayName="ViewCodeLine",ViewCodeLine_ViewCodeLine.__docgenInfo={description:"",displayName:"ViewCodeLine",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}},number:{defaultValue:null,description:"",name:"number",required:!0,type:{name:"number"}},marker:{defaultValue:null,description:"",name:"marker",required:!0,type:{name:"Marker"}},hideNumber:{defaultValue:null,description:"",name:"hideNumber",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ViewCode/ViewCodeLine.tsx#ViewCodeLine"]={docgenInfo:ViewCodeLine_ViewCodeLine.__docgenInfo,name:"ViewCodeLine",path:"src/components/ViewCode/ViewCodeLine.tsx#ViewCodeLine"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/ViewCode/style.css");var ViewCode_ViewCode=function ViewCode(props){var nextValue=props.nextValue,_props$prevValue=props.prevValue,prevValue=void 0===_props$prevValue?"":_props$prevValue,_props$startNumber=props.startNumber,startNumber=void 0===_props$startNumber?1:_props$startNumber,_props$hideNumber=props.hideNumber,hideNumber=void 0!==_props$hideNumber&&_props$hideNumber,markers=searchMarkers(prevValue,nextValue),htmlLines=function lineNumbering(value){var _lines,html=lib_default.a.highlightAuto(value).value,lines=function getLines(value){return value.length?value.split(/\r?\n/g):[]}(html);return html?(""===(null===(_lines=lines[lines.length-1])||void 0===_lines?void 0:_lines.trim())&&lines.pop(),lines.length?lines:[html]):[value]}(nextValue);return Object(jsx_runtime.jsx)("div",{className:"view-code",children:Object(jsx_runtime.jsx)("pre",{children:Object(jsx_runtime.jsx)("code",{children:htmlLines.map((function(line,index){return Object(jsx_runtime.jsx)(ViewCode_ViewCodeLine,{content:line,number:startNumber+index,marker:markers[index]||{},hideNumber:Boolean(hideNumber)},index+"-line")}))})})})};ViewCode_ViewCode.displayName="ViewCode";try{ViewCode_ViewCode.displayName="ViewCode",ViewCode_ViewCode.__docgenInfo={description:"",displayName:"ViewCode",props:{nextValue:{defaultValue:null,description:"",name:"nextValue",required:!0,type:{name:"string"}},prevValue:{defaultValue:null,description:"",name:"prevValue",required:!1,type:{name:"string"}},startNumber:{defaultValue:null,description:"",name:"startNumber",required:!1,type:{name:"number"}},hideNumber:{defaultValue:null,description:"",name:"hideNumber",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ViewCode/ViewCode.tsx#ViewCode"]={docgenInfo:ViewCode_ViewCode.__docgenInfo,name:"ViewCode",path:"src/components/ViewCode/ViewCode.tsx#ViewCode"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/FilePreview/style.css");var _excluded=["fileName","image"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FilePreview_FilePreview=function FilePreview(props){var fileName=props.fileName,image=props.image,otherProps=_objectWithoutProperties(props,_excluded);return Object(jsx_runtime.jsxs)("div",{className:"steps-preview",id:"preview-file",children:[fileName&&Object(jsx_runtime.jsx)("div",{className:"steps-preview__name",children:fileName}),image&&Object(jsx_runtime.jsx)("div",{className:"steps-preview__image",style:{textAlign:"center"},children:Object(jsx_runtime.jsx)("img",{src:image,alt:fileName,style:{maxWidth:"60%"}})}),Object(jsx_runtime.jsx)("div",{className:"steps-preview__code",children:Object(jsx_runtime.jsx)(ViewCode_ViewCode,Object.assign({},otherProps))})]})};FilePreview_FilePreview.displayName="FilePreview";try{FilePreview_FilePreview.displayName="FilePreview",FilePreview_FilePreview.__docgenInfo={description:"",displayName:"FilePreview",props:{fileName:{defaultValue:null,description:"",name:"fileName",required:!1,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"string"}},nextValue:{defaultValue:null,description:"",name:"nextValue",required:!0,type:{name:"string"}},prevValue:{defaultValue:null,description:"",name:"prevValue",required:!1,type:{name:"string"}},startNumber:{defaultValue:null,description:"",name:"startNumber",required:!1,type:{name:"number"}},hideNumber:{defaultValue:null,description:"",name:"hideNumber",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FilePreview/FilePreview.tsx#FilePreview"]={docgenInfo:FilePreview_FilePreview.__docgenInfo,name:"FilePreview",path:"src/components/FilePreview/FilePreview.tsx#FilePreview"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/LessonSteps/style.css");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var LessonSteps_LessonSteps=function LessonSteps(props){var steps=props.steps,activeIndex=_slicedToArray(Object(react.useState)(0),1)[0];return Object(jsx_runtime.jsxs)("section",{className:"page-section _steps",children:[Object(jsx_runtime.jsx)("div",{className:"steps",children:steps.map((function(step,index){return Object(jsx_runtime.jsxs)("div",{className:classnames_default()("steps-item",{_active:activeIndex===index}),children:[Object(jsx_runtime.jsxs)("div",{className:"inner-block",children:[Object(jsx_runtime.jsx)("h4",{className:"inner-title",children:step.name}),step.description&&Object(jsx_runtime.jsx)("div",{children:step.description})]}),step.comment&&Object(jsx_runtime.jsx)("div",{className:"inner-comment",children:step.comment})]},"step-"+index)}))}),Object(jsx_runtime.jsx)(FilePreview_FilePreview,{fileName:steps[1].code_title,image:steps[0].image_video_url,prevValue:steps[0].code,nextValue:steps[1].code})]})};LessonSteps_LessonSteps.displayName="LessonSteps";try{LessonSteps_LessonSteps.displayName="LessonSteps",LessonSteps_LessonSteps.__docgenInfo={description:"",displayName:"LessonSteps",props:{steps:{defaultValue:null,description:"",name:"steps",required:!0,type:{name:"Step[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LessonSteps/LessonSteps.tsx#LessonSteps"]={docgenInfo:LessonSteps_LessonSteps.__docgenInfo,name:"LessonSteps",path:"src/components/LessonSteps/LessonSteps.tsx#LessonSteps"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/LessonSection/style.css");var LessonSection_LessonSection=function LessonSection(props){var title=props.title,subtitle=props.subtitle,description=props.description,image_video_url=props.image_video_url,steps=props.steps;return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsxs)("section",{className:"page-section",children:[Object(jsx_runtime.jsxs)("div",{className:"info",children:[title&&Object(jsx_runtime.jsx)("h4",{className:"info__order-name",children:title}),subtitle&&Object(jsx_runtime.jsx)("h2",{className:"info__title",children:subtitle}),description&&Object(jsx_runtime.jsx)("div",{children:description})]}),image_video_url&&Object(jsx_runtime.jsx)("div",{className:"image",children:Object(jsx_runtime.jsx)("img",{src:image_video_url,alt:title})})]}),steps&&Object(jsx_runtime.jsx)(LessonSteps_LessonSteps,{steps:steps})]})};try{LessonSection_LessonSection.displayName="LessonSection",LessonSection_LessonSection.__docgenInfo={description:"",displayName:"LessonSection",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},image_video_url:{defaultValue:null,description:"",name:"image_video_url",required:!1,type:{name:"string"}},steps:{defaultValue:null,description:"",name:"steps",required:!1,type:{name:"Step[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LessonSection/LessonSection.tsx#LessonSection"]={docgenInfo:LessonSection_LessonSection.__docgenInfo,name:"LessonSection",path:"src/components/LessonSection/LessonSection.tsx#LessonSection"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./stories/Layout/style.css");var Layout_Layout=function Layout(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)("div",{className:"layout",children:children})};Layout_Layout.displayName="Layout";try{Layout_Layout.displayName="Layout",Layout_Layout.__docgenInfo={description:"",displayName:"Layout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Layout/Layout.tsx#Layout"]={docgenInfo:Layout_Layout.__docgenInfo,name:"Layout",path:"stories/Layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}var data_prevValue="import UIKit\n\nclass ReminderListDataSource: NSObject {\n    typealias ReminderCompletedAction = (Int) -> Void\n    typealias ReminderDeletedAction = () -> Void\n    typealias RemindersChangedAction = () -> Void\n\n    enum Filter: Int {\n        case today\n        case future\n        case all\n        \n        func shouldInclude(date: Date) -> Bool {\n            let isInToday = Locale.current.calendar.isDateInToday(date)\n            switch self {\n            case .today:\n                return isInToday\n            case .future:\n                return (date > Date()) && !isInToday\n            case .all:\n                return true\n            }\n        }\n    }\n\n    var filter: Filter = .today\n\n    var filteredReminders: [Reminder] {\n        return reminders.filter { filter.shouldInclude(date: $0.dueDate) }.sorted { $0.dueDate < $1.dueDate }\n    }\n\n    var percentComplete: Double {\n        guard filteredReminders.count > 0 else {\n            return 1\n        }\n        let numComplete: Double = filteredReminders.reduce(0) { $0 + ($1.isComplete ? 1 : 0) }\n        return numComplete / Double(filteredReminders.count)\n    }\n}",data_nextValue="import UIKit\n\nclass ReminderListDataSource: NSObject {\n    typealias ReminderCompletedAction = (Int) -> Void\n    typealias ReminderDeletedAction = () -> Void\n    typealias RemindersChangedAction = () -> Void\n\n    enum Filter: Int {\n        case today\n        case future\n        case all\n        \n        func shouldInclude(date: Date) -> Bool {\n            let isInToday = Locale.current.calendar.isDateInToday(date)\n            switch self {\n            case .today:\n                return isInToday\n            case .future:\n                return (date > Date()) && !isInToday\n            case .all:\n                return false\n            }\n        }\n    }\n\n    var filter: Filter = .today\n\n    var filteredReminders: [Reminder] {\n        return reminders.filter { filter.shouldInclude(date: $0.dueDate) }.sorted { $0.dueDate < $1.dueDate }\n    }\n\n    var percentComplete: Double {\n        guard filteredReminders.count > 0 else {\n            return 1\n        }\n        let numComplete: Double = filteredReminders.reduce(0) { $0 + ($1.isComplete ? 1 : 0) }\n        return numComplete / Double(filteredReminders.count)\n    }\n}",query_sections={lecture_sections:[{id:1,title:"Load a Specific Reminder",description:"Today represents reminders using its internal Reminder model. Before writing reminder data to the event store, you need to retrieve the corresponding EKReminder object. In this section, write a new method that retrieves an EKReminder object for a given identifier.",image_video_url:"https://i.ya-webdesign.com/images/cellphone-png-2.png",lecture_steps:[{id:1,name:"Название шага 1. Секция 1.",description:"Add a method named readReminder to the bottom of the extension in ReminderListDataSource.swift. The method accepts a string and a completion handler of type (EKReminder?) -> Void.",comment:"Start by adding a method to fetch an individual reminder from the event store.",code_title:"НазваниеФайлаШаг1.swift",code:data_prevValue,position:1,image_video_url:"https://www.kindpng.com/picc/m/116-1160843_png-file-svg-download-icon-telephone-png-transparent.png"},{id:2,name:"Название шага 2. Секция 1.",description:"Описание шага 2. Секция 1.",comment:"Коментарий",code_title:"НазваниеФайлаШаг2.swift",code:data_nextValue,position:1,image_video_url:null}]},{id:2,title:"Секция 2",description:"Описание секции 2",image_video_url:"https://i.ya-webdesign.com/images/cellphone-png-2.png",lecture_steps:[{id:3,name:"Название шага 1. Секция 2.",description:"Описание шага 1. Секция 2.",comment:"Коментарий",code_title:"НазваниеФайлаШаг1-2.swift",code:data_prevValue,position:1,image_video_url:"https://www.kindpng.com/picc/m/116-1160843_png-file-svg-download-icon-telephone-png-transparent.png"},{id:4,name:"Название шага 2. Секция 2.",description:"Описание шага 2. Секция 2.",comment:"Коментарий",code_title:"НазваниеФайлаШаг2-2.swift",code:data_nextValue,position:1,image_video_url:null}]}]},LessonSection_stories_Template=(__webpack_exports__.default={title:"LessonSection",component:LessonSection_LessonSection,argTypes:{title:{control:"text"},subtitle:{control:"text"},description:{control:"text"},imageUrl:{control:"text"}}},function Template(args){return Object(jsx_runtime.jsx)(Layout_Layout,{children:Object(jsx_runtime.jsx)(LessonSection_LessonSection,Object.assign({},args))})});LessonSection_stories_Template.displayName="Template";var Primary=LessonSection_stories_Template.bind({}),section=query_sections.lecture_sections[0];Primary.args={title:"Секция 1",subtitle:section.title,description:section.description,imageUrl:section.image_video_url,steps:section.lecture_steps},Primary.parameters=Object.assign({storySource:{source:"(args) => (\n\t<Layout>\n\t\t<LessonSection {...args} />\n\t</Layout>\n)"}},Primary.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);