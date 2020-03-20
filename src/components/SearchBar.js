import React from 'react';



class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
     this.setState({value: event.target.value});
      this.props.handleformChange()
   }

   handleSubmit(event) {
     alert('A name was submitted: ' + this.state.value);
     event.preventDefault();
     let val = this.state.value
     console.log(this.props, val)

     this.props.handleformSubmit(this.state.value)

   }


    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="fetch" />
        </form>
      );
    }
}

export default SearchBar;
