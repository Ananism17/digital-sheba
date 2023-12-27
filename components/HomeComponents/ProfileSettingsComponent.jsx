import moment from "moment";
import React, { useState } from "react";

import { Row, Col, Form, Button } from "react-bootstrap";

import Datepicker from "../Services/Datepicker";

const ProfileSettingsComponent = () => {
  const [startDate, setStartDate] = useState("");

  return (
    <>
      <Row style={{ width: "100%" }} className="px-3 ms-2">
        <Col md lg={4} className="mt-4">
          <Form.Label>জন্ম সনদ নং</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={4} className="mt-4">
          <Form.Label>জাতীয় পরিচয় পত্র নং</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={4} className="mt-4">
          <Form.Label>জন্ম তারিখ</Form.Label>
          <Datepicker
            selectedDate={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className="px-3 ms-2">
        <Col md lg={12} className="mt-4">
          <Button className="custom-button-contained float-end">যাচাই করুন</Button>
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className="px-3 ms-2">
        <Col md lg={4} className="mt-4">
          <Form.Label>পাসপোর্ট নং</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={4} className="mt-4">
          <Form.Label>নাম (বাংলা)</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={4} className="mt-4">
          <Form.Label>নাম (ইংরেজী)</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className="px-3 ms-2">
        <Col md lg={4} className="mt-4">
          <Form.Label>পিতার নাম (বাংলা)</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={4} className="mt-4">
          <Form.Label>পিতার নাম (ইংরেজী)</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={4} className="mt-4">
          <Form.Label>মাতার নাম (বাংলা)</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className="px-3 ms-2">
        <Col md lg={4} className="mt-4">
          <Form.Label>মাতার নাম (ইংরেজী)</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={4} className="mt-4">
          <Form.Label>স্বামী/স্ত্রীর নাম (বাংলা)</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={4} className="mt-4">
          <Form.Label>স্বামী/স্ত্রীর নাম (ইংরেজী)</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className="px-3 ms-2">
        <Col md lg={2} className="mt-4">
          <Form.Label>ওয়ার্ড</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={2} className="mt-4">
          <Form.Label>গ্রাম</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={2} className="mt-4">
          <Form.Label>পোষ্ট অফিস</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={2} className="mt-4">
          <Form.Label>হোল্ডিং নাম্বার</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={2} className="mt-4">
          <Form.Label>লিঙ্গ</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
        <Col md lg={2} className="mt-4">
          <Form.Label>ধর্ম</Form.Label>
          <Form.Control
            type="text"
            rows={6}
            className="custom-input"
            size="lg"
          />
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className="px-3 ms-2">
        <Col md lg={12} className="mt-4">
          <Button className="custom-button-contained float-end">সংরক্ষন করুন</Button>
        </Col>
      </Row>
    </>
  );
};

export default ProfileSettingsComponent;
