import React, { Component } from 'react'
import MyArtwork from '../../components/me/MyArtwork/MyArtwork'
import Notification from '../../components/me/Notification/Notification'

export default class Me extends Component {
    render() {
        return (
            <div>
                <MyArtwork/>
                <Notification/>
            </div>
        )
    }
}
