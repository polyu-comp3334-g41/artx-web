import React, { Component } from 'react'
import {Route,Navigate, Routes} from 'react-router-dom'
import Browse from './page/Browse/Browse'
import Home from './page/Home/Home'
import Main from './page/Main/Main'
import Me from './page/Me/Me'
import Swap from './page/Swap/Swap'
import TokenDetail from './page/TokenDetail/TokenDetail'
import UploadArt from './page/UploadArt/UploadArt'

export default class App extends Component {
    render() {
        return(
            <div>
                <Routes>
                  <Route path="main" element={<Main/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="swap" element={<Swap/>}/>
                    <Route path="browse" element={<Browse/>}/>
                    <Route path="detail" element={<TokenDetail/>}/>
                    <Route path="me" element={<Me/>}/>
                    <Route path="uploadArt" element={<UploadArt/>}/>
                    <Route path="" element = {<Navigate to="home" />} /> 
                  </Route>
                  <Route path="*" element = {<Navigate to="main" />} /> 
                </Routes>
            </div>
        )
    }
}
