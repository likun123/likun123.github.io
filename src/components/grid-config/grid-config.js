
import styles from './grid-config.css';
import React, {Component} from 'react'
import {Row,Col,Slider} from 'antd';

const GridConfigEle =  class GridConfig extends Component {
  gutters={};
  colCounts={};
  constructor(props) {
    super(props);
    [8, 16, 24, 32, 40, 48].forEach((value, i) => {
      this.gutters[i] = value;
    });
    [2, 3, 4, 6, 8, 12].forEach((value, i) => {
      this.colCounts[i] = value;
    });
  }
  
  render() {
    return (
      <div>
        <div style={{marginBottom:16}}>
          <span style={{marginRight:6}}>Gutter (px):</span>
          <div style={{width:'50%'}}>
            <Slider
              min={0}
              max={5}
              dots="true"
              marks={this.gutters}
              step={null}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default GridConfigEle;