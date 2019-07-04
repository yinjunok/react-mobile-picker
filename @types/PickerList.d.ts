import * as React from 'react';
import { IPicked } from './index';
interface IPickerListPrips {
    columnIndex: number;
    column: string[];
    onChange?: (i: number, item: IPicked) => void;
}
declare const PickerList: React.FunctionComponent<IPickerListPrips>;
export default PickerList;
