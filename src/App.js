
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Form} from "react-bootstrap"

// Mathematical Note
// downstream speed = speed of boat + speed of stream (if in the same direction)
// upstream speed = speed of boat - speed of stream (if in the opposite direction)

class App extends React.Component{

  constructor(){
    super()
    this.state={
      speedOfStream: 0,
      speedOfBoat: 0,
      distance: 0,
      select: ["Select Option",'DOWNSTREAM','UPSTREAM'],
      option: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelect = (e) => {
    this.setState({
        option: e.target.value
    })
}

  render(){
    let speedOfBoat = this.state.speedOfBoat
    let speedOfStream = this.state.speedOfStream
    let distance = this.state.distance
    let speed = parseInt(speedOfStream) + parseInt(speedOfBoat) 
    let upStreamSpeed = parseInt(speedOfBoat) - parseInt(speedOfStream)
    let timeTaken_in_Y_direction =  distance / speed // t= d/s
    let timeTaken_in_opp_Y_direction =  distance / upStreamSpeed

    //********************************* */
    const select = this.state.select
        let selectList = select.map((ele, i)=>{
            return (
                <option key={i}> {ele} </option>
            )
        })
    
    
    return (
     
        <Container>
           <div>
        <h1 className="text-info mt-5 text-center">Time Calculator App</h1>

        <div className='mt-5' style={{width: "30%", float: "right"}}>
                        <Form.Control as="select" onChange={this.handleSelect} name='option' className='select'>
                            {selectList}
                        </Form.Control><br/>
        </div>

        {/* Calculate Time for Y-Axis ****************************************** */}
        <div className="ml-5 mt-3" style={{ width: "50%", float: "left"}}  >
        {
            this.state.option === 'DOWNSTREAM' && 
              <Form.Group>
                <Form.Label>Enter width of the river</Form.Label>
                <Form.Control type="Number" value={distance} onChange={this.handleChange} name="distance" /><br/><br/>
                <Form.Label>Enter V velocity of the swimmer</Form.Label>
                <Form.Control type="Number" value={speedOfBoat} onChange={this.handleChange} name="speedOfBoat" /> <br/><br/>
                <Form.Label>Enter X velocity of the river</Form.Label>
                <Form.Control type="Number" value={speedOfStream} onChange={this.handleChange} name="speedOfStream" /> <br/><br/>
                <h3>Time taken to cover {distance} Km with the speed {speed}  km/hr is {timeTaken_in_Y_direction} hr</h3>
              </Form.Group>
        
            
        }

        {/* Calculate Time for Negtive of Y-Axis ********************************** */}

         {
              this.state.option === 'UPSTREAM' &&
                <Form.Group>
                  <Form.Label>Enter width of the river</Form.Label>
                  <Form.Control type="Number" value={distance} onChange={this.handleChange} name="distance" /> <br/><br/>
                  <Form.Label>Enter V velocity of the swimmer</Form.Label>
                  <Form.Control type="Number" value={speedOfBoat} onChange={this.handleChange} name="speedOfBoat" /> <br/><br/>
                  <Form.Label>Enter X velocity of the river</Form.Label>
                  <Form.Control type="Number" value={speedOfStream} onChange={this.handleChange} name="speedOfStream" /> <br/><br/>
                  <h3>Time taken to cover distance {distance} Km with the speed of {speed}  km/hr is {timeTaken_in_opp_Y_direction} hr</h3>
                </Form.Group>
          }
          </div>
          </div>
          </Container>
      
    )
  }
}
export default App;
