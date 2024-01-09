import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function App() {
  const [topics, setTopics] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classLevel, setClassLevel] = useState('');
  const [pdfFiles, setPdfFiles] = useState([]);
  const [testQuestions, setTestQuestions] = useState([]);

  const handleFileChange = (e) => {
    setPdfFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('class_level', classLevel);
    formData.append('topics', topics.join(','));
    formData.append('subjects', subjects.join(','));

    for (let i = 0; i < pdfFiles.length; i++) {
      formData.append('pdf_files', pdfFiles[i]);
    }

    try {
      const response = await axios.post('http://localhost:5000/generate_test', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setTestQuestions(response.data.test_questions);
    } catch (error) {
      console.error('Error generating test:', error);
    }
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1>AI Test Generation Bot</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Form onSubmit={handleSubmit}>
            {/* Add form fields for topics, subjects, class level, and PDF files */}
            {/* ... */}
            <Button type="submit">Generate Test</Button>
          </Form>
        </Col>
      </Row>
      {testQuestions.length > 0 && (
        <Row className="mt-4">
          <Col>
            <h3>Generated Test Questions:</h3>
            {/* Display the generated test questions */}
            <ul>
              {testQuestions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
