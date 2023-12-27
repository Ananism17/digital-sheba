import ApplicationTilesComponent from "@/components/HomeComponents/ApplicationTilesComponent";
import ContactComponent from "@/components/HomeComponents/ContactComponent";
import PendingApplicationListComponent from "@/components/HomeComponents/PendingApplicationListComponent";
import ProfileSettingsComponent from "@/components/HomeComponents/ProfileSettingsComponent";
import { useSSRSafeId } from "@react-aria/ssr";
import React, { useState } from "react";

//react-bootstrap
import { Tabs, Tab, Row, Col, Form } from "react-bootstrap";

const Home = () => {
  const [activeKey, setActiveKey] = useState("tab2");
  const [option, setOption] = useState(2);

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
            <Tab eventKey="tab1" title="প্রোফাইল সেটিংস">
              <ProfileSettingsComponent />
            </Tab>
            <Tab eventKey="tab2" title="সনদ আবেদন">
              <ApplicationTilesComponent />
            </Tab>
            <Tab eventKey="tab3" title="যোগাযোগ করুন">
              <ContactComponent />
            </Tab>
            <Tab eventKey="tab4" title="পেন্ডিং আবেদন">
              <PendingApplicationListComponent />
            </Tab>
            <Tab eventKey="tab5" title="সনদ প্রিন্ট"></Tab>
            <Tab eventKey="tab6" title="হোল্ডিং ট্যাক্স"></Tab>
            <Tab eventKey="tab7" title="পারিবারিক সদস্য"></Tab>
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
            <option value="1">প্রোফাইল সেটিংস</option>
            <option value="2">সনদ আবেদন</option>
            <option value="3">যোগাযোগ করুন</option>
            <option value="4">পেন্ডিং আবেদন</option>
            <option value="5">সনদ প্রিন্ট</option>
            <option value="6">হোল্ডিং ট্যাক্স</option>
            <option value="7">পারিবারিক সদস্য</option>
          </Form.Select>
        </Col>
        {option == 1 && <ProfileSettingsComponent />}
        {option == 2 && <ApplicationTilesComponent />}
        {option == 3 && <ContactComponent />}
        {option == 4 && <PendingApplicationListComponent />}
      </Row>
    </>
  );
};

export default Home;
