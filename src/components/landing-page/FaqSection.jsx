'use client'
import Link from 'next/link';
import React, { useEffect } from 'react'

import { Accordion } from 'react-bootstrap';

const FaqSection = () => {

  return (
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
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do I download and install the hair salon app?</Accordion.Header>
                <Accordion.Body>
                  <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda ipsa perferendis illo impedit, et excepturi voluptatibus deleniti consectetur explicabo accusamus totam sint odio, aut nostrum quas dolores voluptatum a!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>How can I schedule an appointment with a stylist?</Accordion.Header>
                <Accordion.Body>
                <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda ipsa perferendis illo impedit, et excepturi voluptatibus deleniti consectetur explicabo accusamus totam sint odio, aut nostrum quas dolores voluptatum a!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>How can I schedule an appointment with a stylist?</Accordion.Header>
                <Accordion.Body>
                <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda ipsa perferendis illo impedit, et excepturi voluptatibus deleniti consectetur explicabo accusamus totam sint odio, aut nostrum quas dolores voluptatum a!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-6 col-12">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>What services can I book through the app?</Accordion.Header>
                <Accordion.Body>
                <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda ipsa perferendis illo impedit, et excepturi voluptatibus deleniti consectetur explicabo accusamus totam sint odio, aut nostrum quas dolores voluptatum a!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What payment methods are accepted through the app?</Accordion.Header>
                <Accordion.Body>
                <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda ipsa perferendis illo impedit, et excepturi voluptatibus deleniti consectetur explicabo accusamus totam sint odio, aut nostrum quas dolores voluptatum a!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Do I need to create an account to use the app?</Accordion.Header>
                <Accordion.Body>
                <p className="para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus assumenda ipsa perferendis illo impedit, et excepturi voluptatibus deleniti consectetur explicabo accusamus totam sint odio, aut nostrum quas dolores voluptatum a!
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-12">
            <div className="faq-ot mt-30">
              <p>Didn’t get your answer here, Feel free to write your query here
                <Link href='mailto:query@mysaloontime.com' passHref={true}>query@mysaloontime.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection