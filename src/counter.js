import React, { Component } from 'react';
import { css } from "emotion";
import styled from "@emotion/styled";
import styles from "./main.css";

const Fancy = styled('h1')`
  color: ${props => props.wild ? "hotpink" : "gold"}
`;

const red = "#f00";

const className = css`
  color: ${red};
  font-size: 13em;
`;

export default class componentName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 1
    }
  }

  climb = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  render() {
    const isWild = this.state.count % 2 === 0;
    return (
      <div onClick={() => this.climb()} className={styles.counter} >
        <Fancy wild={isWild}>{this.state.count}</Fancy>
      </div>
    )
  }
}
