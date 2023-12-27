import React from "react";

import { Row, Col, Table, Button } from "react-bootstrap";

const PendingApplicationListComponent = () => {
  const currentDate = new Date();

  // Options for formatting the date
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  // Convert the date to Bangla
  const banglaDate = new Intl.DateTimeFormat("bn", options).format(currentDate);

  const toBanglaNumber = (number) => {
    const banglaNumbers = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return number.toString().split('').map(digit => banglaNumbers[digit]).join('');
  };

  return (
    <>
      <Row style={{ width: "100%" }} className="mt-4 px-3 ms-2">
        <Col md lg={12}>
          <Table responsive striped bordered hover className="custom-table">
            <thead>
              <tr>
                <th>ক্রমিক</th>
                <th>আবেদন নং</th>
                <th>আবেদনের তারিখ</th>
                <th>নাম</th>
                <th>পিতার নাম</th>
                {/* <th>মাতার নাম</th> */}
                <th>সনদের ধরণ</th>
                <th>বিস্তারিত</th>
                <th>আবেদনপত্র প্রিন্ট</th>
                <th>অনুমোদন</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{toBanglaNumber(1)}</td>
                <td>APP001</td>
                <td>{banglaDate}</td>
                <td>ইবতিয়াজ মাহমুদ দিলজার</td>
                <td>আবু সৈয়দ দিলজার হোসেন</td>
                {/* <td>সুবাহ তারান্নুম ঐশী</td> */}
                <td>ওয়ারিশ সনদ</td>
                <td className="text-center">
                  <Button className="custom-button-outlined">দেখুন</Button>
                </td>
                <td  className="text-center">
                  <Button className="custom-button-outlined">প্রিন্ট</Button>
                </td>
                <td>পেন্ডিং</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default PendingApplicationListComponent;
