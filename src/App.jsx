import React, { Component } from 'react'
import {Route,Navigate, Routes} from 'react-router-dom'
import Home from './page/Home/Home'
import Main from './page/Main/Main'
import Swap from './page/Swap/Swap'

export default class App extends Component {
    render() {
        return(
            <div>
                <Routes>
                  <Route path="main" element={<Main/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="swap" element={<Swap/>}/>
                    <Route path="" element = {<Navigate to="home" />} /> 
                  </Route>
                  <Route path="*" element = {<Navigate to="main" />} /> 
                </Routes>
            </div>
        )
    }
}
