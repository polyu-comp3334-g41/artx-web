import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UploadArt extends Component {
    state ={
        artworkName:'',
        makerName:'',
        description:'',
        imageUrl:'',
    }

    saveDescription = (event) => {
        this.setState({description:event.target.value})
    }

    saveMakerName = (event) => {
        this.setState({makerName:event.target.value})
    }

    saveArtworkName = (event) => {
        this.setState({artworkName:event.target.value})
    }
    
    saveImage = (event) => {
        //save the file path
        this.setState({imageUrl:event.target.value})
    }

    handleSubmit = (event) => {
        // POST /v1/artworks
        // fetch author address from eth provider

        // Contract call

        // Update token id
        // PATCH /v1/artworks/{id}
    }

    reset = () => {
        this.setState({description:"",artworkName:"",makerName:"",imageUrl:""})
    }
    render() {
        return (
            <div>
                <div className="m-5">
                    <div id="backdrop" className="backdrop backdrop-transition backdrop-dark">
                    <div className="text-center w-100" style={{position: 'absolute', top: '50%'}}>
                        <div className="bg-light border rounded border-success shadow-lg m-auto" style={{width: 150, height: 150}}><i className="fa fa-upload d-block p-4" style={{fontSize: 50}} /><span>Drop file to attach</span></div>
                    </div>
                    </div>
                    <div className="bg-light border rounded border-light pt-1 jumbotron py-5 px-4">
                    <div className="alert alert-success invisible mt-5" role="alert"><span id="notify" /></div>
                    <div className="table-responsive">
                        <table className="table">
                        <thead>
                            <tr>
                            <th>Information</th>
                            <th style={{textAlign: 'left', fontSize: 16}}>Please fill in the blanks...</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Image Url</td>
                            <td><input type="text" style={{width: 200}} onChange={this.saveImage} value={this.state.imageUrl}/></td>
                            </tr>
                            <tr>
                            <td>Author Address</td>
                            <td><input type="text" style={{width: 200}} onChange={this.saveMakerName} value={this.state.makerName}/></td>
                            </tr>
                            <tr>
                            <td>Artwork Name</td>
                            <td><input type="text" style={{width: 200}} onChange={this.saveArtworkName} value={this.state.artworkName}/></td>
                            </tr>
                            <tr>
                            <td>Description</td>
                            <td><input type="text" style={{height: 100, width: 300}} id="description" onChange={this.saveDescription} value={this.state.description}/></td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <form action encType="multipart/form-data">
                        <button className="btn btn-outline-primary d-block w-100" type="button" onClick={this.handleSubmit}>Submit</button>
                        <button className="btn btn-danger mt-5" type="reset" onClick={this.reset}>Reset</button>
                    </form>
                    </div>
                    <div className="text-center bg-light border rounded border-dark shadow-lg p-3">
                    <div className="row">
                        <div className="col"><small className="form-text">The Artwork is shown below:</small></div>
                    </div>
                    <div><img alt='' id="image_preview" width={100} /></div><Link role='button' className="btn btn-warning btn-sm m-3" to='/main/me'>Close</Link>
                    </div>
                </div>
            </div>

        )
    }
}
