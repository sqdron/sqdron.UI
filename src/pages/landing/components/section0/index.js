import React from 'react'
import styles from './styles.pcss'
import Signup from './signup'

export default () => (
  <div id='section-0' className={styles.section0}>
    <div className='landing-content slide-1'>
      <div className='carousel'>
        <div className='container '>
          <div className='row'>
            <div className='col-md-7'>
              <div className='caption'>
                <h1 className='text-white text-bold'>
                  Sqdron
                  <br/>
                  Build & Deploy
                  <br/>
                  Scalable Micro Services
                </h1>
                <p className='text-white'>
                  Any cloud, Any Host, no more limits for cluster size
                </p>
              </div>
            </div>
            <Signup/>
          </div>
        </div>
      </div>
    </div>
  </div>
)
