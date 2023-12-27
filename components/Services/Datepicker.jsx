import React from "react";

import { Row, Col, Button } from "react-bootstrap";

// date
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Datepicker = ({ selectedDate, onChange }) => {
  return (
    <>
      <DatePicker
        dateFormat="dd MMMM, yyyy"
        selected={selectedDate}
        onChange={onChange}
        className="custom-datepicker"
        wrapperClassName="custom-datepicker-wrapper"
        calendarClassName="custom-calendar"
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          return (
            <>
              <Row>
                <Col>
                  <Button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                    className="custom-button-contained me-3"
                    size="sm"
                  >
                    <IoIosArrowBack />
                  </Button>
                  {moment(date).format("MMMM, yyyy")}
                  <Button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                    className="custom-button-contained ms-3"
                    size="sm"
                  >
                    <IoIosArrowForward />
                  </Button>
                </Col>
              </Row>
            </>
          );
        }}
      />
    </>
  );
};

export default Datepicker;
