import React from "react";

//react-bootstrap
import { Row, Col } from "react-bootstrap";

//react-icons
import { FaPeopleRoof, FaChildDress } from "react-icons/fa6";
import { RiParentFill, RiExchangeBoxFill  } from "react-icons/ri";
import { GiCharacter, GiBigDiamondRing } from "react-icons/gi";
import { PiFootprintsFill } from "react-icons/pi";
import { MdFamilyRestroom } from "react-icons/md";



const ApplicationTilesComponent = () => {
  return (
    <>
    <Row style={{ width: "100%" }} className="mt-4 px-3 ms-2">
        <Col md lg={2} className="text-center mb-4">
          <div className="custom-tiles">
            <FaPeopleRoof style={{ fontSize: "40px" }} />
            <h5 className="mt-4">নাগরিক সনদ</h5>
          </div>
        </Col>
        <Col md lg={2} className="text-center mb-4">
          <div className="custom-tiles">
            <RiParentFill style={{ fontSize: "40px" }} />
            <h5 className="mt-4">ওয়ারিশ সনদ</h5>
          </div>
        </Col>
        <Col md lg={2} className="text-center mb-4">
          <div className="custom-tiles">
            <RiExchangeBoxFill style={{ fontSize: "40px" }} />
            <h5 className="mt-4">ট্রেড লাইসেন্স</h5>
          </div>
        </Col>
        <Col md lg={2} className="text-center mb-4">
          <div className="custom-tiles">
            <GiCharacter style={{ fontSize: "40px" }} />
            <h5 className="mt-4">চারিত্রিক সনদ</h5>
          </div>
        </Col>
        <Col md lg={2} className="text-center mb-4">
          <div className="custom-tiles">
            <PiFootprintsFill style={{ fontSize: "40px" }} />
            <h5 className="mt-4">মৃত্যু সনদ</h5>
          </div>
        </Col>
        <Col md lg={2} className="text-center mb-4">
          <div className="custom-tiles">
            <MdFamilyRestroom style={{ fontSize: "40px" }} />
            <h5 className="mt-4">পারিবারিক সনদ</h5>
          </div>
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className="px-3 ms-2">
        <Col md lg={2} className="text-center mb-4">
          <div className="custom-tiles">
            <FaChildDress style={{ fontSize: "40px" }} />
            <h5 className="mt-4">এতিম সনদ</h5>
          </div>
        </Col>
        <Col md lg={2} className="text-center mb-4">
          <div className="custom-tiles">
            <GiBigDiamondRing style={{ fontSize: "40px" }} />
            <h5 className="mt-4">বিবাহিত সনদ</h5>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ApplicationTilesComponent