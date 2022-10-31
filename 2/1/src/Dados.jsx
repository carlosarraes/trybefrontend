import React, { Component } from 'react'

class Dados extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      age: 0,
      data: '',
    }
  }


  async fetchData() {
    this.setState(
      { loading: true },
      async () => {
        const req = await fetch('https://api.randomuser.me/');
        const { results } = await req.json();
        console.log(results);
        this.setState({
          loading: false,
          data: results[0],
          age: results[0].dob.age,
        })
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { age } = nextState;
    if (age > 50) return false;
    return true;
  }

  render() {
    const { loading, data: {name, email, phone, dob, picture } } = this.state;

    return loading ? <div>Loading...</div> 
    : (
      <>
        <h1>Dados</h1>
        <hr />
        <div>
          <img src={picture.medium} alt="" />
          <span>{`${name.title} ${name.first} ${name.last}`}</span>
        </div>
        <p>{ email } / { phone }</p>
        <p>{ dob.age }</p>
      </>
    );
  }
}

export default Dados