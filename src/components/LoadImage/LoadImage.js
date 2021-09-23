import React from 'react'
import useImage from 'react-use-image';

const LoadImage = ({project, openPopUp, setOpenPopUp}) => {
 
    const { loaded } = useImage(project.imageLink);

    if (!loaded) return null;


    return <img src={project.imageLink} alt={project.imageAlt} className={openPopUp ? "hide projects__screenshot" : "projects__screenshot"} onClick={() => setOpenPopUp(true)} />;
};


export default LoadImage
