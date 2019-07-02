import * as React from 'react'
import PickerList from './PickerList/PickerList'

export interface IPickerProps {
  onChange?: () => void
}

const { useState } = React
const Picker: React.FunctionComponent<IPickerProps> = ({ onChange }) => {
  const [column, setColumn] = useState(['北京', '上海', '深圳', '广州', '天津', '成都'])

  return (
    <>
      <div className='picker-content'>
        <PickerList column={column} />
        <PickerList column={column} />
        <div className='picker-panel-mask' />
        <div className='picker-picked-item' />
      </div>
    </>
  )
}

export default Picker
