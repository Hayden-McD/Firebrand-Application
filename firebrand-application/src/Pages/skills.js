import { ListGroup } from "react-bootstrap";

const Skills = () => {

  return (
    <>
      <div class="page-title">
        <p>My special skills and attributes</p>
      </div>
      <div class="paper-container-left">
        <h3>
          Skills & Attributes:
        </h3>
        <ListGroup class="papers-list">
          <ListGroup.Item>Fast Learner</ListGroup.Item>
          <ListGroup.Item>Always wanting to expand my knowledge</ListGroup.Item>
          <ListGroup.Item>Passionate about IT</ListGroup.Item>
          <ListGroup.Item>Able to work induvidially or in a group</ListGroup.Item>
          <ListGroup.Item>I always strive to do my best</ListGroup.Item>
          <ListGroup.Item>Laid-back but serious when need </ListGroup.Item>
          <ListGroup.Item>Able to work under pressure</ListGroup.Item>
        </ListGroup>
      </div>
    </>
  )
}

export default Skills