import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { get } from '../../../utiles/request'
import Item from '../../browse/Item/Item'

export default class MyArtwork extends Component {
    state = {
        tokenInfo:[]
    }
    //get all my tokeninfo
    async componentDidMount() {
        // same as browse
        // get with filters
        //get currentUser
        let userAddr = ""
        await get(`/api/v1/auth/user`)
        .then((data) => {
            userAddr = data.user.addr
        })
        // get all the token
        // GET /v1/artworks/
        get(`/api/v1/artworks?author=${userAddr}`)
        .then((data)=>{
            this.setState({tokenInfo:data.results})
        }).catch((error) => {
            console.log('error happen')
        })
    }
    render() {
        const {tokenInfo} = this.state
        return (
            <div>
                <div className="container">
                <div className="row">
                <div className="col-md-12" border="none" style={{borderStyle: 'hidden', borderColor: 'var(--bs-light)', bsLight: '#f8f9fa', bsLightRgb: '248,249,250'}}>
                    <p style={{color: 'var(--bs-gray-100)', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>My Artworks</p>
                </div>
                </div>
                </div>
                <Link className="btn btn-primary" role='button' style={{margin: 30}} to="/main/uploadArt">Upload Artworks</Link>
                <div className="table-responsive" style={{border: 0, borderCollapse: 'collapse', margin: 50}}>
                    <div className="table" style={{border: 0, borderCollapse: 'collapse'}}>
                        {
                            tokenInfo.map( tokenInfo =>{
                                return <Item tokenInfo={tokenInfo}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
