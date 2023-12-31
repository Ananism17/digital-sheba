import React, { useEffect, useState } from "react";

//axios
import axios from "axios";
import { BASE_URL } from "../../base";

//redux imports
import { connect } from "react-redux";

//react-bootstrap
import { Row, Col } from "react-bootstrap";

//loader
import { LineWave } from "react-loader-spinner";

//icons
import { MdEmail } from "react-icons/md";
import { FaMobile } from "react-icons/fa";

const ProfileDetailsComponent = ({ token }) => {
  //helper
  const [profileDetails, setProfileDetails] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchProfileDetails();
  }, []);

  //fetch-profile-details
  const fetchProfileDetails = () => {
    const apiUrl = BASE_URL + "nagorik/v1/user/profile";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        console.log(response.data);
        if (response.data.status) {
          setProfileDetails(response.data.data);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loader ? (
        <div className="loader-container">
          <LineWave visible={true} height="400" width="400" color="darkcyan" />
        </div>
      ) : (
        <>
          <Row style={{ width: "100%" }} className="px-3 ms-2">
            <Col md lg={4} className="mt-4 text-center">
              <img
                src="images/profile.avif"
                alt=""
                style={{ borderRadius: "50%" }}
                height={300}
                width={300}
              />
            </Col>
            <Col md lg={8} className="mt-5">
              <Row>
                <Col>
                  <span className="custom-header">{profileDetails?.name}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="custom-text">
                    <MdEmail className="mb-1" /> {profileDetails?.email}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="custom-text">
                    <FaMobile className="mb-1" /> {profileDetails?.mobile}
                  </span>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <span className="custom-text-bold">বিভাগ: </span>
                  <span className="custom-text">
                    {
                      profileDetails?.union?.upazilla?.district?.division
                        ?.bn_name
                    }
                  </span>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md>
                  <span className="custom-text-bold">জেলা: </span>
                  <span className="custom-text">
                    {
                      profileDetails?.union?.upazilla?.district?.bn_name
                    }
                  </span>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <span className="custom-text-bold">উপজেলা: </span>
                  <span className="custom-text">
                    {
                      profileDetails?.union?.upazilla?.bn_name
                    }
                  </span>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <span className="custom-text-bold">ইউনিয়ন: </span>
                  <span className="custom-text">
                    {
                      profileDetails?.union?.bn_name
                    }
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(ProfileDetailsComponent);
