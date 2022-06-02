'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SearchComponent = require('./SearchComponent.js');
var tslib_es6 = require('./tslib.es6-667f4605.js');
var React = require('react');
var LoadingSpinner = require('./index-704b1ded.js');
var Icon = require('./Icon.js');
var PickerComponent = require('./PickerComponent.js');
var StoreComponent = require('./StoreComponent.js');
require('./index-531cfe3e.js');
require('./index.esm-dd03e45b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
var ChattingWrapper = LoadingSpinner.styled.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: #f8f6fe;\n  position: relative;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: #f8f6fe;\n  position: relative;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])), function (props) { return (props.width ? "".concat(props.width, "px") : '80vw'); }, function (props) { return (props.height ? "".concat(props.height, "px") : '90vh'); });
var ChatList = LoadingSpinner.styled.div(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  height: calc(100% - 60px);\n  overflow-y: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  height: calc(100% - 60px);\n  overflow-y: auto;\n"])));
var ChatWrapper = LoadingSpinner.styled.div(templateObject_3 || (templateObject_3 = tslib_es6.__makeTemplateObject(["\n  margin: 5px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 5px;\n\n  span {\n    font-size: 12px;\n    color: #696969;\n    padding-right: 5px;\n    margin-bottom: 2px;\n  }\n"], ["\n  margin: 5px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 5px;\n\n  span {\n    font-size: 12px;\n    color: #696969;\n    padding-right: 5px;\n    margin-bottom: 2px;\n  }\n"])));
var Chat = LoadingSpinner.styled.div(templateObject_4 || (templateObject_4 = tslib_es6.__makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: inline-block;\n  padding: 5px 10px;\n  word-break: break-all;\n  font-size: 14px;\n\n  img {\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 10px;\n  display: inline-block;\n  padding: 5px 10px;\n  word-break: break-all;\n  font-size: 14px;\n\n  img {\n    width: 80px;\n    height: 80px;\n  }\n"])), function (props) { return (props.sticker ? '' : '#fff'); });
var ChattingFrom = LoadingSpinner.styled.div(templateObject_5 || (templateObject_5 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n"])));
var ChattingInput = LoadingSpinner.styled.input(templateObject_6 || (templateObject_6 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 0 15px;\n  box-sizing: border-box;\n"], ["\n  width: 100%;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 0 15px;\n  box-sizing: border-box;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

exports.SearchComponent = SearchComponent;
exports.Icon = Icon["default"];
exports.PickerComponent = PickerComponent;
exports.StoreComponent = StoreComponent;
exports.ChattingComponent = ChattingComponent;
