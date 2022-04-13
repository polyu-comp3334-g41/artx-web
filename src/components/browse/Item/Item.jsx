import React, { Component } from 'react'
import {useNavigate } from 'react-router-dom';

class MyComponent extends Component {
    showDetail = () => {
        //get tokenId
        let tokenId = ''
        this.props.navigate(`/main/detail`, { state: { tokenId: tokenId}});
    }

    render() {
        //need get the information of a token from props
        return (
            <div>
                <div className="card" onclick="document.location='description.html'" style={{background: 'var(--bs-white)',width:'32.33%', float: 'left',display:'inline',marginLeft:"1%",marginBottom:"1%"}}>
                    <img alt="" role ='button' className="card-img-top w-100 d-block" src="/assets/img/browse-1.jpg" style={{height: 300, width: 100}} onClick={this.showDetail}/>
                    <div className="card-body">
                        <p className="text-white" style={{color: 'var(--bs-secondary)',bsBodyColor: 'var(--bs-secondary)', borderColor: 'var(--bs-secondary)',bsBodyBg: 'var(--bs-secondary)', opacity: 1, filter: 'brightness(0%) contrast(171%) grayscale(0%)'}}>TokenID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;...</p>
                        <p className="text-white" style={{filter: 'brightness(0%) contrast(194%)'}}>Title&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;...</p>
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
