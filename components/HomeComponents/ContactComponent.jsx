import React from "react";

import { Row, Col, Form, Button } from "react-bootstrap";

const ContactComponent = () => {
  return (
    <>
      <Row style={{ width: "100%" }} className="mt-4 px-3 ms-2">
        <Col md lg={12}>
          <Form.Control
            type="text"
            as="textarea"
            rows={6}
            placeholder="এখানে বার্তা লিখুন"
            className="custom-input"
          />
          <Button className="custom-button-contained float-end mt-4">
            বার্তা পাঠান
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default ContactComponent;
