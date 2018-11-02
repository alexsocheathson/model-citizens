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
          listingPointOne = "We predict 54.7% voter turnout for all of Minnesota "
          listingPointTwo = {null}
          listingPointThree = {null}
        />
        <div class= "grid-container" style= {{padding: "0px 40px 0px 40px"}}>
          <div class= "grid-x">
            <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~son3/33.embed"></iframe>
            <iframe width="900" height="450" frameborder="0" scrolling="no" src="//plot.ly/~son3/35.embed"></iframe>
          </div>
        </div>
        <Banner bannerText= "Most Important Predictors" />
        <div class= "grid-container" style= {{padding: "0px 40px 0px 40px"}}>
          <div class= "grid-x">
            <img class= "cell small-12" src='https://firebasestorage.googleapis.com/v0/b/model-citizens.appspot.com/o/Rplot01.png?alt=media&token=5ca12e6a-5c18-4e70-83bb-9badc8eeb023' alt = "plot"/>
            <div class= "cell small-6">
              <iframe width="350" height="500" frameborder="0" scrolling="no" src="//plot.ly/~welsh1/1.embed"></iframe>
            </div>
            <div class= "cell small-6">
              <iframe width="350" height="500" frameborder="0" scrolling="no" src="//plot.ly/~welsh1/3.embed"></iframe>
            </div>
            <div class= "cell small-6">
              <iframe width="350" height="500" frameborder="0" scrolling="no" src="//plot.ly/~welsh1/5.embed"></iframe>
            </div>
            <div class= "cell small-6">
              <iframe width="350" height="500" frameborder="0" scrolling="no" src="//plot.ly/~welsh1/7.embed"></iframe>
            </div>
          </div>
        </div>
        <Detail
        bannerText = "Methods"
        heading = "Twitter API"
        bulletOne = "Used Twitter’s APIs to gather Tweets from the profiles of candidates from MN running for office during the 2012, 2014, 2016 and 2018 elections"
        bulletTwo = "Collected the content of the Tweets, number of favorites and number of retweets in order to identify recurring topics and to gauge the public’s engagement with the candidate’s message"
        bulletThree = "We utilized a Natural Language Processing package called TextBlob to gather parts of speech and perform sentiment analysis on the Tweets’ content The Twitter data was not a significant predictor for voter turnout, but we believe that it (on a larger scale) could be more relevant in predicting the outcome of the election"
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
          listingPointThree = "Twitter API for all Twitter data. OpenSecrets.org for the candidate fundraising data. Minnesota State Demographic Center for the economic data"
        />
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
