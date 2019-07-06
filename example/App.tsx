import * as React from 'react'
// import { setConfig } from 'react-hot-loader'
// import { hot } from 'react-hot-loader/root'
import './sty.less'
import ReactMobilePick from '../src/index'

// setConfig({
//   ignoreSFC: true, // RHL will be __completely__ disabled for SFC
//   pureRender: true, // RHL will not change render method
//   reloadHooks: false,
// })

class App extends React.Component {
  public state = {
    show: false,
    picked: [],
    changePicked: [],
    columns: [
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
    ],
  }

  public render() {
    const { show, columns, picked, changePicked } = this.state

    return (
      <div className='demo'>
        <button onClick={this.show}>显示</button> <br />
        <p>onConfirm: </p>
        {
          <pre>{JSON.stringify(picked, null, 2)}</pre>
        }
        <p>onChange: </p>
        {
          <pre>{JSON.stringify(changePicked, null, 2)}</pre>
        }
        <ReactMobilePick
          show={show}
          columns={columns}
          onCancel={this.hide}
          onConfirm={this.confirm}
          onChange={this.onChange}
        />
      </div>
    )
  }

  private onChange = (changePicked) => {
    this.setState({
      changePicked,
    })
  }

  private hide = () => {
    this.setState({
      show: false,
    })
  }

  private show = () => {
    this.setState({
      show: !this.state.show,
    })
  }

  private confirm = (picked) => {
    this.setState({
      picked,
      show: false,
    })
  }
}

export default App
