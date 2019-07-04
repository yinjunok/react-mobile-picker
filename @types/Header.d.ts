import * as React from 'react';
export interface IHeaderProps {
    title?: React.ReactNode;
    cancelText?: string;
    confirmText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}
declare const Header: React.FunctionComponent<IHeaderProps>;
export default Header;
