import * as React from 'react'
import PickerList from './PickerList'
import { IPicked } from './index'

export interface IPickerProps {
  columns: string[][]
  onChange?: (i: number, item: IPicked) => void
}

const Picker: React.FunctionComponent<IPickerProps> = ({ onChange, columns }) => {
  return (
    <>
      <div className='picker-content'>
        {
          columns.map((column, i) => <PickerList column={column} key={i} columnIndex={i} onChange={onChange} />)
        }
        <div className='picker-panel-mask' />
        <div className='picker-picked-item' />
      </div>
    </>
  )
}

export default Picker
