'use strict';

var tslib_es6 = require('./tslib.es6-667f4605.js');
var React = require('react');
var styledComponents_browser_esm = require('./styled-components.browser.esm-5ad5aa35.js');
var index = require('./index-531cfe3e.js');
var Icon = require('./Icon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var SearchComponent = function (_a) {
    var params = _a.params, size = _a.size, backgroundColor = _a.backgroundColor, column = _a.column, border = _a.border, input = _a.input, scroll = _a.scroll, stickerClick = _a.stickerClick;
    var _b = React.useState(params.default ? params.default : 'hi'), keyword = _b[0], setKeyword = _b[1];
    var _c = React.useState([]), stickerList = _c[0], setStickerList = _c[1];
    var _d = React.useState(false), isLoading = _d[0], setIsLoading = _d[1];
    // const baseUrl = 'https://messenger.stipop.io/v1/search'
    // const Stipop = require('stipop-js-sdk')
    var client = new index.Stipop(params.apikey, 'v1');
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
        setIsLoading(true);
        // console.log(keyword)
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
                // console.log(body)
                setStickerList(body && body.stickerList ? body.stickerList : []);
                setIsLoading(false);
            });
        }
        else {
            setKeyword(params.default ? params.default : 'hi');
        }
    }, [keyword, params.lang, params.pageNumber, params.limit]);
    var clickSticker = function (stickerId) {
        var requestUrl = "https://messenger.stipop.io/v1/analytics/send/".concat(stickerId, "?userId=").concat(params.userId);
        fetch(requestUrl, {
            method: 'POST',
            headers: {
                apikey: params.apikey,
                'Content-Type': 'application/json',
            },
        });
        // axios
        //   .post(requestUrl, {
        //     headers: {
        //       apikey: params.apikey,
        //       'Content-Type': 'application/json',
        //     },
        //   })
        //   .then(res => {
        //     console.log(res.data.headers)
        //   })
    };
    return (React__default["default"].createElement(SearchWrapper, { size: size, backgroundColor: backgroundColor, border: border },
        React__default["default"].createElement(SearchForm, null,
            React__default["default"].createElement(SearchInput, { type: "text", onChange: function (e) { return setKeyword(e.target.value); }, placeholder: "Search sticker...", input: input }),
            React__default["default"].createElement(InputHolder, { input: input },
                React__default["default"].createElement(Icon["default"], { type: "SEARCH" }),
                React__default["default"].createElement("div", null,
                    React__default["default"].createElement("span", null, "POWERED BY"),
                    React__default["default"].createElement(Icon["default"], { type: "LOGO" })))),
        !isLoading && stickerList.length > 0 ? (React__default["default"].createElement(StickerWrapper, { column: column, scroll: scroll, border: border, backgroundColor: backgroundColor, size: size }, stickerList.map(function (sticker, index) { return (React__default["default"].createElement(StickerImg, { src: "".concat(sticker.stickerImg, "?d=100x100"), key: index, onClick: function () {
                stickerClick(sticker.stickerImg);
                clickSticker(sticker.stickerId);
            }, size: size })); }))) : (React__default["default"].createElement(NoSticker, null,
            React__default["default"].createElement("img", { src: "https://img.stipop.io/image/sdk/no-sticker.png", className: "no-sticker" }),
            React__default["default"].createElement("span", { className: "no-sticker-text" }, "No Stickers to Show")))));
};
var SearchWrapper = styledComponents_browser_esm.styled.div(templateObject_1 || (templateObject_1 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  padding: 10px 0;\n  box-sizing: border-box;\n  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  padding: 10px 0;\n  box-sizing: border-box;\n  box-shadow: 0 10px 20px 6px rgba(0, 0, 0, 0.1);\n"])), function (props) {
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
        : '6px';
});
var SearchForm = styledComponents_browser_esm.styled.div(templateObject_2 || (templateObject_2 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"], ["\n  width: 100%;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"])));
var SearchInput = styledComponents_browser_esm.styled.input(templateObject_3 || (templateObject_3 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: 0 140px 0 35px;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 1;\n  position: absolute;\n\n  &::placeholder {\n    font-size: 13px;\n    color: lightgray;\n  }\n\n  &:focus {\n    outline: none;\n    border: ", ";\n    box-sizing: border-box;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: 0 140px 0 35px;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 1;\n  position: absolute;\n\n  &::placeholder {\n    font-size: 13px;\n    color: lightgray;\n  }\n\n  &:focus {\n    outline: none;\n    border: ", ";\n    box-sizing: border-box;\n  }\n"])), function (props) {
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
var InputHolder = styledComponents_browser_esm.styled.div(templateObject_4 || (templateObject_4 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: 0 20px 0 12px;\n  border-radius: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  font-size: 10px;\n  color: #d5d5d5;\n  background-color: ", ";\n  position: absolute;\n\n  .search-icon {\n    width: 15px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-top: 2px;\n      margin-right: 3px;\n    }\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: 0 20px 0 12px;\n  border-radius: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  font-size: 10px;\n  color: #d5d5d5;\n  background-color: ", ";\n  position: absolute;\n\n  .search-icon {\n    width: 15px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-top: 2px;\n      margin-right: 3px;\n    }\n  }\n"])), function (props) {
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
var StickerWrapper = styledComponents_browser_esm.styled.div(templateObject_5 || (templateObject_5 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  height: 90%;\n  padding-top: 5px;\n  padding-left: 8px;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: ", ";\n  /* grid-template-rows: repeat(4, 1fr); */\n  grid-template-rows: ", ";\n  row-gap: 8%;\n  justify-items: center;\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    width: 8px;\n  }\n  &::-webkit-scrollbar-track {\n    /* background-color: ", ";\n    border-bottom-right-radius: ", "; */\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: #6d7072;\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"], ["\n  width: 100%;\n  height: 90%;\n  padding-top: 5px;\n  padding-left: 8px;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: ", ";\n  /* grid-template-rows: repeat(4, 1fr); */\n  grid-template-rows: ", ";\n  row-gap: 8%;\n  justify-items: center;\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    width: 8px;\n  }\n  &::-webkit-scrollbar-track {\n    /* background-color: ", ";\n    border-bottom-right-radius: ", "; */\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: #6d7072;\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"])), function (props) {
    return props.column ? "repeat(".concat(props.column, ", 1fr)") : 'repeat(4, 1fr)';
}, function (props) {
    return props.column ? "repeat(".concat(props.column, ", 1fr)") : 'repeat(4, 1fr)';
}, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) {
    return props.backgroundColor ? props.backgroundColor : '#fff';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '8px';
});
var NoSticker = styledComponents_browser_esm.styled.div(templateObject_6 || (templateObject_6 = tslib_es6.__makeTemplateObject(["\n  width: 100%;\n  height: 90%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .no-sticker {\n    width: 40%;\n  }\n  .no-sticker-text {\n    font-size: 14px;\n    color: #5f5f5f;\n  }\n"], ["\n  width: 100%;\n  height: 90%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .no-sticker {\n    width: 40%;\n  }\n  .no-sticker-text {\n    font-size: 14px;\n    color: #5f5f5f;\n  }\n"])));
var StickerImg = styledComponents_browser_esm.styled.img(templateObject_7 || (templateObject_7 = tslib_es6.__makeTemplateObject(["\n  width: ", ";\n  height: auto;\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  width: ", ";\n  height: auto;\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (props) {
    return props.size && props.size.imgSize ? "".concat(props.size.imgSize, "%") : '60%';
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

module.exports = SearchComponent;
//# sourceMappingURL=SearchComponent.js.map
