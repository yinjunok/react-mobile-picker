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
  public render() {
    return (
      <div className='demo'>
        <ReactMobilePick />
      </div>
    )
  }
}

export default App
// export default App;
