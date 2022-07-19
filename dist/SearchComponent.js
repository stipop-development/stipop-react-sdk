import { _ as __makeTemplateObject, a as __assign } from './tslib.es6-32024edd.js';
import React__default, { useState, useEffect } from 'react';
import { s as styled, L as LoadingSpinner } from './index-1cdd6878.js';
import { S as Stipop, a as axios } from './index-62082b5d.js';
import { F as FiX, a as FiSearch } from './index.esm-3315737a.js';

var SearchComponent = function (_a) {
    var params = _a.params, size = _a.size, backgroundColor = _a.backgroundColor, column = _a.column, border = _a.border, input = _a.input, scroll = _a.scroll, scrollHover = _a.scrollHover, stickerClick = _a.stickerClick, preview = _a.preview, loadingColor = _a.loadingColor, shadow = _a.shadow, useAuth = _a.useAuth, auth = _a.auth;
    var _b = useState(params.default
        ? params.default
        : params.lang
            ? params.lang === 'ko'
                ? '안녕'
                : 'hi'
            : 'hi'), keyword = _b[0], setKeyword = _b[1];
    var _c = useState([]), stickerList = _c[0], setStickerList = _c[1];
    var _d = useState(false), isLoading = _d[0], setIsLoading = _d[1];
    var _e = useState({
        url: '',
        stickerId: '',
        packageId: '',
    }), tempSticker = _e[0], setTempSticker = _e[1];
    var _f = useState(false), inputFocus = _f[0], setInputFocus = _f[1];
    var _g = useState(''), accessToken = _g[0], setAccessToken = _g[1];
    var client = new Stipop(params.apikey, 'v1');
    var getAccessToken = function () {
        axios
            .post('https://sandbox.stipop.com/v1/access', __assign(__assign({}, auth), { userId: params.userId }))
            .then(function (_a) {
            var data = _a.data;
            setAccessToken(data.body.accessToken);
        });
    };
    useEffect(function () {
        if (useAuth) {
            if (!accessToken) {
                getAccessToken();
            }
        }
    }, []);
    useEffect(function () {
        setIsLoading(true);
        var searchParams = {
            userId: useAuth ? params.userId : encodeURIComponent(params.userId),
            q: keyword,
            lang: params.lang ? params.lang : 'en',
            countryCode: params.countryCode ? params.countryCode : 'US',
            pageNumber: params.pageNumber ? params.pageNumber : 1,
            limit: params.limit ? params.limit : 20,
        };
        if (keyword) {
            if (useAuth && accessToken) {
                axios
                    .get("https://sandbox.stipop.com/v1/search", {
                    params: searchParams,
                    headers: {
                        apikey: params.apikey,
                        Authorization: "Bearer ".concat(accessToken),
                        platform: 'react-sdk',
                        sdk_version: 'test-version',
                    },
                })
                    .then(function (_a) {
                    var data = _a.data;
                    setStickerList(data.body && data.body.stickerList ? data.body.stickerList : []);
                    setTimeout(function () {
                        setIsLoading(false);
                    }, 500);
                })
                    .catch(function () {
                    getAccessToken();
                });
            }
            else if (!useAuth) {
                var data = client.getSearch(searchParams);
                data.then(function (_a) {
                    var body = _a.body;
                    setStickerList(body && body.stickerList ? body.stickerList : []);
                    setTimeout(function () {
                        setIsLoading(false);
                    }, 500);
                });
            }
        }
        else {
            setKeyword(params.default
                ? params.default
                : params.lang
                    ? params.lang === 'ko'
                        ? '안녕'
                        : 'hi'
                    : 'hi');
        }
    }, [keyword, params.lang, params.pageNumber, params.limit, accessToken]);
    var clickSticker = function (stickerId, stickerImg, packageId) {
        if (useAuth && accessToken) {
            axios
                .post("https://sandbox.stipop.com/v1/analytics/send/".concat(stickerId), null, {
                params: {
                    // userId: encodeURIComponent(params.userId),
                    userId: params.userId,
                },
                headers: {
                    apikey: params.apikey,
                    Authorization: "Bearer ".concat(accessToken),
                    platform: 'react-sdk',
                    sdk_version: 'test-version',
                },
            })
                .then(function () {
                stickerClick({
                    url: stickerImg,
                    stickerId: stickerId,
                    packageId: packageId,
                });
                if (preview) {
                    setTempSticker({
                        url: stickerImg,
                        stickerId: stickerId,
                        packageId: packageId,
                    });
                }
            })
                .catch(function () {
                getAccessToken();
            });
        }
        else if (!useAuth) {
            axios
                .post("https://messenger.stipop.io/v1/analytics/send/".concat(stickerId), null, {
                params: {
                    userId: params.userId,
                },
                headers: {
                    apikey: params.apikey,
                },
            })
                .then(function () {
                stickerClick({
                    url: stickerImg,
                    stickerId: stickerId,
                    packageId: packageId,
                });
                if (preview) {
                    setTempSticker({
                        url: stickerImg,
                        stickerId: stickerId,
                        packageId: packageId,
                    });
                }
            });
        }
        // }
    };
    return (React__default.createElement(SearchWrapper, { size: size, backgroundColor: backgroundColor, border: border, shadow: shadow },
        preview && tempSticker.url && (React__default.createElement(PreviewWrapper, null,
            React__default.createElement(FiX, { size: 25, color: '#000', style: {
                    position: 'absolute',
                    right: '15px',
                    top: '15px',
                    cursor: 'pointer',
                }, onClick: function () {
                    setTempSticker({ url: '', stickerId: '', packageId: '' });
                } }),
            React__default.createElement(ChatSticker, { src: tempSticker.url }))),
        React__default.createElement(SearchForm, null,
            React__default.createElement(SearchInput, { type: "text", onFocus: function () { return setInputFocus(true); }, onBlur: function () { return setInputFocus(false); }, onChange: function (e) { return setKeyword(e.target.value); }, placeholder: params.lang
                    ? params.lang === 'ko'
                        ? '이모티콘 검색...'
                        : 'Search sticker...'
                    : 'Search sticker...', input: input }),
            React__default.createElement(InputHolder, { input: input },
                React__default.createElement(FiSearch, { size: 18, color: inputFocus
                        ? input && input.focus
                            ? input.focus
                            : '#d5d5d5'
                        : input && input.search
                            ? input.search
                            : '#d5d5d5' }))),
        !isLoading ? (stickerList.length > 0 ? (React__default.createElement(StickerWrapper, { column: column, scroll: scroll, scrollHover: scrollHover, border: border, backgroundColor: backgroundColor, size: size }, stickerList.map(function (sticker, index) { return (React__default.createElement(StickerImg, { src: "".concat(sticker.stickerImg, "?d=100x100"), key: index, onClick: function () {
                clickSticker(sticker.stickerId, sticker.stickerImg, sticker.packageId);
            }, size: size })); }))) : (React__default.createElement(NoSticker, null,
            React__default.createElement("img", { src: "https://img.stipop.io/image/sdk/no-sticker.png", className: "no-sticker" }),
            React__default.createElement("span", { className: "no-sticker-text" }, params.lang
                ? params.lang === 'ko'
                    ? '검색 결과가 없습니다'
                    : 'No Stickers to Show'
                : 'No Stickers to Show')))) : (React__default.createElement(LoadingSpinner, { color: loadingColor ? loadingColor : '#ff4500' }))));
};
var SearchWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: ", ";\n  /* border-radius: ", "; */\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  padding: 10px 0;\n  box-sizing: border-box;\n  box-shadow: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border: ", ";\n  /* border-radius: ", "; */\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  border-radius: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  position: relative;\n  padding: 10px 0;\n  box-sizing: border-box;\n  box-shadow: ", ";\n"])), function (props) {
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
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.leftTop || props.border.radius.leftTop === 0)
        ? "".concat(props.border.radius.leftTop, "px")
        : '6px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.rightTop || props.border.radius.rightTop === 0)
        ? "".concat(props.border.radius.rightTop, "px")
        : '6px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.leftBottom || props.border.radius.leftBottom === 0)
        ? "".concat(props.border.radius.leftBottom, "px")
        : '6px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.rightBottom || props.border.radius.rightBottom === 0)
        ? "".concat(props.border.radius.rightBottom, "px")
        : '6px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.all || props.border.radius.all === 0) &&
        "".concat(props.border.radius.all, "px");
}, function (props) {
    return props.shadow ? props.shadow : '0 10px 20px 6px rgba(0, 0, 0, 0.1)';
});
var SearchForm = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"], ["\n  width: 100%;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 10px;\n"])));
var SearchInput = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: 0 140px 0 35px;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 1;\n  position: absolute;\n\n  &::placeholder {\n    font-size: 13px;\n    color: lightgray;\n  }\n\n  &:focus {\n    outline: none;\n    border: ", ";\n    box-sizing: border-box;\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: 0 140px 0 35px;\n  box-sizing: border-box;\n  background-color: rgba(0, 0, 0, 0);\n  z-index: 1;\n  position: absolute;\n\n  &::placeholder {\n    font-size: 13px;\n    color: lightgray;\n  }\n\n  &:focus {\n    outline: none;\n    border: ", ";\n    box-sizing: border-box;\n  }\n"])), function (props) {
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
var InputHolder = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  padding: 0 20px 0 12px;\n  border-radius: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  font-size: 10px;\n  color: #d5d5d5;\n  background-color: ", ";\n  position: absolute;\n\n  div {\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-top: 2px;\n      margin-right: 3px;\n    }\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  padding: 0 20px 0 12px;\n  border-radius: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  font-size: 10px;\n  color: #d5d5d5;\n  background-color: ", ";\n  position: absolute;\n\n  div {\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-top: 2px;\n      margin-right: 3px;\n    }\n  }\n"])), function (props) {
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
var StickerWrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 90%;\n  padding-top: 5px;\n  padding-left: 8px;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: ", ";\n  /* grid-template-rows: repeat(4, 1fr); */\n  grid-template-rows: ", ";\n  row-gap: 8%;\n  justify-items: center;\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    width: 8px;\n  }\n  &::-webkit-scrollbar-track {\n    /* background-color: ", ";\n    border-bottom-right-radius: ", "; */\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: ", ";\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"], ["\n  width: 100%;\n  height: 90%;\n  padding-top: 5px;\n  padding-left: 8px;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: ", ";\n  /* grid-template-rows: repeat(4, 1fr); */\n  grid-template-rows: ", ";\n  row-gap: 8%;\n  justify-items: center;\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    width: 8px;\n  }\n  &::-webkit-scrollbar-track {\n    /* background-color: ", ";\n    border-bottom-right-radius: ", "; */\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: ", ";\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"])), function (props) {
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
var NoSticker = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 90%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .no-sticker {\n    width: 40%;\n  }\n  .no-sticker-text {\n    font-size: 14px;\n    color: #5f5f5f;\n  }\n"], ["\n  width: 100%;\n  height: 90%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .no-sticker {\n    width: 40%;\n  }\n  .no-sticker-text {\n    font-size: 14px;\n    color: #5f5f5f;\n  }\n"])));
var StickerImg = styled.img(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", ";\n  height: auto;\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  width: ", ";\n  height: auto;\n  &:hover {\n    cursor: pointer;\n  }\n"])), function (props) {
    return props.size && props.size.imgSize ? "".concat(props.size.imgSize, "%") : '60%';
});
var PreviewWrapper = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 60%;\n  height: 150px;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  margin-left: 40%;\n  margin-bottom: 5px;\n  padding: 0 24px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 100%;\n"], ["\n  width: 60%;\n  height: 150px;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  margin-left: 40%;\n  margin-bottom: 5px;\n  padding: 0 24px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 100%;\n"])));
var ChatSticker = styled.img(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  width: 100px;\n  height: 100px;\n  margin-bottom: 5px;\n"], ["\n  width: 100px;\n  height: 100px;\n  margin-bottom: 5px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

export { SearchComponent as default };
