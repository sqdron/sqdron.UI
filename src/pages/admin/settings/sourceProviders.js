import React from 'react'
import { connect } from 'react-redux'

import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'

import githubReducer from './api/github.reducers'
import * as A from './api/github.actions'

const styles = {
  width   : '100%',
  margin  : '20px 0',
  padding : 10,
  button  : {
    margin : 12
  },
  exampleImageInput : {
    cursor   : 'pointer',
    position : 'absolute',
    top      : 0,
    bottom   : 0,
    right    : 0,
    left     : 0,
    width    : '100%',
    opacity  : 0
  }
}

class SourceProviders extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.context.store.addReducer(githubReducer)
  }

  handleClick () {
    console.log(this.props)
    this.props.dispatch(A.GithubSignin({}))
        // .then(this.props.next)
        // .catch(() => {})
  }

  render() {
    return (
      <Paper style={styles} zDepth={1}>
        <RaisedButton
          label='Add Github'
          primary
          style={styles.button}
          onClick={this.handleClick.bind(this)}
          icon={<FontIcon className='fa fa-github'/>}/>
        <RaisedButton
          label='Add Bitbucket'
          primary
          style={styles.button}
          icon={<FontIcon className='fa fa-bitbucket'/>}/>
      </Paper>
    )
  }
}

SourceProviders.contextTypes = {
  store : React.PropTypes.object.isRequired
}

export default connect(({ auth }) => ({ auth }))(SourceProviders)
