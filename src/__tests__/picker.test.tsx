import * as React from 'react'
import { mount } from 'enzyme'
import Picker from '../Picker'

const columns = [
  {
    key: 0,
    defaultKey: '广州',
    column: [
      { text: '北京', key: '北京' },
      { text: '湖南', key: '湖南' },
      { text: '四川', key: '四川' },
      { text: '广州', key: '广州' },
    ],
  },
  {
    key: 1,
    defaultKey: '美国',
    column: [
      { text: '美国', key: '美国' },
      { text: '日本', key: '日本' },
      { text: '俄罗斯', key: '俄罗斯' },
      { text: '尼日利亚', key: '尼日利亚' },
      { text: '越南', key: '越南' },
      { text: '柬埔寨', key: '柬埔寨' },
    ],
  },
]

describe('渲染测试', () => {
  it('should have to list', () => {
    const picker = mount(
      <Picker
        columns={columns}
        picked={[
          {text: '广州', key: '广州'},
          {text: '美国', key: '美国'},
        ]}
      />,
    )

    expect(picker.find('.picker-content')).toHaveLength(1)
    expect(picker.find('.picker-panel')).toHaveLength(2)
  })
})
