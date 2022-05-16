'use strict';

var tslib_es6 = require('./tslib.es6-667f4605.js');
var React = require('react');
var styledComponents_browser_esm = require('./styled-components.browser.esm-5ad5aa35.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var LoadingSpinner = function (_a) {
    var color = _a.color, size = _a.size, border = _a.border;
    return (React__default["default"].createElement(SpinnerContainer, null,
        React__default["default"].createElement(Spinner, { color: color, size: size, border: border })));
};
var SpinnerContainer = styledComponents_browser_esm.styled.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Spinner = styledComponents_browser_esm.styled.div(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-top: ", ";\n  border-radius: 50%;\n\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  animation: spinner 1s linear infinite;\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-top: ", ";\n  border-radius: 50%;\n\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  animation: spinner 1s linear infinite;\n"])), function (props) { return (props.size ? "".concat(props.size, "px") : '20px'); }, function (props) { return (props.size ? "".concat(props.size, "px") : '20px'); }, function (props) {
    return props.border ? "".concat(props.border, "px solid #f3f3f3") : '4px solid #f3f3f3';
}, function (props) {
    return props.border
        ? props.color
            ? "".concat(props.border, "px solid ").concat(props.color)
            : "".concat(props.border, "px solid #ff4500")
        : props.color
            ? "4px solid ".concat(props.color)
            : '4px solid #ff4500';
});
var templateObject_1, templateObject_2;

module.exports = LoadingSpinner;
//# sourceMappingURL=LoadingSpinner.js.map
