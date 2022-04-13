import React, { Component } from 'react'
import {get,post} from '../../utiles/request'

export default class Swap extends Component {
    state = {
        makerTokenId:"",
        takerTokenId:"",
        makerTokenImage:"",
        takerTokenImage:""
    }

    saveMakerId = async (event) => {
        let id = event.target.value
        this.setState({makerTokenId:event.target.value})
        //get tokenInfo by id
        await get(`/api/v1/artworks/${id}`)
        .then((data) => {
            this.setState({makerTokenImage:data.imageUrl})
        }).catch((error) => {
            console.log(error)
        })
        
        // fetch data from backend

        // display pic
    }

    saveTakerId = async (event) => {
        let id = event.target.value
        this.setState({takerTokenId:event.target.value})
        //get tokenInfo by id
        await get(`/api/v1/artworks/${id}`)
        .then((data) => {
            this.setState({takerTokenImage:data.imageUrl})
        }).catch((error) => {
            console.log(error)
        })
    }

    submit = async () => {
        // Contract call

        // API call
        // POST /v1/swap-orders
        // get currentUser
        let userAddr = ""
        await get(`/api/v1/auth/user`)
        .then((data) => {
            userAddr = data.user.addr
        })
        const {makerTokenId,takerTokenId} = this.state
        post(`/api/v1/swap-orders?maker=${userAddr}`, {
            makerTokenId:makerTokenId,
            takerTokenId:takerTokenId
        })

        //   const provider = new ethers.providers.Web3Provider(window.ethereum);
        //   await provider.send("eth_requestAccounts", []);
        //   const signer = provider.getSigner();
        //   const artXContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

        // Assume logged in
        //   artXContract.connect(signer).mint("http://artx.org/test")
        //     .then(tx => console.log(tx))
    }
    
    render() {
        return (
            <div>
                <p style={{color: 'var(--bs-gray-100)', fontSize: 30}} text-align="center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Enter token ID to swap:</p>
                <div className="table-responsive">
                    <table className="table" align="center;" style={{border: 0, borderCollapse: 'collapse'}}>
                    <thead>
                        <tr />
                    </thead>
                    <tbody style={{border: 0, borderCollapse: 'collapse'}}>
                        <tr>
                            <td align="right" style={{border: 0, borderCollapse: 'collapse'}}><img alt='' src={this.state.makerTokenImage} style={{width: 500, height: 500}} /></td>
                            <td style={{border: 0, borderCollapse: 'collapse'}}><img alt='' src={this.state.takerTokenImage} style={{width: 500, height: 500}} align="left;" /></td>
                        </tr>
                        <tr>
                        <td align="right" style={{border: 0, borderCollapse: 'collapse'}}>
                            <div className="bg-faded p-5 rounded" style={{height: 100, width: 500}}>
                                <div className="form-label" style={{fontSize: 15}}>Maker Token ID: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<input type="text" onChange={this.saveMakerId}/></div>
                            </div>
                        </td>
                        <td align="left" style={{border: 0, borderCollapse: 'collapse'}}>
                            <div className="bg-faded p-5 rounded" style={{height: 100, width: 500}}>
                                <div className="form-label" style={{fontSize: 15}}>Taker Token ID: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<input type="text" onChange={this.saveTakerId}/></div>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <button className="btn btn-primary" type="button" style={{display: 'block', margin: '0 auto'}} onClick={this.submit}>Make Swap</button>
            </div>
        )
    }
}
