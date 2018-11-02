import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Banner extends React.Component {
    componentDidMount(){
        AOS.init({
          duration : 2300
        })
      }

    render(){
        return(
            <div class= "grid-x">
                <div data-aos="slide-up" data-aos-duration="1500" class= "cell small-12 banner">
                    <div class= "grid-container">
                    <p data-aos="slide-up"class="banner-text">{this.props.bannerText}</p>
                    </div>
                </div>
            </div>
        )
    }
}
