import React, { Component } from 'react'
import { get } from '../../utiles/request'
import Item from '../../components/browse/Item/Item'

export default class Browse extends Component {
    state = {
        tokenInfo:[],
    }
    async componentDidMount() {
        // get all the token
        // GET /v1/artworks/
        get(`/api/v1/artworks?limit=100`)
        .then((data)=>{
            this.setState({tokenInfo:data.results})
        }).catch((error) => {
            console.log('error happen')
        })
    }
    render() {
        const {tokenInfo} = this.state
        return (
            <div>
                <div className="table-responsive" style={{border: 0, borderCollapse: 'collapse', margin: 50}}>
                    <div className="table" style={{border: 0, borderCollapse: 'collapse'}}>
                        {
                            tokenInfo.map( tokenInfo =>{
                                return <Item tokenInfo={tokenInfo}/>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
