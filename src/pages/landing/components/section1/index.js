import React from 'react'
import styles from './styles.pcss'

// 'container-fluid container-fullw bg-white'
export default () => (
  <section id='section1' className={styles.section1}>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <h2 className='text-center'>Why Choose Us?</h2>
        </div>
        <div className='col-md-4'>
          <h4 className='over-title margin-bottom-15'>Advanced Tools and <span className='text-bold'>Software</span>
          </h4>
          <p>
            Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats
            vitaes nemo minima rerums unsers sadips amets.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className='col-md-4'>
          <h4 className='over-title margin-bottom-15'>Exclusive Industry <span className='text-bold'>Knowledge</span>
          </h4>
          <p>
            Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats
            vitaes nemo minima rerums unsers sadips amets.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className='col-md-4'>
          <h4 className='over-title margin-bottom-15'>Cost <span className='text-bold'>Benefit</span></h4>
          <p>
            Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats
            vitaes nemo minima rerums unsers sadips amets.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </div>
    </div>
  </section>
)
