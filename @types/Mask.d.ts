/// <reference types="react" />
interface IMaskProps {
    show: boolean;
    onCancel?: () => void;
}
declare function Mask({ show, onCancel }: IMaskProps): JSX.Element;
declare namespace Mask {
    var defaultProps: {
        onCancel: () => void;
    };
}
export default Mask;
