import React from "react"
import { connect } from 'react-redux';

const Header = (props) => {
  console.log({props})
  return <header><h2 onClick={()=> {
    props.onAdd(1)
  }} >Header xx{props.sum}</h2></header>
}


const mapStateToProps = state => ({
  sum: state.sum,
});

const mapDispatchToProps = dispatch => ({
  onAdd: num => dispatch({ type: 'ADD', value: num }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)