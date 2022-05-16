import { _ as __makeTemplateObject } from './tslib.es6-a827156a.js';
import React__default from 'react';
import { s as styled } from './styled-components.browser.esm-500d8596.js';

var LoadingSpinner = function (_a) {
    var color = _a.color, size = _a.size, border = _a.border;
    return (React__default.createElement(SpinnerContainer, null,
        React__default.createElement(Spinner, { color: color, size: size, border: border })));
};
var SpinnerContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));
var Spinner = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-top: ", ";\n  border-radius: 50%;\n\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  animation: spinner 1s linear infinite;\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-top: ", ";\n  border-radius: 50%;\n\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  animation: spinner 1s linear infinite;\n"])), function (props) { return (props.size ? "".concat(props.size, "px") : '20px'); }, function (props) { return (props.size ? "".concat(props.size, "px") : '20px'); }, function (props) {
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

export { LoadingSpinner as default };
//# sourceMappingURL=LoadingSpinner.js.map
