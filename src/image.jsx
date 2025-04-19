import React from "react";

// function Images (props){

//     return (
//       <img
//         src={props.srcGambar}
//         alt="Random Food"
//         width="100"
//         height="100"
//       />
//     );
// }
class Images extends React.Component{
  
  render(){
    return(
      <img src={this.props.srcGambar} width="150"/>
    )
  }
}
  

export default Images;
