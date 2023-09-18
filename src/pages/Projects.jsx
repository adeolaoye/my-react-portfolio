import UnitProject from '../components/UnitProject';
import projectLinks from '../components/projectLinks';

const Projects = () => {
  return (
    <div id='projects'>
      {' '}
      <span
        className='section-header sm-font'
        style={{ lineHeight: 'initial' }}
      >
        what I have been working on
      </span>
      <h2>Projects</h2>
      <div
        style={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          margin: '2rem 0',
        }}
      >
        {projectLinks.map((project) => {
          return <UnitProject key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
