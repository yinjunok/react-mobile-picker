import * as React from 'react'
import PickerList from './PickerList'
import { IColumnItem, IColumn } from './index'
import { noop } from './utils'

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
          columns.length === picked.length &&
            columns.map((column, i) => (
              <PickerList
                key={column.key ? column.key : i}
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

Picker.defaultProps = {
  onChange: noop,
}

export default Picker
