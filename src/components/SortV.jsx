import React from "react";
import { Button } from "@material-ui/core";
import { getMergeSortAnimations } from "../algorithms/mergesort";
import { getQuickSortAnimations } from "../algorithms/quicksort";
import { getHeapSortAnimations } from "../algorithms/heapsort";
import { getBubbleSortAnimations } from "../algorithms/bubblesort";
import { getSelectionSortAnimations } from "../algorithms/selectionsort";
import { getInsertionSortAnimations } from "../algorithms/insertionsort";
import { getShellSortAnimations } from "../algorithms/shellsort";

const ANIMATION_SPEED_MS = 5;

export default class SortV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: []
    };
    this.changeLogic = this.changeLogic.bind(this);
    this.swapLogic = this.swapLogic.bind(this);
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 70; i++) {
      array.push(randomIntFromInterval(5, 85));
    }
    this.setState({ array });
  }

  changeLogic(event){
    const sortIndex = parseInt(event.currentTarget.dataset.index);
    let animations=[];
    switch(sortIndex){
      case 1: animations = getMergeSortAnimations(this.state.array); break;
      case 2: animations = getShellSortAnimations(this.state.array); break;
      case 3: animations = getInsertionSortAnimations(this.state.array); break;
      default: console.log("just for no warnings :)"); 
    }
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  swapLogic(event){
    const sortIndex = parseInt(event.currentTarget.dataset.index);
    let animations=[];
    switch(sortIndex){
      case 1: animations = getQuickSortAnimations(this.state.array); break;
      case 2: animations = getHeapSortAnimations(this.state.array); break;
      case 3: animations = getBubbleSortAnimations(this.state.array); break; 
      case 4: animations = getSelectionSortAnimations(this.state.array); break;
      default: console.log("just for no warnings :)");
    }
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (i%2===0) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? "red" : "turquoise";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}vh`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="application">
        <div className="sidenav">
          <Button 
            variant="outlined" 
            onClick={() => this.resetArray()}
            style={{margin: "7px"}}
            >NEW ARRAY</Button>
          <Button 
            variant="outlined" 
            color="primary" 
            data-index={1}
            onClick={this.changeLogic}
            style={{margin: "7px"}}
            >Merge Sort</Button>
          <Button 
            variant="outlined" 
            color="primary" 
            data-index={1}
            onClick={this.swapLogic}
            style={{margin: "7px"}}
            >Quick Sort</Button>
          <Button 
            variant="outlined" 
            color="primary" 
            data-index={2}
            onClick={this.swapLogic}
            style={{margin: "7px"}}
            >Heap Sort</Button>
          <Button 
            variant="outlined" 
            color="primary" 
            data-index={2}
            onClick={this.changeLogic}
            style={{margin: "7px"}}
            >Shell Sort</Button>
          <Button 
            variant="outlined" 
            color="primary" 
            data-index={3}
            onClick={this.swapLogic}
            style={{margin: "7px"}}
            >Bubble Sort</Button>
          <Button 
            variant="outlined" 
            color="primary" 
            data-index={4}
            onClick={this.swapLogic}
            style={{margin: "7px"}}
            >Selection Sort</Button>
          <Button 
            variant="outlined" 
            color="primary" 
            data-index={3}
            onClick={this.changeLogic}
            style={{margin: "7px"}}
            >Insertion Sort</Button>
        </div>
      
        <div className="array-container">
          {array.map((value, index) => (
            <div
              className="array-bar"
              key={index}
              style={{ height: `${value}vh`}}
            ></div>
          ))}
        </div>
        
      </div>
    );
  }
}
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}