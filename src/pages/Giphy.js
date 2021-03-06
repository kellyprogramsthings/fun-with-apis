import React, { useState } from "react";
import { Button, Col, Container, Input, Label, Row } from "reactstrap"
import axios from "axios";

const Giphy = () => {
  const [imageSrc, setImageSrc] = useState();
  const [inputBox, setInputBox] = useState();

  let giphyKey = process.env.REACT_APP_GIPHY_APIKEY;

  const giphyGetUrl = (searchQuery) => {
    return `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=${searchQuery}&rating=g`;
  }

  const onGiphySubmit = () => {
    axios.get(giphyGetUrl(inputBox))
      .then((response) => {
        let id = response.data.data.id;
        let url = `https://media.giphy.com/media/${id}/giphy.gif`;
        setImageSrc(url);
      })
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
            <img alt="Result from Giphy Search" src={imageSrc} />
          }
        </Col>
      </Row>
    </Container>
  );
}

export default Giphy;