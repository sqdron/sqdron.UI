import React from 'react'
import TextInput from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './styles.pcss'

export default () => (
  <div className={'col-md-5 ' + styles.signup}>
    <form>
      <div className={styles.row} >
        <TextInput floatingLabelText='Sqdron ID' fullWidth className='col-xs-12'/>
        <TextInput floatingLabelText='Email' fullWidth className='col-xs-12'/>
        <RaisedButton label='Sign UP'/>
      </div>
    </form>
  </div>
)
