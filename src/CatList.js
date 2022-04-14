// write your CatList component here
import React, {Component} from 'react'

class CatList extends Component{

  render(){
    return <ul>
      {this.props.cats.map}
    </ul>
  }
}
