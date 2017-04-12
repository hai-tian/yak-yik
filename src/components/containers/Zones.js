import React, {Component} from "react"
import Zone from "../presentation/Zone"
import superagent from "superagent"

class Zones extends Component {

  constructor(){
    super()
    this.state = {
      zone: {
        name: "",
        zipCode: ""
      },
      list: []
    }
  }

  componentDidMount() {
    // console.log("componnetDidMount")
    superagent.get("/api/zone")
      .query(null)
      .set("Accept", "application/json")
      .end((err, response) => {
        if(err) {
          alert("ERROR:" + err)
        }

        console.log(JSON.stringify(response.body))
        let results = response.body.results
        this.setState({
          list: results
        })

      })
  }

  updateZone(e) {
    console.log("updateName: " + e.target.id + "==" +  e.target.value)
    let updatedZone = Object.assign({}, this.state.zone)
    updatedZone[e.target.id] = e.target.value
    this.setState({
      zone: updatedZone
    })
  }

  addZone() {
    console.log("ADD ZONE: " + JSON.stringify(this.state.zone))
    let updateList = Object.assign([], this.state.list)
    updateList.push(this.state.zone)
    console.log(updateList)
    this.setState({
      list: updateList
    })
  }

  render(){
    
    const listItems = this.state.list.map((zone, i)=>{
      return (
        <li key={i}><Zone {...zone}/></li>
      )
    })

    return (
      <div>
        <ol>
          {listItems}
        </ol>

        <input id="name" onChange={ (e) => this.updateZone(e) } 
          className="form-control" type="text" placeholder="Name"/> <br/>
        <input id="zipCode" onChange={ (e) => this.updateZone(e) } 
          className="form-control" type="text" placeholder="Zip Code"/> <br/>
        <button onClick={ () => this.addZone() } 
          className="btn btn-info">Add Zone</button>
      </div>
    )
  }



}


export default Zones