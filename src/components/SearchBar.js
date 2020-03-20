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
     event.preventDefault();
     this.props.handleformSubmit(this.state.value)
   }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className='mr-2'>
            Name
            <input placeholder='Enter the tester name' type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className='d-block mb-4 mt-2' type="submit" value="fetch" />
        </form>
      );
    }
}

export default SearchBar;
