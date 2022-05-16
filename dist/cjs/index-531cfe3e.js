'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var dist = {exports: {}};

var _package = {};

var querystringify$1 = {};

var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */
function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
querystringify$1.stringify = querystringify;
querystringify$1.parse = querystring;

var base = {};

var browser = {exports: {}};

(function (module, exports) {

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
};

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
}(browser, browser.exports));

var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(base, "__esModule", { value: true });
base.Base = void 0;
commonjsGlobal.fetch = browser.exports;
var Base = /** @class */ (function () {
    function Base(apiKey, version, isDev) {
        this.devUrl = "http://localhost:3000/";
        this.liveUrl = "https://messenger.stipop.io/";
        this.s_meta = "{\"platform\": \"web\", \"sdk_version\": \"0.0.1-beta\", \"os_version\":null}";
        this.apiKey = apiKey;
        this.version = version;
        this.url = isDev ? this.devUrl : this.liveUrl;
    }
    Base.prototype.get = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, config, res, json, header, body, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            apikey: this.apiKey,
                            'Content-Type': 'application/json',
                            s_meta: this.s_meta
                        };
                        config = {
                            headers: headers,
                            method: "get"
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("".concat(this.url).concat(this.version).concat(endpoint), config)];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        json = _a.sent();
                        header = json.header;
                        body = json.body;
                        //에러 핸들링 필요
                        if (header.code === '0000') {
                            return [2 /*return*/, {
                                    header: header,
                                    body: body
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    header: header,
                                    body: body
                                }];
                        }
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [2 /*return*/, {
                                header: {
                                    code: '1000',
                                    status: 'fail',
                                    message: 'server error'
                                },
                                body: {}
                            }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.post = function (endpoint, body) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, config, res, json, header, body_1, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            apikey: this.apiKey,
                            'Content-type': 'application/json',
                            s_meta: this.s_meta
                        };
                        config = {
                            headers: headers,
                            method: "post",
                            body: body ? JSON.stringify(body) : null
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("".concat(this.url).concat(this.version).concat(endpoint), config)];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        json = _a.sent();
                        header = json.header;
                        body_1 = json.body;
                        //에러 핸들링 필요
                        if (header.code === '0000') {
                            return [2 /*return*/, {
                                    header: header,
                                    body: body_1
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    header: header,
                                    body: body_1
                                }];
                        }
                    case 4:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [2 /*return*/, {
                                header: {
                                    code: '1000',
                                    status: 'fail',
                                    message: 'server error'
                                },
                                body: {}
                            }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.put = function (endpoint, body) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, config, res, json, header, body_2, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            apikey: this.apiKey,
                            'Content-type': 'application/json',
                            s_meta: this.s_meta
                        };
                        config = {
                            headers: headers,
                            method: "put",
                            body: body ? JSON.stringify(body) : null
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("".concat(this.url).concat(this.version).concat(endpoint), config)];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        json = _a.sent();
                        header = json.header;
                        body_2 = json.body;
                        //에러 핸들링 필요
                        if (header.code === '0000') {
                            return [2 /*return*/, {
                                    header: header,
                                    body: body_2
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    header: header,
                                    body: body_2
                                }];
                        }
                    case 4:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [2 /*return*/, {
                                header: {
                                    code: '1000',
                                    status: 'fail',
                                    message: 'server error'
                                },
                                body: {}
                            }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Base.prototype.delete = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, config, res, json, header, body, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {
                            apikey: this.apiKey,
                            'Content-type': 'application/json',
                            s_meta: this.s_meta
                        };
                        config = {
                            headers: headers,
                            method: "delete"
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch("".concat(this.url).concat(this.version).concat(endpoint), config)];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        json = _a.sent();
                        header = json.header;
                        body = json.body;
                        //에러 핸들링 필요
                        if (header.code === '0000') {
                            return [2 /*return*/, {
                                    header: header,
                                    body: body
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    header: header,
                                    body: body
                                }];
                        }
                    case 4:
                        err_4 = _a.sent();
                        console.log(err_4);
                        return [2 /*return*/, {
                                header: {
                                    code: '1000',
                                    status: 'fail',
                                    message: 'server error'
                                },
                                body: {}
                            }];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return Base;
}());
base.Base = Base;

var __extends$8 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault$6 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(_package, "__esModule", { value: true });
_package.StickerPackage = void 0;
var querystringify_1$6 = __importDefault$6(querystringify$1);
var base_1$8 = base;
var path$7 = '/package';
var StickerPackage = /** @class */ (function (_super) {
    __extends$8(StickerPackage, _super);
    function StickerPackage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StickerPackage.prototype.getPack = function (params) {
        var query = "".concat(path$7);
        if (params) {
            query += querystringify_1$6.default.stringify(params, '?');
        }
        return this.get(query);
    };
    StickerPackage.prototype.getPackInfo = function (params) {
        var query = "".concat(path$7, "/").concat(params.packId);
        if (params) {
            query += querystringify_1$6.default.stringify(params, '?');
        }
        return this.get(query);
    };
    StickerPackage.prototype.getPackRecent = function (params) {
        var query = "".concat(path$7, "/recent/").concat(params.userId);
        if (params) {
            query += querystringify_1$6.default.stringify(params, '?');
        }
        return this.get(query);
    };
    StickerPackage.prototype.getPackSendSticker = function (params) {
        var query = "".concat(path$7, "/send/").concat(params.userId);
        if (params) {
            query += querystringify_1$6.default.stringify(params, '?');
        }
        return this.get(query);
    };
    StickerPackage.prototype.getPackFrequentlySticker = function (params) {
        var query = "".concat(path$7, "/frequently/").concat(params.userId);
        if (params) {
            query += querystringify_1$6.default.stringify(params, '?');
        }
        return this.get(query);
    };
    return StickerPackage;
}(base_1$8.Base));
_package.StickerPackage = StickerPackage;

var search = {};

var __extends$7 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault$5 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(search, "__esModule", { value: true });
search.SearchSticker = void 0;
var querystringify_1$5 = __importDefault$5(querystringify$1);
var base_1$7 = base;
var path$6 = '/search';
var SearchSticker = /** @class */ (function (_super) {
    __extends$7(SearchSticker, _super);
    function SearchSticker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchSticker.prototype.getSearch = function (params) {
        var query = "".concat(path$6);
        if (params) {
            query += querystringify_1$5.default.stringify(params, '?');
        }
        return this.get(query);
    };
    SearchSticker.prototype.getKeyword = function (params) {
        var query = "".concat(path$6, "/keyword");
        if (params) {
            query += querystringify_1$5.default.stringify(params, '?');
        }
        return this.get(query);
    };
    SearchSticker.prototype.getKeywordRecent = function (params) {
        var query = "".concat(path$6, "/recent");
        if (params) {
            query += querystringify_1$5.default.stringify(params, '?');
        }
        return this.get(query);
    };
    SearchSticker.prototype.deleteKeywordAll = function (params) {
        var query = "".concat(path$6, "/recent/").concat(params === null || params === void 0 ? void 0 : params.userId);
        return this.delete(query);
    };
    SearchSticker.prototype.deleteKeyword = function (params) {
        var query = "".concat(path$6, "/recent/").concat(params === null || params === void 0 ? void 0 : params.userId, "/").concat(params === null || params === void 0 ? void 0 : params.keyword);
        return this.delete(query);
    };
    return SearchSticker;
}(base_1$7.Base));
search.SearchSticker = SearchSticker;

var analytics = {};

var __extends$6 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault$4 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(analytics, "__esModule", { value: true });
analytics.Analytics = void 0;
var querystringify_1$4 = __importDefault$4(querystringify$1);
var base_1$6 = base;
var path$5 = '/analytics';
var Analytics = /** @class */ (function (_super) {
    __extends$6(Analytics, _super);
    function Analytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Analytics.prototype.sendAnalytics = function (params) {
        var query = "".concat(path$5, "/send/").concat(params === null || params === void 0 ? void 0 : params.stickerId);
        if (params) {
            query += querystringify_1$4.default.stringify(params, '?');
        }
        return this.post(query, null);
    };
    return Analytics;
}(base_1$6.Base));
analytics.Analytics = Analytics;

var curation = {};

var __extends$5 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault$3 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(curation, "__esModule", { value: true });
curation.Curation = void 0;
var querystringify_1$3 = __importDefault$3(querystringify$1);
var base_1$5 = base;
var path$4 = '/curation';
var Curation = /** @class */ (function (_super) {
    __extends$5(Curation, _super);
    function Curation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Curation.prototype.getCuration = function (params) {
        var query = "".concat(path$4, "/type/").concat(params.type);
        if (params) {
            query += querystringify_1$3.default.stringify(params, '?');
        }
        return this.get(query);
    };
    return Curation;
}(base_1$5.Base));
curation.Curation = Curation;

var download = {};

var __extends$4 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault$2 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(download, "__esModule", { value: true });
download.Download = void 0;
var querystringify_1$2 = __importDefault$2(querystringify$1);
var base_1$4 = base;
var path$3 = '/download';
var Download = /** @class */ (function (_super) {
    __extends$4(Download, _super);
    function Download() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Download.prototype.download = function (params) {
        var query = "".concat(path$3, "/").concat(params === null || params === void 0 ? void 0 : params.packageId);
        if (params) {
            query += querystringify_1$2.default.stringify(params, '?');
        }
        return this.post(query, null);
    };
    Download.prototype.downloadList = function (params) {
        var query = "".concat(path$3, "/").concat(params.userId);
        if (params) {
            query += querystringify_1$2.default.stringify(params, '?');
        }
        return this.get(query);
    };
    return Download;
}(base_1$4.Base));
download.Download = Download;

var gift = {};

var __extends$3 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(gift, "__esModule", { value: true });
gift.Gift = void 0;
var querystringify_1$1 = __importDefault$1(querystringify$1);
var base_1$3 = base;
var path$2 = '/gift';
var Gift = /** @class */ (function (_super) {
    __extends$3(Gift, _super);
    function Gift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gift.prototype.sendGift = function (params) {
        var query = "".concat(path$2, "/send/").concat(params === null || params === void 0 ? void 0 : params.userId);
        if (params) {
            query += querystringify_1$1.default.stringify(params, '?');
        }
        return this.get(query);
    };
    Gift.prototype.receiveGift = function (params) {
        var query = "".concat(path$2, "/receive/").concat(params === null || params === void 0 ? void 0 : params.userId);
        if (params) {
            query += querystringify_1$1.default.stringify(params, '?');
        }
        return this.get(query);
    };
    return Gift;
}(base_1$3.Base));
gift.Gift = Gift;

var init = {};

var __extends$2 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(init, "__esModule", { value: true });
init.Init = void 0;
var base_1$2 = base;
var path$1 = '/init';
var Init = /** @class */ (function (_super) {
    __extends$2(Init, _super);
    function Init() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Init.prototype.init = function (params) {
        var query = "".concat(path$1);
        return this.post(query, params);
    };
    return Init;
}(base_1$2.Base));
init.Init = Init;

var mysticker = {};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(mysticker, "__esModule", { value: true });
mysticker.Mysticker = void 0;
var querystringify_1 = __importDefault(querystringify$1);
var base_1$1 = base;
var path = '/mysticker';
var Mysticker = /** @class */ (function (_super) {
    __extends$1(Mysticker, _super);
    function Mysticker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mysticker.prototype.mySticker = function (params) {
        var query = "".concat(path, "/").concat(params === null || params === void 0 ? void 0 : params.userId);
        if (params) {
            query += querystringify_1.default.stringify(params, '?');
        }
        return this.get(query);
    };
    Mysticker.prototype.myStickerHideList = function (params) {
        var query = "".concat(path, "/hide/").concat(params === null || params === void 0 ? void 0 : params.userId);
        if (params) {
            query += querystringify_1.default.stringify(params, '?');
        }
        return this.get(query);
    };
    Mysticker.prototype.myStickerHide = function (params) {
        var query = "".concat(path, "/hide/").concat(params === null || params === void 0 ? void 0 : params.userId, "/").concat(params === null || params === void 0 ? void 0 : params.packageId);
        return this.put(query, null);
    };
    Mysticker.prototype.myStickerOrder = function (params) {
        var query = "".concat(path, "/order/").concat(params === null || params === void 0 ? void 0 : params.userId);
        return this.put(query, params);
    };
    Mysticker.prototype.myStickerFavoriteList = function (params) {
        var query = "".concat(path, "/favorite/").concat(params === null || params === void 0 ? void 0 : params.userId);
        if (params) {
            query += querystringify_1.default.stringify(params, '?');
        }
        return this.get(query);
    };
    Mysticker.prototype.myStickerFavorite = function (params) {
        var query = "".concat(path, "/favorite/").concat(params === null || params === void 0 ? void 0 : params.userId);
        return this.put(query, params);
    };
    return Mysticker;
}(base_1$1.Base));
mysticker.Mysticker = Mysticker;

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(dist.exports, "__esModule", { value: true });
var package_1 = _package;
var search_1 = search;
var analytics_1 = analytics;
var curation_1 = curation;
var download_1 = download;
var gift_1 = gift;
var init_1 = init;
var mysticker_1 = mysticker;
var base_1 = base;
var Stipop = /** @class */ (function (_super) {
    __extends(Stipop, _super);
    function Stipop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Stipop;
}(base_1.Base));
applyMixins(Stipop, [package_1.StickerPackage, search_1.SearchSticker, analytics_1.Analytics, curation_1.Curation, download_1.Download, gift_1.Gift, init_1.Init, mysticker_1.Mysticker]);
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null));
        });
    });
}
dist.exports = Stipop;

var Stipop$1 = /*@__PURE__*/getDefaultExportFromCjs(dist.exports);

exports.Stipop = Stipop$1;
exports.commonjsGlobal = commonjsGlobal;
//# sourceMappingURL=index-531cfe3e.js.map
