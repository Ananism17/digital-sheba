import React, { useState } from "react";

//components
import ProfileUpdateComponent from "@/components/ProfileComponents/ProfileUpdateComponent";
import ProfileDetailsComponent from "@/components/ProfileComponents/ProfileDetailsComponent";

//react-bootstrap
import { Tabs, Tab, Row, Col, Form } from "react-bootstrap";

const Home = () => {
  const [activeKey, setActiveKey] = useState("tab1");
  const [option, setOption] = useState(1);

  const handleTabSelect = (selectedKey) => {
    setActiveKey(selectedKey);
  };

  return (
    <>
      <Row style={{ width: "100%" }} className="d-none d-lg-block">
        <Col>
          <Tabs
            activeKey={activeKey}
            onSelect={handleTabSelect}
            id="myTabs"
            className="custom-tabs"
          >
            <Tab eventKey="tab1" title="প্রোফাইল">
              <ProfileDetailsComponent />
            </Tab>
            <Tab eventKey="tab2" title="আপডেট">
              <ProfileUpdateComponent />
            </Tab>
          </Tabs>
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className=" d-sm-block d-lg-none">
        <Col>
          <Form.Select
            value={option}
            onChange={(e) => {
              setOption(e.target.value);
            }}
          >
            <option value="1">প্রোফাইল</option>
            <option value="2">আপডেট</option>
          </Form.Select>
        </Col>
        {option == 1 && <ProfileDetailsComponent />}
        {option == 2 && <ProfileUpdateComponent />}
      </Row>
    </>
  );
};

export default Home;
