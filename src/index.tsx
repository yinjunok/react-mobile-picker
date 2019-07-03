import * as React from 'react'
import Mask from './Mask'
import Panel from './Panel'
import Picker from './Picker'
import Header from './Header'
import noop from './noop'
import './style.less'

const { useState } = React

export interface IPicked {
  picked: string
  index: number
}

interface IReactMobilePickProps {
  show?: boolean
  title?: React.ReactNode
  onChange: () => void
  onCancel: () => void
  onConfirm: (picked: IPicked[]) => void
  columns: string[][]
}

function ReactMobilePick({
  show,
  title,
  columns,
  onChange,
  onCancel,
  onConfirm,
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
  }

  return (
    <>
      <Panel show={show as boolean}>
        <>
          <Header onCancel={onCancel} onConfirm={() => onConfirm(picked)}>
            {title}
          </Header>
          <Picker onChange={pickedChange} columns={columns} />
        </>
      </Panel>
      <Mask show={show as boolean} onCancel={onCancel} />
    </>
  )
}

ReactMobilePick.defaultProps = {
  show: false,
  title: '标题',
  onChange: noop,
  onCancel: noop,
  onConfirm: noop,
}

export default ReactMobilePick
