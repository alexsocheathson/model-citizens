import React from 'react'

import Banner from '../components/banner.js'

export class Detail extends React.Component{
    render(){
        return(
            <div class= "detail">
                <Banner bannerText = {this.props.bannerText} />
                <div class= "grid-container">
                    <div class= "grid-x">
                        <h3 class= "cell small-12 heading">{this.props.heading}</h3>
                        {/* <img src= {Graph} alt= "graph" /> */}
                        <div class="cell small-12">
                            {/* <iframe width="50%" frameborder="0" scrolling="no" src="//plot.ly/~son3/7.embed"></iframe> */}
                        </div>
                        <ul class= "cell small-12 bullets">
                            <li>{this.props.bulletOne}</li>
                            <li>{this.props.bulletTwo}</li>
                            <li>{this.props.bulletThree}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}