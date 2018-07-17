(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=t.ADDON_NAME="keraito/renders";t.EVENTS={INITIALIZATION:r+"/set",EVENTS:r+"/events",UNREAD_EVENTS:r+"/unread",OPEN_PANEL:r+"/open"},t.DIFF_TYPES={UNAVOIDABLE:"unavoidable",SAME:"same",EQUAL:"equal",FUNCTIONS:"functions"}},561:function(e,t,n){n(225),n(562),e.exports=n(563)},563:function(e,t,n){"use strict";(function(e){var t=n(506),r=n(583),o=n(585);(0,t.addDecorator)(o.withRenders),(0,r.setOptions)({name:"REACT RENDERS",hierarchySeparator:/\|/}),(0,t.configure)(function(){n(598)},e)}).call(this,n(49)(e))},585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withRenders=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n(1)),u=n(61),a=s(u),i=n(586),c=n(135);function s(e){return e&&e.__esModule?e:{default:e}}(0,i.whyDidYouUpdate)(o.default,{notifier:function(e,t,n,r){a.default.getChannel().emit(c.EVENTS.EVENTS,r)}});t.withRenders=(0,u.makeDecorator)({name:"withRenders",parameterName:"renders",skipIfNoParametersOrOptions:!1,wrapper:function(e,t,n){var o=n.options,u=n.parameters,i=a.default.getChannel(),s=r({},o,u);return i.emit(c.EVENTS.INITIALIZATION,s),e(t)}})},598:function(e,t,n){"use strict";(function(e){var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),o=n(506),u=n(599);var a=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={textProp:"",booleanProp:!0,numberProp:1,objectProp:{2:3},arrayProp:[4,5]},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r.default.Component),t(n,[{key:"componentDidMount",value:function(){var e=this;this.props.delayed&&(this.timer=setTimeout(function(){e.setState(function(e){return e})},5e3))}},{key:"componentWillUnmount",value:function(){this.props.delayed&&clearTimeout(this.timer)}},{key:"render",value:function(){var e=this,t=this.props.component?this.props.component:function(e){return r.default.createElement("button",e)};return r.default.createElement(t,{onClick:function(){return e.setState(function(e){return e})}},"DemoComponent")}}]),n}();(0,o.storiesOf)("Renders addon",e).add("Single component events",function(){return r.default.createElement(a,null)}).add("Multiple component events",function(){return r.default.createElement(a,{component:u.Button})}).add("With an async update",function(){return r.default.createElement("div",null,"Browse to another panel and inspect the Renders panel.",r.default.createElement(a,{delayed:!0}))}),(0,o.storiesOf)("Renders addon|Options",e).add("with empty events disabled",function(){return r.default.createElement(a,{component:u.Button})},{renders:{showEmptyEvents:!1}}).add("with excluded event types",function(){return r.default.createElement(a,{component:u.Button})},{renders:{excludeEventTypes:["props"]}}).add("with included object keys",function(){return r.default.createElement(a,{component:u.Button})},{renders:{filterEventKeys:["booleanProp","numberProp","arrayProp"]}}).add("with excluded events from specific components",function(){return r.default.createElement(a,{component:u.Button})},{renders:{excludeComponents:["Button"]}}).add("with the number of unread events disabled",function(){return r.default.createElement(a,{component:u.Button})},{renders:{disableNotificationsNumber:!0}})}).call(this,n(49)(e))}},[[561,3,2]]]);
//# sourceMappingURL=preview.f9c19852d69c70a76c6f.bundle.js.map