import React from 'react'

import { Blog, Feature, Footer, Header, Possibility, WhatGPT3 } from './container'
import { Cta, Brand, Navbar } from './components'

import './App.css';
import './index.css';
import Features from './container/features/Features';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
    </div>
  )
}

export default App