import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchRepos, fetchUsers } from '@/src/actions'
import RepoListElement from '@/src/components/RepoListElement'
import UserInfo from '@/src/components/UserInfo'

class App extends Component {
  onInputChange = () => event => {
    this.props.fetchRepos(event.target.value);
    this.props.fetchUsers(event.target.value);
  }

  render () {
    return (
      <div className="col-md-12">
        <div className="col-md-5" >
        <div className='search-bar'>
          <input
            placeholder="Enter a Github UserName"
            onChange={this.onInputChange()}
            type='text'
          />
          <br />
          <div style={{marginTop:`20%`}}>
            <h4>List of available repositories:</h4>
            <p>(click on any repo to visit on GitHub)</p>
          </div>
          
        </div>
        </div>
        <div className="col-md-7">
        <div className='repo-list'>
          <ul>
            <RepoListElement repos={this.props.repos} />
          </ul>
        </div>

        </div>
        <UserInfo users={this.props.users} />
      </div>
    )
  }
}

const mapStateToProps = ({ repos }) => ({
  repos
})

export default connect(mapStateToProps, { fetchRepos, fetchUsers })(App)
