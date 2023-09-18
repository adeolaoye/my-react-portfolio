import { BsArrowRight } from 'react-icons/bs';

const UnitProject = ({ id, title, src, url }) => {
  return (
    <a
      style={{ textDecoration: 'none', color: 'inherit' }}
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      <div className='unit-project-card'>
        <h2
          style={{
            textAlign: 'left',
            fontWeight: 900,
            fontSize: '1.1rem',
          }}
        >
          {title}
        </h2>
        <img
          style={{
            display: 'block',
            width: '260.000px',
            height: '146.178px',
            position: 'absolute',
            top: '35%',
            left: '50%',
            transform: 'translate(-50%)',
          }}
          src={src}
          alt={title}
        />
        <div className='project-arrow-icon'>
          <BsArrowRight style={{ fontSize: '2.5em', color: '#fff' }} />
        </div>
      </div>
    </a>
  );
};

export default UnitProject;
