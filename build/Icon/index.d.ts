/// <reference types="react" />
import PropTypes from 'prop-types';
export declare function changeTypeToIconClassName(type: any): "stipop-icon-logo" | "stipop-icon-search" | "stipop-icon-smile" | "stipop-icon-store" | "stipop-icon-time" | "stipop-icon-store-black" | "stipop-icon-close" | "stipop-icon-plus" | "stipop-icon-minus" | "stipop-icon-previous" | "stipop-icon-unknown";
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
export default Icon;
export declare const IconTypes: {
    LOGO: string;
    SEARCH: string;
    SMILE: string;
    TIME: string;
    STORE: string;
    STORE_BLACK: string;
    CLOSE: string;
    PLUS: string;
    MINUS: string;
    PREVIOUS: string;
};
