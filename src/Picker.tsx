import * as React from 'react'
import PickerList from './PickerList'
import { IColumnItem, IColumn } from './index'

export interface IPickerProps {
  columns: IColumn[]
  picked: IColumnItem[]
  onChange?: (i: number, item: IColumnItem) => void
}

const Picker: React.FunctionComponent<IPickerProps> = ({ onChange, columns, picked }) => {
  return (
    <>
      <div className='picker-content'>
        {
          columns.map((column, i) => (
            <PickerList
              key={i}
              column={column}
              columnIndex={i}
              picked={picked[i]}
              onChange={onChange}
            />
          ))
        }
        <div className='picker-panel-mask' />
        <div className='picker-picked-item' />
      </div>
    </>
  )
}

export default Picker
