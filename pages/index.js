import React, { useState } from "react";

//components
import ApplicationTilesComponent from "@/components/HomeComponents/ApplicationTilesComponent";
import ContactComponent from "@/components/HomeComponents/ContactComponent";
import PendingApplicationListComponent from "@/components/HomeComponents/PendingApplicationListComponent";
import ProfileSettingsComponent from "@/components/HomeComponents/ProfileSettingsComponent";

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
            <Tab eventKey="tab1" title="সনদ আবেদন">
              <ApplicationTilesComponent />
            </Tab>
            <Tab eventKey="tab2" title="যোগাযোগ করুন">
              <ContactComponent />
            </Tab>
            <Tab eventKey="tab3" title="পেন্ডিং আবেদন">
              <PendingApplicationListComponent />
            </Tab>
            <Tab eventKey="tab4" title="সনদ প্রিন্ট"></Tab>
            <Tab eventKey="tab5" title="হোল্ডিং ট্যাক্স"></Tab>
            <Tab eventKey="tab6" title="পারিবারিক সদস্য"></Tab>
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
            <option value="1">সনদ আবেদন</option>
            <option value="2">যোগাযোগ করুন</option>
            <option value="3">পেন্ডিং আবেদন</option>
            <option value="4">সনদ প্রিন্ট</option>
            <option value="5">হোল্ডিং ট্যাক্স</option>
            <option value="6">পারিবারিক সদস্য</option>
          </Form.Select>
        </Col>
        {option == 1 && <ApplicationTilesComponent />}
        {option == 2 && <ContactComponent />}
        {option == 3 && <PendingApplicationListComponent />}
      </Row>
    </>
  );
};

export default Home;
