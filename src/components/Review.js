import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import emptyStar from "../Images/Empty_Star.png"
import goldStar from "../Images/Gold_Star.png"
import halfStar from "../Images/Half_Star.png"
import {Image} from "react-bootstrap";

const Divider = ({ color }) => ( //not currently used, literally just a line originally intended to divide username+score and body
    <hr
        style={{
          color: color,
          backgroundColor: color,
          height: 5
        }}
    />
);

class StarRating extends Component
{
    constructor(props) {
        super(props);
    }

    render() //This will require more work, since it isn't responsive and for some reason pictures get shrunk down to 0px on smaller resolutions
    {
        return(
            <Container style={ { background: 'rgba(56, 97, 80, 1)', height: '100%'}}>
                <Row>
                    <Col sm lg={2}>
                    {this.props.score >= 1 ?
                        this.props.score >=2 ?
                        <Image src={goldStar} alt={""} fluid/>  //score 2+
                        : <Image src={halfStar} alt={""} fluid/> //score 1
                        : <Image src={emptyStar} alt={""} fluid/> //score zero; this can't really show up
                    }
                    </Col>
                    <Col sm lg={2}>
                        {this.props.score >= 3 ?
                            this.props.score >=4 ?
                                <Image src={goldStar} alt={""} fluid/>  //score 4+
                                : <Image src={halfStar} alt={""} fluid/> //score 3
                            : <Image src={emptyStar} alt={""} fluid/> //score 2 exact
                        }
                    </Col>
                    <Col sm lg={2}>
                        {this.props.score >= 5 ?
                            this.props.score >=6 ?
                                <Image src={goldStar} alt={""} fluid/>  //score 6+
                                : <Image src={halfStar} alt={""} fluid/> //score 5
                            : <Image src={emptyStar} alt={""} fluid/> //score 4 exact
                        }
                    </Col>
                    <Col sm lg={2}>
                        {this.props.score >= 7 ?
                            this.props.score >=8 ?
                                <Image src={goldStar} alt={""} fluid/>  //score 8+
                                : <Image src={halfStar} alt={""} fluid/> //score 7
                            : <Image src={emptyStar} alt={""} fluid/> //score 6 exact
                        }
                    </Col>
                    <Col sm lg={2}>
                        {this.props.score >= 9 ?
                            this.props.score >=10 ?
                                <Image src={goldStar} alt={""} fluid/>  //score 10
                                : <Image src={halfStar} alt={""} fluid/> //score 9
                            : <Image src={emptyStar} alt={""} fluid/> //score 8 exact
                        }
                    </Col>
                </Row>
            </Container>
        ) //Possibly cut the stars to half stars? Also, write the number right after the score?
    }

}

class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
        reviewID: props.id,
        userID: props.userID,
        userPicture: props.userPicture, //perhaps this is superflous; look at it later
        username: props.username, //perhaps this is superfluous; look at it later
        score: props.score,
        content: props.content,
        expanded: false
    }
  }

  componentDidMount() {
      //This is where the API fetch will be in the future, if a single-review route is made; otherwise, it will take the data as props from a father component that fetched all reviews for a provider first
  //    this.setState({userID : 1})
  //   this.setState({username : "Mike Oxlong"})
  //    this.setState({userPicture: profileTemp})
  //    this.setState({score : 3})
  //    this.setState({content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})
    }

    //function for expanding/contracting the text
  showButton = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() { //please note that colors are magenta, red and blue so that they're obviously visible and this should be changed when styled, to fit the rest of the page
    const { expanded } = this.state
    return (
        <Container style={ { background: 'rgba(247, 231, 217, 1)',  justifyContent: 'center', alignItems: 'center' } }>
          <Row xs={5} style={ { background: 'rgba(56, 97, 80, 1)'}}>
            <Col sm lg={1.5}><Image src={this.state.userPicture} alt={"Profile Picture"} style ={ {height: '100%', width:'100%'}} fluid/></Col>
            <Col sm lg={1.5}>{this.state.username}</Col>
            <Col sm lg={8}> <StarRating score={this.state.score}/> </Col>
              {
                  //Look at the xs breakpoint thing, since the way it is now isn't proper; also, look into how to write actual comments in these returns
              }
          </Row>

          <Row>
          {
            !expanded &&
            <div>
                 {this.state.content.substring(0, 100)}
                {(this.state.content.length > 100) &&
                <a style={{color: 'blue'}} onClick={this.showButton}> Read more</a>
                }
            </div>
          }
          {
            expanded &&
            <div>
                {this.state.content}
                <a style={{color: 'blue'}} onClick={ this.showButton }> Read less</a>
            </div>
          }

          </Row>
        </Container>
    )
  }
}


export default Review;
