import * as React from 'react'
import { noop, limitRange } from './utils'
import { IColumnItem, IColumn, TKey } from './index'

const { useState, useRef } = React

interface IPickerListPrips {
  columnIndex: number
  column: IColumn
  picked: IColumnItem
  onChange?: (i: number, item: IColumnItem) => void
}

const itemHeight = 44

const PickerList: React.FunctionComponent<IPickerListPrips> = ({ picked, column, onChange, columnIndex }) => {
  const index = column.column.findIndex((item) => picked.key === item.key) // picked.index
  const columnLength = column.column.length
  // 触碰开始的起始点
  const startTouchPoint = useRef<number>(0)
  // 手指滑动的距离
  const [move, setMove] = useState<number>(0)

  const onTouchStart = (e: React.TouchEvent) => {
    startTouchPoint.current = e.touches[0].clientY
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setMove(e.touches[0].clientY - startTouchPoint.current)
  }

  const onTouchEnd = () => {
    const i = Math.round(computedDiss() / itemHeight)
    let moveIndex = limitRange(i, -columnLength + 1, 0)
    moveIndex = moveIndex === 0 ? 0 : -moveIndex

    if (moveIndex !== index) {
      if (onChange) {
        onChange(columnIndex, {...column.column[moveIndex]})
      }
    }

    setMove(0)
    startTouchPoint.current = 0
  }

  const computedDiss = () => {
    return itemHeight * -index + move
  }

  const clickHandle = (key: TKey) => {
    const option = column.column.find((item) => item.key === key)
    if (onChange) {
      onChange(columnIndex, {...(option as IColumnItem)})
    }
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
          transform: `translate3d(0, ${computedDiss()}px, 0)`,
          transitionDuration: `${move !== 0 ? '0ms' : '200ms'}`,
          transitionProperty: `${move !== 0 ? 'none' : 'transform'}`,
        }}
      >
        {
          column.column.map((item) => (
            <li key={item.key} onClick={() => clickHandle(item.key)} className='picker-item'>{item.text}</li>
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
