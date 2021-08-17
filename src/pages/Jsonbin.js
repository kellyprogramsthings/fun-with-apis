import React, { Fragment, useState, useEffect } from "react";
import { Button, Col, Container, Input, Label, Modal, ModalBody, 
  ModalFooter, Row, Table } from "reactstrap"
import axios from "axios";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BIN_ID } from "../utils/constants"

let jsonbinKey = process.env.REACT_APP_JSONBIN_APIKEY;

const yah = () => {
  return (
    <Fragment>
      <FontAwesomeIcon icon="check" style={{color: "green"}} /> Yah 
    </Fragment>
  )
};

const nah = () => {
  return (
    <Fragment>
      <FontAwesomeIcon icon="times" style={{color: "red"}} /> Nah
    </Fragment>
  )
};

const jsonbinPutHeader = {
  "X-Master-Key": jsonbinKey,
  "Content-Type": "application/json"
};

const Jsonbin = () => {
  const [binData, setBinData] = useState(null);
  const [newRow, setNewRow] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getInitialData(); 
  }, []);

  const toggle = () => setModal(!modal);

  const getInitialData = () => {
    axios.get(`https://api.jsonbin.io/b/${BIN_ID}/latest`)
    .then(response => {
      let binData = response.data;
      if (!binData?.characters?.new) {
        binData.characters.new = [];
      }
      setBinData(response.data);
    })
  }

  const saveBinData = () => {
    let saveUrl = `https://api.jsonbin.io/v3/b/${BIN_ID}`;
    console.log("we clicked the button but nothing happened :(");
  }

  const onSaveRow = () => {
    let newBinData = {...binData};
    if (!newBinData.characters.new && newRow) {
      newBinData.characters.new = {};
    }
    newBinData.characters.new.push(newRow);
    setBinData(newBinData);
    toggle();
  }

  const onCancel = () => {
    setNewRow({});
    toggle();
  }

  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <div className="float-right">
            <Button color="primary" onClick={toggle}>Add Incorrect Data to My Table...!</Button>
            <Button color="success" className="ml-1" onClick={saveBinData}>Save Your Incorrect Data to My Jsonbin...!</Button>
          </div>
        </Col>
      </Row>
      <Table className="mt-2">
        <thead>
          <tr>
            <th width="30%">
              Character
            </th>
            <th width="30%">
              Actor
            </th>
            <th width="20%">
              Kelly's Favorite?
            </th>
            <th width="20%">
              Kelly Met This Actor?
            </th>
          </tr>
        </thead>
        <tbody>
          {binData && _.map(binData.characters.doctors, (d) =>
            <tr>
              <td>{d.name}</td>
              <td>{d.actor}</td>
              <td>{d.kellysFavorite ? yah() : nah()}</td>
              <td>{d.kellyHasMet ? yah() : nah()}</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Table>
        <thead>
          <tr>
            <th width="30%">
              Character
            </th>
            <th width="30%">
              Actor
            </th>
            <th width="20%">
              Kelly's Favorite?
            </th>
            <th width="20%">
              Kelly Met This Actor?
            </th>
          </tr>
        </thead>
        <tbody>
          {binData && _.map(binData.characters.companions, (d) =>
            <tr>
              <td>{d.name}</td>
              <td>{d.actor}</td>
              <td>{d.kellysFavorite ? yah() : nah()}</td>
              <td>{d.kellyHasMet ? yah() : nah()}</td>
            </tr>
          )}
        </tbody>
      </Table>
      {binData &&
        <Table>
          <thead>
            <tr>
              <th width="30%">
                Character
              </th>
              <th width="30%">
                Actor
              </th>
              <th width="20%">
                Kelly's Favorite?
              </th>
              <th width="20%">
                Kelly Met This Actor?
              </th>
            </tr>
          </thead>
          <tbody>
            {binData && _.map(binData.characters.new, (d) =>
              <tr>
                <td>{d.name}</td>
                <td>{d.actor}</td>
                <td>{d.kellysFavorite ? yah() : nah()}</td>
                <td>{d.kellyHasMet ? yah() : nah()}</td>
              </tr>
            )}
          </tbody>
        </Table>
      }
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <Label for="name">Name</Label>
          <Input
            name="name"
            id="name"
            value={newRow?.name || ""}
            onChange={(e) => setNewRow({...newRow, name: e.target.value})}
          />
          <Label for="actor">Actor</Label>
          <Input
            name="actor"
            id="actor"
            value={newRow?.actor || ""}
            onChange={(e) => setNewRow({...newRow, actor: e.target.value})}
          />
          <div>
            <Label check className="checkBox">
              <Input
                type="checkbox"
                name="kellysFavorite"
                checked={newRow?.kellysFavorite || false}
                onChange={(e) => setNewRow({...newRow, kellysFavorite: e.target.checked})}
              />
              Kelly's Favorite?
            </Label>
          </div>
          <div>
            <Label check className="checkBox">
              <Input
                type="checkbox"
                name="kellyHasMet"
                checked={newRow?.kellyHasMet || false}
                onChange={(e) => setNewRow({...newRow, kellyHasMet: e.target.checked})}
              />
              Kelly Met This Actor?
            </Label>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={onSaveRow}>Save</Button>
          <Button color="secondary" onClick={onCancel}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default Jsonbin;