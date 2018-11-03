import React from 'react'

export class Listing extends React.Component{
    render(){
        let list1
        let list2;
        let list3;
        let list4;
        let list5;

        if(this.props.listingPointOne != null){
            list1 = <li>{this.props.listingPointOne}</li>
        }
        else {
            list1 = <div></div>
        }

        if(this.props.listingPointThree != null){
            list2 = <li>{this.props.listingPointTwo}</li>
        }
        else {
            list2 = <div></div>
        }

        if(this.props.listingPointThree != null){
            list3 = <li>{this.props.listingPointThree}</li>
        }
        else {
            list3 = <div></div>
        }
        if(this.props.listingPointFour != null){
            list4 = <li>{this.props.listingPointFour}</li>
        }
        else {
            list4 = <div></div>
        }
        if(this.props.listingPointFive != null){
            list5 = <li>{this.props.listingPointFive}</li>
        }
        else {
            list5 = <div></div>
        }
        return( 
        <div class= "listing">
            <div class= "grid-container">
                <div class= "grid-x">
                    <h3 class= "cell small-12 heading">{this.props.heading}</h3>
                    <ul class= "cell small-12 bullets">
                        {list1}
                        {list2}
                        {list3}
                        {list4}
                        {list5}
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}