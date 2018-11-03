import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

export const Landing = () => (
  <div class="landing">
    <div class= "grid-container">
      <div class= "grid-x">
        <p class= "cell small-6 headers">St. Olaf College</p>
        <div class= "cell small-6 headers">
          <p class= "header-right">MinneMUDAC 2018</p>
        </div>
        <h1 class= "cell small-12 title blink">Model Citizens</h1>
        <p class= "cell small-12 project-members">Abe Eyman Casey, Brodie Thiede, Jack Welsh</p>
        <div class= "arrow animated infinite bounce slow delay-2s">
          <FontAwesomeIcon icon={faAngleDown} size="7x" />
        </div>
      </div>
    </div>
  </div>
  )
