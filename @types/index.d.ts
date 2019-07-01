import * as React from 'react';
declare type TCopy = (result: boolean) => void;
interface ITip {
    success?: string;
    error?: string;
    hover?: string;
}
declare type TStatus = 'hover' | 'success' | 'error';
interface ICopyToCliboardState {
    status: TStatus;
}
interface ICopyToClipboardProps extends React.HTMLAttributes<HTMLSpanElement> {
    text?: string | null;
    copy?: TCopy;
    tip: ITip;
}
declare class CopyToClipboard extends React.Component<ICopyToClipboardProps, ICopyToCliboardState> {
    static defaultProps: {
        text: null;
        copy: () => void;
        tip: null;
        className: string;
    };
    state: {
        status: TStatus;
    };
    private id;
    render(): JSX.Element;
    spanRef: React.RefObject<HTMLSpanElement>;
    private clickHandler;
    private getTipType;
    private getTip;
}
export default CopyToClipboard;
