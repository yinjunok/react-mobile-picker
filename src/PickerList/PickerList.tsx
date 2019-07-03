import * as React from 'react'
import noop from '../noop'
import PickerItem from './PickerItem'
import { IPicked } from '../index'
import './style.less'

const { useState, useRef } = React

interface IPickerListPrips {
  columnIndex: number
  column: string[]
  onChange?: (i: number, item: IPicked) => void
}

const itemHeight = 44

const limitRange = (n: number, min: number, max: number): number => {
  if (n < min) {
    return min
  }

  if (n > max) {
    return max
  }

  return n
}

const PickerList: React.FunctionComponent<IPickerListPrips> = ({ column, onChange, columnIndex }) => {
  // 移动时候最小, 最大范围
  const minIndex = 3 - column.length
  const maxIndex = 2

  const startTouchPoint = useRef<number>(0)
  const [move, setMove] = useState<number>(0)
  const [index, setIndex] = useState<number>(maxIndex)

  const onTouchStart = (e: React.TouchEvent) => {
    startTouchPoint.current = e.touches[0].clientY
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setMove(e.touches[0].clientY - startTouchPoint.current)
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const i = Math.round((itemHeight * index + move) / itemHeight)
    const moveIndex = limitRange(i, minIndex, maxIndex)
    if (moveIndex !== index) {
      // 换成正常的数组索引
      const arrIndex = 2 - moveIndex
      if (onChange) {
        onChange(columnIndex, {
          picked: column[arrIndex],
          index: arrIndex,
        })
      }
    }

    setIndex(moveIndex)
    setMove(0)
    startTouchPoint.current = 0
  }

  return (
    <div
      className='picker-panel'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <ul
        className='picker-list'
        style={{
          transform: `translate3d(0, ${itemHeight * index + move}px, 0)`,
          transitionDuration: `${move !== 0 ? '0ms' : '200ms'}`,
          transitionProperty: `${move !== 0 ? 'none' : 'transform'}`,
        }}
      >
        {
          column.map((item, i) => (
            <PickerItem key={i}>{item}</PickerItem>
          ))
        }
      </ul>
    </div>
  )
}

PickerList.defaultProps = {
  onChange: noop,
}

export default PickerList
