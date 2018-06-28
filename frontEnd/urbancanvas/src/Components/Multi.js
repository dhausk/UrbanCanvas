import React, {Component} from 'react'
import Directions from "./Directions"
import Description from "./Description"
import CreateForm from "./CreateForm"

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
                    return <Directions  />
                case "b":
                    return <Description description={this.props.artList} />
                case "c":
                    return <CreateForm />
            }
        }

        return (<div className="Multi-card"><CreateForm handleCreateArtCard={this.props.handleCreateArtCard}/></div>)
    }
}

export default Multi
