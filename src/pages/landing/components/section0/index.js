import React from 'react'
import styles from './styles.pcss'
import Signup from './signup'

export default () => (
  <section id='section0' className={styles.section0}>
    <div className='container'>
      <div className='row'>
        <div className={'col-md-7 ' + styles.title}>
          <h2 className='text-center'>Sqdron Solutions</h2>
          <span className='text-center'>Software Development</span>
        </div>
        <Signup/>
      </div>
    </div>
  </section>
)
