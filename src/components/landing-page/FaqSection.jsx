"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

const FaqSection = (props) => {
  const { faqArray } = props;
  const [leftArr, setLeftArr] = useState([]);
  const [rightArr, setRightArr] = useState([]);
  const splitArr = (arr) => {
    if (arr) {
      const leftArr = [];
      const rightArr = [];
      arr.forEach((element, index) => {
        if (index % 2 === 0) {
          leftArr.push(element);
        } else {
          rightArr.push(element);
        }
      });
      setLeftArr(leftArr);
      setRightArr(rightArr);
    }
  };
  useEffect(() => {
    splitArr(faqArray);
  }, []);
  return (
    <>
      {faqArray && faqArray.length ? (
        <section className="light-bg sec faq-sec">
          <div className="container">
            <div className="row ">
              <div className="col-12 mb-40">
                <h3 className="sec-head text-center">
                  Frequently Asked Questions (FAQ)
                </h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-12">
                <Accordion defaultActiveKey="0">
                  {leftArr.map((item, index) => {
                    return (
                      <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>
                          <p className="para">{item.answer}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                  {/* <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How can I schedule an appointment with a stylist?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Temporibus assumenda ipsa perferendis illo impedit, et
                    excepturi voluptatibus deleniti consectetur explicabo
                    accusamus totam sint odio, aut nostrum quas dolores
                    voluptatum a!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How can I schedule an appointment with a stylist?
                </Accordion.Header>
                <Accordion.Body>
                  <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Temporibus assumenda ipsa perferendis illo impedit, et
                    excepturi voluptatibus deleniti consectetur explicabo
                    accusamus totam sint odio, aut nostrum quas dolores
                    voluptatum a!
                  </p>
                </Accordion.Body>
              </Accordion.Item> */}
                </Accordion>
              </div>
              <div className="col-lg-6 col-12">
                <Accordion defaultActiveKey="0">
                  {rightArr.map((item, index) => {
                    return (
                      <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{item.question}</Accordion.Header>
                        <Accordion.Body>
                          <p className="para">{item.answer}</p>
                        </Accordion.Body>
                      </Accordion.Item>
                    );
                  })}
                </Accordion>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-12">
                <div className="faq-ot mt-30">
                  <p>
                    Didn’t get your answer here, Feel free to write your query
                    here
                    <Link href="mailto:query@mysaloontime.com" passHref={true}>
                      query@mysaloontime.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default FaqSection;
