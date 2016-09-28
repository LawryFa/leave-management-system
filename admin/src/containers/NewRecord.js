import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import NewRecordForm from '../components/NewRecord'

class NewRecord extends Component {
  render() {
    const { message, isAuthenticated, isFetching } = this.props
    return (
      <div className="NewRecord">
        {isAuthenticated &&
          <NewRecordForm
          isFetching={isFetching}
          message={message}
          />
        }
        {!isAuthenticated &&
          browserHistory.push('/')
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { adminAuth } = state
  const { isAuthenticated, isFetching, message, auth_info } = adminAuth

  return {
    message,
    isAuthenticated,
    isFetching,
    auth_info
  }
}

export default connect(mapStateToProps)(NewRecord)
