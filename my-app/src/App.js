import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import { Container, Row, Col  } from "reactstrap";

function App() {
  const [post, setPost] =useState([]);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><Col xs="6" sm="4">.col-6 .col-sm-4</Col></Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
