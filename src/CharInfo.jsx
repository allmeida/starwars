import React, { Component } from 'react';

class CharInfo extends Component {
  constructor(props){
    super(props);

    this.state = {
      expanded: false,
    }

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open(){
    this.setState({ expanded: !this.state.expanded })
  }
  close(){
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const info = this.props.charInfo;
    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show info</p>
    }

    return(
      <div className="user-details">
        <p className="btn btn-danger" onClick={this.close}>Hide info</p>
        <ul>
          <li><h5>Gender: {info.gender}</h5></li>
          <li><h5>Birth date: {info.birth_year}</h5></li>
          <li><h5>Eye Color: {info.eye_color}</h5></li>
          <li><h5>Hair color: {info.hair_color}</h5></li>
          <li><h5>Height: {info.height}</h5></li>
          <li><h5>Mass: {info.mass}</h5></li>
        </ul>
      </div>
    )
  }
}

export default CharInfo;