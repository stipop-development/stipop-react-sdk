'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SearchComponent = require('./SearchComponent.js');
var Icon = require('./Icon.js');
var PickerComponent = require('./PickerComponent.js');
var StoreComponent = require('./StoreComponent.js');
var tslib_es6 = require('./tslib.es6-667f4605.js');
var React = require('react');
var LoadingSpinner = require('./index-704b1ded.js');
var index = require('./index-531cfe3e.js');
var index_esm = require('./index.esm-dd03e45b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var UnifiedComponent = function (_a) {
    var params = _a.params, size = _a.size, border = _a.border, input = _a.input, menu = _a.menu, backgroundColor = _a.backgroundColor, loadingColor = _a.loadingColor, column = _a.column, scroll = _a.scroll, scrollHover = _a.scrollHover, preview = _a.preview, stickerClick = _a.stickerClick, storeClick = _a.storeClick;
    var _b = React.useState(''), keyword = _b[0], setKeyword = _b[1];
    var _c = React.useState([]), stickerList = _c[0], setStickerList = _c[1];
    var _d = React.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = React.useState(''), tempSticker = _e[0], setTempSticker = _e[1];
    var _f = React.useState(false), inputFocus = _f[0], setInputFocus = _f[1];
    var client = new index.Stipop(params.apikey, 'v1');
    React.useEffect(function () {
        setIsLoading(true);
        // console.log(keyword)
        var searchParams = {
            userId: params.userId,
            q: keyword,
            lang: params.lang ? params.lang : 'en',
            countryCode: params.countryCode ? params.countryCode : 'US',
            pageNumber: params.pageNumber ? params.pageNumber : 1,
            limit: params.limit ? params.limit : 20,
        };
        if (keyword) {
            var data = client.getSearch(searchParams);
            data.then(function (_a) {
                var body = _a.body;
                // console.log(body)
                setStickerList(body && body.stickerList ? body.stickerList : []);
                setTimeout(function () {
                    setIsLoading(false);
                }, 500);
            });
        }
        else {
            setKeyword('');
        }
    }, [keyword, params.lang, params.pageNumber, params.limit]);
    var clickSticker = function (stickerId) {
        if (!preview) {
            var requestUrl = "https://messenger.stipop.io/v1/analytics/send/".concat(stickerId, "?userId=").concat(params.userId);
            fetch(requestUrl, {
                method: 'POST',
                headers: {
                    apikey: params.apikey,
                    'Content-Type': 'application/json',
                },
            });
        }
    };
    return (React__default["default"].createElement(SearchWrapper, { size: size, backgroundColor: backgroundColor, border: border },
        preview && tempSticker && (React__default["default"].createElement(PreviewWrapper, null,
            React__default["default"].createElement(index_esm.FiX, { size: 25, color: '#000', style: {
                    position: 'absolute',
                    right: '15px',
                    top: '15px',
                    cursor: 'pointer',
                }, onClick: function () {
                    setTempSticker('');
                } }),
            React__default["default"].createElement(ChatSticker, { src: tempSticker }))),
        React__default["default"].createElement(SearchForm, null,
            React__default["default"].createElement(SearchInput, { type: "text", onFocus: function () { return setInputFocus(true); }, onBlur: function () { return setInputFocus(false); }, onChange: function (e) { return setKeyword(e.target.value); }, placeholder: "Search sticker...", input: input }),
            React__default["default"].createElement(InputHolder, { input: input },
                React__default["default"].createElement(index_esm.FiSearch, { size: 18, color: inputFocus
                        ? input && input.focus
                            ? input.focus
                            : '#d5d5d5'
                        : input && input.search
                            ? input.search
                            : '#d5d5d5' }),
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("span", null, "POWERED BY"),
                    React__default["default"].createElement(Icon["default"], { type: "LOGO" })))),
        !keyword ? (React__default["default"].createElement("div", { style: { height: '90%' } },
            React__default["default"].createElement(PickerComponent, { params: { apikey: params.apikey, userId: params.userId }, size: {
                    height: size && size.height ? (size.height - 30) * 0.9 : 270 * 0.9,
                    width: size && size.width
                        ? border && border.border
                            ? size.width - Number(border.border.slice(0, 1)) * 2
                            : size.width - 2
                        : border && border.border
                            ? 360 - Number(border.border.slice(0, 1)) * 2
                            : 358,
                }, border: {
                    border: 'none',
                    radius: border && border.radius ? border.radius : 10,
                }, menu: {
                    backgroundColor: menu && menu.backgroundColor ? menu.backgroundColor : '#fff',
                    bottomLine: menu && menu.bottomLine
                        ? menu.bottomLine
                        : '1px solid lightgray',
                    selectedLine: menu && menu.selectedLine
                        ? menu.selectedLine
                        : '2px solid black',
                    height: menu && menu.height ? menu.height : 45,
                    listCnt: menu && menu.listCnt ? menu.listCnt : 6,
                    arrowColor: menu && menu.arrowColor ? menu.arrowColor : '#000',
                    imgSize: menu && menu.imgSize ? menu.imgSize : 25,
                }, backgroundColor: backgroundColor ? backgroundColor : '#fff', column: column ? column : 4, scroll: scroll ? scroll : true, scrollHover: scrollHover ? scrollHover : '#6d7072', loadingColor: loadingColor ? loadingColor : '#ff4500', preview: preview, stickerClick: function (url) { return stickerClick(url); }, storeClick: function (click) { return storeClick(click); } }))) : !isLoading ? (stickerList.length > 0 ? (React__default["default"].createElement(StickerWrapper, { column: column, scroll: scroll, scrollHover: scrollHover, border: border, backgroundColor: backgroundColor, size: size }, stickerList.map(function (sticker, index) { return (React__default["default"].createElement(StickerImg, { src: "".concat(sticker.stickerImg, "?d=100x100"), key: index, onClick: function () {
                if (preview) {
                    stickerClick({
                        url: sticker.stickerImg,
                        id: sticker.stickerId,
                    });
                }
                else {
                    stickerClick(sticker.stickerImg);
                }
                clickSticker(sticker.stickerId);
                setTempSticker(sticker.stickerImg);
            }, size: size })); }))) : (React__default["default"].createElement(NoSticker, null,
            React__default["default"].createElement("img", { src: "https://img.stipop.io/image/sdk/no-sticker.png", className: "no-sticker" }),
            React__default["default"].createElement("span", { className: "no-sticker-text" }, "No Stickers to Show")))) : (React__default["default"].createElement(NoSticker, null,
            React__default["default"].createElement(LoadingSpinner.LoadingSpinner, { color: loadingColor ? loadingColor : '#ff4500' })))));
};
var SearchWrapper = LoadingSpinner.styled.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  /* padding: 10px 0; */\n  padding-top: 10px;\n  box-sizing: border-box;\n  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  /* padding: 10px 0; */\n  padding-top: 10px;\n  box-sizing: border-box;\n  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);\n"])), function (props) {
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
var SearchForm = LoadingSpinner.styled.div(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"], ["\n  width: 100%;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"])));
var SearchInput = LoadingSpinner.styled.input(templateObject_3 || (templateObject_3 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: 0 140px 0 35px;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 1;\n  position: absolute;\n\n  &::placeholder {\n    font-size: 13px;\n    color: lightgray;\n  }\n\n  &:focus {\n    outline: none;\n    border: ", ";\n    box-sizing: border-box;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: 0 140px 0 35px;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 1;\n  position: absolute;\n\n  &::placeholder {\n    font-size: 13px;\n    color: lightgray;\n  }\n\n  &:focus {\n    outline: none;\n    border: ", ";\n    box-sizing: border-box;\n  }\n"])), function (props) {
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
        ? props.input.focus
            ? "".concat(Number(props.input.border.slice(0, 1)) + 1, "px ").concat(props.input.border.split(' ')[1], " ").concat(props.input.focus)
            : "".concat(Number(props.input.border.slice(0, 1)) + 1, "px ").concat(props.input.border.split(' ')[1], " ").concat(props.input.border.split(' ')[2])
        : props.input && props.input.focus
            ? "3px solid ".concat(props.input.focus)
            : '3px solid lightgray';
});
var InputHolder = LoadingSpinner.styled.div(templateObject_4 || (templateObject_4 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: 0 20px 0 12px;\n  border-radius: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  font-size: 10px;\n  color: #d5d5d5;\n  background-color: ", ";\n  position: absolute;\n\n  div {\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-top: 2px;\n      margin-right: 3px;\n    }\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: 0 20px 0 12px;\n  border-radius: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  font-size: 10px;\n  color: #d5d5d5;\n  background-color: ", ";\n  position: absolute;\n\n  div {\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-top: 2px;\n      margin-right: 3px;\n    }\n  }\n"])), function (props) {
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
var StickerWrapper = LoadingSpinner.styled.div(templateObject_5 || (templateObject_5 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  height: 90%;\n  padding-top: 5px;\n  padding-left: 8px;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: ", ";\n  /* grid-template-rows: repeat(4, 1fr); */\n  grid-template-rows: ", ";\n  row-gap: 8%;\n  justify-items: center;\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    width: 8px;\n  }\n  &::-webkit-scrollbar-track {\n    /* background-color: ", ";\n    border-bottom-right-radius: ", "; */\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: ", ";\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"], ["\n  width: 100%;\n  height: 90%;\n  padding-top: 5px;\n  padding-left: 8px;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: ", ";\n  /* grid-template-rows: repeat(4, 1fr); */\n  grid-template-rows: ", ";\n  row-gap: 8%;\n  justify-items: center;\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    width: 8px;\n  }\n  &::-webkit-scrollbar-track {\n    /* background-color: ", ";\n    border-bottom-right-radius: ", "; */\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: ", ";\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"])), function (props) {
    return props.column ? "repeat(".concat(props.column, ", 1fr)") : 'repeat(4, 1fr)';
}, function (props) {
    return props.column ? "repeat(".concat(props.column, ", 1fr)") : 'repeat(4, 1fr)';
}, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) {
    return props.backgroundColor ? props.backgroundColor : '#fff';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '8px';
}, function (props) {
    return props.scrollHover ? props.scrollHover : '#6d7072';
});
var NoSticker = LoadingSpinner.styled.div(templateObject_6 || (templateObject_6 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  height: 90%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .no-sticker {\n    width: 40%;\n  }\n  .no-sticker-text {\n    font-size: 14px;\n    color: #5f5f5f;\n  }\n"], ["\n  width: 100%;\n  height: 90%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .no-sticker {\n    width: 40%;\n  }\n  .no-sticker-text {\n    font-size: 14px;\n    color: #5f5f5f;\n  }\n"])));
var StickerImg = LoadingSpinner.styled.img(templateObject_7 || (templateObject_7 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: auto;\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  width: ", ";\n  height: auto;\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (props) {
    return props.size && props.size.imgSize ? "".concat(props.size.imgSize, "%") : '60%';
});
var PreviewWrapper = LoadingSpinner.styled.div(templateObject_8 || (templateObject_8 = tslib_es6.__makeTemplateObject(["\n  width: 60%;\n  height: 150px;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  margin-left: 40%;\n  margin-bottom: 5px;\n  padding: 0 24px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 100%;\n"], ["\n  width: 60%;\n  height: 150px;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  margin-left: 40%;\n  margin-bottom: 5px;\n  padding: 0 24px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 100%;\n"])));
var ChatSticker = LoadingSpinner.styled.img(templateObject_9 || (templateObject_9 = tslib_es6.__makeTemplateObject(["\n  width: 100px;\n  height: 100px;\n  margin-bottom: 5px;\n"], ["\n  width: 100px;\n  height: 100px;\n  margin-bottom: 5px;\n"])));
LoadingSpinner.styled.div(templateObject_10 || (templateObject_10 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);\n  position: relative;\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);\n  position: relative;\n"])), function (props) {
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
LoadingSpinner.styled.div(templateObject_11 || (templateObject_11 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  height: 40px;\n  display: flex;\n"], ["\n  width: 100%;\n  height: 40px;\n  display: flex;\n"])));
LoadingSpinner.styled.div(templateObject_12 || (templateObject_12 = tslib_es6.__makeTemplateObject(["\n  flex-basis: ", ";\n  flex-shrink: 0;\n  height: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-top-left-radius: ", ";\n  border-bottom: ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n\n  .stipop-icon {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &#left {\n    padding-left: 10px;\n    cursor: initial;\n  }\n  &#left-black {\n    padding-left: 10px;\n    .stipop-icon {\n      transform: rotateY(180deg);\n    }\n  }\n  &#right-black {\n    padding-right: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: ", ";\n  }\n  &#right {\n    padding-right: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: ", ";\n    cursor: initial;\n\n    .stipop-icon {\n      transform: rotateY(180deg);\n    }\n  }\n"], ["\n  flex-basis: ", ";\n  flex-shrink: 0;\n  height: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-top-left-radius: ", ";\n  border-bottom: ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n\n  .stipop-icon {\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &#left {\n    padding-left: 10px;\n    cursor: initial;\n  }\n  &#left-black {\n    padding-left: 10px;\n    .stipop-icon {\n      transform: rotateY(180deg);\n    }\n  }\n  &#right-black {\n    padding-right: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: ", ";\n  }\n  &#right {\n    padding-right: 10px;\n    border-top-left-radius: 0;\n    border-top-right-radius: ", ";\n    cursor: initial;\n\n    .stipop-icon {\n      transform: rotateY(180deg);\n    }\n  }\n"])), function (props) {
    return props.size && props.size.width
        ? props.menu && props.menu.listCnt
            ? "".concat(props.size.width / (props.menu.listCnt + 2), "px")
            : "".concat(props.size.width / 8, "px")
        : props.menu && props.menu.listCnt
            ? "".concat(360 / (props.menu.listCnt + 2), "px")
            : '45px';
}, function (props) {
    return props.menu && props.menu.height ? "".concat(props.menu.height, "px") : '45px';
}, function (props) {
    return props.menu && props.menu.backgroundColor
        ? props.menu.backgroundColor
        : '#fff';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '10px';
}, function (props) {
    return props.menu && props.menu.bottomLine
        ? props.menu.bottomLine
        : '1px solid lightgray';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '10px';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '10px';
});
LoadingSpinner.styled.div(templateObject_13 || (templateObject_13 = tslib_es6.__makeTemplateObject(["\n  flex-basis: ", ";\n  flex-shrink: 0;\n  height: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n\n  .stipop-icon {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border-bottom: ", ";\n    box-sizing: border-box;\n\n    svg {\n      transform: ", ";\n    }\n  }\n"], ["\n  flex-basis: ", ";\n  flex-shrink: 0;\n  height: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n\n  .stipop-icon {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    border-bottom: ", ";\n    box-sizing: border-box;\n\n    svg {\n      transform: ", ";\n    }\n  }\n"])), function (props) {
    return props.size && props.size.width
        ? props.menu && props.menu.listCnt
            ? "".concat(props.size.width / (props.menu.listCnt + 2), "px")
            : "".concat(props.size.width / 8, "px")
        : props.menu && props.menu.listCnt
            ? "".concat(360 / (props.menu.listCnt + 2), "px")
            : '45px';
}, function (props) {
    return props.menu && props.menu.height ? "".concat(props.menu.height, "px") : '45px';
}, function (props) {
    return props.menu && props.menu.backgroundColor
        ? props.menu.backgroundColor
        : '#fff';
}, function (props) {
    return props.show
        ? props.menu && props.menu.selectedLine
            ? props.menu.selectedLine
            : '2px solid black'
        : props.menu && props.menu.bottomLine
            ? props.menu.bottomLine
            : '1px solid lightgray';
}, function (props) {
    return props.menu && props.menu.imgSize
        ? "scale(calc(".concat(props.menu.imgSize, "/30))")
        : 'scale(1)';
});
LoadingSpinner.styled.div(templateObject_14 || (templateObject_14 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"], ["\n  width: ", ";\n  height: ", ";\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  overflow-x: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"])), function (props) {
    return props.size && props.size.width ? "".concat(props.size.width, "px") : '360px';
}, function (props) {
    return props.menu && props.menu.height ? "".concat(props.menu.height, "px") : '45px';
}, function (props) {
    return props.menu && props.menu.backgroundColor
        ? props.menu.backgroundColor
        : '#fff';
});
LoadingSpinner.styled.div(templateObject_15 || (templateObject_15 = tslib_es6.__makeTemplateObject(["\n  /* flex-basis: ", "; */\n  flex-basis: ", ";\n  flex-shrink: 0;\n  height: 100%;\n  /* padding: 0 10px; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n\n  &#dummies {\n    cursor: initial;\n  }\n"], ["\n  /* flex-basis: ", "; */\n  flex-basis: ", ";\n  flex-shrink: 0;\n  height: 100%;\n  /* padding: 0 10px; */\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: ", ";\n  box-sizing: border-box;\n  cursor: pointer;\n\n  &#dummies {\n    cursor: initial;\n  }\n"])), function (props) {
    return props.menu && props.menu.height ? "".concat(props.menu.height, "px") : '45px';
}, function (props) {
    return props.size && props.size.width
        ? props.menu && props.menu.listCnt
            ? "".concat(props.size.width / (props.menu.listCnt + 2), "px")
            : "".concat(props.size.width / 8, "px")
        : props.menu && props.menu.listCnt
            ? "".concat(360 / (props.menu.listCnt + 2), "px")
            : '45px';
}, function (props) {
    return props.show
        ? props.menu && props.menu.selectedLine
            ? props.menu.selectedLine
            : '2px solid black'
        : props.menu && props.menu.bottomLine
            ? props.menu.bottomLine
            : '1px solid lightgray';
});
LoadingSpinner.styled.img(templateObject_16 || (templateObject_16 = tslib_es6.__makeTemplateObject(["\n  /* width: ", "; */\n  width: ", ";\n  filter: ", ";\n"], ["\n  /* width: ", "; */\n  width: ", ";\n  filter: ", ";\n"])), function (props) {
    return props.size && props.size.width
        ? props.menu && props.menu.listCnt
            ? "calc(".concat(props.size.width / (props.menu.listCnt + 2), "px * 0.6)")
            : "calc(".concat(props.size.width / 8, "px * 0.6)")
        : props.menu && props.menu.listCnt
            ? "calc(".concat(360 / (props.menu.listCnt + 2), "px * 0.6)")
            : 'calc(45px * 0.6)';
}, function (props) {
    return props.menu && props.menu.imgSize ? "".concat(props.menu.imgSize, "px") : '60%';
}, function (props) { return (props.show ? '' : 'saturate(0%)'); });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;

exports.SearchComponent = SearchComponent;
exports.Icon = Icon["default"];
exports.PickerComponent = PickerComponent;
exports.StoreComponent = StoreComponent;
exports.UnifiedComponent = UnifiedComponent;
