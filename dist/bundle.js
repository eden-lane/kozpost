/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _main = __webpack_require__(5);

	var _main2 = _interopRequireDefault(_main);

	var _markdown = __webpack_require__(6);

	var _markdown2 = _interopRequireDefault(_markdown);

	var _hotReplace = __webpack_require__(7);

	var _hotReplace2 = _interopRequireDefault(_hotReplace);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = angular.module('app', ['ngSanitize']);

	app.controller('MainCtrl', _main2.default);
	app.filter('markdown', _markdown2.default);
	app.directive('hotReplace', _hotReplace2.default.factory());

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./styles.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./styles.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.btn-spinner {\n  position: relative;\n  color: transparent !important;\n}\n.btn-spinner:before,\n.btn-spinner:after {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  content: '';\n  width: 20px;\n  height: 20px;\n  margin-top: -10px;\n  margin-left: -10px;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n}\n.btn-spinner:after {\n  border-color: transparent;\n  border-top-color: white;\n  box-shadow: 0 0 0 1px transparent;\n  animation: spin .6s linear;\n  animation-iteration-count: infinite;\n}\nhr.k-dilimiter {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.k-user {\n  line-height: 22px;\n}\n.k-message {\n  resize: vertical;\n  overflow: auto;\n}\n.k-preview {\n  padding: 0;\n  background-color: #e6e6e6;\n  font: 13px 'Open Sans', 'Arial';\n}\n.k-preview__inner {\n  width: 430px;\n  margin: 20px auto;\n  padding: 13px;\n  border-radius: 4px;\n  background-color: white;\n  word-break: break-word;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MainCtrl = function () {
	    function MainCtrl($http) {
	        _classCallCheck(this, MainCtrl);

	        this._timeout = false;
	        this._previous = '';

	        this.loading = false;

	        this.message = this._getBlankMessage();

	        this.typographyfy = false;

	        var cache = localStorage.getItem(MainCtrl.CACHE);

	        if (cache) {
	            var parsed = JSON.parse(cache);

	            this.token = parsed.token;
	            this.user = parsed.user;

	            this.message.chat_id = parsed.channel || '';
	            this.message.message_id = parsed.target || null;
	            this.message.text = parsed.text;
	        } else {
	            this.token = '';
	            this.user = null;
	        }

	        this.error = false;

	        this.result = null;

	        this._postForm = this.__postFormPartial.bind(this, $http);

	        this.login = this.__loginPartial.bind(this, $http);
	    }

	    _createClass(MainCtrl, [{
	        key: '_getBlankMessage',
	        value: function _getBlankMessage() {
	            return {
	                message_id: null,
	                chat_id: '',
	                text: '',
	                parse_mode: 'Markdown',
	                disable_web_page_preview: false,
	                disable_notification: false
	            };
	        }
	    }, {
	        key: '_typographyphy',
	        value: function _typographyphy(str) {
	            return str.replace(/"(.+)"/g, '«$1»').replace(/\s-\s/g, ' – ');
	        }
	    }, {
	        key: '_serialize',
	        value: function _serialize(data) {
	            if (!angular.isObject(data)) {
	                return data === null ? '' : data.toString();
	            }

	            var buffer = [],
	                config = this.getMdConfig();

	            for (var name in data) {
	                if (!data.hasOwnProperty(name) || data[name] === null) {
	                    continue;
	                }

	                var value = data[name];

	                switch (name) {
	                    case 'text':
	                        if (config.typographyfy) {
	                            value = this._typographyphy(value);
	                        }
	                        break;
	                    default:
	                        break;
	                }

	                buffer.push(encodeURIComponent(name) + '=' + encodeURIComponent(value));
	            }

	            return buffer.join('&').replace(/%20/g, '+');
	        }
	    }, {
	        key: '_getUrl',
	        value: function _getUrl(method) {
	            if (!angular.isString(method) || method === '') {
	                throw new TypeErorr('provide a method');
	            }

	            return MainCtrl.API + this.token + '/' + method;
	        }
	    }, {
	        key: '_onLogin',
	        value: function _onLogin(data) {
	            this.user = data.result;

	            this._updateCache({
	                token: this.token,
	                user: this.user
	            });
	        }
	    }, {
	        key: '_updateCache',
	        value: function _updateCache(obj) {
	            this._timeout = false;

	            var cache = JSON.parse(localStorage.getItem(MainCtrl.CACHE) || '{}');

	            for (var name in obj) {
	                if (!obj.hasOwnProperty(name)) {
	                    continue;
	                }

	                cache[name] = obj[name];
	            }

	            localStorage.setItem(MainCtrl.CACHE, JSON.stringify(cache));
	        }
	    }, {
	        key: '_onPublished',
	        value: function _onPublished(data) {
	            var published = this.isPublished();

	            if (!published) {
	                this._previous = this.message.text;

	                this.message.message_id = data.result.message_id;

	                this._updateCache({
	                    channel: this.message.chat_id,
	                    target: this.message.message_id
	                });
	            }

	            this.result = {
	                success: true,
	                title: !published ? 'Post successful!' : 'Edit successful!'
	            };
	        }
	    }, {
	        key: '__loginPartial',
	        value: function __loginPartial($http) {
	            var _this = this;

	            this.loading = true;

	            $http.get(this._getUrl('getMe')).success(this._onLogin.bind(this)).error(function () {
	                return _this.error = true;
	            }).finally(function () {
	                return _this.loading = false;
	            });
	        }
	    }, {
	        key: '__postFormPartial',
	        value: function __postFormPartial($http, method, data) {
	            return $http({
	                method: 'POST',
	                url: this._getUrl(method),
	                data: this._serialize(data),
	                headers: {
	                    'Content-Type': 'application/x-www-form-urlencoded'
	                }
	            });
	        }
	    }, {
	        key: 'onChangeChannel',
	        value: function onChangeChannel() {
	            this.message.message_id = null;
	        }
	    }, {
	        key: 'isPublished',
	        value: function isPublished() {
	            return this.message.message_id !== null;
	        }
	    }, {
	        key: 'isSame',
	        value: function isSame() {
	            return this.isPublished() && angular.equals(this.message.text, this._previous);
	        }
	    }, {
	        key: 'getMdConfig',
	        value: function getMdConfig() {
	            return {
	                typographyfy: this.typographyfy
	            };
	        }
	    }, {
	        key: 'clear',
	        value: function clear() {
	            this._previous = '';

	            this.message.message_id = null;
	            this.message.text = '';

	            this._updateCache({
	                target: null,
	                text: ''
	            });
	        }
	    }, {
	        key: 'backup',
	        value: function backup() {
	            var _this2 = this;

	            if (!this._timeout) {
	                this._timeout = true;

	                setTimeout(function () {
	                    return _this2._updateCache({
	                        text: _this2.message.text
	                    });
	                }, 1000);
	            }
	        }
	    }, {
	        key: 'logout',
	        value: function logout() {
	            this.token = '';
	            this.user = null;
	            this.message = this._getBlankMessage();
	            localStorage.removeItem(MainCtrl.CACHE);
	        }
	    }, {
	        key: 'send',
	        value: function send() {
	            var _this3 = this;

	            this.loading = true;

	            var method = this.isPublished() ? 'editMessageText' : 'sendMessage';

	            this._postForm(method, this.message).success(this._onPublished.bind(this)).error(function () {
	                return _this3.result = {
	                    success: false,
	                    title: 'Post failed!',
	                    text: 'Check if the channel exists & your bot is added as an administrator'
	                };
	            }).finally(function () {
	                return _this3.loading = false;
	            });
	        }
	    }]);

	    return MainCtrl;
	}();

	exports.default = MainCtrl;


	MainCtrl.$inject = ['$http'];

	MainCtrl.CACHE = 'kozpost:cache';
	MainCtrl.API = 'https://api.telegram.org/bot';

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    function escapeHTML(str) {
	        var div = document.createElement('div');
	        div.appendChild(document.createTextNode(str));
	        return div.innerHTML;
	    }

	    function isNotWithinTag(str, whole) {
	        return whole ? str + '(?!<\/.+>)' : str + '(?![^' + str + ']+>)(?!<.+>)([^' + str + ']*)' + str + '(?!">)(?!<\/.+>)';
	    }

	    function setNewlines(str) {
	        return str.replace(/(?:\r\n|\r|\n)/, '<br />');
	    }

	    var isItalic = new RegExp(isNotWithinTag('_')),
	        isBold = new RegExp(isNotWithinTag('\\*')),
	        isMono = new RegExp(isNotWithinTag('`')),
	        isLink = new RegExp(isNotWithinTag('\\[([^\\]]+)\\]\\(([^\\)\\]]*)\\)', true));

	    var matchers = [isItalic, isBold, isMono, isLink];

	    function getMatch(str) {
	        var first = null;

	        matchers.map(function (exp) {
	            var m = exp.exec(str);
	            return m === null ? -1 : m.index;
	        }).reduce(function (p, c, i) {
	            if (c !== -1 && (p === -1 || p !== -1 && c < p)) {
	                first = matchers[i];
	                return c;
	            }

	            return p;
	        }, -1);

	        return first;
	    }

	    function getWrapper(match) {
	        switch (match) {
	            case isItalic:
	                return '<em>$1</em>';
	            case isBold:
	                return '<strong>$1</strong>';
	            case isMono:
	                return '<code>$1</code>';
	            case isLink:
	                return '<a href="$2">$1</a>';
	            default:
	                return '';
	        }
	    }

	    return function (input, config) {
	        if (input === '' || !angular.isDefined(input)) {
	            return '';
	        }

	        input = escapeHTML(input);
	        input = input.replace(/(?:\r\n|\r|\n)/g, '<br />');

	        if (config.typographyfy) {
	            input = input.replace(/"(.+)"/g, '&laquo;$1&raquo;');
	            input = input.replace(/\s-\s/g, ' &ndash; ');
	        }

	        var match = getMatch(input);

	        while (match !== null) {
	            input = input.replace(match, getWrapper(match));
	            match = getMatch(input);
	        }

	        return input;
	    };
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _factory = __webpack_require__(8);

	var _factory2 = _interopRequireDefault(_factory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HotReplaceDirective = function () {
	    function HotReplaceDirective($parse) {
	        _classCallCheck(this, HotReplaceDirective);

	        this.restrict = 'A';
	        this.require = 'ngModel';
	        this.link = this.__linkUnboundPartial.bind(this, $parse);
	    }

	    _createClass(HotReplaceDirective, [{
	        key: '_getInputSelection',
	        value: function _getInputSelection(el) {
	            var start = 0,
	                end = 0;

	            if (angular.isNumber(el.selectionStart) && angular.isNumber(el.selectionEnd)) {
	                start = el.selectionStart;
	                end = el.selectionEnd;
	            } else {
	                var range = document.selection.createRange();

	                if (range && range.parentElement() === el) {
	                    var len = el.value.length,
	                        normalized = el.value.replace(/\r\n/g, '\n');

	                    var textInputRange = el.createTextRange();

	                    textInputRange.moveToBookmark(range.getBookmark());

	                    var endRange = el.createTextRange();

	                    endRange.collapse(false);

	                    if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
	                        start = end = len;
	                    } else {
	                        start = -textInputRange.moveStart('character', -len);
	                        start += normalized.slice(0, start).split('\n').length - 1;

	                        if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
	                            end = len;
	                        } else {
	                            end = -textInputRange.moveEnd('character', -len);
	                            end += normalized.slice(0, end).split('\n').length - 1;
	                        }
	                    }
	                }
	            }

	            return { start: start, end: end };
	        }
	    }, {
	        key: '_wrapWith',
	        value: function _wrapWith(el, before, after) {
	            if (!angular.isDefined(after)) {
	                after = before;
	            }

	            var sel = this._getInputSelection(el),
	                val = el.value,
	                str = val.slice(sel.start, sel.end);

	            return val.slice(0, sel.start) + before + str + after + val.slice(sel.end);
	        }
	    }, {
	        key: '__onKeyDownPartial',
	        value: function __onKeyDownPartial(setter, el, e) {
	            if (e.ctrlKey && e.keyCode === 73) {
	                console.log(setter);
	                setter(this._wrapWith(el, '_'));
	            }
	        }
	    }, {
	        key: '__linkUnboundPartial',
	        value: function __linkUnboundPartial($parse, scope, el, attrs, ngModelCtrl) {
	            var getter = $parse(attrs['ngModel']),
	                setter = getter.assign;

	            document.onkeydown = function (e) {
	                if (e.ctrlKey || e.metaKey) {
	                    switch (e.keyCode) {
	                        case 66:
	                            setter(scope, this._wrapWith(el[0], '*'));
	                            scope.$digest();
	                            break;
	                        case 73:
	                            setter(scope, this._wrapWith(el[0], '_'));
	                            scope.$digest();
	                            break;
	                        case 75:
	                            var link = prompt('Enter link', 'http://');
	                            setter(scope, this._wrapWith(el[0], '[', '](' + link + ')'));
	                            scope.$digest();
	                            break;
	                    }
	                }
	            }.bind(this);
	        }
	    }]);

	    return HotReplaceDirective;
	}();

	exports.default = HotReplaceDirective;


	HotReplaceDirective.$inject = ['$parse'];

	HotReplaceDirective.factory = _factory2.default;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var Fn = this;

	    var directive = function directive() {
	        var args = [null].concat(Array.prototype.slice.call(arguments));
	        return new (Fn.bind.apply(Fn, args))();
	    };

	    directive.$inject = Fn.$inject;

	    return directive;
	};

	;

/***/ }
/******/ ]);