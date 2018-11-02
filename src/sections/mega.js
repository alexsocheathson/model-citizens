import React from 'react'

import Banner from '../components/banner.js'
import BlockText from '../components/blocktext.js'

import Graph from '../images/sample.png'

export class Mega extends React.Component{
    render(){
        return(
            <div class= "mega">
            <Banner bannerText= {this.props.bannerText} />
                <div class= "grid-container">
                    <div class= "grid-x">
                        <p class= "cell small-12 heading">{this.props.heading}</p>
                        <img class= "cell small-12" src= {Graph} alt= "graph" />
                        <BlockText title= {this.props.blockTextOneTitle} subtext= {this.props.blockTextOneText} />
                        <BlockText title= {this.props.blockTextTwoTitle} subtext= {this.props.blockTextTwoText} />
                        <p class= "cell small-12 text">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}