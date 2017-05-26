import React, {Component} from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }

  toggleHover(){
    this.setState({hover: !this.state.hover})
  }

  render() {
    var { action, text } = this.props;
    var styles = {
      backgroundColor: '#ff9311',
      color: 'white',
      border: `1px solid ${this.state.hover?'#E1E1EA':'black'}`,
      borderRadius: '.5em',
      fontWeight: 700,
      marginTop: '.5em',
      padding: '.5em 1em',
      fontSize: 16,
      cursor: 'pointer',
      outline: 'none'
    }
    return (
      <button
        style={styles}
        onMouseEnter={()=>this.toggleHover()}
        onMouseLeave={()=>this.toggleHover()}
        onClick={(params) => action(params)}
      >
        {text}
      </button>
    );
  }
}
