import * as React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('渲染测试', () => {
  it('title null', () => {
    const header = shallow(<Header />)
    const span = header.find('span')
    expect(span).toHaveLength(1)
    expect(span.first().text()).toEqual('')
  })

  it('title: 标题', () => {
    const header = shallow(<Header>标题</Header>)
    const span = header.find('span')
    expect(span).toHaveLength(1)
    expect(span.first().text()).toEqual('标题')
  })

  it('cancelText, confirmText default', () => {
    const header = shallow(<Header />)
    const button = header.find('button')
    expect(button).toHaveLength(2)
    expect(button.first().text()).toEqual('取消')
    expect(button.at(1).text()).toEqual('确定')
  })

  it('cancelText, confirmText default', () => {
    const header = shallow(<Header />)
    const button = header.find('button')
    expect(button).toHaveLength(2)
    expect(button.first().text()).toEqual('取消')
    expect(button.at(1).text()).toEqual('确定')
  })

  it('cancelText: cancel, confirm: OK', () => {
    const header = shallow(<Header cancelText='cancel' confirmText='OK' />)
    const button = header.find('button')
    expect(button).toHaveLength(2)
    expect(button.first().text()).toEqual('cancel')
    expect(button.at(1).text()).toEqual('OK')
  })
})

describe('callback test', () => {
  it('onCancel callback', () => {
    const cancelHandler = jest.fn()
    const header = shallow(<Header onCancel={cancelHandler} />)
    const button = header.find('button').at(0)
    button.simulate('click')
    expect(cancelHandler).toBeCalled()
  })

  it('onConfirm callback', () => {
    const confirmHandler = jest.fn()
    const header = shallow(<Header onConfirm={confirmHandler} />)
    const button = header.find('button').at(1)
    button.simulate('click')
    expect(confirmHandler).toBeCalled()
  })
})
