import React, { Component } from 'react'

import { Landing } from '../sections/landing'
import { Listing } from '../sections/listing'
import { Caption } from '../sections/caption'
import { Mega } from '../sections/mega'
import { Detail } from '../sections/detail'
import { Footer } from '../sections/footer'

import Banner from '../components/banner.js'

import AOS from 'aos';

import '../styles.css'
import '../sass/vendor/animate.min.css'

class IndexPage extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    AOS.init({
      duration: 2300,
    })
  }
  render() {
    return(
      <div>
        <Landing />
        <Listing
          heading = "Predictions"
          listingPointOne = "We predict 54.7% voter turnout for all of Minnesota"
          listingPointTwo = {null}
          listingPointThree = {null}
        />
        <div class= "grid-container" style= {{padding: "0px 40px 0px 40px"}}>
          <div class= "grid-x">
            <iframe width="900" height="600" frameborder="0" scrolling="no" src="//plot.ly/~son3/33.embed"></iframe>
            <iframe width="900" height="450" frameborder="0" scrolling="no" src="//plot.ly/~son3/35.embed?link=false&logo=false"></iframe>
          </div>
        </div>
        <Banner bannerText= "Most Important Predictors" />
        <div class= "grid-container" style= {{padding: "0px 40px 0px 40px"}}>
          <div class= "grid-x">
            <img class= "cell small-12" src='https://firebasestorage.googleapis.com/v0/b/model-citizens.appspot.com/o/Rplot01.png?alt=media&token=5ca12e6a-5c18-4e70-83bb-9badc8eeb023' alt = "plot"/>
            <div class= "cell small-6">
              <iframe width="350" height="500" frameborder="0" scrolling="no" src="//plot.ly/~welsh1/1.embed?link=false&logo=false"></iframe>
            </div>
            <div class= "cell small-6">
              <iframe width="350" height="500" frameborder="0" scrolling="no" src="//plot.ly/~welsh1/3.embed?link=false&logo=false"></iframe>
            </div>
            <div class= "cell small-6">
              <iframe width="350" height="500" frameborder="0" scrolling="no" src="//plot.ly/~welsh1/5.embed?link=false&logo=false"></iframe>
            </div>
            <div class= "cell small-6">
              <iframe width="350" height="500" frameborder="0" scrolling="no" src="//plot.ly/~welsh1/13.embed?link=false&logo=false"></iframe>
            </div>
            <div style= {{margin: "auto"}}>
              <img  src='https://firebasestorage.googleapis.com/v0/b/model-citizens.appspot.com/o/turnout.png?alt=media&token=f5e731a0-4755-41bf-928f-84a44c074246' alt = "plot" width="392px" height = '90px'/>
            </div>
            <div class = "cell small-12">
              <iframe width="700" height="650" frameborder="0" scrolling="no" src="//plot.ly/~welsh1/11.embed?link=false&logo=false"></iframe>
            </div>

          </div>
        </div>
        <Detail
        bannerText = "Methods"
        heading = "Twitter API"
        bulletOne = "Used Twitter’s APIs to gather Tweets from the profiles of candidates from MN running for office during the 2012, 2014, 2016 and 2018 elections"
        bulletTwo = "Collected metrics and utilized natural language processing and sentiment analysis on the Tweets’ content"
        />
        <Listing
          heading = "Random Forest"
          listingPointOne = "We choose to use Random Forest (the randomForest package in R)  to investigate turnout."
          listingPointTwo = "We chose Random Forest because of its overall robustness. Random Forest doesn’t have conditions and doesn't have problems with multicollinearity if given correlated explanatory variables."
          listingPointThree = "Cross Validation - We performed 100 fold cross validation using the rfUtilities package in R to examine the performance of our models."
        />
        <Banner bannerText= "Data Sources" />
        <Listing
          heading = "Where we got our data from"
          listingPointOne = "American Fact Finder for all demographic data " 
          listingPointTwo = "Minnesota Department of State for historic voter turnout data"
          listingPointThree = "Twitter API for all Twitter data."
          listingPointFour = "OpenSecrets.org for the candidate fundraising data."
          listingPointFive = "Minnesota State Demographic Center for the economic data"
        />
         <Listing
          heading = "Predictions"
          listingPointOne = "We predict 54.7% voter turnout for all of Minnesota"
          listingPointTwo = {null}
          listingPointThree = {null}
        />
        <div class= "grid-container" style= {{padding: "0px 40px 0px 40px"}}>
          <div class= "grid-x">
            <iframe width="900" height="450" frameborder="0" scrolling="no" src="//plot.ly/~son3/35.embed?link=false&logo=false"></iframe>
          </div>
        </div>
{/*       
        <Caption
        bannerText = "poop"
        heading = ""
        text = ""
        />
        <Mega
          bannerText = "poop"
          heading = "poop"
          blockTextOneTitle = 'poop'
          blockTextOneText = "poop"
          blockTextTwoTitle = "poop"
          blockTextTwoText = "poop"
          text = "poop"
          />
        <Detail
        bannerText = "poop"
        heading = "poop"
        bulletOne = "poop"
        bulletTwo = "poop"
        />
        <Listing /> */}
        <Footer />
      </div>
    )
  }
}

export default IndexPage
