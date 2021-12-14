// import React from 'react'
import React, { useState } from "react";
import Fade from "react-reveal/Fade"
function Projects(){
          // Modify the DOM Styles with JavaScript
  // document.body.style.backgroundColor = "blue";
  const status_options=['p5js', 'Python'];
//   var [ticker, setCount] =  useState(0);
const [count, setCount] = useState('All');
const [hoverVisible, setVisible] = useState(0);
  const tasks = [
    {
      taskId : 1,
      taskName : 'Brightness To Opacity',
      projectLang: 'p5js',
      projectDescription: 'Takes an image and converts it from brightness to opacity',

      projectImg: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      taskId : 2,
      taskName : 'Renpy Image Directory Maker',
      projectLang: 'Python',
      projectDescription: 'Goes through image files in directory and creates a rpy file defining them',
      projectImg: 'https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60'
        
      
    },
    {
      taskId : 3,
      taskName : 'String Formatting Tutorial',
      projectLang: 'Python',
      projectDescription: 'A Notebook to teach the basics and advanced techniques for string formatting',
      projectImg: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      taskId : 4,
      taskName : '3d Object Outline Shader',
      projectLang: 'p5js',
      projectDescription: 'Lorem Ipsum',
      projectImg: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60"
    }
  ];

    return(
        <div>
          <Fade bottom>
          
            <div  className="proj-title">Projects</div>
            <p>Currently viewing {count} projects</p>
            </Fade>
            
            <div className="center">
           
            <button onClick={() => setCount('Python')}>Python</button>
            <button onClick={() => setCount('p5js')}>p5js</button>
            <button onClick={() => setCount('All')}>All</button>
            </div>

            <ul> To-do list:
            <div id="work"> 
            


            {(() => {
        if (count != 'All') {
          return (
            tasks
        .filter(task => task.projectLang === count)
        .map(task => <div id={task.taskName} className="items"
        style={{ 
          backgroundImage: `url(${task.projectImg})` 
          
      }}>{task.taskName}
      {/* Button for filter */}

      <button onClick={() => setCount(task.projectLang)}>{task.projectLang}</button>
      <div className="hide">{task.projectDescription} </div> 
      </div>
      
      ) 
          )
        } else if (count === 'All')  {
          return (
            tasks
        .filter(task => task.taskName.length > 0 )
        .map(task => <div id={task.taskName} className="items" style={{ 
          backgroundImage: `url(${task.projectImg})` 
      }}>{task.taskName}

      <button onClick={() => setCount(task.projectLang)}>{task.projectLang}</button>
      <div className="hide">{task.projectDescription} </div>    
      </div>) 
          )
        } 
        
      })()}
      </div>

      </ul>
        </div>
    )
    
}
export default Projects;
