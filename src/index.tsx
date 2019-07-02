import * as React from 'react'
import Mask from './Mask'
import Panel from './Panel'
import Picker, { IPickerProps } from './Picker'
import Header, { IHeaderProps } from './Header'
import noop from './noop'
import './style.less'

interface IReactMobilePickProps extends IHeaderProps, IPickerProps {
  show?: boolean
}

function ReactMobilePick({
  show,
  title,
  onChange,
  onCancel,
  onConfirm,
}: IReactMobilePickProps) {
  return (
    <>
      <Panel show={show as boolean}>
        <>
          <Header onCancel={onCancel} onConfirm={onConfirm}>
            {title}
          </Header>
          <Picker onChange={onChange} />
        </>
      </Panel>
      <Mask show={show as boolean} />
    </>
  )
}

ReactMobilePick.defaultProps = {
  show: true,
  title: '标题',
  onChange: noop,
  onCancel: noop,
  onConfirm: noop,
}

export default ReactMobilePick
