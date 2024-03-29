import { _ as __makeTemplateObject, b as __awaiter, c as __generator } from './tslib.es6-a827156a.js';
import React__default, { useState, useEffect } from 'react';
import { s as styled, L as LoadingSpinner } from './index-6a59c9f1.js';
import Icon from './Icon.js';
import { a as axios, l as lang } from './lang-6ac6702e.js';

var StoreComponent = function (_a) {
    var params = _a.params, downloadParams = _a.downloadParams, color = _a.color, scroll = _a.scroll, onClose = _a.onClose, size = _a.size, border = _a.border, shadow = _a.shadow, auth = _a.auth, mainLanguage = _a.mainLanguage;
    var _b = useState([]), packages = _b[0], setPackages = _b[1];
    var _c = useState(false), detail = _c[0], setDetail = _c[1];
    var _d = useState([]), stickers = _d[0], setStickers = _d[1];
    var _e = useState(null), main = _e[0], setMain = _e[1];
    var _f = useState([]), hideList = _f[0], setHideList = _f[1];
    var _g = useState(true), isLoading = _g[0], setIsLoading = _g[1];
    var _h = useState(0), currentScroll = _h[0], setCurrentScroll = _h[1];
    var _j = useState(0), btnLoading = _j[0], setBtnLoading = _j[1];
    var _k = useState(0), btnHover = _k[0], setBtnHover = _k[1];
    var _l = useState(1), endPage = _l[0], setEndPage = _l[1];
    var _m = useState(0), scrolling = _m[0], setScrolling = _m[1];
    var packInfo = new Array();
    useEffect(function () {
        if (!auth) {
            axios
                .get("https://messenger.stipop.io/v1/package", {
                params: {
                    userId: params.userId,
                    lang: params.lang,
                    countryCode: params.countryCode,
                    animated: params.animated,
                    pageNumber: params.pageNumber,
                    limit: params.limit ? params.limit : 20,
                },
                headers: {
                    apikey: params.apikey,
                },
            })
                .then(function (_a) {
                var data = _a.data;
                var PackageIds = data.body.packageList.map(function (pack) { return pack.packageId; });
                PackageIds.filter(function (item, index) { return PackageIds.indexOf(item) === index; });
                PackageIds.map(function (pack) {
                    axios
                        .get("https://messenger.stipop.io/v1/package/".concat(pack), {
                        params: {
                            userId: params.userId,
                        },
                        headers: {
                            apikey: params.apikey,
                        },
                    })
                        .then(function (_a) {
                        var data = _a.data;
                        packInfo.push(data.body.package);
                        if (packages.length === 0) {
                            setPackages(packages.concat(packInfo));
                        }
                    })
                        .catch(function (error) {
                        throw new Error(error.message);
                    });
                });
                setIsLoading(false);
            })
                .catch(function (error) {
                throw new Error(error.message);
            });
            axios
                .get("https://messenger.stipop.io/v1/mysticker/hide/".concat(encodeURIComponent(params.userId)), {
                params: { userId: params.userId, limit: 50 },
                headers: {
                    apikey: params.apikey,
                },
            })
                .then(function (_a) {
                var data = _a.data;
                setEndPage(data.body && data.body.pageMap ? data.body.pageMap.endPage : 1);
            })
                .catch(function (error) {
                throw new Error(error.message);
            });
        }
    }, []);
    useEffect(function () {
        setIsLoading(true);
        if (auth) {
            axios
                .get("https://messenger.stipop.io/v1/package", {
                params: {
                    userId: params.userId,
                    lang: params.lang,
                    countryCode: params.countryCode,
                    animated: params.animated,
                    pageNumber: params.pageNumber,
                    limit: params.limit ? params.limit : 20,
                },
                headers: {
                    apikey: params.apikey,
                    Authorization: "Bearer ".concat(auth),
                },
            })
                .then(function (_a) {
                var data = _a.data;
                var PackageIds = data.body.packageList.map(function (pack) { return pack.packageId; });
                PackageIds.filter(function (item, index) { return PackageIds.indexOf(item) === index; });
                // body.packageList.map(pack => {
                PackageIds.map(function (pack) {
                    axios
                        .get("https://messenger.stipop.io/v1/package/".concat(pack), {
                        params: {
                            userId: params.userId,
                        },
                        headers: {
                            apikey: params.apikey,
                            Authorization: "Bearer ".concat(auth),
                        },
                    })
                        .then(function (_a) {
                        var data = _a.data;
                        packInfo.push(data.body.package);
                        if (packages.length === 0) {
                            setPackages(packages.concat(packInfo));
                        }
                    })
                        .catch(function (error) {
                        throw new Error(error.message);
                    });
                });
                setIsLoading(false);
            })
                .catch(function (error) {
                throw new Error(error.message);
            });
            axios
                .get("https://messenger.stipop.io/v1/mysticker/hide/".concat(encodeURIComponent(params.userId)), {
                params: { userId: params.userId, limit: 50 },
                headers: {
                    apikey: params.apikey,
                    Authorization: "Bearer ".concat(auth),
                },
            })
                .then(function (_a) {
                var data = _a.data;
                setEndPage(data.body && data.body.pageMap ? data.body.pageMap.endPage : 1);
            })
                .catch(function (error) {
                throw new Error(error.message);
            });
        }
    }, [auth]);
    useEffect(function () {
        if (endPage > 1) {
            for (var i = 2; i <= endPage; i++) {
                if (auth) {
                    axios
                        .get("https://messenger.stipop.io/v1/mysticker/hide/".concat(encodeURIComponent(params.userId)), {
                        params: { userId: params.userId, limit: 50, pageNumber: i },
                        headers: {
                            apikey: params.apikey,
                            Authorization: "Bearer ".concat(auth),
                        },
                    })
                        .then(function (_a) {
                        var data = _a.data;
                        data.body && data.body.packageList
                            ? data.body.packageList.map(function (pack) {
                                setHideList(function (hideList) { return hideList.concat(pack.packageId); });
                            })
                            : setHideList(hideList);
                    })
                        .catch(function (error) {
                        throw new Error(error.message);
                    });
                }
                else {
                    axios
                        .get("https://messenger.stipop.io/v1/mysticker/hide/".concat(encodeURIComponent(params.userId)), {
                        params: { userId: params.userId, limit: 50, pageNumber: i },
                        headers: {
                            apikey: params.apikey,
                        },
                    })
                        .then(function (_a) {
                        var data = _a.data;
                        data.body && data.body.packageList
                            ? data.body.packageList.map(function (pack) {
                                setHideList(function (hideList) { return hideList.concat(pack.packageId); });
                            })
                            : setHideList(hideList);
                    })
                        .catch(function (error) {
                        throw new Error(error.message);
                    });
                }
            }
        }
        else {
            if (auth) {
                axios
                    .get("https://messenger.stipop.io/v1/mysticker/hide/".concat(encodeURIComponent(params.userId)), {
                    params: { userId: params.userId, limit: 50 },
                    headers: {
                        apikey: params.apikey,
                        Authorization: "Bearer ".concat(auth),
                    },
                })
                    .then(function (_a) {
                    var data = _a.data;
                    data.body && data.body.packageList
                        ? data.body.packageList.map(function (pack) {
                            setHideList(function (hideList) { return hideList.concat(pack.packageId); });
                        })
                        : setHideList(hideList);
                })
                    .catch(function (error) {
                    throw new Error(error.message);
                });
            }
            else {
                axios
                    .get("https://messenger.stipop.io/v1/mysticker/hide/".concat(encodeURIComponent(params.userId)), {
                    params: { userId: params.userId, limit: 50 },
                    headers: {
                        apikey: params.apikey,
                    },
                })
                    .then(function (_a) {
                    var data = _a.data;
                    data.body && data.body.packageList
                        ? data.body.packageList.map(function (pack) {
                            setHideList(function (hideList) { return hideList.concat(pack.packageId); });
                        })
                        : setHideList(hideList);
                })
                    .catch(function (error) {
                    throw new Error(error.message);
                });
            }
        }
    }, [endPage]);
    useEffect(function () {
        if (packages && packages.length > 0) {
            // if (params.limit) {
            //   if (packages.length >= params.limit) {
            //     setIsLoading(false)
            //   }
            // } else {
            //   if (packages.length === 20) {
            //     setIsLoading(false)
            //   }
            // }
            setIsLoading(false);
        }
    }, [packages]);
    var clickDownload = function (packageId) {
        setBtnLoading(packageId);
        if (auth) {
            axios
                .post("https://messenger.stipop.io/v1/download/".concat(packageId), null, {
                params: {
                    userId: params.userId,
                    packageId: packageId,
                    isPurchase: downloadParams.isPurchase,
                    price: downloadParams.price,
                    lang: downloadParams.lang,
                    countryCode: downloadParams.countryCode,
                },
                headers: {
                    apikey: params.apikey,
                    Authorization: "Bearer ".concat(auth),
                },
            })
                .then(function () {
                setTimeout(function () {
                    setPackages(packages.map(function (pack) {
                        if (pack.packageId === packageId) {
                            pack.isDownload = 'Y';
                        }
                        return pack;
                    }));
                    if (main) {
                        setMain({
                            packageId: main.packageId,
                            packageImg: main.packageImg,
                            packageName: main.packageName,
                            artistName: main.artistName,
                            isDownload: 'Y',
                        });
                    }
                    setBtnLoading(0);
                }, 500);
            })
                .catch(function (error) {
                setBtnLoading(0);
                throw new Error(error.message);
            });
        }
        else {
            axios
                .post("https://messenger.stipop.io/v1/download/".concat(packageId), null, {
                params: {
                    userId: params.userId,
                    packageId: packageId,
                    isPurchase: downloadParams.isPurchase,
                    price: downloadParams.price,
                    lang: downloadParams.lang,
                    countryCode: downloadParams.countryCode,
                },
                headers: {
                    apikey: params.apikey,
                },
            })
                .then(function () {
                setTimeout(function () {
                    setPackages(packages.map(function (pack) {
                        if (pack.packageId === packageId) {
                            pack.isDownload = 'Y';
                        }
                        return pack;
                    }));
                    if (main) {
                        setMain({
                            packageId: main.packageId,
                            packageImg: main.packageImg,
                            packageName: main.packageName,
                            artistName: main.artistName,
                            isDownload: 'Y',
                        });
                    }
                    setBtnLoading(0);
                }, 500);
            })
                .catch(function (error) {
                setBtnLoading(0);
                throw new Error(error.message);
            });
        }
    };
    var clickHide = function (packageId) {
        setBtnLoading(packageId);
        if (auth) {
            axios
                .put("https://messenger.stipop.io/v1/mysticker/hide/".concat(encodeURIComponent(params.userId), "/").concat(packageId), null, {
                params: { userId: params.userId },
                headers: {
                    apikey: params.apikey,
                    Authorization: "Bearer ".concat(auth),
                },
            })
                .then(function () {
                setTimeout(function () {
                    if (hideList.indexOf(packageId) < 0) {
                        setHideList(hideList.concat(packageId));
                    }
                    else {
                        setHideList(hideList.filter(function (item) { return item !== packageId; }));
                        axios
                            .get("https://messenger.stipop.io/v1/mysticker/".concat(encodeURIComponent(params.userId)), {
                            params: {
                                userId: params.userId,
                            },
                            headers: {
                                apikey: params.apikey,
                                Authorization: "Bearer ".concat(auth),
                            },
                        })
                            .then(function (_a) {
                            var data = _a.data;
                            var firstOrder = data.body &&
                                data.body.packageList &&
                                data.body.packageList[0].order;
                            var currentOrder = data.body.packageList.filter(function (pack) { return pack.packageId === packageId; })[0].order;
                            axios
                                .put("https://messenger.stipop.io/v1/mysticker/order/".concat(encodeURIComponent(params.userId)), {
                                currentOrder: currentOrder,
                                newOrder: firstOrder + 1,
                            }, {
                                params: {
                                    userId: params.userId,
                                },
                                headers: {
                                    apikey: params.apikey,
                                    Authorization: "Bearer ".concat(auth),
                                },
                            })
                                .then(function () { })
                                .catch(function (error) {
                                throw new Error(error.message);
                            });
                        });
                    }
                    setBtnLoading(0);
                }, 500);
            })
                .catch(function (error) {
                setBtnLoading(0);
                throw new Error(error.message);
            });
        }
        else {
            axios
                .put("https://messenger.stipop.io/v1/mysticker/hide/".concat(encodeURIComponent(params.userId), "/").concat(packageId), null, {
                params: { userId: params.userId },
                headers: {
                    apikey: params.apikey,
                },
            })
                .then(function () {
                setTimeout(function () {
                    if (hideList.indexOf(packageId) < 0) {
                        setHideList(hideList.concat(packageId));
                    }
                    else {
                        setHideList(hideList.filter(function (item) { return item !== packageId; }));
                        axios
                            .get("https://messenger.stipop.io/v1/mysticker/".concat(encodeURIComponent(params.userId)), {
                            params: {
                                userId: params.userId,
                            },
                            headers: {
                                apikey: params.apikey,
                            },
                        })
                            .then(function (_a) {
                            var data = _a.data;
                            var firstOrder = data.body &&
                                data.body.packageList &&
                                data.body.packageList[0].order;
                            var currentOrder = data.body.packageList.filter(function (pack) { return pack.packageId === packageId; })[0].order;
                            axios
                                .put("https://messenger.stipop.io/v1/mysticker/order/".concat(encodeURIComponent(params.userId)), {
                                currentOrder: currentOrder,
                                newOrder: firstOrder + 1,
                            }, {
                                params: {
                                    userId: params.userId,
                                },
                                headers: {
                                    apikey: params.apikey,
                                },
                            })
                                .then(function () { })
                                .catch(function (error) {
                                throw new Error(error.message);
                            });
                        });
                    }
                    setBtnLoading(0);
                }, 500);
            })
                .catch(function (error) {
                setBtnLoading(0);
                throw new Error(error.message);
            });
        }
    };
    useEffect(function () {
        var pack = document.getElementById('package-wrapper');
        if (pack) {
            pack.scrollTo(0, currentScroll);
        }
    }, [isLoading]);
    var clickDetail = function (packageId) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setIsLoading(true)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, setStickers(packages.filter(function (pack) { return pack.packageId === packageId; })[0].stickers)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, setDetail(true)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, setIsLoading(false)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var clickPrevious = function () { return __awaiter(void 0, void 0, void 0, function () {
        var pack;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, setDetail(false)];
                case 1:
                    _a.sent();
                    pack = document.getElementById('package-wrapper');
                    return [4 /*yield*/, pack.scrollTo(0, currentScroll)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React__default.createElement(React__default.Fragment, null, isLoading ? (React__default.createElement(StoreWrapper, { color: color, size: size, border: border, shadow: shadow },
        React__default.createElement(LoadingSpinner, { color: color && color.loadingColor ? color.loadingColor : '#ff4500' }))) : (React__default.createElement(StoreWrapper, { color: color, size: size, border: border, shadow: shadow },
        React__default.createElement(StoreTitle, null,
            detail ? (React__default.createElement("div", { className: "title-text" },
                React__default.createElement(PreviousBtn, null,
                    React__default.createElement(Icon, { type: "PREVIOUS", onClick: function () {
                            clickPrevious();
                        } })),
                React__default.createElement("span", null, mainLanguage
                    ? lang[mainLanguage].pack
                    : params.lang
                        ? lang[params.lang].pack
                        : lang['en'].pack))) : (React__default.createElement("div", { className: "title-text" },
                React__default.createElement("span", null, mainLanguage
                    ? lang[mainLanguage].store
                    : params.lang
                        ? lang[params.lang].store
                        : lang['en'].store),
                React__default.createElement(Icon, { type: "STORE_BLACK" }))),
            React__default.createElement(CloseBtn, { onClick: function () { return onClose(true); } },
                React__default.createElement(Icon, { type: "CLOSE" }))),
        React__default.createElement(PackageContainer, { detail: detail, color: color, scroll: scroll, border: border }, detail ? (React__default.createElement(DetailWrapper, { scroll: scroll },
            React__default.createElement(DetailBox, null,
                React__default.createElement(MainImg, { src: main.packageImg, alt: "" }),
                React__default.createElement(DetailName, null,
                    React__default.createElement("div", { className: "packageName" }, main.packageName),
                    React__default.createElement("div", { className: "artistName" },
                        "\u00A9",
                        main.artistName)),
                btnLoading ? (React__default.createElement(DownloadBtn, { style: {
                        right: '64px',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                    } },
                    React__default.createElement(LoadingSpinner, { color: main.isDownload === 'Y' &&
                            hideList.indexOf(main.packageId) === -1
                            ? color && color.deleteBtn
                                ? color.deleteBtn
                                : '#b3b3b3'
                            : color && color.downloadBtn
                                ? color.downloadBtn
                                : '#ff4500' }))) : (React__default.createElement(DownloadBtn, { color: color, isDownload: main.isDownload === 'Y', isRecovery: main.isDownload === 'Y' &&
                        hideList.indexOf(main.packageId) !== -1, style: { right: '64px' }, onClick: function () {
                        main.isDownload === 'Y'
                            ? clickHide(main.packageId)
                            : clickDownload(main.packageId);
                    } },
                    React__default.createElement(Icon, { type: main.isDownload === 'Y'
                            ? hideList.indexOf(main.packageId) < 0
                                ? 'MINUS'
                                : 'PLUS'
                            : 'PLUS' })))),
            React__default.createElement(DetailStickerWrapper, { size: size, scroll: scroll, color: color }, stickers &&
                stickers.map(function (sticker, index) { return (React__default.createElement("img", { src: "".concat(sticker.stickerImg, "?d=100x100"), 
                    // src={sticker.stickerImg}
                    alt: "", key: index })); })))) : packages && packages.length > 0 ? (React__default.createElement(PackageWrapper, { id: "package-wrapper", size: size, scroll: scroll, border: border, color: color, scrolling: scrolling, onScroll: function (e) { return setCurrentScroll(e.target.scrollTop); }, onMouseEnter: function () { return setScrolling(1); }, onMouseLeave: function () { return setScrolling(0); } }, packages.map(function (pack, index) { return (React__default.createElement(PackageBox, { key: index, color: color, size: size, isDownload: pack.isDownload === 'Y', onClick: function (e) {
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
            React__default.createElement(PackageTitle, null,
                pack.packageName,
                React__default.createElement("span", null,
                    "\u00A9",
                    pack.artistName)),
            React__default.createElement(PackageItem, null, pack && pack.stickers ? (pack.stickers.map(function (sticker, index) {
                if (index < 5) {
                    return (React__default.createElement(StickerWrapper, { key: index },
                        React__default.createElement(Sticker, { src: "".concat(sticker.stickerImg, "?d=100x100"), 
                            // src={sticker.stickerImg}
                            alt: "", size: size })));
                }
            })) : (React__default.createElement("div", null))),
            btnLoading && btnLoading === pack.packageId ? (React__default.createElement(DownloadBtn, { style: { backgroundColor: 'rgba(0, 0, 0, 0)' } },
                React__default.createElement(LoadingSpinner, { color: pack.isDownload === 'Y' &&
                        hideList.indexOf(pack.packageId) === -1
                        ? color && color.deleteBtn
                            ? color.deleteBtn
                            : '#b3b3b3'
                        : color && color.downloadBtn
                            ? color.downloadBtn
                            : '#ff4500' }))) : (React__default.createElement(DownloadBtn, { color: color, isDownload: pack.isDownload === 'Y', btnHover: btnHover === pack.packageId, isRecovery: pack.isDownload === 'Y' &&
                    hideList.indexOf(pack.packageId) !== -1 },
                React__default.createElement(Icon, { type: pack.isDownload === 'Y'
                        ? hideList.indexOf(pack.packageId) < 0
                            ? 'MINUS'
                            : 'PLUS'
                        : 'PLUS' }))),
            React__default.createElement(BtnWrapper, { id: "download-btn", onMouseEnter: function () { return setBtnHover(pack.packageId); }, onMouseLeave: function () { return setBtnHover(0); }, onClick: function () {
                    pack.isDownload === 'Y'
                        ? clickHide(pack.packageId)
                        : clickDownload(pack.packageId);
                } }))); }))) : (React__default.createElement("div", null)))))));
};
var StoreWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background-color: #fff;\n  border: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  background-color: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  background-color: #fff;\n  border: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  background-color: ", ";\n"])), function (props) {
    return props.size && props.size.width ? "".concat(props.size.width, "px") : '600px';
}, function (props) {
    return props.size && props.size.height ? "".concat(props.size.height, "px") : '600px';
}, function (props) {
    return props.border && props.border.border
        ? props.border.border
        : '1px solid lightgray';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.leftTop || props.border.radius.leftTop === 0)
        ? "".concat(props.border.radius.leftTop, "px")
        : '8px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.rightTop || props.border.radius.rightTop === 0)
        ? "".concat(props.border.radius.rightTop, "px")
        : '8px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.leftBottom || props.border.radius.leftBottom === 0)
        ? "".concat(props.border.radius.leftBottom, "px")
        : '8px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.rightBottom || props.border.radius.rightBottom === 0)
        ? "".concat(props.border.radius.rightBottom, "px")
        : '8px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.all || props.border.radius.all === 0) &&
        "".concat(props.border.radius.all, "px");
}, function (props) {
    return props.shadow ? props.shadow : '0 10px 20px 6px rgba(0, 0, 0, 0.1)';
}, function (props) {
    return props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff';
});
var StoreTitle = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  box-sizing: border-box;\n\n  .title-text {\n    display: flex;\n    align-items: center;\n    font-size: 24px;\n    font-weight: bold;\n    span {\n      margin-right: 10px;\n    }\n  }\n"], ["\n  width: 100%;\n  height: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 32px;\n  box-sizing: border-box;\n\n  .title-text {\n    display: flex;\n    align-items: center;\n    font-size: 24px;\n    font-weight: bold;\n    span {\n      margin-right: 10px;\n    }\n  }\n"])));
var CloseBtn = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .stipop-icon {\n    width: 34px;\n    height: 34px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  &:hover {\n    cursor: pointer;\n    background-color: #f5f5f5;\n  }\n"], ["\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .stipop-icon {\n    width: 34px;\n    height: 34px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  &:hover {\n    cursor: pointer;\n    background-color: #f5f5f5;\n  }\n"])));
var PreviousBtn = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n\n  .stipop-icon {\n    width: 34px;\n    height: 34px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: #f5f5f5;\n  }\n"], ["\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 10px;\n\n  .stipop-icon {\n    width: 34px;\n    height: 34px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: #f5f5f5;\n  }\n"])));
var PackageContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  /* border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", "; */\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n"], ["\n  width: 100%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  /* border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", "; */\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n"])), function (props) {
    return props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '8px';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '8px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.all || props.border.radius.all === 0)
        ? "".concat(props.border.radius.all, "px")
        : props.border &&
            props.border.radius &&
            (props.border.radius.leftBottom || props.border.radius.leftBottom === 0)
            ? "".concat(props.border.radius.leftBottom, "px")
            : '8px';
}, function (props) {
    return props.border &&
        props.border.radius &&
        (props.border.radius.all || props.border.radius.all === 0)
        ? "".concat(props.border.radius.all, "px")
        : props.border &&
            props.border.radius &&
            (props.border.radius.rightBottom ||
                props.border.radius.rightBottom === 0)
            ? "".concat(props.border.radius.rightBottom, "px")
            : '8px';
});
var DetailWrapper = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var DetailBox = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  padding: 0 68px 0 45px;\n  align-items: center;\n  position: relative;\n  margin-bottom: 5%;\n"], ["\n  display: flex;\n  padding: 0 68px 0 45px;\n  align-items: center;\n  position: relative;\n  margin-bottom: 5%;\n"])));
var MainImg = styled.img(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: ", ";\n  margin-right: 12px;\n"], ["\n  width: ", ";\n  margin-right: 12px;\n"])), function (props) {
    return props.size && props.size.mainImg ? "".concat(props.size.mainImg, "px") : '100px';
});
var DetailName = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  .packageName {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .artistName {\n    font-size: 10px;\n    color: #a9a9a9;\n  }\n"], ["\n  .packageName {\n    font-size: 14px;\n    font-weight: bold;\n  }\n  .artistName {\n    font-size: 10px;\n    color: #a9a9a9;\n  }\n"])));
var DetailStickerWrapper = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  height: 100%;\n  padding: 0 32px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-auto-rows: 100px;\n  justify-items: center;\n  align-items: center;\n  row-gap: 2%;\n  overflow-y: auto;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    width: 9px;\n  }\n  &::-webkit-scrollbar-track {\n    /* background-color: ", ";\n    border-bottom-right-radius: ", "; */\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: ", ";\n    }\n  }\n\n  img {\n    width: ", ";\n    &:hover {\n      transform: scale(1.3);\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"], ["\n  height: 100%;\n  padding: 0 32px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-auto-rows: 100px;\n  justify-items: center;\n  align-items: center;\n  row-gap: 2%;\n  overflow-y: auto;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    width: 9px;\n  }\n  &::-webkit-scrollbar-track {\n    /* background-color: ", ";\n    border-bottom-right-radius: ", "; */\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: ", ";\n    }\n  }\n\n  img {\n    width: ", ";\n    &:hover {\n      transform: scale(1.3);\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"])), function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) {
    return props.color && props.color.backgroundColor
        ? props.color.backgroundColor
        : '#fff';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '8px';
}, function (props) {
    return props.color && props.color.scrollHover
        ? props.color.scrollHover
        : '#6d7072';
}, function (props) {
    return props.size && props.size.detailImg ? "".concat(props.size.detailImg, "%") : '70%';
});
var PackageWrapper = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow-y: scroll;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    /* display: ", "; */\n    width: 9px;\n  }\n  &::-webkit-scrollbar-track {\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: ", ";\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow-y: scroll;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  box-sizing: border-box;\n  -ms-overflow-style: ", ";\n  scrollbar-width: ", ";\n\n  &::-webkit-scrollbar {\n    display: ", ";\n    /* display: ", "; */\n    width: 9px;\n  }\n  &::-webkit-scrollbar-track {\n    display: none;\n  }\n  &::-webkit-scrollbar-thumb {\n    background: #bcc0c4;\n    border-radius: 5px;\n    &:hover {\n      background: ", ";\n    }\n  }\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n"])), function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '8px';
}, function (props) {
    return props.border && (props.border.radius || props.border.radius == 0)
        ? "".concat(props.border.radius, "px")
        : '8px';
}, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) { return (props.scroll === false ? 'none' : ''); }, function (props) {
    return props.scroll === false ? 'none' : props.scrolling ? '' : 'none';
}, function (props) {
    return props.color && props.color.scrollHover
        ? props.color.scrollHover
        : '#6d7072';
});
var PackageBox = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  width: calc(100% - 64px);\n  height: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 23px 0 32px;\n  box-sizing: border-box;\n  background-color: ", ";\n  border-bottom: 0.5px solid #e6e6e6;\n  position: relative;\n\n  &:hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"], ["\n  width: calc(100% - 64px);\n  height: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 23px 0 32px;\n  box-sizing: border-box;\n  background-color: ", ";\n  border-bottom: 0.5px solid #e6e6e6;\n  position: relative;\n\n  &:hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"])), function (props) {
    return props.size && props.size.packageListHeight
        ? "".concat(props.size.packageListHeight, "%")
        : '33%';
}, function (props) {
    return props.isDownload
        ? props.color && props.color.downloadedColor
            ? props.color.downloadedColor
            : props.color && props.color.backgroundColor
                ? props.color.backgroundColor
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
                : '#f5f6f6';
});
var DownloadBtn = styled.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  width: 32px;\n  height: 32px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 20px;\n\n  .stipop-icon {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"], ["\n  width: 32px;\n  height: 32px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 20px;\n\n  .stipop-icon {\n    width: 32px;\n    height: 32px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"])), function (props) {
    return props.isDownload
        ? props.isRecovery
            ? props.btnHover
                ? props.color && props.color.recoveryBtnHover
                    ? props.color.recoveryBtnHover
                    : '#d13900'
                : props.color && props.color.recoveryBtn
                    ? props.color.recoveryBtn
                    : '#ff4500'
            : props.btnHover
                ? props.color && props.color.deleteBtnHover
                    ? props.color.deleteBtnHover
                    : '#a1a1a1'
                : props.color && props.color.deleteBtn
                    ? props.color.deleteBtn
                    : '#b3b3b3'
        : props.btnHover
            ? props.color && props.color.downloadBtnHover
                ? props.color.downloadBtnHover
                : '#d13900'
            : props.color && props.color.downloadBtn
                ? props.color.downloadBtn
                : '#ff4500';
}, function (props) {
    return props.isDownload
        ? props.isRecovery
            ? props.color && props.color.recoveryBtnHover
                ? props.color.recoveryBtnHover
                : '#d13900'
            : props.color && props.color.deleteBtnHover
                ? props.color.deleteBtnHover
                : '#a1a1a1'
        : props.color && props.color.downloadBtnHover
            ? props.color.downloadBtnHover
            : '#d13900';
});
var BtnWrapper = styled.div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: absolute;\n  right: 20px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"], ["\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  position: absolute;\n  right: 20px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"])));
var PackageTitle = styled.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  margin-left: 5px;\n\n  span {\n    font-size: 12px;\n    font-weight: normal;\n    color: #a9a9a9;\n    margin-left: 12px;\n  }\n"], ["\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 10px;\n  margin-left: 5px;\n\n  span {\n    font-size: 12px;\n    font-weight: normal;\n    color: #a9a9a9;\n    margin-left: 12px;\n  }\n"])));
var PackageItem = styled.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 75%;\n  height: 50%;\n  padding-left: 20px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 75%;\n  height: 50%;\n  padding-left: 20px;\n"])));
var StickerWrapper = styled.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n"])));
var Sticker = styled.img(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  width: ", ";\n"], ["\n  width: ", ";\n"])), function (props) {
    return props.size && props.size.previewImg ? "".concat(props.size.previewImg, "%") : '75%';
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;

export { StoreComponent as default };
