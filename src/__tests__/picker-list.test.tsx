import * as React from 'react'
import { mount } from 'enzyme'
import PickerList from '../PickerList'

const column = {
  column: [
    { text: '北京', key: '北京' },
    { text: '湖南', key: '湖南' },
    { text: '四川', key: '四川' },
    { text: '广州', key: '广州' },
  ],
}

const picked = {
  text: '广州',
  key: '广州',
}

describe('渲染测试', () => {
  it('item should be 4', () => {
    const pickerList = mount(<PickerList columnIndex={0} column={column} picked={picked} />)
    expect(pickerList.find('.picker-item')).toHaveLength(4)
  })
})

describe('回调测试', () => {
  it('change should be called', () => {
    const changeHandler = jest.fn()
    const pickerList = mount(
      <PickerList
        columnIndex={0}
        column={column}
        picked={picked}
        onChange={changeHandler}
      />,
    )

    const item = pickerList.find('.picker-item').at(1)
    item.simulate('click')
    expect(changeHandler).toBeCalled()
    expect(changeHandler.mock.calls[0][0]).toBe(0)
    expect(changeHandler.mock.calls[0][1]).toEqual({ text: '湖南', key: '湖南' })
  })
})
