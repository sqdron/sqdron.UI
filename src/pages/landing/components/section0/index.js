import React from 'react'
import styles from './styles.css'
import Signup from './signup'

export default () => (
  <section id='section0' className={styles.section_0}>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <h2 className='text-center'>Sqdron Solutions</h2>
        </div>
        <div className='col-md-6'>
          <Signup/>
        </div>
      </div>
    </div>
  </section>
)
