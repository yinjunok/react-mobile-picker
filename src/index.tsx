import * as React from 'react'
import Mask from './Mask'
import SlidePanel from './SlidePanel'
import Picker from './Picker'
import Header from './Header'
import { noop } from './utils'
import Loading from './Loading'
import './style.less'

const { useState } = React

export interface IPicked {
  picked: string
  index: number
}

interface IReactMobilePickProps {
  columns: string[][]
  onChange: (picked: IPicked[]) => void
  onCancel: () => void
  onConfirm: (picked: IPicked[]) => void

  show?: boolean
  loading?: boolean
  title?: React.ReactNode
  cancelText?: string
  confirmText?: string
}

function ReactMobilePick({
  show,
  title,
  loading,
  columns,
  onChange,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
}: IReactMobilePickProps) {
  const [picked, setPicked] = useState<IPicked[]>(() => {
    const result: IPicked[] = []

    for (const column of columns) {
      result.push({
        picked: column[0],
        index: 0,
      })
    }

    return result
  })

  const pickedChange = (i: number, item: IPicked) => {
    const tempPicked = [...picked]
    tempPicked[i] = item
    setPicked(tempPicked)
    onChange(tempPicked)
  }

  return (
    <>
      <SlidePanel show={show as boolean}>
        <Header
          onCancel={onCancel}
          cancelText={cancelText}
          confirmText={confirmText}
          onConfirm={() => onConfirm(picked)}
        >
          {title}
        </Header>
        <Picker onChange={pickedChange} columns={columns} picked={picked} />
        {loading && <Loading />}
      </SlidePanel>
      <Mask show={show as boolean} onCancel={onCancel} />
    </>
  )
}

ReactMobilePick.defaultProps = {
  show: false,
  title: null,
  loading: false,
  onChange: noop,
  onCancel: noop,
  onConfirm: noop,
  cancelText: '取消',
  confirmText: '确定',
}

export default ReactMobilePick
