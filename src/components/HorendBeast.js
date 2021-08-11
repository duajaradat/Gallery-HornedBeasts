/* eslint-disable eol-last */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0,
        };
    }
    likesCounter = () => {
        this.setState({
            like: this.state.like + 1,
        });
        this.updateSelected();
    };
    updateSelected = () => {
        this.props.showPopUp(this.props.title);
    }

    render() {
        return (
            <div class="card-columns">
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                        <Card.Text>Likes {this.state.like} ❤ </Card.Text>
                        <Button onClick={this.likesCounter}>Like</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default HornedBeasts;

///////////////////////////////////////////////
// class HornedBeasts extends React.Component {

//   constructor(props){
//     super(props);
//     this.state={
//       votes : 0
//     };
//   }
//   votesCounter =()=>{
//     this.setState({
//       votes:this.state.votes+1
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>{this.props.title}</h2>
//         <img onClick={this.votesCounter}
//           src={this.props.img}
//           title={this.props.title}
//           alt={this.props.title}
//         />
//         <p>{this.props.description}</p>
//         <p>Votes:{this.state.votes}</p>
//       </div>
//     );
//   }
// }
// export default HornedBeasts;
