import { ListGroup } from "react-bootstrap";

const Skills = () => {

  return (
    <>
      <div class="page-title">
        <p>My special skills and attributes</p>
      </div>
      <div class="skills-container">
        <h3 class="skills-title">
          Skills & Attributes:
        </h3>
        <ListGroup class="skills-list">
          <ListGroup.Item>Fast Learner</ListGroup.Item>
          <ListGroup.Item>Always wanting to expand my knowledge</ListGroup.Item>
          <ListGroup.Item>Passionate about IT</ListGroup.Item>
          <ListGroup.Item>Able to work individually or in a group</ListGroup.Item>
          <ListGroup.Item>Aim for excellence</ListGroup.Item>
          <ListGroup.Item>Laid-back but serious when need </ListGroup.Item>
          <ListGroup.Item>Work well under pressure</ListGroup.Item>
          <ListGroup.Item>Committed worker</ListGroup.Item>
        </ListGroup>
      </div>
    </>
  )
}

export default Skills

