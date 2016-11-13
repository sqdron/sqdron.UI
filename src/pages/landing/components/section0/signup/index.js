import React from 'react'
import TextInput from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
// import * as Colors from 'material-ui/styles/colors'
import { white, orange200, lightBlue500 } from 'material-ui/styles/colors'
import styles from './styles.pcss'

const mStyles = {
  underlineStyle : {
    borderColor : white
  },
  underlineFocusStyle : {
    borderColor : orange200
  },
  floatingLabelStyle : {
    color : white
  },
  floatingLabelFocusStyle : {
    color : orange200
  }
}

const inputStyle = {
  color : white
}

const buttonStyle = {
  width : 150,
  height : 40
}

export default () => (
  <div className={'col-md-5 ' + styles.signup}>
    <form>
      <div className={styles.row}>
        <TextInput floatingLabelText='Email' fullWidth className='col-xs-12'
          underlineStyle={mStyles.underlineStyle}
          underlineFocusStyle={mStyles.underlineFocusStyle}
          floatingLabelStyle={mStyles.floatingLabelStyle}
          floatingLabelFocusStyle={mStyles.floatingLabelFocusStyle}
          type='email' inputStyle={inputStyle}/>
        <RaisedButton label='Let`s try'
          backgroundColor={white}
          labelColor={lightBlue500}
          style={buttonStyle}/>
      </div>
    </form>
  </div>
)
