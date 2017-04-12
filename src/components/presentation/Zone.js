import React, {Component} from "react"
import styles from "./styles"
const zoneStyle = styles.zone

class Zones extends Component {
  
  render(){
    
    const zipCode = this.props.zipCodes[0]

    return (
      <div style={zoneStyle.container}>
        <h2 style={zoneStyle.header}>
          <a style={zoneStyle.title} href="#">{this.props.name}</a>
        </h2>
        <span className="detail">{zipCode}</span><br/>
        <span className="detail">{`${this.props.numComments} comments`}</span>
      </div>
    )
  }

}

export default Zones