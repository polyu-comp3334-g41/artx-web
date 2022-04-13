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
        let {title,tokenId,author,description,imageUrl} = this.state.tokenInfo
        tokenId = Math.random() * 100000
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
                            <p style={{fontSize: 20}}>Artwork Name:{title}<br /></p>
                            <p style={{fontSize: 20}}><br />Token ID:{tokenId}<br /><br /></p>
                            <p>Maker:{author}<br /><br /></p>
                            <p><br />Description:{description}<br /></p>
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