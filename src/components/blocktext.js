import React from 'react'

export default class BlockText extends React.Component {

    render(){
        return(
            <div class= "cell small-6 block-text">
                <p class= "block-title">{this.props.title}</p>
                <p class= "block-sub">{this.props.subtext}</p>
            </div>
        )
    }
}