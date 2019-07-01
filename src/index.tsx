import * as React from 'react'
import Mask from './Mask'
import Panel from './Panel'
import Picker from './Picker'
import './style.less'

const { useEffect, useState } = React

interface IReactMobilePickProps {
  show?: boolean
  onChange?: () => void
  onConfirm?: () => void
  onCancel?: () => void
}

function ReactMobilePick({
  show,
  onChange,
  onCancel,
  onConfirm,
}: IReactMobilePickProps) {
  return (
    <>
      <Mask show={show as boolean} />
      <Panel show={show as boolean}>
        <Picker />
      </Panel>
    </>
  )
}

// tslint:disable-next-line
const noop = () => {}

ReactMobilePick.defaultProps = {
  show: true,
  onChange: noop,
  onCancel: noop,
  onConfirm: noop,
}

export default ReactMobilePick
