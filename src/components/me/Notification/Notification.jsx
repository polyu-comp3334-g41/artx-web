import React, { Component } from 'react'
import {useNavigate } from 'react-router-dom';
import { get,del } from '../../../utiles/request';

class MyComponent extends Component {
    state = {
        mySwapProposal:[],
        swapWithMe:[],
        userAddr:""
    }

    async componentDidMount() {
        //get my swap proposal and who want to swap with me
        let userAddr = ""
        await get(`/api/v1/auth/user`)
        .then((data) => {
            userAddr = data.user.addr
            this.setState({userAddr})
        })
        //get my swap
        await get(`/api/v1/swap-orders?maker=${userAddr}&status=1`)
        .then((data) => {
            this.setState({mySwapProposal:data.results})
        })
        //get who want to swap with me
        await get(`/api/v1/swap-orders?taker=${userAddr}&status=1`)
        .then((data) => {
            this.setState({swapWithMe:data.results})
        })
    }

    //Index is the index of the target swap proposal
    showDetail = (_id) => {
        //get tokenId
        console.log(_id)
        this.props.navigate(`/main/detail`, { state: { id: _id}});
    }

    //create the mySwapProposal data showing in the table
    createShowMyProposal() {
        const {mySwapProposal} = this.state
        let showingRow = []
        for(var i=0; i < mySwapProposal.length; i++) {
            const {makerToken,takerToken} = mySwapProposal[i]
            let index = i
            showingRow.push(
                <tr key={index}>
                    {/*show my propoal data */}
                    <td style={{color: 'var(--bs-warning)'}}><div role='button' onClick={()=>this.showDetail(makerToken)}>{makerToken}</div></td>
                    <td style={{color: 'var(--bs-warning)'}}><div role='button' onClick={()=>this.showDetail(takerToken)}>{takerToken}</div></td>
                    <td style={{color: 'var(--bs-warning)'}}><button className="btn btn-primary" type="button" onClick={() => this.cancelSwap(index)}>Cancel Swap</button></td>
                </tr>
            )
            
        }
        return showingRow
    }

    //create the  SwapWithMe data showing in the table
    createShowSwapWithMe() {
        const {swapWithMe} = this.state
        let showingRow = []
        for(var i=0; i < swapWithMe.length; i++) {
            const {makerToken,takerToken} = swapWithMe[i]
            let index = i
            showingRow.push(
                <tr key={index}>
                    {/*show swap with me data */}
                    <td style={{color: 'var(--bs-warning)'}}><div role='button' onClick={()=>this.showDetail(makerToken)}>{makerToken}</div></td>
                    <td style={{color: 'var(--bs-warning)'}}><div role='button' onClick={()=>this.showDetail(takerToken)}>{takerToken}</div></td>
                    <td style={{color: 'var(--bs-warning)'}}>
                        <button className="btn btn-primary" type="button" onClick={() => this.accept(index)}>Accept</button>
                        <button className="btn btn-primary" type="button" style={{marginLeft: 30}} onClick={() => this.reject(index)}>Reject</button>
                    </td>
                </tr>
            )
            
        }
        return showingRow
    }

    //Cancel the my swap proposal. Index is the index of the target swap proposal
    cancelSwap = (index) => {
        // Contract call

        // API call
        // DELETE /v1/swap-orders
        const {mySwapProposal} = this.state
        const {_id} = mySwapProposal[index]
        del(`/api/v1/swap-orders/${_id}?action=cancel&user=${this.state.userAddr}`)
        .then((data) => {
            //delete the proposal in local
            let newProposal = []
            for(let i = 0; i < mySwapProposal.length;i++) {
                if(i !== index) {
                    newProposal.push(mySwapProposal[i])
                }
            }
            this.setState({mySwapProposal:newProposal})
        })
    }

    //Accept the proposal.Index is the index of the target proposal
    accept = (index) => {
      // Contract call

      // API call
      // DELETE /v1/swap-orders
        const {swapWithMe} = this.state
        const {_id} = swapWithMe[index]
        del(`/api/v1/swap-orders/${_id}?action=close&user=${this.state.userAddr}`)
        .then((data) => {
            //delete the proposal in local
            let newProposal = [];
            for (let i = 0; i < swapWithMe.length; i++) {
                if (i !== index) {
                newProposal.push(swapWithMe[i]);
                }
            }
            this.setState({ swapWithMe: newProposal });
        })
    }

    //reject the proposal.Index is the index of the target proposal
    reject = (index) => {
      // Contract call

      // API call
      // DELETE /v1/swap-orders
      
        const {swapWithMe} = this.state
        const {_id} = swapWithMe[index]
        del(`/api/v1/swap-orders/${_id}?action=cancel&user=${this.state.userAddr}`)
        .then((data) => {
            //delete the proposal in local
            let newProposal = [];
            for (let i = 0; i < swapWithMe.length; i++) {
                if (i !== index) {
                newProposal.push(swapWithMe[i]);
                }
            }
            this.setState({ swapWithMe: newProposal });
        })
    }

    render() {
        const showingMyProposal = this.createShowMyProposal.bind(this)()
        const showingSwapWithMe = this.createShowSwapWithMe.bind(this)()
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12" border="none" style={{borderStyle: 'hidden', borderColor: 'var(--bs-light)', bsLight: '#f8f9fa', bsLightRgb: '248,249,250'}}>
                        <p style={{color: 'var(--bs-gray-100)', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>My Swap Proposal</p>
                    </div>
                    </div>
                </div>
                <div className="table-responsive" style={{margin: 40}}>
                    <table className="table" style={{border: 0, borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                        <th style={{color: 'var(--bs-white)'}}>Maker Token</th>
                        <th style={{color: 'var(--bs-white)'}}>Taker Token</th>
                        <th style={{color: 'var(--bs-white)'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody style={{border: 0, borderCollapse: 'collapse'}}>
                        {showingMyProposal}
                    </tbody>
                    </table>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12" border="none" style={{borderStyle: 'hidden', borderColor: 'var(--bs-light)', bsLight: '#f8f9fa', bsLightRgb: '248,249,250'}}>
                        <p style={{color: 'var(--bs-gray-100)', fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>Swap With Me</p>
                    </div>
                    </div>
                </div>
                <div className="table-responsive" style={{margin: 40}}>
                    <table className="table">
                    <thead>
                        <tr>
                        <th style={{color: 'var(--bs-white)'}}>Maker Token</th>
                        <th style={{color: 'var(--bs-white)'}}>Taker Token</th>
                        <th style={{color: 'var(--bs-white)'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showingSwapWithMe}
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function Notification(props) {
    let navigate = useNavigate();
    return <MyComponent {...props} navigate={navigate} />
}

export default Notification