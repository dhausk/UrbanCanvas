import React, { Component } from 'react'
import Directions from "./Directions"
import Description from "./Description"
import CreateForm from "./CreateForm"
import UpdateForm from "./UpdateForm"
import "../Components/Multi.css"

class Multi extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let displaySwitch = change(this.props.display)
    let artList = this.props.artList
    let artId = this.props.id
    function change(display) {
      switch (display) {
        case "a":
          return <Directions />
        case "b":
          return <Description description={this.props.artList} />
        case "c":
          return <CreateForm handleCreateArtCard={this.props.handleCreateArtCard} />
        case "d":
          return <UpdateForm currentArt={this.props.currentArt} handleUpdateArtCard={this.props.handleUpdateArtCard} />
      }
    }

    return (
      <div className="multi-card">
        {displaySwitch}
      </div>)
  }
}

export default Multi
