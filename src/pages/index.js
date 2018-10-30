import React, { Component } from 'react'

import { Landing } from '../sections/landing'
import { Listing } from '../sections/listing'
import { Caption } from '../sections/caption'
import { Mega } from '../sections/mega'
import { Detail } from '../sections/detail'

import '../styles.css'
import '../sass/vendor/animate.min.css'

class IndexPage extends Component {
  render() {
    return(
      <div>
       <Landing />
       <Listing />
       <Caption />
       <Mega />
       <Detail/>
       <Listing />
      </div>
    )
  }
}

export default IndexPage
