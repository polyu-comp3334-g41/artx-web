import React, { Component } from 'react'
import { post } from '../../utiles/request'
export default class Swap extends Component {
    state = {
        makerTokenId:"",
        takerTokenId:"",
    }

    saveMakerId = (event) => {
        this.setState({makerTokenId:event.target.value})
    }

    saveTakerId = (event) => {
        this.setState({takerTokenId:event.target.value})
    }

    submit = async () => {
        let BODY = {}
        post(`url`,BODY)
        .catch((error)=>{
            console.log("some error happen")
        })
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
                            <td align="right" style={{border: 0, borderCollapse: 'collapse'}}><img alt='' src="/assets/img/browse-1.jpg" style={{width: 500, height: 500}} /></td>
                            <td style={{border: 0, borderCollapse: 'collapse'}}><img alt='' src="/assets/img/browse-2.jpg" style={{width: 500, height: 500}} align="left;" /></td>
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