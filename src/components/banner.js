import React from 'react'

export default class Banner extends React.Component {

    render(){
        return(
            <div class= "grid-x">
                <div class= "cell small-12 banner">
                    <div class= "grid-container">
                    <p class="banner-text">{this.props.bannerText}</p>
                    </div>
                </div>
            </div>
        )
    }
}
