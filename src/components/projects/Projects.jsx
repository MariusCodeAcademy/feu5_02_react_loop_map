import Container from './../ui/Container';

const prArr = [
  { id: 1, title: '', img: '' },
  { id: 1, title: '', img: '' },
  { id: 1, title: '', img: '' },
  { id: 1, title: '', img: '' },
  { id: 'h1', title: '', img: 'bg' },
];

function Project({ title, img }) {
  return (
    <div className='img-box'>
      <h3 className='img-title'>{title}</h3>
      <img src={img} alt='Some House' />
    </div>
  );
}

function Projects() {
  return (
    <section className='projects'>
      <Container>
        <h2 className='section-title'>Projects</h2>
        <div className='row1'>
          <Project title='House' img='/images/house5.jpg' />

          <div className='img-box'>
            <h3 className='img-title'>Some House</h3>
            <img src='/images/cat.jpg' alt='Some House' />
          </div>
          <div className='img-box'>
            <h3 className='img-title'>Some House</h3>
            <img src='/images/house3.jpg' alt='Some House' />
          </div>
          <div className='img-box'>
            <h3 className='img-title'>Some House</h3>
            <img src='/images/house2.jpg' alt='Some House' />
          </div>

          <div className='img-box-bg' id='h1'>
            <h3 className='img-title-bg'>Some House</h3>
          </div>
          <div className='img-box-bg' id='h2'>
            <h3 className='img-title-bg'>Some House</h3>
          </div>
          <div className='img-box-bg' id='h3'>
            <h3 className='img-title-bg'>Some House</h3>
          </div>
          <div className='img-box-bg' id='h4'>
            <h3 className='img-title-bg'>Some Mantion</h3>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Projects;
