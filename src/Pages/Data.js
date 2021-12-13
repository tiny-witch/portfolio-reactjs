const projectsData = [
    {
      id: 0,
      title: 'Word count estimator',
      image: wce,
      link: 'https://github.com/bootphon/word-count-estimator',
      description: (
        <p>Implementation of the <b><a href='https://www.sciencedirect.com/science/article/pii/S0167639318304205'>automatic word count estimation algorithm</a></b> (Räsänen, Okko, et al., 2019).</p>
      ),
      tags: [
        {
          text: 'Python',
          color: 'var(--green)',
          backgroundColor: 'var(--bg-green)',
        },
        {
          text: 'ML',
          color: 'var(--red)',
          backgroundColor: 'var(--bg-red)',
        },
      ]
    },
    {
      id: 1,
      title: 'Robot Surface Detection',
      image: tau,
      description: (
        <div>
          <p><b>Kaggle competition</b> : recognize floor surfaces using data collected from Inertial Sensors.</p>
          <p><b>Third team</b> out of 105.</p>
        </div>
      ),
      link: 'https://www.kaggle.com/c/robotsurface/overview',
      tags: [
        {
          text: 'Python',
          color: 'var(--green)',
          backgroundColor: 'var(--bg-green)',
        },
        {
          text: 'ML',
          color: 'var(--red)',
          backgroundColor: 'var(--bg-red)',
        },
      ]
    },
    {
      id: 2,
      title: 'Tiger Compiler',
      image: tiger,
      description: (
        <div>
          <p>Semester long school project to build the <b>frontend of a Tiger compiler</b></p>
        </div>
      ),
      link: 'https://assignments.lrde.epita.fr/index.html',
      tags: [
        {
          text: 'C++',
          color: 'var(--blue)',
          backgroundColor: 'var(--bg-blue)',
        },
      ]
    },
    {
      id: 3,
      title: 'Real-time transparency',
      image: stoch,
      description: (
  
        <p><b>Stochastic methods</b> for real-time transparency in the <b>browser</b>.</p>
      ),
      link: 'https://github.com/SabineHU/PFEE_Stochastic_Transparency',
      tags: [
        {
          text: 'JS',
          color: 'var(--orange)',
          backgroundColor: 'var(--bg-orange)',
        },
        {
          text: 'ThreeJS',
          color: 'var(--cyan)',
          backgroundColor: 'var(--bg-cyan)',
        },
        {
          text: 'GLSL',
          color: 'var(--pink)',
          backgroundColor: 'var(--bg-pink)',
        },
      ]
    },
    {
      id: 4,
      title: 'Path tracer',
      image: pathtracer,
      description: (
        <p>
          Path tracing in C++ for Physically Based Rendering. <b>CPU parallelized</b> and optimized with <b>Bounding Volume Hierarchy</b>.
        </p>
      ),
      link: 'https://github.com/MedericCar/pathtracer',
      tags: [
        {
          text: 'C++',
          color: 'var(--blue)',
          backgroundColor: 'var(--bg-blue)',
        },
      ]
    },
    {
      id: 5,
      title: 'Personal website',
      image: website,
      description: (
        <p>
          Website made from scratch in <b>functional React</b>. Features a <b>homepage 3D animation</b>.
        </p>
      ),
      link: 'https://github.com/MedericCar/portfolio',
      tags: [
        {
          text: 'React',
          color: 'var(--purple)',
          backgroundColor: 'var(--bg-purple)',
        },
        {
          text: 'ThreeJS',
          color: 'var(--cyan)',
          backgroundColor: 'var(--bg-cyan)',
        },
        {
          text: 'GLSL',
          color: 'var(--pink)',
          backgroundColor: 'var(--bg-pink)',
        },
      ]
    },
  ]
  
  export { projectsData }