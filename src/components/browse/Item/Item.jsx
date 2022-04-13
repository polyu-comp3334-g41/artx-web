import React, { Component } from 'react'
import {useNavigate } from 'react-router-dom';

class MyComponent extends Component {
    showDetail = () => {
        //get tokenId
        const {_id} = this.props.tokenInfo
        this.props.navigate(`/main/detail`, { state: { id: _id}});
    }

    render() {
        //need get the information of a token from props
        let {imageUrl,tokenId,title} = this.props.tokenInfo
        tokenId = Math.random() * 100000
        return (
            <div>
                <div className="card" style={{background: 'var(--bs-white)',width:'32.33%', float: 'left',display:'inline',marginLeft:"1%",marginBottom:"1%"}}>
                    <img alt="" role ='button' className="card-img-top w-100 d-block" src={imageUrl} style={{height: 300, width: 100}} onClick={this.showDetail}/>
                    <div className="card-body">
                        <p className="text-white" style={{color: 'var(--bs-secondary)',bsBodyColor: 'var(--bs-secondary)', borderColor: 'var(--bs-secondary)',bsBodyBg: 'var(--bs-secondary)', opacity: 1, filter: 'brightness(0%) contrast(171%) grayscale(0%)'}}>TokenID: {tokenId}</p>
                        <p className="text-white" style={{filter: 'brightness(0%) contrast(194%)'}}>Title: {title}</p>
                    </div>
                </div>
            </div>
        )
    }
}

function Item(props) {
    let navigate = useNavigate();
    return <MyComponent {...props} navigate={navigate} />
}

export default Item
