import * as React from 'react';
import { IPicked } from './index';
export interface IPickerProps {
    columns: string[][];
    onChange?: (i: number, item: IPicked) => void;
}
declare const Picker: React.FunctionComponent<IPickerProps>;
export default Picker;
