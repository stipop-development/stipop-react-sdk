import * as react from 'react';
import PropTypes from 'prop-types';

interface StoreProps$1 {
    params: Params$2;
    downloadParams: DownloadParams;
    scroll?: boolean;
    color?: Color;
    onClose?: Function;
    size?: Size$2;
    border?: Border$2;
}
interface DownloadParams {
    isPurchase: string;
    price?: string;
    lang?: string;
    countryCode?: string;
}
interface Params$2 {
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
}
interface Size$2 {
    width?: number;
    height?: number;
    previewImg?: number;
    detailImg?: number;
    mainImg?: number;
    packageListHeight?: number;
}
interface Border$2 {
    border?: string;
    radius?: number;
}

interface StoreProps {
    params: Params$1;
    size?: Size$1;
    border?: Border$1;
    backgroundColor?: string;
    menu?: Menu;
    column?: number;
    scroll?: boolean;
    scrollHover?: string;
    stickerClick?: Function;
    storeClick?: Function;
    preview?: boolean;
    loadingColor?: string;
}
interface Params$1 {
    apikey: string;
    userId: string;
}
interface Size$1 {
    width?: number;
    height?: number;
    imgSize?: number;
}
interface Border$1 {
    border?: string;
    radius?: number;
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

interface ChattingProps {
    width?: number;
    height?: number;
    sticker?: string;
}

interface SearchProps {
    params: Params;
    size?: Size;
    backgroundColor?: string;
    column?: number;
    border?: Border;
    input?: Input;
    scroll?: boolean;
    scrollHover?: string;
    stickerClick?: Function;
    preview?: boolean;
    loadingColor?: string;
}
interface Params {
    apikey: string;
    userId: string;
    lang?: string;
    countryCode?: string;
    pageNumber?: number;
    limit?: number;
    default?: string;
}
interface Size {
    width?: number;
    height?: number;
    imgSize?: number;
}
interface Border {
    border?: string;
    radius?: number;
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

declare const _default: {
    SearchComponent: react.FC<SearchProps>;
    ChattingComponent: react.FC<ChattingProps>;
    PickerComponent: react.FC<StoreProps>;
    StoreComponent: react.FC<StoreProps$1>;
    Icon: typeof Icon;
};

export { _default as default };
