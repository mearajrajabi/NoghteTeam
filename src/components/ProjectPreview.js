import React from 'react';

const ProjectPreview = ({src, changeState}) => {

    const clickHandler = () => {
        changeState(false, "")
    }

    return (
        <div id="previewProjectModal" onClick={clickHandler}>
            <div className="container">
                <img src={src}/>
            </div>
      </div>
    );
}

export default ProjectPreview;
