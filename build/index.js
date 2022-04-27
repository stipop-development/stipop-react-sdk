'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var reactIs$3 = {exports: {}};

var reactIs_production_min$2 = {};

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$3=60103,c$2=60106,d$2=60107,e$2=60108,f$2=60114,g$3=60109,h$2=60110,k$3=60112,l$2=60113,m$2=60120,n$2=60115,p$2=60116,q$3=60121,r$2=60122,u=60117,v$3=60129,w$3=60131;
if("function"===typeof Symbol&&Symbol.for){var x$3=Symbol.for;b$3=x$3("react.element");c$2=x$3("react.portal");d$2=x$3("react.fragment");e$2=x$3("react.strict_mode");f$2=x$3("react.profiler");g$3=x$3("react.provider");h$2=x$3("react.context");k$3=x$3("react.forward_ref");l$2=x$3("react.suspense");m$2=x$3("react.suspense_list");n$2=x$3("react.memo");p$2=x$3("react.lazy");q$3=x$3("react.block");r$2=x$3("react.server.block");u=x$3("react.fundamental");v$3=x$3("react.debug_trace_mode");w$3=x$3("react.legacy_hidden");}
function y$2(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b$3:switch(a=a.type,a){case d$2:case f$2:case e$2:case l$2:case m$2:return a;default:switch(a=a&&a.$$typeof,a){case h$2:case k$3:case p$2:case n$2:case g$3:return a;default:return t}}case c$2:return t}}}var z$3=g$3,A$3=b$3,B$1=k$3,C=d$2,D$1=p$2,E$1=n$2,F$1=c$2,G$1=f$2,H$1=e$2,I$1=l$2;reactIs_production_min$2.ContextConsumer=h$2;reactIs_production_min$2.ContextProvider=z$3;reactIs_production_min$2.Element=A$3;reactIs_production_min$2.ForwardRef=B$1;reactIs_production_min$2.Fragment=C;reactIs_production_min$2.Lazy=D$1;reactIs_production_min$2.Memo=E$1;reactIs_production_min$2.Portal=F$1;reactIs_production_min$2.Profiler=G$1;reactIs_production_min$2.StrictMode=H$1;
reactIs_production_min$2.Suspense=I$1;reactIs_production_min$2.isAsyncMode=function(){return !1};reactIs_production_min$2.isConcurrentMode=function(){return !1};reactIs_production_min$2.isContextConsumer=function(a){return y$2(a)===h$2};reactIs_production_min$2.isContextProvider=function(a){return y$2(a)===g$3};reactIs_production_min$2.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b$3};reactIs_production_min$2.isForwardRef=function(a){return y$2(a)===k$3};reactIs_production_min$2.isFragment=function(a){return y$2(a)===d$2};reactIs_production_min$2.isLazy=function(a){return y$2(a)===p$2};reactIs_production_min$2.isMemo=function(a){return y$2(a)===n$2};
reactIs_production_min$2.isPortal=function(a){return y$2(a)===c$2};reactIs_production_min$2.isProfiler=function(a){return y$2(a)===f$2};reactIs_production_min$2.isStrictMode=function(a){return y$2(a)===e$2};reactIs_production_min$2.isSuspense=function(a){return y$2(a)===l$2};reactIs_production_min$2.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d$2||a===f$2||a===v$3||a===e$2||a===l$2||a===m$2||a===w$3||"object"===typeof a&&null!==a&&(a.$$typeof===p$2||a.$$typeof===n$2||a.$$typeof===g$3||a.$$typeof===h$2||a.$$typeof===k$3||a.$$typeof===u||a.$$typeof===q$3||a[0]===r$2)?!0:!1};
reactIs_production_min$2.typeOf=y$2;

var reactIs_development$2 = {};

/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  (function() {

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development$2.ContextConsumer = ContextConsumer;
reactIs_development$2.ContextProvider = ContextProvider;
reactIs_development$2.Element = Element;
reactIs_development$2.ForwardRef = ForwardRef;
reactIs_development$2.Fragment = Fragment;
reactIs_development$2.Lazy = Lazy;
reactIs_development$2.Memo = Memo;
reactIs_development$2.Portal = Portal;
reactIs_development$2.Profiler = Profiler;
reactIs_development$2.StrictMode = StrictMode;
reactIs_development$2.Suspense = Suspense;
reactIs_development$2.isAsyncMode = isAsyncMode;
reactIs_development$2.isConcurrentMode = isConcurrentMode;
reactIs_development$2.isContextConsumer = isContextConsumer;
reactIs_development$2.isContextProvider = isContextProvider;
reactIs_development$2.isElement = isElement;
reactIs_development$2.isForwardRef = isForwardRef;
reactIs_development$2.isFragment = isFragment;
reactIs_development$2.isLazy = isLazy;
reactIs_development$2.isMemo = isMemo;
reactIs_development$2.isPortal = isPortal;
reactIs_development$2.isProfiler = isProfiler;
reactIs_development$2.isStrictMode = isStrictMode;
reactIs_development$2.isSuspense = isSuspense;
reactIs_development$2.isValidElementType = isValidElementType;
reactIs_development$2.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$3.exports = reactIs_production_min$2;
} else {
  reactIs$3.exports = reactIs_development$2;
}

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var reactIs$2 = {exports: {}};

var reactIs_production_min$1 = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2="function"===typeof Symbol&&Symbol.for,c$1=b$2?Symbol.for("react.element"):60103,d$1=b$2?Symbol.for("react.portal"):60106,e$1=b$2?Symbol.for("react.fragment"):60107,f$1=b$2?Symbol.for("react.strict_mode"):60108,g$2=b$2?Symbol.for("react.profiler"):60114,h$1=b$2?Symbol.for("react.provider"):60109,k$2=b$2?Symbol.for("react.context"):60110,l$1=b$2?Symbol.for("react.async_mode"):60111,m$1=b$2?Symbol.for("react.concurrent_mode"):60111,n$1=b$2?Symbol.for("react.forward_ref"):60112,p$1=b$2?Symbol.for("react.suspense"):60113,q$2=b$2?
Symbol.for("react.suspense_list"):60120,r$1=b$2?Symbol.for("react.memo"):60115,t$1=b$2?Symbol.for("react.lazy"):60116,v$2=b$2?Symbol.for("react.block"):60121,w$2=b$2?Symbol.for("react.fundamental"):60117,x$2=b$2?Symbol.for("react.responder"):60118,y$1=b$2?Symbol.for("react.scope"):60119;
function z$2(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c$1:switch(a=a.type,a){case l$1:case m$1:case e$1:case g$2:case f$1:case p$1:return a;default:switch(a=a&&a.$$typeof,a){case k$2:case n$1:case t$1:case r$1:case h$1:return a;default:return u}}case d$1:return u}}}function A$2(a){return z$2(a)===m$1}reactIs_production_min$1.AsyncMode=l$1;reactIs_production_min$1.ConcurrentMode=m$1;reactIs_production_min$1.ContextConsumer=k$2;reactIs_production_min$1.ContextProvider=h$1;reactIs_production_min$1.Element=c$1;reactIs_production_min$1.ForwardRef=n$1;reactIs_production_min$1.Fragment=e$1;reactIs_production_min$1.Lazy=t$1;reactIs_production_min$1.Memo=r$1;reactIs_production_min$1.Portal=d$1;
reactIs_production_min$1.Profiler=g$2;reactIs_production_min$1.StrictMode=f$1;reactIs_production_min$1.Suspense=p$1;reactIs_production_min$1.isAsyncMode=function(a){return A$2(a)||z$2(a)===l$1};reactIs_production_min$1.isConcurrentMode=A$2;reactIs_production_min$1.isContextConsumer=function(a){return z$2(a)===k$2};reactIs_production_min$1.isContextProvider=function(a){return z$2(a)===h$1};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c$1};reactIs_production_min$1.isForwardRef=function(a){return z$2(a)===n$1};reactIs_production_min$1.isFragment=function(a){return z$2(a)===e$1};reactIs_production_min$1.isLazy=function(a){return z$2(a)===t$1};
reactIs_production_min$1.isMemo=function(a){return z$2(a)===r$1};reactIs_production_min$1.isPortal=function(a){return z$2(a)===d$1};reactIs_production_min$1.isProfiler=function(a){return z$2(a)===g$2};reactIs_production_min$1.isStrictMode=function(a){return z$2(a)===f$1};reactIs_production_min$1.isSuspense=function(a){return z$2(a)===p$1};
reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e$1||a===m$1||a===g$2||a===f$1||a===p$1||a===q$2||"object"===typeof a&&null!==a&&(a.$$typeof===t$1||a.$$typeof===r$1||a.$$typeof===h$1||a.$$typeof===k$2||a.$$typeof===n$1||a.$$typeof===w$2||a.$$typeof===x$2||a.$$typeof===y$1||a.$$typeof===v$2)};reactIs_production_min$1.typeOf=z$2;

var reactIs_development$1 = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development$1.AsyncMode = AsyncMode;
reactIs_development$1.ConcurrentMode = ConcurrentMode;
reactIs_development$1.ContextConsumer = ContextConsumer;
reactIs_development$1.ContextProvider = ContextProvider;
reactIs_development$1.Element = Element;
reactIs_development$1.ForwardRef = ForwardRef;
reactIs_development$1.Fragment = Fragment;
reactIs_development$1.Lazy = Lazy;
reactIs_development$1.Memo = Memo;
reactIs_development$1.Portal = Portal;
reactIs_development$1.Profiler = Profiler;
reactIs_development$1.StrictMode = StrictMode;
reactIs_development$1.Suspense = Suspense;
reactIs_development$1.isAsyncMode = isAsyncMode;
reactIs_development$1.isConcurrentMode = isConcurrentMode;
reactIs_development$1.isContextConsumer = isContextConsumer;
reactIs_development$1.isContextProvider = isContextProvider;
reactIs_development$1.isElement = isElement;
reactIs_development$1.isForwardRef = isForwardRef;
reactIs_development$1.isFragment = isFragment;
reactIs_development$1.isLazy = isLazy;
reactIs_development$1.isMemo = isMemo;
reactIs_development$1.isPortal = isPortal;
reactIs_development$1.isProfiler = isProfiler;
reactIs_development$1.isStrictMode = isStrictMode;
reactIs_development$1.isSuspense = isSuspense;
reactIs_development$1.isValidElementType = isValidElementType;
reactIs_development$1.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$2.exports = reactIs_production_min$1;
} else {
  reactIs$2.exports = reactIs_development$1;
}

var reactIs$1 = reactIs$2.exports;

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols$1) {
      keys = keys.concat(getOwnPropertySymbols$1(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function v$1(){return (v$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var g$1=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs$3.exports.typeOf(t)},w$1=Object.freeze([]),E=Object.freeze({});function b$1(e){return "function"==typeof e}function _(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A$1="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),R="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),x$1=new Map,k$1=new Map,V=1,B=function(e){if(x$1.has(e))return x$1.get(e);for(;k$1.has(V);)V++;var t=V++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&j(16,""+t),x$1.set(e,t),k$1.set(t,e),t},z$1=function(e){return k$1.get(e)},M=function(e,t){t>=V&&(V=t+1),x$1.set(e,t),k$1.set(t,e);},G="style["+A$1+'][data-styled-version="5.3.5"]',L=new RegExp("^"+A$1+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},Y=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(M(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},q$1=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A$1))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A$1,"active"),r.setAttribute("data-styled-version","5.3.5");var i=q$1();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v$1({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(G),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A$1)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v$1({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z$1(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A$1+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return (Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b$1(n)&&!N(n))return !1}return !0}var oe=ne("5.3.5"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&re(e),this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f;}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w$1:c,l=new stylis_min(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=React__default["default"].createContext();ue.Consumer;var de=React__default["default"].createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return React.useContext(ue)||he}function me(){return React.useContext(de)||pe}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return "-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return "";if(N(e))return "."+e.styledComponentId;if(b$1(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIs$3.exports.isElement(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b$1(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b$1(e)||S(e)?Ae(Ne(g$1(w$1,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g$1(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else {for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r.apply(void 0,[e].concat(s));}},React.useRef(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n));}catch(e){Ie.test(e.message)&&Pe.delete(n);}finally{console.error=r;}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var xe=function(e){return ee(ne(e)>>>0)};function ke(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ve(t)&&Ve(r)?Me(r,t):e[n]=t;}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&ze(e,i[a],a);}return e}var Ge=React__default["default"].createContext();Ge.Consumer;var Ye={};function qe(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w$1:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+xe("5.3.5"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&React.useDebugValue(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v$1({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b$1(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Re(t,React.useContext(Ge),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return "production"!==process.env.NODE_ENV&&React.useDebugValue(i),"production"!==process.env.NODE_ENV&&!t&&r&&r(i),i}(i,r,y,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v$1({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,isPropValid,_):!N||isPropValid(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v$1({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,React.createElement(_,C)}(C,e,t,P)};return O.displayName=f,(C=React__default["default"].forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w$1,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:Te(_(e)));return qe(e,v$1({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(f,g)),C.toString=function(){return "."+C.styledComponentId},i&&hoistNonReactStatics_cjs(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!reactIs$3.exports.isValidElementType(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v$1({},o,{},n))},s.attrs=function(n){return e(t,r,v$1({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e);}));"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);var styled = He;

var dist = {exports: {}};

var _package = {};

var querystringify$1 = {};

var has$3 = Object.prototype.hasOwnProperty
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
    if (has$3.call(obj, key)) {
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

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has$2;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has = has$2;
var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

var Type = {
    LOGO: 'LOGO',
    SEARCH: 'SEARCH',
    SMILE: 'SMILE',
    TIME: 'TIME',
    STORE: 'STORE',
    STORE_BLACK: 'STORE_BLACK',
    CLOSE: 'CLOSE',
    PLUS: 'PLUS',
    MINUS: 'MINUS',
    PREVIOUS: 'PREVIOUS'
};

var _path$6;

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$9({
    width: 47,
    height: 17,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.594 8.275c-.505-.437-1.322-.774-2.49-1.011a10.98 10.98 0 0 1-1.225-.337c-.311-.14-.447-.258-.506-.337-.078-.1-.116-.238-.116-.417 0-.139.038-.337.35-.515.272-.139.642-.218 1.089-.218.39 0 .72.04.992.139s.525.257.759.475c.253.238.544.357.856.357a.92.92 0 0 0 .564-.178c.214-.179.33-.397.33-.635a.944.944 0 0 0-.252-.634c-.331-.416-.779-.734-1.343-.971-.544-.238-1.186-.337-1.887-.337a4.86 4.86 0 0 0-1.614.277c-.525.198-.934.476-1.265.872-.33.397-.505.873-.505 1.448 0 1.387 1.05 2.28 3.132 2.696.739.138 1.264.317 1.556.515.272.178.389.397.389.654 0 .278-.117.476-.39.635-.291.178-.719.277-1.264.277a3.03 3.03 0 0 1-1.186-.238c-.35-.178-.623-.357-.798-.575-.408-.396-.875-.456-1.381-.079a.946.946 0 0 0-.389.773c0 .238.078.456.253.635.37.376.895.693 1.537.911a6.312 6.312 0 0 0 2.042.337c.72 0 1.362-.118 1.887-.356.525-.238.953-.575 1.226-1.011.272-.437.428-.912.428-1.428 0-.694-.273-1.268-.779-1.724m6.984 2.822a.81.81 0 0 0-.647-.28h-.547a.859.859 0 0 1-.708-.359c-.202-.26-.303-.559-.303-.938V5.786h1.173c.283 0 .506-.08.688-.24a.814.814 0 0 0 .283-.619.868.868 0 0 0-.283-.659c-.182-.16-.405-.24-.688-.24h-1.173V1.913c0-.28-.101-.519-.283-.719a.997.997 0 0 0-.728-.28c-.284 0-.526.1-.729.28a.971.971 0 0 0-.283.72V4.01h-.546c-.283 0-.506.08-.688.24a.838.838 0 0 0-.283.658c0 .24.101.46.283.62.182.16.405.239.688.239h.546V9.5c0 .619.142 1.178.385 1.677.263.5.627.899 1.092 1.178.465.3.991.44 1.557.44h.284c.323 0 .606-.1.809-.28a.914.914 0 0 0 .343-.719c.02-.26-.06-.5-.242-.699m2.098-7.441a.91.91 0 0 0-.657.28c-.183.18-.274.44-.274.74v7.099c0 .28.091.54.256.72.182.2.401.3.657.3a.87.87 0 0 0 .675-.3c.164-.2.255-.44.255-.72v-7.1c0-.3-.091-.54-.255-.74-.146-.18-.384-.28-.657-.28M15.436 0c-.316 0-.594.11-.817.332a1.108 1.108 0 0 0-.335.81c0 .314.112.59.335.811.223.221.501.332.817.332.316 0 .595-.11.818-.332.223-.221.334-.497.334-.81 0-.314-.111-.59-.334-.811A1.127 1.127 0 0 0 15.436 0m9.322 8.23a2.804 2.804 0 0 1-1.305 2.397 2.574 2.574 0 0 1-1.345.357c-.502 0-.944-.12-1.346-.357a2.505 2.505 0 0 1-.943-.99 2.976 2.976 0 0 1-.342-1.406c0-.515.12-1.01.342-1.426.22-.416.542-.753.943-.99a2.574 2.574 0 0 1 1.346-.357c.502 0 .943.119 1.345.356.401.238.723.575.943.99.241.417.362.912.362 1.427m-.301-3.981a4.754 4.754 0 0 0-2.35-.594c-.863 0-1.646.198-2.328.594-.703.396-1.245.95-1.667 1.644-.401.693-.602 1.485-.602 2.337v7.209c0 .297.1.535.3.733.202.178.443.277.724.277.3 0 .542-.099.743-.277.18-.179.28-.436.28-.733v-3.763c.322.297.683.535 1.065.733a4.296 4.296 0 0 0 1.807.396c.803 0 1.546-.198 2.188-.594.663-.397 1.165-.951 1.546-1.644a5.029 5.029 0 0 0 .562-2.337c0-.852-.2-1.644-.602-2.337a4.397 4.397 0 0 0-1.666-1.644m20.555 4c0 .515-.12.99-.361 1.407a2.815 2.815 0 0 1-.944.99 2.574 2.574 0 0 1-1.345.356c-.502 0-.944-.118-1.345-.356a2.505 2.505 0 0 1-.944-.99 2.976 2.976 0 0 1-.341-1.407c0-.515.12-1.01.341-1.426.221-.415.542-.752.944-.99a2.574 2.574 0 0 1 1.345-.356c.502 0 .944.118 1.345.356.402.238.723.575.944.99.26.416.361.911.361 1.426m1.386-2.337A4.596 4.596 0 0 0 44.73 4.25a4.755 4.755 0 0 0-2.349-.594c-.863 0-1.646.198-2.329.594-.703.396-1.245.95-1.666 1.644-.402.693-.603 1.485-.603 2.337v7.209c0 .297.1.535.301.733.201.178.442.277.723.277.301 0 .542-.099.743-.277.18-.179.281-.436.281-.733v-3.763a4.83 4.83 0 0 0 1.064.733 4.295 4.295 0 0 0 1.807.396c.803 0 1.546-.198 2.189-.594a4.386 4.386 0 0 0 1.546-1.644A5.03 5.03 0 0 0 47 8.23c0-.832-.2-1.624-.602-2.318m-14.143 5.06c-1.53 0-2.77-1.23-2.77-2.747s1.24-2.747 2.77-2.747 2.77 1.23 2.77 2.747-1.24 2.747-2.77 2.747m0-7.316c-2.545 0-4.608 2.045-4.608 4.569s2.063 4.57 4.608 4.57c2.545 0 4.608-2.046 4.608-4.57 0-2.524-2.063-4.57-4.608-4.57",
    fill: "#D5D5D5"
  })));
};

var _path$5;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

var SvgSearchIcon = function SvgSearchIcon(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$8({
    width: 15,
    height: 15,
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.307 0a7.307 7.307 0 0 1 5.772 11.788L18 16.708 16.708 18l-4.92-4.92A7.307 7.307 0 1 1 7.308 0zm0 1.827a5.48 5.48 0 1 0 0 10.96 5.48 5.48 0 0 0 0-10.96z",
    fill: "#414141",
    fillRule: "evenodd"
  })));
};

var _g$2;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

var SvgSmile = function SvgSmile(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$7({
    width: 18,
    height: 18,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$2 || (_g$2 = /*#__PURE__*/React__namespace.createElement("g", {
    transform: "translate(1 1)",
    stroke: "#FF4500",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.128 10.002s1.173 2.347 3.902 2.343c2.729-.005 3.771-2.325 3.771-2.325",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    strokeWidth: 0.5,
    fill: "#FF4500",
    cx: 10.343,
    cy: 5.957,
    r: 1
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    strokeWidth: 0.5,
    fill: "#FF4500",
    cx: 5.495,
    cy: 5.957,
    r: 1
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 8,
    cy: 8,
    r: 8
  }))));
};

var _path$4;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

var SvgStore = function SvgStore(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$6({
    width: 24,
    height: 18,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.65.292a1.01 1.01 0 0 1 0 1.42l-3.275 3.29h9.124l-3.276-3.29a1.01 1.01 0 0 1 0-1.42.992.992 0 0 1 1.407 0l4.682 4.71h3.567a1 1 0 0 1 0 2h-.165L21.17 15.54A2.99 2.99 0 0 1 18.235 18H5.639a2.99 2.99 0 0 1-2.935-2.46L1.16 7.002H.995a.999.999 0 0 1-.995-1 1 1 0 0 1 .995-1h3.567L9.244.292a.992.992 0 0 1 1.407 0zM3.16 7.06l1.483 8.02c.085.46.5.803.98.803H18.25a.996.996 0 0 0 .98-.804l1.484-8.02H3.16zm3.98 2.13a.986.986 0 0 1 1.132.82l.492 2.96a.987.987 0 0 1-.808 1.135.986.986 0 0 1-1.131-.819l-.492-2.96A.987.987 0 0 1 7.14 9.19zm9.593 0a.987.987 0 0 1 .808 1.136l-.492 2.96a.986.986 0 0 1-1.132.82.987.987 0 0 1-.807-1.136l.492-2.96a.986.986 0 0 1 1.131-.82zm-4.796-.013c.581 0 1.053.445 1.053.989v2.964c0 .544-.472.989-1.053.989-.582 0-1.053-.445-1.053-.989v-2.964c0-.544.471-.989 1.053-.989z",
    fill: "#C1C1C1",
    fillRule: "evenodd"
  })));
};

var _g$1;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

var SvgTime = function SvgTime(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$5({
    width: 20,
    height: 20,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React__namespace.createElement("g", {
    stroke: "#C1C1C1",
    strokeWidth: 2,
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 10,
    cy: 10,
    r: 9
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinecap: "round",
    d: "m13 13-3-2.25M10 6v4.5"
  }))));
};

var _path$3;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

var SvgStoreBlack = function SvgStoreBlack(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$4({
    width: 31,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.83.39c.505.52.505 1.373 0 1.893L9.576 6.669h11.848L17.17 2.283a1.372 1.372 0 0 1 0-1.893 1.264 1.264 0 0 1 1.827 0l6.08 6.28h4.631c.713 0 1.292.599 1.292 1.332 0 .733-.579 1.333-1.292 1.333h-.214L27.489 20.72C27.155 22.614 25.55 24 23.678 24H7.322c-1.872 0-3.477-1.386-3.811-3.28L1.506 9.335h-.214C.579 9.335 0 8.735 0 8.002S.579 6.67 1.292 6.67h4.632l6.08-6.28a1.264 1.264 0 0 1 1.826 0zM4 9l1.943 10.907A1.32 1.32 0 0 0 7.228 21h16.544c.63 0 1.172-.467 1.284-1.093L27 9H4zm5.002 2.019c.654-.126 1.273.391 1.381 1.16l.6 4.194c.11.755-.332 1.482-.985 1.608-.654.126-1.273-.391-1.381-1.16l-.6-4.194c-.11-.755.332-1.482.985-1.608zm12.996 0c.653.126 1.095.853.985 1.608l-.6 4.194c-.108.769-.727 1.286-1.381 1.16-.653-.126-1.095-.853-.985-1.608l.6-4.194c.108-.769.727-1.286 1.381-1.16zM15.5 11c.828 0 1.5.63 1.5 1.4v4.2c0 .77-.672 1.4-1.5 1.4s-1.5-.63-1.5-1.4v-4.2c0-.77.672-1.4 1.5-1.4z",
    fillRule: "evenodd"
  })));
};

var _path$2;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$3({
    width: 19,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.73 1.73 3.27 14.27m0-12.54 12.46 12.54",
    stroke: "#000",
    strokeWidth: 2,
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$1;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

var SvgPlus = function SvgPlus(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$2({
    width: 18,
    height: 16,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9 1v14M2 8h14",
    stroke: "#FFF",
    strokeWidth: 1.75,
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  })));
};

var _path;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var SvgMinus = function SvgMinus(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends$1({
    width: 18,
    height: 2,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 1h14",
    stroke: "#FFF",
    strokeWidth: 1.75,
    fill: "none",
    strokeLinecap: "round"
  })));
};

var _g;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPrevious = function SvgPrevious(props) {
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 12,
    height: 17,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    stroke: "#000",
    strokeWidth: 1.75,
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "m1 9 9.167-7.333"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    strokeLinejoin: "round",
    d: "m1 9 9 7"
  }))));
};

function changeTypeToIconComponent(type) {
    switch (type) {
        case Type.LOGO:
            return React__default["default"].createElement(SvgLogo, null);
        case Type.SEARCH:
            return React__default["default"].createElement(SvgSearchIcon, null);
        case Type.SMILE:
            return React__default["default"].createElement(SvgSmile, null);
        case Type.STORE:
            return React__default["default"].createElement(SvgStore, null);
        case Type.TIME:
            return React__default["default"].createElement(SvgTime, null);
        case Type.STORE_BLACK:
            return React__default["default"].createElement(SvgStoreBlack, null);
        case Type.CLOSE:
            return React__default["default"].createElement(SvgClose, null);
        case Type.PLUS:
            return React__default["default"].createElement(SvgPlus, null);
        case Type.MINUS:
            return React__default["default"].createElement(SvgMinus, null);
        case Type.PREVIOUS:
            return React__default["default"].createElement(SvgPrevious, null);
        default:
            return 'icon';
    }
}
function changeTypeToIconClassName(type) {
    switch (type) {
        case Type.LOGO:
            return 'stipop-icon-logo';
        case Type.SEARCH:
            return 'stipop-icon-search';
        case Type.SMILE:
            return 'stipop-icon-smile';
        case Type.STORE:
            return 'stipop-icon-store';
        case Type.TIME:
            return 'stipop-icon-time';
        case Type.STORE_BLACK:
            return 'stipop-icon-store-black';
        case Type.CLOSE:
            return 'stipop-icon-close';
        case Type.PLUS:
            return 'stipop-icon-plus';
        case Type.MINUS:
            return 'stipop-icon-minus';
        case Type.PREVIOUS:
            return 'stipop-icon-previous';
        default:
            return 'stipop-icon-unknown';
    }
}
function Icon(_a) {
    var className = _a.className, type = _a.type, onClick = _a.onClick, children = _a.children;
    return (React__default["default"].createElement("div", { className: __spreadArray(__spreadArray([], (Array.isArray(className) ? className : [className]), true), [
            'stipop-icon',
            changeTypeToIconClassName(type),
        ], false).join(' '), onClick: onClick }, children || changeTypeToIconComponent(type)));
}
Icon.propTypes = {
    className: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]),
    type: PropTypes.oneOfType([
        PropTypes.oneOf(Object.keys(Type)),
        PropTypes.string,
    ]).isRequired,
    onClick: PropTypes.func,
    children: PropTypes.element,
};
Icon.defaultProps = {
    className: '',
    onClick: function () { },
    children: null,
};

var SearchComponent = function (_a) {
    var params = _a.params, size = _a.size, backgroundColor = _a.backgroundColor, column = _a.column, border = _a.border, input = _a.input, scroll = _a.scroll, stickerClick = _a.stickerClick;
    var _b = React.useState(params.default ? params.default : 'hi'), keyword = _b[0], setKeyword = _b[1];
    var _c = React.useState([]), stickerList = _c[0], setStickerList = _c[1];
    // const baseUrl = 'https://messenger.stipop.io/v1/search'
    // const Stipop = require('stipop-js-sdk')
    var client = new Stipop$1(params.apikey, 'v1');
    // useEffect(() => {
    //   let query = `?userId=${params.userId}&q=${keyword}`
    //   if (params.lang) {
    //     query += `&lang=${params.lang}`
    //   }
    //   if (params.pageNumber) {
    //     query += `&pageNumber=${params.pageNumber}`
    //   }
    //   if (params.limit) {
    //     query += `&limit=${params.limit}`
    //   }
    //   if (keyword) {
    //     axios
    //       .get(`${baseUrl}${query}`, {
    //         headers: {
    //           apikey: params.apikey,
    //           'Content-Type': 'application/json',
    //         },
    //       })
    //       .then(({ data }) => {
    //         setStickerList(
    //           data.body.stickerList
    //             ? data.body.stickerList.map(sticker => sticker.stickerImg)
    //             : []
    //         )
    //       })
    //   } else {
    //     setKeyword(params.default)
    //   }
    // }, [keyword, params.lang, params.pageNumber, params.limit])
    React.useEffect(function () {
        console.log(keyword);
        var searchParams = {
            userId: params.userId,
            q: keyword,
            lang: params.lang,
            pageNumber: params.pageNumber,
            limit: params.limit,
        };
        if (keyword) {
            var data = client.getSearch(searchParams);
            data.then(function (_a) {
                var body = _a.body;
                console.log(body);
                setStickerList(body && body.stickerList
                    ? body.stickerList.map(function (sticker) { return sticker.stickerImg; })
                    : []);
            });
        }
        else {
            setKeyword(params.default ? params.default : 'hi');
        }
    }, [keyword, params.lang, params.pageNumber, params.limit]);
    return (React__default["default"].createElement(SearchWrapper, { size: size, backgroundColor: backgroundColor, border: border },
        React__default["default"].createElement(SearchForm, null,
            React__default["default"].createElement(SearchInput, { type: "text", onChange: function (e) { return setKeyword(e.target.value); }, placeholder: "Search sticker...", input: input }),
            React__default["default"].createElement(InputHolder, { input: input },
                React__default["default"].createElement(Icon, { type: "SEARCH" }),
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("span", null, "POWERED BY"),
                    React__default["default"].createElement(Icon, { type: "LOGO" })))),
        stickerList.length > 0 ? (React__default["default"].createElement(StickerWrapper$2, { column: column, scroll: scroll }, stickerList.map(function (sticker, index) { return (React__default["default"].createElement(StickerImg$1, { src: sticker, key: index, onClick: function () { return stickerClick(sticker); }, size: size })); }))) : (React__default["default"].createElement(NoSticker, null,
            React__default["default"].createElement("img", { src: "https://img.stipop.io/image/sdk/no-sticker.png", className: "no-sticker" }),
            React__default["default"].createElement("span", { className: "no-sticker-text" }, "No Stickers to Show")))));
};
var SearchWrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  padding: 15px 20px 20px 20px;\n  box-sizing: border-box;\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  padding: 15px 20px 20px 20px;\n  box-sizing: border-box;\n"])), function (props) {
    return props.size && props.size.width ? "".concat(props.size.width, "px") : '360px';
}, function (props) {
    return props.size && props.size.height ? "".concat(props.size.height, "px") : '300px';
}, function (props) {
    return props.backgroundColor ? props.backgroundColor : '#fff';
}, function (props) {
    return props.border && props.border.border
        ? props.border.border
        : '1px solid lightgray';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '10px';
});
var SearchForm = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  width: 100%;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"], ["\n  width: 100%;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"])));
var SearchInput = styled.input(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: 0 140px 0 35px;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 1;\n  position: absolute;\n\n  &::placeholder {\n    font-size: 13px;\n    color: lightgray;\n  }\n\n  &:focus {\n    outline: none;\n    border: ", ";\n    box-sizing: border-box;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: 0 140px 0 35px;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 1;\n  position: absolute;\n\n  &::placeholder {\n    font-size: 13px;\n    color: lightgray;\n  }\n\n  &:focus {\n    outline: none;\n    border: ", ";\n    box-sizing: border-box;\n  }\n"])), function (props) {
    return props.input && props.input.width
        ? "".concat(props.input.width, "%")
        : 'calc(100% - 20px)';
}, function (props) {
    return props.input && props.input.height ? "".concat(props.input.height, "px") : '32px';
}, function (props) {
    return props.input && props.input.border
        ? props.input.border
        : '2px solid lightgray';
}, function (props) {
    return props.input && (props.input.radius || props.input.radius == 0)
        ? "".concat(props.input.radius, "px")
        : '50px';
}, function (props) {
    return props.input && props.input.color ? props.input.color : 'black';
}, function (props) {
    return props.input && props.input.border
        ? "".concat(Number(props.input.border.slice(0, 1)) + 1).concat(props.input.border.slice(1))
        : '3px solid lightgray';
});
var InputHolder = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: 0 20px 0 12px;\n  border-radius: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  font-size: 10px;\n  color: #d5d5d5;\n  background-color: ", ";\n  position: absolute;\n\n  .search-icon {\n    width: 15px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-top: 2px;\n      margin-right: 3px;\n    }\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: 0 20px 0 12px;\n  border-radius: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  font-size: 10px;\n  color: #d5d5d5;\n  background-color: ", ";\n  position: absolute;\n\n  .search-icon {\n    width: 15px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-top: 2px;\n      margin-right: 3px;\n    }\n  }\n"])), function (props) {
    return props.input && props.input.width
        ? "".concat(props.input.width, "%")
        : 'calc(100% - 20px)';
}, function (props) {
    return props.input && props.input.height ? "".concat(props.input.height, "px") : '32px';
}, function (props) {
    return props.input && (props.input.radius || props.input.radius == 0)
        ? "".concat(props.input.radius, "px")
        : '50px';
}, function (props) {
    return props.input && props.input.backgroundColor
        ? props.input.backgroundColor
        : '#fff';
});
var StickerWrapper$2 = styled.div(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  width: 100%;\n  height: 90%;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: auto;\n  row-gap: 8%;\n  justify-items: center;\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 90%;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: auto;\n  row-gap: 8%;\n  justify-items: center;\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n  }\n"])), function (props) {
    return props.column ? "repeat(".concat(props.column, ", 1fr)") : 'repeat(4, 1fr)';
}, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); });
var NoSticker = styled.div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  width: 100%;\n  height: 90%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .no-sticker {\n    width: 40%;\n  }\n  .no-sticker-text {\n    font-size: 14px;\n    color: #5f5f5f;\n  }\n"], ["\n  width: 100%;\n  height: 90%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .no-sticker {\n    width: 40%;\n  }\n  .no-sticker-text {\n    font-size: 14px;\n    color: #5f5f5f;\n  }\n"])));
var StickerImg$1 = styled.img(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  width: ", ";\n  height: auto;\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  width: ", ";\n  height: auto;\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (props) {
    return props.size && props.size.imgSize ? "".concat(props.size.imgSize, "%") : '60%';
});
var templateObject_1$3, templateObject_2$3, templateObject_3$3, templateObject_4$3, templateObject_5$3, templateObject_6$3, templateObject_7$1;

var ChattingComponent = function (_a) {
    var width = _a.width, height = _a.height, sticker = _a.sticker;
    var _b = React.useState([]), chatList = _b[0], setChatList = _b[1];
    React.useEffect(function () {
        if (sticker) {
            setChatList(chatList.concat(sticker));
        }
    }, [sticker]);
    React.useEffect(function () {
        var chat = document.querySelector('.chat-list');
        chat.scrollTop = chat.scrollHeight;
    }, [chatList]);
    return (React__default["default"].createElement(ChattingWrapper, { width: width, height: height, sticker: sticker },
        React__default["default"].createElement(ChatList, { className: "chat-list" }, chatList.map(function (chat) { return (React__default["default"].createElement(ChatWrapper, null,
            React__default["default"].createElement("span", null, "Guest"),
            React__default["default"].createElement(Chat, { sticker: chat.startsWith('https://img.stipop.io') ? true : false }, chat.startsWith('https://img.stipop.io') ? (React__default["default"].createElement("img", { src: chat, alt: "" })) : (chat)))); })),
        React__default["default"].createElement(ChattingFrom, null,
            React__default["default"].createElement(ChattingInput, { placeholder: "Type Message", onKeyPress: function (e) {
                    if (e.key === 'Enter') {
                        if (e.target.value.length > 0) {
                            setChatList(chatList.concat(e.target.value));
                        }
                        e.target.value = '';
                    }
                } }))));
};
var ChattingWrapper = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: #f8f6fe;\n  position: relative;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: #f8f6fe;\n  position: relative;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])), function (props) { return (props.width ? "".concat(props.width, "px") : '80vw'); }, function (props) { return (props.height ? "".concat(props.height, "px") : '90vh'); });
var ChatList = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  height: calc(100% - 60px);\n  overflow-y: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  height: calc(100% - 60px);\n  overflow-y: auto;\n"])));
var ChatWrapper = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  margin: 5px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 5px;\n\n  span {\n    font-size: 12px;\n    color: #696969;\n    padding-right: 5px;\n    margin-bottom: 2px;\n  }\n"], ["\n  margin: 5px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 5px;\n\n  span {\n    font-size: 12px;\n    color: #696969;\n    padding-right: 5px;\n    margin-bottom: 2px;\n  }\n"])));
var Chat = styled.div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: inline-block;\n  padding: 5px 10px;\n  word-break: break-all;\n  font-size: 14px;\n\n  img {\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 10px;\n  display: inline-block;\n  padding: 5px 10px;\n  word-break: break-all;\n  font-size: 14px;\n\n  img {\n    width: 80px;\n    height: 80px;\n  }\n"])), function (props) { return (props.sticker ? '' : '#fff'); });
var ChattingFrom = styled.div(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n"])));
var ChattingInput = styled.input(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  width: 100%;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 0 15px;\n  box-sizing: border-box;\n"], ["\n  width: 100%;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 0 15px;\n  box-sizing: border-box;\n"])));
var templateObject_1$2, templateObject_2$2, templateObject_3$2, templateObject_4$2, templateObject_5$2, templateObject_6$2;

var PickerComponent = function (_a) {
    var params = _a.params, size = _a.size, border = _a.border, backgroundColor = _a.backgroundColor, menu = _a.menu, column = _a.column, scroll = _a.scroll, stickerClick = _a.stickerClick, storeClick = _a.storeClick;
    var _b = React.useState([]), myStickers = _b[0], setMyStickers = _b[1];
    var _c = React.useState([]), stickers = _c[0], setStickers = _c[1];
    var _d = React.useState(0), showPackage = _d[0], setShowPackage = _d[1];
    var client = new Stipop$1(params.apikey, 'v1');
    React.useEffect(function () {
        var storeParams = {
            userId: params.userId,
        };
        var data = client.mySticker(storeParams);
        data.then(function (_a) {
            var body = _a.body;
            setMyStickers(body && body.packageList ? body.packageList : []);
            var packageParams = {
                userId: params.userId,
                packId: body.packageList[0].packageId,
            };
            var packageData = client.getPackInfo(packageParams);
            packageData.then(function (_a) {
                var body = _a.body;
                setStickers(body && body.package && body.package.stickers
                    ? body.package.stickers.map(function (sticker) { return sticker.stickerImg; })
                    : []);
            });
        });
    }, []);
    var clickPackage = function (packageId) {
        var packageParams = {
            userId: params.userId,
            packId: packageId,
        };
        var data = client.getPackInfo(packageParams);
        data.then(function (_a) {
            var body = _a.body;
            setStickers(body && body.package && body.package.stickers
                ? body.package.stickers.map(function (sticker) { return sticker.stickerImg; })
                : []);
        });
    };
    return (React__default["default"].createElement(StoreWrapper$1, { size: size, border: border },
        React__default["default"].createElement(PickerMenu, { backgroundColor: backgroundColor, border: border, menu: menu },
            React__default["default"].createElement(Icon, { type: "TIME" }),
            React__default["default"].createElement(Icon, { type: "STORE", onClick: function () { return storeClick(true); } }),
            myStickers.length > 0 ? (myStickers.map(function (pack, index) {
                return pack.packageId && (React__default["default"].createElement(PackageImgWrapper, { menu: menu, key: index, onClick: function () {
                        clickPackage(pack.packageId);
                        setShowPackage(index);
                    }, show: showPackage === index },
                    React__default["default"].createElement(PackageImg, { src: pack.packageImg })));
            })) : (React__default["default"].createElement("div", null))),
        stickers && (React__default["default"].createElement(StickerWrapper$1, { backgroundColor: backgroundColor, border: border, column: column, scroll: scroll }, stickers.map(function (sticker, index) { return (React__default["default"].createElement(StickerImg, { size: size, src: sticker, alt: "", key: index, onClick: function () { return stickerClick(sticker); } })); })))));
};
var StoreWrapper$1 = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n"])), function (props) {
    return props.size && props.size.width ? "".concat(props.size.width, "px") : '360px';
}, function (props) {
    return props.size && props.size.height ? "".concat(props.size.height, "px") : '300px';
}, function (props) {
    return props.border && props.border.border
        ? props.border.border
        : '1px solid lightgray';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '10px';
});
var PickerMenu = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  height: ", ";\n  border-bottom: ", ";\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  padding: 0 10px;\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  .stipop-icon {\n    height: 90%;\n    display: flex;\n    align-items: center;\n    padding: 0 10px;\n    cursor: pointer;\n  }\n"], ["\n  height: ", ";\n  border-bottom: ", ";\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  padding: 0 10px;\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  .stipop-icon {\n    height: 90%;\n    display: flex;\n    align-items: center;\n    padding: 0 10px;\n    cursor: pointer;\n  }\n"])), function (props) {
    return props.menu && props.menu.height ? "".concat(props.menu.height, "px") : '45px';
}, function (props) {
    return props.menu && props.menu.bottomLine
        ? props.menu.bottomLine
        : '1px solid lightgray';
}, function (props) {
    return props.menu && props.menu.backgroundColor
        ? props.menu.backgroundColor
        : '#fff';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '10px';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '10px';
});
var PackageImgWrapper = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  height: 100%;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  border-bottom: ", ";\n"], ["\n  height: 100%;\n  padding: 0 10px;\n  display: flex;\n  align-items: center;\n  border-bottom: ", ";\n"])), function (props) {
    return props.show
        ? props.menu && props.menu.selectedLine
            ? props.menu.selectedLine
            : '2px solid black'
        : '';
});
var PackageImg = styled.img(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  height: 65%;\n  cursor: pointer;\n"], ["\n  height: 65%;\n  cursor: pointer;\n"])));
var StickerWrapper$1 = styled.div(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  height: calc(100% - 45px);\n  padding: 15px;\n  display: grid;\n  grid-template-columns: ", ";\n  row-gap: 8%;\n  justify-items: center;\n  overflow-y: auto;\n  background-color: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n  }\n"], ["\n  height: calc(100% - 45px);\n  padding: 15px;\n  display: grid;\n  grid-template-columns: ", ";\n  row-gap: 8%;\n  justify-items: center;\n  overflow-y: auto;\n  background-color: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n  }\n"])), function (props) {
    return props.column ? "repeat(".concat(props.column, ", 1fr)") : 'repeat(4, 1fr)';
}, function (props) {
    return props.backgroundColor ? props.backgroundColor : '#fff';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '10px';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '10px';
}, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); });
var StickerImg = styled.img(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  width: ", ";\n  cursor: pointer;\n"], ["\n  width: ", ";\n  cursor: pointer;\n"])), function (props) {
    return props.size && props.size.imgSize ? "".concat(props.size.imgSize, "%") : '70%';
});
var templateObject_1$1, templateObject_2$1, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1;

var StoreComponent = function (_a) {
    var params = _a.params, downloadParams = _a.downloadParams, color = _a.color, scroll = _a.scroll, onClose = _a.onClose, size = _a.size, border = _a.border;
    var _b = React.useState([]), trendingStickers = _b[0], setTrendingStickers = _b[1];
    var _c = React.useState([]), packages = _c[0], setPackages = _c[1];
    var _d = React.useState(false), detail = _d[0], setDetail = _d[1];
    var _e = React.useState([]), stickers = _e[0], setStickers = _e[1];
    var _f = React.useState(null), main = _f[0], setMain = _f[1];
    var _g = React.useState([]), hideList = _g[0], setHideList = _g[1];
    var _h = React.useState(true), isLoading = _h[0], setIsLoading = _h[1];
    var _j = React.useState(0); _j[0]; var setCurrentScroll = _j[1];
    var client = new Stipop$1(params.apikey, 'v1');
    React.useEffect(function () {
        var packInfo = new Array();
        var trendingParams = {
            userId: params.userId,
            lang: params.lang,
            countryCode: params.countryCode,
            animated: params.animated,
            pageNumber: params.pageNumber,
            limit: params.limit,
        };
        var data = client.getPack(trendingParams);
        data.then(function (_a) {
            var body = _a.body;
            body.packageList.map(function (pack) {
                var packageParams = {
                    userId: params.userId,
                    packId: pack.packageId,
                };
                var packageData = client.getPackInfo(packageParams);
                packageData.then(function (_a) {
                    var body = _a.body;
                    packInfo.push(body.package);
                    setTrendingStickers(__spreadArray(__spreadArray([], trendingStickers, true), [packInfo], false));
                });
            });
        });
        var hideParams = {
            userId: params.userId,
        };
        var hideData = client.myStickerHideList(hideParams);
        hideData.then(function (_a) {
            var body = _a.body;
            setHideList(body.packageList.map(function (pack) { return pack.packageId; }));
        });
    }, []);
    React.useEffect(function () {
        setPackages(trendingStickers[0]);
    }, [trendingStickers]);
    React.useEffect(function () {
        if (packages && packages.length > 0) {
            setIsLoading(false);
        }
        if (stickers && stickers.length > 0) {
            setIsLoading(false);
        }
    }, [packages, stickers]);
    var clickDownload = function (packageId) {
        setIsLoading(true);
        var dParams = {
            userId: params.userId,
            packageId: packageId,
            isPurchase: downloadParams.isPurchase,
            price: downloadParams.price,
            lang: downloadParams.lang,
            countryCode: downloadParams.countryCode,
        };
        var data = client.download(dParams);
        data.then(function () {
            setPackages(packages.map(function (pack) {
                if (pack.packageId === packageId) {
                    pack.isDownload = 'Y';
                }
                return pack;
            }));
            setIsLoading(false);
        });
    };
    var clickDelete = function (packageId) {
        setIsLoading(true);
        var deleteParams = {
            userId: params.userId,
            packageId: packageId,
        };
        var data = client.myStickerHide(deleteParams);
        data.then(function () {
            if (hideList.indexOf(packageId) < 0) {
                setHideList(hideList.concat(packageId));
            }
            else {
                setHideList(hideList.filter(function (item) { return item !== packageId; }));
            }
            setIsLoading(false);
        });
    };
    var clickDetail = function (packageId) {
        setIsLoading(true);
        var packageParams = {
            userId: params.userId,
            packId: packageId,
        };
        var packageData = client.getPackInfo(packageParams);
        packageData.then(function (_a) {
            var body = _a.body;
            // console.log(body.package.stickers)
            setStickers(body && body.package && body.package.stickers
                ? body.package.stickers
                : []);
            setDetail(true);
        });
    };
    React.useEffect(function () {
        console.log(isLoading);
    }, [isLoading]);
    return (React__default["default"].createElement(React__default["default"].Fragment, null, isLoading ? (React__default["default"].createElement(StoreWrapper, { color: color, size: size, border: border },
        React__default["default"].createElement("div", { style: {
                height: '100%',
                display: 'flex',
                justifyContent: ' center',
                alignItems: 'center',
            } },
            React__default["default"].createElement("span", null, "loading")))) : (React__default["default"].createElement(StoreWrapper, { color: color, size: size, border: border },
        React__default["default"].createElement(StoreTitle, null,
            detail ? (React__default["default"].createElement("div", { className: "title-text" },
                React__default["default"].createElement(PreviousBtn, null,
                    React__default["default"].createElement(Icon, { type: "PREVIOUS", onClick: function () { return setDetail(false); } })),
                React__default["default"].createElement("span", null, "Sticker Pack"))) : (React__default["default"].createElement("div", { className: "title-text" },
                React__default["default"].createElement("span", null, "Sticker Store"),
                React__default["default"].createElement(Icon, { type: "STORE_BLACK" }))),
            React__default["default"].createElement(CloseBtn, { onClick: function () { return onClose(true); } },
                React__default["default"].createElement(Icon, { type: "CLOSE" }))),
        React__default["default"].createElement(PackageContainer, { detail: detail, color: color, scroll: scroll, border: border, onScroll: function (e) { return setCurrentScroll(e.target.scrollTop); } }, detail ? (React__default["default"].createElement(DetailWrapper, { scroll: scroll },
            React__default["default"].createElement(DetailBox, null,
                React__default["default"].createElement(MainImg, { src: main.packageImg, alt: "" }),
                React__default["default"].createElement(DetailName, null,
                    React__default["default"].createElement("div", { className: "packageName" }, main.packageName),
                    React__default["default"].createElement("div", { className: "artistName" },
                        "\u00A9",
                        main.artistName)),
                React__default["default"].createElement(DownloadBtn, { color: color, isDownload: main.isDownload === 'Y', isRecovery: main.isDownload === 'Y' &&
                        hideList.indexOf(main.packageId) !== -1, onClick: function () {
                        main.isDownload === 'Y'
                            ? clickDelete(main.packageId)
                            : clickDownload(main.packageId);
                    } },
                    React__default["default"].createElement(Icon, { type: main.isDownload === 'Y'
                            ? hideList.indexOf(main.packageId) < 0
                                ? 'MINUS'
                                : 'PLUS'
                            : 'PLUS' }))),
            React__default["default"].createElement(DetailStickerWrapper, { size: size }, stickers &&
                stickers.map(function (sticker, index) { return (React__default["default"].createElement("img", { src: sticker.stickerImg, alt: "", key: index })); })))) : packages && packages.length > 0 ? (React__default["default"].createElement(PackageWrapper, { size: size }, packages.map(function (pack, index) { return (React__default["default"].createElement(PackageBox, { key: index, color: color, isDownload: pack.isDownload === 'Y', onClick: function (e) {
                if (e.target.id !== 'download-btn') {
                    clickDetail(pack.packageId);
                    setMain({
                        packageId: pack.packageId,
                        packageImg: pack.packageImg,
                        packageName: pack.packageName,
                        artistName: pack.artistName,
                        isDownload: pack.isDownload,
                    });
                }
            } },
            React__default["default"].createElement(PackageTitle, null,
                pack.packageName,
                React__default["default"].createElement("span", null,
                    "\u00A9",
                    pack.artistName)),
            React__default["default"].createElement(PackageItem, null, pack && pack.stickers ? (pack.stickers.map(function (sticker, index) {
                if (index < 5) {
                    return (React__default["default"].createElement(StickerWrapper, { key: index },
                        React__default["default"].createElement(Sticker, { src: sticker.stickerImg, alt: "", size: size })));
                }
            })) : (React__default["default"].createElement("div", null))),
            React__default["default"].createElement(DownloadBtn, { color: color, isDownload: pack.isDownload === 'Y', isRecovery: pack.isDownload === 'Y' &&
                    hideList.indexOf(pack.packageId) !== -1, onClick: function () {
                    pack.isDownload === 'Y'
                        ? clickDelete(pack.packageId)
                        : clickDownload(pack.packageId);
                } },
                React__default["default"].createElement(Icon, { type: pack.isDownload === 'Y'
                        ? hideList.indexOf(pack.packageId) < 0
                            ? 'MINUS'
                            : 'PLUS'
                        : 'PLUS' })),
            React__default["default"].createElement(BtnWrapper, { id: "download-btn", onClick: function () {
                    pack.isDownload === 'Y'
                        ? clickDelete(pack.packageId)
                        : clickDownload(pack.packageId);
                } }))); }))) : (React__default["default"].createElement("div", null)))))));
};
var StoreWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: #fff;\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);\n  background-color: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: #fff;\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);\n  background-color: ", ";\n"])), function (props) {
    return props.size && props.size.width ? "".concat(props.size.width, "px") : '600px';
}, function (props) {
    return props.size && props.size.height ? "".concat(props.size.height, "px") : '600px';
}, function (props) {
    return props.border && props.border.border
        ? props.border.border
        : '1px solid lightgray';
}, function (props) {
    return props.border && props.border.radius ? "".concat(props.border.radius, "px") : '8px';
}, function (props) {
    return props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff';
});
var StoreTitle = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  box-sizing: border-box;\n\n  .title-text {\n    display: flex;\n    align-items: center;\n    font-size: 24px;\n    font-weight: bold;\n    span {\n      margin-right: 10px;\n    }\n  }\n"], ["\n  width: 100%;\n  height: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  box-sizing: border-box;\n\n  .title-text {\n    display: flex;\n    align-items: center;\n    font-size: 24px;\n    font-weight: bold;\n    span {\n      margin-right: 10px;\n    }\n  }\n"])));
var CloseBtn = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .stipop-icon {\n    width: 34px;\n    height: 34px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  &:hover {\n    cursor: pointer;\n    background-color: #f5f5f5;\n  }\n"], ["\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .stipop-icon {\n    width: 34px;\n    height: 34px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  &:hover {\n    cursor: pointer;\n    background-color: #f5f5f5;\n  }\n"])));
var PreviousBtn = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n\n  .stipop-icon {\n    width: 34px;\n    height: 34px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: #f5f5f5;\n  }\n"], ["\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n\n  .stipop-icon {\n    width: 34px;\n    height: 34px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: #f5f5f5;\n  }\n"])));
var PackageContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  overflow-y: ", ";\n  background-color: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n  }\n"], ["\n  width: 100%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  overflow-y: ", ";\n  background-color: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n  }\n"])), function (props) { return (props.detail ? 'none' : 'auto'); }, function (props) {
    return props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff';
}, function (props) {
    return props.border && props.border.radius ? "".concat(props.border.radius, "px") : '8px';
}, function (props) {
    return props.border && props.border.radius ? "".concat(props.border.radius, "px") : '8px';
}, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); });
var DetailWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  margin-bottom: 32px;\n  overflow-y: auto;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n  }\n"], ["\n  width: 100%;\n  margin-bottom: 32px;\n  overflow-y: auto;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n  }\n"])), function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); });
var DetailBox = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  padding: 0 32px;\n  margin-bottom: 15px;\n  align-items: center;\n  position: relative;\n"], ["\n  display: flex;\n  padding: 0 32px;\n  margin-bottom: 15px;\n  align-items: center;\n  position: relative;\n"])));
var MainImg = styled.img(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: ", ";\n  margin-right: 12px;\n"], ["\n  width: ", ";\n  margin-right: 12px;\n"])), function (props) {
    return props.size && props.size.mainImg ? "".concat(props.size.mainImg, "px") : '100px';
});
var DetailName = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  .packageName {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .artistName {\n    font-size: 10px;\n    color: #a9a9a9;\n  }\n"], ["\n  .packageName {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .artistName {\n    font-size: 10px;\n    color: #a9a9a9;\n  }\n"])));
var DetailStickerWrapper = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  padding: 0 32px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-auto-rows: 100px;\n  justify-items: center;\n  align-items: center;\n  row-gap: 2%;\n\n  img {\n    width: ", ";\n    &:hover {\n      transform: scale(1.3);\n    }\n  }\n"], ["\n  padding: 0 32px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-auto-rows: 100px;\n  justify-items: center;\n  align-items: center;\n  row-gap: 2%;\n\n  img {\n    width: ", ";\n    &:hover {\n      transform: scale(1.3);\n    }\n  }\n"])), function (props) {
    return props.size && props.size.detailImg ? "".concat(props.size.detailImg, "%") : '70%';
});
var PackageWrapper = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  width: 100%;\n  height: ", ";\n  display: block;\n"], ["\n  width: 100%;\n  height: ", ";\n  display: block;\n"])), function (props) {
    return props.size && props.size.packageHeight
        ? "".concat(props.size.packageHeight, "%")
        : '33%';
});
var PackageBox = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 32px;\n  box-sizing: border-box;\n  background-color: ", ";\n  position: relative;\n\n  &:hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 32px;\n  box-sizing: border-box;\n  background-color: ", ";\n  position: relative;\n\n  &:hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"])), function (props) {
    return props.isDownload
        ? props.color && props.color.downloadedColor
            ? props.color.downloadedColor
            : '#fff'
        : props.color && props.color.backgroundColor
            ? props.color.backgroundColor
            : '#fff';
}, function (props) {
    return props.isDownload
        ? props.color && props.color.downloadedHoverColor
            ? props.color.downloadedHoverColor
            : props.color && props.color.downloadedColor
                ? props.color.downloadedColor
                : '#f5f6f6'
        : props.color && props.color.packageHoverColor
            ? props.color.packageHoverColor
            : props.color && props.color.backgroundColor
                ? props.color.backgroundColor
                : '##f5f6f6';
});
var DownloadBtn = styled.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  width: 32px;\n  height: 32px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 32px;\n\n  .stipop-icon {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"], ["\n  width: 32px;\n  height: 32px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 32px;\n\n  .stipop-icon {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"])), function (props) {
    return props.isDownload
        ? props.isRecovery
            ? props.color && props.color.recoveryBtn
                ? props.color.recoveryBtn
                : '#ff4500'
            : props.color && props.color.deleteBtn
                ? props.color.deleteBtn
                : '#b3b3b3'
        : props.color && props.color.downloadBtn
            ? props.color.downloadBtn
            : '#ff4500';
}, function (props) {
    return props.isDownload
        ? props.isRecovery
            ? props.color && props.color.recoveryBtnHover
                ? props.color.recoveryBtnHover
                : '#ff4500'
            : props.color && props.color.deleteBtnHover
                ? props.color.deleteBtnHover
                : '#b3b3b3'
        : props.color && props.color.downloadBtnHover
            ? props.color.downloadBtnHover
            : '#ff4500';
});
var BtnWrapper = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: absolute;\n  right: 32px;\n"], ["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: absolute;\n  right: 32px;\n"])));
var PackageTitle = styled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n\n  span {\n    font-size: 10px;\n    color: #a9a9a9;\n    margin-left: 12px;\n  }\n"], ["\n  font-size: 12px;\n  font-weight: bold;\n  margin-bottom: 5px;\n\n  span {\n    font-size: 10px;\n    color: #a9a9a9;\n    margin-left: 12px;\n  }\n"])));
var PackageItem = styled.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 85%;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 85%;\n"])));
var StickerWrapper = styled.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n"])));
var Sticker = styled.img(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  width: ", ";\n"], ["\n  width: ", ";\n"])), function (props) {
    return props.size && props.size.previewImg ? "".concat(props.size.previewImg, "%") : '70%';
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;

exports.ChattingComponent = ChattingComponent;
exports.Icon = Icon;
exports.PickerComponent = PickerComponent;
exports.SearchComponent = SearchComponent;
exports.StoreComponent = StoreComponent;
//# sourceMappingURL=index.js.map
