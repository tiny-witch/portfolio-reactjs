// import React from 'react'
import React, { useState } from "react";
function Projects(){
          // Modify the DOM Styles with JavaScript
  // document.body.style.backgroundColor = "blue";
  const status_options=['p5js', 'Python'];
//   var [ticker, setCount] =  useState(0);
const [count, setCount] = useState('All');
// const background=  "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60";



function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
  const tasks = [
    {
      taskId : 1,
      taskName : 'Clean the bathroom',
      projectLang: 'p5js',
      projectImg: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      taskId : 2,
      taskName : 'Learn filtering data in React',
      projectLang: 'Python',
      projectImg: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      taskId : 3,
      taskName : 'Fix the bug on React project',
      projectLang: 'Python',
      projectImg: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
      taskId : 4,
      taskName : 'Fix the car',
      projectLang: 'p5js',
      projectImg: "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60"
    }
  ]
    return(
        <div>

            <h1>Projects! Welcome.</h1>
            <p>You clicked {count} times</p>
           
            <button onClick={() => setCount('Python')}>Python</button>
            <button onClick={() => setCount('p5js')}>p5js</button>
            <button onClick={() => setCount('All')}>All</button>
            {/* <button onClick={()=>{ 
                this.setState({ count: this.state.count + 1 })
                //ticker=setCount(ticker+1);
            // console.log(ticker);
            // if (ticker >= (status_options.length)){
            //     ticker=setCount(0);
            // }
            // console.log(status_options[ticker]);
            } }>Add</button> */}

            
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
      <button onClick={() => setCount(task.taskName)}>{task.projectLang}</button></div>) 
          )
        } else if (count === 'All')  {
          return (
            tasks
        .filter(task => task.taskName.length > 0 )
        .map(task => <div id={task.taskName} className="items" style={{ 
          backgroundImage: `url(${task.projectImg})` 
      }}>{task.taskName}
      <button onClick={() => setCount(task.taskName)}>{task.projectLang}</button>
      
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
