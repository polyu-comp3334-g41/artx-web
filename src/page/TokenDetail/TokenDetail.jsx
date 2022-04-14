import React, { Component } from 'react'
import {useLocation} from 'react-router-dom';
import { get } from '../../utiles/request'

class MyComponent extends Component {
    state = {
        tokenInfo:{}
    }
    async componentDidMount() {
        const {id} = this.props.location.state
        //get tokenInfo by id
        await get(`/api/v1/artworks/${id}`)
        .then((data) => {
            this.setState({tokenInfo:data})
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        let {title,_id, tokenId, author,description,imageUrl} = this.state.tokenInfo
        return (
            <div>
                <div className="table-responsive" style={{border: 0, borderCollapse: 'collapse', margin: 50}}>
                    <table className="table" align="center;">
                    <thead>
                        <tr />
                    </thead>
                    <tbody style={{border: 0, borderCollapse: 'collapse'}}>
                        <tr>
                        <td align="center;" width="55%;" style={{border: 0, borderCollapse: 'collapse'}}><img alt='' className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded" src={imageUrl} style={{height: 450}} /></td>
                        <td align="center;" width="45%;" style={{border: 0, borderCollapse: 'collapse'}}>
                            <div className="bg-faded p-5 rounded" style={{height: 450, lineHeight: 30, fontSize: 20}}>
                            <h1 style={{fontSize: 20}}><b>{title}</b><br /></h1>
                            <p style={{fontSize: 15}}>{description}<br /><br /></p>
                            <h6 style={{fontSize: 10}}>ID: {_id}<br /></h6>
                            <h6 style={{fontSize: 10}}>Token ID: {tokenId}<br /></h6>
                            <h6 style={{fontSize: 10}}>Owner: {author}<br /></h6>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

function TokenDetail(props) {
    let location = useLocation();
    return <MyComponent {...props} location={location}/>
}

export default TokenDetail