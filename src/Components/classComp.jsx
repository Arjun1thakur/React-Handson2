import './classComp.css'
import React, { Component } from "react";

export default class Foam extends Component{
  state={
    Name:'',
    Department:'',
    Rating:'',
    newSet:[]
  };
  update=(e)=>{
    this.setState({[e.target.name] : e.target.value})
  }
  latestChange = (e)=>{
    e.preventDefault()
    var empObj = {
      Name : this.state.Name,
      Department : this.state.Department,
      Rating : this.state.Rating,
    }
    const arr = this.state.newSet;
    arr.push(empObj);
    this.setState({newSet : arr})
    console.log(this.state)
  }
  render(){
    return (
      <>
        <div className="header">
          Employee Feedback Form
        </div>
        <div className="foam">
          <form action="" method="get">
            <label htmlFor="name">Name : </label>
            <input type="text" name="Name" className="input"  value={this.state.Name} onChange={this.update} />  <br />
            <label htmlFor="Department">Department : </label>
            <input type="text" name="Department" className="input" value={this.state.Department} onChange={this.update}/>  <br />
            <label htmlFor="Rating">Rating : </label>
            <input type="number" name="Rating" className="input" value={this.state.Rating} onChange={this.update} /> <br />
            <input type="submit" value="Submit" id='submit' onClick={this.latestChange}/>
          </form>
        </div>
        <div className="getData">
          <table>
            <thead>
              <tr style={{fontSize:'2rem',fontWeight:'700'}}>
                <th>Name</th>
                <th style={{backgroundColor:'#ffc0cb87'}}>Department</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
          {this.state.newSet.map((data,index)=>{
              return (
                  <tr key={index}>
                    <th>{data.Name}</th>
                    <th style={{backgroundColor:'#ffc0cb87'}}>{data.Department}</th>
                    <th>{data.Rating}</th>
                  </tr>
              )
            })
          }
          </tbody>
          </table>
          {/* {this.state.arr.map((value,index)=>
          {
            return(
              <span key={index}>{value.Name} {value.Department} {value.Rating}</span>
            )
          }
          )} */}
        </div>
      </>
    )
  }
}