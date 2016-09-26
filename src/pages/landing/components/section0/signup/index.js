import React from 'react'
import TextInput from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import * as Colors from 'material-ui/styles/colors'
import styles from './styles.pcss'

export default () => (
  <div className={'col-md-5 ' + styles.signup}>
    <form>
      <div className={styles.row} >
        <TextInput floatingLabelText='Sqdron ID' fullWidth className='col-xs-12'/>
        <TextInput floatingLabelText='Email' fullWidth className='col-xs-12'/>
        <RaisedButton label='Sign UP' backgroundColor={Colors.lightBlue200}/>
      </div>
    </form>
  </div>
)
