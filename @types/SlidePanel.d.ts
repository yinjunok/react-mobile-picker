import React from 'react';
interface IPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    show: boolean;
}
declare const SlidePanel: React.FunctionComponent<IPanelProps>;
export default SlidePanel;
