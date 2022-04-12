import React, { Component } from 'react'

export default class Notification extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12" border="none" style={{borderStyle: 'hidden', borderColor: 'var(--bs-light)', bsLight: '#f8f9fa', bsLightRgb: '248,249,250'}}>
                        <p style={{color: 'var(--bs-gray-100)', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Notification</p>
                    </div>
                    </div>
                </div>
                <div className="table-responsive" style={{margin: 40}}>
                    <table className="table" style={{border: 0, borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                        <th style={{color: 'var(--bs-white)'}}>My Swap Proposal</th>
                        <th style={{color: 'var(--bs-white)'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</th>
                        <th style={{color: 'var(--bs-white)'}}>Make Swap&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody style={{border: 0, borderCollapse: 'collapse'}}>
                        <tr style={{border: 0, borderCollapse: 'collapse'}}>
                        <td style={{color: 'var(--bs-warning)'}} onclick="document.location='description.html'">&nbsp;Maker Token</td>
                        <td style={{color: 'var(--bs-warning)'}} onclick="document.location='description.html'">Taker Token</td>
                        <td style={{color: 'var(--bs-warning)'}}><button className="btn btn-primary" type="button">Cancel Swap</button></td>
                        </tr>
                        <tr>
                        <td style={{color: 'var(--bs-warning)'}} onclick="document.location='description.html'">&nbsp;Maker Token</td>
                        <td style={{color: 'var(--bs-warning)'}} onclick="document.location='description.html'">Taker Token</td>
                        <td style={{color: 'var(--bs-warning)'}}><button className="btn btn-primary" type="button">Cancel Swap</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="table-responsive" style={{margin: 40}}>
                    <table className="table">
                    <thead>
                        <tr>
                        <th style={{color: 'var(--bs-white)'}}>Swapped With Me</th>
                        <th style={{color: 'var(--bs-white)'}}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</th>
                        <th style={{color: 'var(--bs-white)'}}>Make Swap</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td style={{color: 'var(--bs-warning)'}} onclick="document.location='description.html'">Maker Token</td>
                        <td style={{color: 'var(--bs-warning)'}} onclick="document.location='description.html'">Taker Token</td>
                        <td style={{color: 'var(--bs-warning)'}}><button className="btn btn-primary" type="button">Accept</button><button className="btn btn-primary" type="button" style={{marginLeft: 30}}>Reject</button></td>
                        </tr>
                        <tr>
                        <td style={{color: 'var(--bs-warning)'}} onclick="document.location='description.html'">Maker Token</td>
                        <td style={{color: 'var(--bs-warning)'}} onclick>Taker Token</td>
                        <td style={{color: 'var(--bs-warning)'}}><button className="btn btn-primary" type="button">Accept</button><button className="btn btn-primary" type="button" style={{marginLeft: 30}}>Reject</button></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
