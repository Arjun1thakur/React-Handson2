import { Component } from 'react';
class ClsComp extends Component{
    render() {  
      return  <div className="cardfun">
                <h1>This is created using Class Component</h1>
                <p>This is done using external CSS</p>
                <p style={{color:'red'}}>This is done using inline CSS</p>
              </div>
    }
}
export default ClsComp;