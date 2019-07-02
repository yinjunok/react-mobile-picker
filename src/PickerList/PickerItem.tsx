import * as React from 'react'

const PickerItem: React.FunctionComponent = ({children }) => {
  return (
    <li className='picker-item'>{children}</li>
  )
}

export default PickerItem
