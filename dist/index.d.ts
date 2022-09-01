import React from 'react';
import PropTypes from 'prop-types';

interface SearchProps {
    params: Params$3;
    size?: Size$3;
    backgroundColor?: string;
    column?: number;
    border?: Border$3;
    input?: Input$1;
    scroll?: boolean;
    scrollHover?: string;
    stickerClick?: Function;
    preview?: boolean;
    loadingColor?: string;
    shadow?: string;
    auth?: string;
    mainLanguage?: string;
}
interface Params$3 {
    apikey: string;
    userId: string;
    lang?: string;
    countryCode?: string;
    pageNumber?: number;
    limit?: number;
    default?: string;
}
interface Size$3 {
    width?: number;
    height?: number;
    imgSize?: number;
}
interface Border$3 {
    border?: string;
    radius?: Radius$3;
}
interface Radius$3 {
    rightTop?: number;
    leftTop?: number;
    rightBottom?: number;
    leftBottom?: number;
    all?: number;
}
interface Input$1 {
    border?: string;
    radius?: number;
    backgroundColor?: string;
    color?: string;
    width?: number;
    height?: number;
    focus?: string;
    search?: string;
}

declare const SearchComponent: React.FC<SearchProps>;

declare function Icon({ className, type, onClick, children }: {
    className: any;
    type: any;
    onClick: any;
    children: any;
}): JSX.Element;
declare namespace Icon {
    var propTypes: {
        className: PropTypes.Requireable<string | string[]>;
        type: PropTypes.Validator<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
    var defaultProps: {
        className: string;
        onClick: () => void;
        children: any;
    };
}

interface PickerProps {
    params: Params$2;
    size?: Size$2;
    border?: Border$2;
    backgroundColor?: string;
    menu?: Menu$1;
    column?: number;
    scroll?: boolean;
    scrollHover?: string;
    stickerClick?: Function;
    storeClick?: Function;
    preview?: boolean;
    loadingColor?: string;
    shadow?: string;
    auth?: string;
    mainLanguage?: string;
    store?: boolean;
}
interface Params$2 {
    apikey: string;
    userId: string;
    lang?: string;
}
interface Size$2 {
    width?: number;
    height?: number;
    imgSize?: number;
}
interface Border$2 {
    border?: string;
    radius?: Radius$2;
}
interface Radius$2 {
    rightTop?: number;
    leftTop?: number;
    rightBottom?: number;
    leftBottom?: number;
    all?: number;
}
interface Menu$1 {
    backgroundColor?: string;
    bottomLine?: string;
    selectedLine?: string;
    height?: number;
    listCnt?: number;
    arrowColor?: string;
    imgSize?: number;
}

declare const PickerComponent: React.FC<PickerProps>;

interface StoreProps {
    params: Params$1;
    downloadParams: DownloadParams;
    scroll?: boolean;
    color?: Color;
    onClose?: Function;
    size?: Size$1;
    border?: Border$1;
    shadow?: string;
    auth?: string;
    mainLanguage?: string;
}
interface DownloadParams {
    isPurchase: string;
    price?: string;
    lang?: string;
    countryCode?: string;
}
interface Params$1 {
    apikey: string;
    userId: string;
    lang?: string;
    countryCode?: string;
    animated?: string;
    pageNumber?: number;
    limit?: number;
}
interface Color {
    backgroundColor?: string;
    packageHoverColor?: string;
    downloadedColor?: string;
    downloadedHoverColor?: string;
    downloadBtn?: string;
    downloadBtnHover?: string;
    deleteBtn?: string;
    deleteBtnHover?: string;
    recoveryBtn?: string;
    recoveryBtnHover?: string;
    loadingColor?: string;
    scrollHover?: string;
}
interface Size$1 {
    width?: number;
    height?: number;
    previewImg?: number;
    detailImg?: number;
    mainImg?: number;
    packageListHeight?: number;
}
interface Border$1 {
    border?: string;
    radius?: Radius$1;
}
interface Radius$1 {
    rightTop?: number;
    leftTop?: number;
    rightBottom?: number;
    leftBottom?: number;
    all?: number;
}

declare const StoreComponent: React.FC<StoreProps>;

interface UnifiedProps {
    params: Params;
    size?: Size;
    border?: Border;
    input?: Input;
    menu?: Menu;
    backgroundColor?: string;
    loadingColor?: string;
    column?: number;
    scroll?: boolean;
    scrollHover?: string;
    preview?: boolean;
    stickerClick?: Function;
    storeClick?: Function;
    shadow?: string;
    auth?: string;
    mainLanguage?: string;
    store?: boolean;
}
interface Params {
    apikey: string;
    userId: string;
    lang?: string;
    countryCode?: string;
    pageNumber?: number;
    limit?: number;
}
interface Size {
    width?: number;
    height?: number;
    imgSize?: number;
}
interface Border {
    border?: string;
    radius?: Radius;
}
interface Radius {
    rightTop?: number;
    leftTop?: number;
    rightBottom?: number;
    leftBottom?: number;
    all?: number;
}
interface Input {
    border?: string;
    radius?: number;
    backgroundColor?: string;
    color?: string;
    width?: number;
    height?: number;
    focus?: string;
    search?: string;
}
interface Menu {
    backgroundColor?: string;
    bottomLine?: string;
    selectedLine?: string;
    height?: number;
    listCnt?: number;
    arrowColor?: string;
    imgSize?: number;
}

declare const UnifiedComponent: React.FC<UnifiedProps>;

export { Icon, PickerComponent, SearchComponent, StoreComponent, UnifiedComponent };
