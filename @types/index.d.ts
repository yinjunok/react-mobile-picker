import * as React from 'react';
import './style.less';
export interface IPicked {
    picked: string;
    index: number;
}
interface IReactMobilePickProps {
    columns: string[][];
    onChange: (picked: IPicked[]) => void;
    onCancel: () => void;
    onConfirm: (picked: IPicked[]) => void;
    show?: boolean;
    title?: React.ReactNode;
    cancelText?: string;
    confirmText?: string;
}
declare function ReactMobilePick({ show, title, columns, onChange, onCancel, onConfirm, }: IReactMobilePickProps): JSX.Element;
declare namespace ReactMobilePick {
    var defaultProps: {
        show: boolean;
        title: string;
        onChange: () => void;
        onCancel: () => void;
        onConfirm: () => void;
        cancelText: string;
        confirmText: string;
    };
}
export default ReactMobilePick;
