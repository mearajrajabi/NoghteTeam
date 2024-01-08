import { useRef } from "react";
import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl , changeState}) => {
  
  const image = useRef(null);
  const clickHandler = () => {  
    changeState(true, image.current.src)
  }

  return (
    <>
    <Col size={12} sm={6} md={4} >
      <div className="proj-imgbx" >
        <img src={imgUrl} ref={image}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button onClick={clickHandler} id="previewBtn">Preview</button>
        </div>
      </div>
    </Col>

    </>
  )
}
