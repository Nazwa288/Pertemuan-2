import React, { Component } from "react";
import Images from "./image";

class List extends Component {
  render() {
    const numberOfItems = 10; // The number of items you want to list
    const imageList = [];

    for (let i = 0; i < numberOfItems; i++) {
      const randomImageUrl = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
      imageList.push(
        <li key={i}>
          {i + 1} <Images srcGambar={randomImageUrl} />
        </li>
      );
    }

    return (
      <div>
        <ol>
          {imageList}
        </ol>
      </div>
    );
  }
}

export default List;
