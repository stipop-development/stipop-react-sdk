export { default as SearchComponent } from './SearchComponent.js';
import { _ as __makeTemplateObject } from './tslib.es6-a827156a.js';
import React__default, { useState, useEffect } from 'react';
import { s as styled } from './styled-components.browser.esm-500d8596.js';
export { default as Icon } from './Icon.js';
export { default as PickerComponent } from './PickerComponent.js';
export { default as StoreComponent } from './StoreComponent.js';
import './index-e5177013.js';
import './LoadingSpinner.js';

var ChattingComponent = function (_a) {
    var width = _a.width, height = _a.height, sticker = _a.sticker;
    var _b = useState([]), chatList = _b[0], setChatList = _b[1];
    useEffect(function () {
        if (sticker) {
            setChatList(chatList.concat(sticker));
        }
    }, [sticker]);
    useEffect(function () {
        var chat = document.querySelector('.chat-list');
        chat.scrollTop = chat.scrollHeight;
    }, [chatList]);
    return (React__default.createElement(ChattingWrapper, { width: width, height: height, sticker: sticker },
        React__default.createElement(ChatList, { className: "chat-list" }, chatList.map(function (chat) { return (React__default.createElement(ChatWrapper, null,
            React__default.createElement("span", null, "Guest"),
            React__default.createElement(Chat, { sticker: chat.startsWith('https://img.stipop.io') ? true : false }, chat.startsWith('https://img.stipop.io') ? (React__default.createElement("img", { src: chat, alt: "" })) : (chat)))); })),
        React__default.createElement(ChattingFrom, null,
            React__default.createElement(ChattingInput, { placeholder: "Type Message", onKeyPress: function (e) {
                    if (e.key === 'Enter') {
                        if (e.target.value.length > 0) {
                            setChatList(chatList.concat(e.target.value));
                        }
                        e.target.value = '';
                    }
                } }))));
};
var ChattingWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: #f8f6fe;\n  position: relative;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: #f8f6fe;\n  position: relative;\n  padding: 15px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])), function (props) { return (props.width ? "".concat(props.width, "px") : '80vw'); }, function (props) { return (props.height ? "".concat(props.height, "px") : '90vh'); });
var ChatList = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  height: calc(100% - 60px);\n  overflow-y: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  height: calc(100% - 60px);\n  overflow-y: auto;\n"])));
var ChatWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 5px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 5px;\n\n  span {\n    font-size: 12px;\n    color: #696969;\n    padding-right: 5px;\n    margin-bottom: 2px;\n  }\n"], ["\n  margin: 5px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding-right: 5px;\n\n  span {\n    font-size: 12px;\n    color: #696969;\n    padding-right: 5px;\n    margin-bottom: 2px;\n  }\n"])));
var Chat = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 10px;\n  display: inline-block;\n  padding: 5px 10px;\n  word-break: break-all;\n  font-size: 14px;\n\n  img {\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 10px;\n  display: inline-block;\n  padding: 5px 10px;\n  word-break: break-all;\n  font-size: 14px;\n\n  img {\n    width: 80px;\n    height: 80px;\n  }\n"])), function (props) { return (props.sticker ? '' : '#fff'); });
var ChattingFrom = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n"], ["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n"])));
var ChattingInput = styled.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 0 15px;\n  box-sizing: border-box;\n"], ["\n  width: 100%;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  padding: 0 15px;\n  box-sizing: border-box;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

export { ChattingComponent };
//# sourceMappingURL=index.js.map
