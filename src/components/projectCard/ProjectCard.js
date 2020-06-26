import React from 'react';
import './ProjectCard.css';
import Carousel from '../carousel/Carousel.js';
import Close from '../../assets/icons/close.svg';


function Card(props) {
    return(
        <div className="card" onClick={props.onClick}>
            <img src={props.projectData.CardImage} alt={props.projectData.CardTitle}/>
            <div className="overlay">
                <b className="cardTitle" style={ { "color": props.projectData.Color} }>{props.projectData.CardTitle}</b>
                {/* <b className="cardTitle" >{props.projectData.CardTitle}</b> */}
            </div>
        </div>
    )
}

function ProjectDetails(props) {
    return(
        <div className="projectDetails" style={ { "backgroundColor": props.projectData.Color} }>
            <img src={Close} alt="close" className="close" onClick={props.onClick}/>
            <div className="details">
                <Carousel slides={props.projectData.CarouselMedia}></Carousel>
                <div className="projectInfo">
                    <h2 className="projectTitle" style={ { "color": props.projectData.ColorTitle } }>{props.projectData.ProjectTitle}</h2>
                    {/* <h2 className="projectTitle">{props.projectData.ProjectTitle}</h2> */}
                    <p className="projectTech">Thechnology: {props.projectData.ProjectTech}</p>
                    {
                        props.projectData.ProjectLink
                        ? <div>
                            <p className="projectTech">Link: 
                            <a href={props.projectData.ProjectLink} className="projectLink" > {props.projectData.ProjectLink}</a></p> 
                            <p className="projectDescription2">{props.projectData.ProjectDescription}</p>
                        </div>
                        : <p className="projectDescription">{props.projectData.ProjectDescription}</p>
                    }
                </div>
            </div>
        </div>
    )
}

class ProjectCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleOpenCard: false
        }
      
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            toggleOpenCard: !state.toggleOpenCard
        }));
    }

    render() {
        return (
            <div>
                {
                    this.state.toggleOpenCard 
                    ? <ProjectDetails onClick={this.handleClick} projectData={this.props.projectData}/>
                    : <Card onClick={this.handleClick} projectData={this.props.projectData}/>
                }
            </div>
        )
    }
}

export default ProjectCard;