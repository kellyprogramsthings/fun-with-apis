import React, { useState } from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap"
import axios from "axios";
import _ from "lodash";

const Giphy = () => {
  const [imageSrc, setImageSrc] = useState();
  const [inputBox, setInputBox] = useState();

  let giphyKey = process.env.REACT_APP_GIPHY_APIKEY;

  const giphyGetUrl = (searchQuery) => {
    return `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=${searchQuery}&rating=g`
  }

  const onGiphySubmit = () => {
    console.log("we clicked the button but nothing happened :(")
  }

  const onInputChange = (event) => {
    setInputBox(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Label for="searchBox">Enter your search:</Label>
          <Input style={{width: "25%"}} id="searchBox" value={inputBox} onChange={onInputChange} />
          <Button onClick={onGiphySubmit}>Submit</Button>
        </Col>
      </Row>
      <Row className="pt-3">
        <Col>
          {imageSrc &&
            <img title="Result from Giphy Search" src={imageSrc} />
          }
        </Col>
      </Row>
    </Container>
  );
}

export default Giphy;