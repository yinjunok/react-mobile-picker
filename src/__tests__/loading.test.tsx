import * as React from 'react'
import renderer from 'react-test-renderer'
import Loading from '../Loading'

describe('snapshot', () => {
  it('snapshot', () => {
    const loading = renderer.create(<Loading />).toJSON()
    expect(loading).toMatchSnapshot()
  })
})
