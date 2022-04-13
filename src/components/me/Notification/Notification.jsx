import React, { Component } from 'react'
import {useNavigate } from 'react-router-dom';

class MyComponent extends Component {
    state = {
        mySwapProposal:[],
        swapWithMe:[]
    }

    componentDidMount() {
        //get my swap proposal and who want to swap with me
    }

    //Index is the index of the target swap proposal
    showDetail = (index) => {
        //get tokenId
        const tokenId = ''
        this.props.navigate(`/main/detail`, { state: { tokenId: tokenId}});
    }

    //create the mySwapProposal data showing in the table
    createShowMyProposal() {
        const {mySwapProposal} = this.props
        let showingRow = []
        for(var i=0; i < mySwapProposal.length; i++) {
            let index = i
            showingRow.push(
                <tr key={index}>
                    {/*show my propoal data */}
                    <td style={{color: 'var(--bs-warning)'}}><div role='button' onClick={()=>this.showDetail(index)}>&nbsp;Maker Token</div></td>
                    <td style={{color: 'var(--bs-warning)'}}><div role='button' onClick={()=>this.showDetail(index)}>Taker Token</div></td>
                    <td style={{color: 'var(--bs-warning)'}}><button className="btn btn-primary" type="button" onClick={() => this.cancelSwap(index)}>Cancel Swap</button></td>
                </tr>
            )
            
        }
        return showingRow
    }

    //create the  SwapWithMe data showing in the table
    createShowSwapWithMe() {
        const {swapWithMe} = this.props
        let showingRow = []
        for(var i=0; i < swapWithMe.length; i++) {
            let index = i
            showingRow.push(
                <tr key={index}>
                    {/*show swap with me data */}
                    <td style={{color: 'var(--bs-warning)'}}><div role='button' onClick={()=>this.showDetail(index)}>&nbsp;Maker Token</div></td>
                    <td style={{color: 'var(--bs-warning)'}}><div role='button' onClick={()=>this.showDetail(index)}>Taker Token</div></td>
                    <td style={{color: 'var(--bs-warning)'}}>
                        <button className="btn btn-primary" type="button" onClick={() => this.accept(index)}>Accept</button>
                        <button className="btn btn-primary" type="button" style={{marginLeft: 30}} onClick={() => this.reject(index)}>Reject</button>
                    </td>
                </tr>
            )
            
        }
        return showingRow
    }

    //Cancle the my swap proposal. Index is the index of the target swap proposal
    cancelSwap = (index) => {
        const {mySwapProposal} = this.state
        //delete the proposal in local
        let newProposal = []
        for(let i = 0; i < mySwapProposal.length;i++) {
            if(i !== index) {
                newProposal.push(mySwapProposal[i])
            }
        }
        this.setState({mySwapProposal:newProposal})
    }

    //Accept the proposal.Index is the index of the target proposal
    accept = (index) => {
        const {swapWithMe} = this.state
        //delete the proposal in local
        let newProposal = []
        for(let i = 0; i < swapWithMe.length;i++) {
            if(i !== index) {
                newProposal.push(swapWithMe[i])
            }
        }
        this.setState({swapWithMe:newProposal})
    }

    //reject the proposal.Index is the index of the target proposal
    reject = (index) => {
        const {swapWithMe} = this.state
        //delete the proposal in local
        let newProposal = []
        for(let i = 0; i < swapWithMe.length;i++) {
            if(i !== index) {
                newProposal.push(swapWithMe[i])
            }
        }
        this.setState({swapWithMe:newProposal})
    }

    render() {
        const showingMyProposal = this.createShowMyProposal.bind(this)()
        const showingSwapWithMe = this.createShowSwapWithMe.bind(this)()
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
                        {showingMyProposal}
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