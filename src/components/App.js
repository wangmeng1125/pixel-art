import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Nav from './Nav'
import DraggablePanel from './DraggablePanel'
import PixelCanvasContainer from './PixelCanvasContainer'
import ToolsContainer from './ToolsContainer'
import store from '../store'
import './App.css'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <Nav />
          <ToolsContainer />
          <PixelCanvasContainer />
        </div>
      </Provider>
    )
  }
}

export default App
