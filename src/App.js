import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'

class App extends Component {

  componentDidMount(){
    console.log(this.props)
    this.props.fetchCats()
  }
  render () {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList cats={this.props.catpics}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { catPics: state.cats, loading: state.loading }
}
const mapDispatchToProps = dispatch => {
  return { fetchCats: () => dispatch(fetchCats()) }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
