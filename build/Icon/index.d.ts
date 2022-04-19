/// <reference types="react" />
import PropTypes from 'prop-types';
export declare function changeTypeToIconClassName(type: any): "stipop-icon-logo" | "stipop-icon-search" | "stipop-icon-unknown";
declare function Icon({ className, type, children }: {
    className: any;
    type: any;
    children: any;
}): JSX.Element;
declare namespace Icon {
    var propTypes: {
        className: PropTypes.Requireable<string | string[]>;
        type: PropTypes.Validator<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
    var defaultProps: {
        className: string;
        children: any;
    };
}
export default Icon;
export declare const IconTypes: {
    LOGO: string;
    SEARCH: string;
};
