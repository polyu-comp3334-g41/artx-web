import React, { Component } from 'react'
import {useLocation} from 'react-router-dom';

class MyComponent extends Component {
    componentDidMount() {
        const {tokenId} = this.props.location.state
        //get tokenInfo by tokenId
    }
    render() {
        return (
            <div>
                <div className="table-responsive" style={{border: 0, borderCollapse: 'collapse', margin: 50}}>
                    <table className="table" align="center;">
                    <thead>
                        <tr />
                    </thead>
                    <tbody style={{border: 0, borderCollapse: 'collapse'}}>
                        <tr>
                        <td align="center;" width="55%;" style={{border: 0, borderCollapse: 'collapse'}}><img alt='' className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded" src="assets/img/browse-1.jpg" style={{height: 450}} /></td>
                        <td align="center;" width="45%;" style={{border: 0, borderCollapse: 'collapse'}}>
                            <div className="bg-faded p-5 rounded" style={{height: 450, lineHeight: 30, fontSize: 20}}>
                            <p style={{fontSize: 20}}>Artwork Name:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;...<br /></p>
                            <p style={{fontSize: 20}}><br />Token ID:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...&nbsp; &nbsp; &nbsp;<br /><br /></p>
                            <p>Maker:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...<br /><br /></p>
                            <p style={{fontSize: 20}}>Create Time:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;...</p>
                            <p />
                            <p><br />Description:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...&nbsp; &nbsp; &nbsp;<br /></p>
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