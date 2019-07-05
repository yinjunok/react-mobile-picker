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
    loading: false,
    show: true,
    picked: [],
    changePicked: [],
    columns: [
      ['湖北', '湖南', '广州', '广西', '福建'],
      ['美国', '日本', '俄罗斯', '法国', '澳大利亚澳大利亚澳大利亚澳大利亚'],
    ],
  }

  public render() {
    const { show, columns, picked, changePicked, loading } = this.state

    return (
      <div className='demo'>
        <button onClick={this.show}>显示</button> <br />
        {
          <pre>{JSON.stringify(picked, null, 2)}</pre>
        }

        {
          <pre>{JSON.stringify(changePicked, null, 2)}</pre>
        }
        <ReactMobilePick
          show={show}
          // loading={loading}
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
      loading: true,
      changePicked,
    })
    // setTimeout(() => {
    //   this.setState({
    //     loading: true,
    //     changePicked,
    //   })

    //   setTimeout(() => {
    //     this.setState({
    //       loading: false,
    //       columns: [...this.state.columns, ['美国', '日本', '俄罗斯', '法国', '澳大利亚澳大利亚澳大利亚澳大利亚']],
    //     })
    //   }, 3000)
    // }, 3000)
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
