import React from 'react';
import SearchBar from './SearchBar'
import Table from './Table'
import getTesters from '../API'

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:null,
      country: 1,
      lastName:1,
      firstName:1,
      error: null
    };
    this.handleformSubmit = this.handleformSubmit.bind(this);
    this.sortBy = this.sortBy.bind(this);
    this.validate = this.validate.bind(this);
    this.handleformChange = this.handleformChange.bind(this);
  }

  sortBy(key){
    if(this.state[key] ){
      this.setState({data: this.state.data.sort((a, b) => (a[key] > b[key]) ? 1 : -1)})
      this.setState({[key]: 0})
    }else {
      this.setState({data: this.state.data.sort((a, b) => (a[key] < b[key]) ? 1 : -1)})
      this.setState({[key]: 1})
    }
  }

  handleformChange(){
      this.setState({error: null})
  }

  validate(name){
    let x = false
    if(name.length < 2){
      this.setState({error:'name cant be less than 2 charachters'})
    }else if(name.length > 12){
      this.setState({error:'name cant be longer than 12 charachters'})
    }else{
      x = true
    }
    return x
  }

  handleformSubmit(name){
      if(this.validate(name)){
        getTesters(name)
                .then(data =>{
                    if(data !== ''){
                      if(!Array.isArray(data) && data !== null){
                         let demiData =[]
                        demiData.push(data)
                        this.setState(()=>({
                          data:demiData
                        }))
                      }else{
                        this.setState(()=>({
                          data:data
                        }))
                      }
                      this.sortBy('firstName')
                    }
                })
      }

  }

  render() {
    return (
      <div>
        <h1>Tester log</h1>
        <SearchBar handleformSubmit={this.handleformSubmit} handleformChange={this.handleformChange} />
        {
          this.state.error !== null &&
          <p className='alert-danger'>
            {this.state.error}
          </p>
        }
        {
            this.state.data !== null &&
            <Table data={this.state.data} sortBy={this.sortBy} />
        }
      </div>
    );
  }
}

export default Log;
