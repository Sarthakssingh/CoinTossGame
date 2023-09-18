// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    toss: 0,
    total: 0,
    heads: 0,
    tails: 0,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({
      toss: tossResult,
    })
    // this.setState(prevVal => ({
    //   total: prevVal.total + 1,
    // }))
    if (tossResult === 0) {
      this.setState(prevVal => ({
        total: prevVal.total + 1,
        heads: prevVal.heads + 1,
      }))
    } else {
      this.setState(prevVal => ({
        total: prevVal.total + 1,
        tails: prevVal.tails + 1,
      }))
    }
  }

  render() {
    const {toss, total, heads, tails} = this.state
    return (
      <div className="container">
        <div className="content">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {toss === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="image"
              alt="head"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="image"
              alt="tails"
            />
          )}
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="counts">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
