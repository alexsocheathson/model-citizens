import React from 'react'

import Banner from '../components/banner.js'

import Graph from '../images/sample.png'

export class Caption extends React.Component {
    render(){
        return(
            <div class="caption">
            <Banner bannerText = {this.props.bannerText} />
                <div class= "grid-container">
                    <div class= "grid-x">
                        <h3 class="cell small-12 heading">{this.props.heading}</h3>
                        <img src= {Graph} alt= "graph"/>
                        <p class="cell small-12 text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}