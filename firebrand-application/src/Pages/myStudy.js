import { ListGroup } from "react-bootstrap";

const MyStudy = () => {

  return (
    <>
      <div class="page-title">
        <p>What I can do and what I have studied</p>
      </div>

      <div class="paragraph-title">
        <p>Papers I've studied: </p>
      </div>
      <div class="column-wrapper">
        <div class="paper-container-left">
          <h3>
            First year:
          </h3>
          <ListGroup class="papers-list">
            <ListGroup.Item>Programming 1 - Command line C++</ListGroup.Item>
            <ListGroup.Item>Programming 2 - Object Orientated C++</ListGroup.Item>
            <ListGroup.Item>Professional Practice - Interview skills, Git useage, Communication, Planning</ListGroup.Item>
            <ListGroup.Item>Maths for IT - Encrpytion, Logic gates, Probability, Trigonometry, Binary</ListGroup.Item>
            <ListGroup.Item>Web 1 - HTML, CSS, Basic Javascript</ListGroup.Item>
            <ListGroup.Item>System Analysis - SQlite, Database Design </ListGroup.Item>
            <ListGroup.Item>Platforms and Devices - Hardware, inner workings of computers</ListGroup.Item>
            <ListGroup.Item>Intro to networking - Setting up switches and routers</ListGroup.Item>
          </ListGroup>
        </div>

        <div class="paper-container-right">
          <h3>
            Second year:
          </h3>
          <ListGroup class="papers-list">
            <ListGroup.Item>Studio 3 - Introduction to Laravel (PHP), Group work, agile workflow</ListGroup.Item>
            <ListGroup.Item>Studio 4 - Expanding on studio 3, working as specific roles</ListGroup.Item>
            <ListGroup.Item>Intro to app development - Built API using Laravel with CRUD functionality and frontend using react and reactstrap/bootstrap</ListGroup.Item>
            <ListGroup.Item>Intermediate app development - Industry standard programming techniques</ListGroup.Item>
            <ListGroup.Item>Embedded Systems - Worked as a team to create a robot that aligns with one or more of the 17 unsdg</ListGroup.Item>
            <ListGroup.Item>Robotics - Created a line follwing robot using different states</ListGroup.Item>
            <ListGroup.Item>Databases 2 - mySQL database, database design, database secuirty, normalisation</ListGroup.Item>
            <ListGroup.Item>Operating systems concepts - Linux, backup scripts, file transfer</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </>
  )
}

export default MyStudy