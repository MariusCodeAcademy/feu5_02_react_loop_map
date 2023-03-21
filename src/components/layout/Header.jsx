import Container from '../ui/Container';
import Flex from '../ui/Flex';

function Header() {
  return (
    <header>
      <Container>
        <Flex className='spaceBetween'>
          <a href='/' className='logo'>
            Logo
          </a>
          <nav>
            <a href='#home' className='navLink'>
              Home
            </a>
            <a href='#About' className='navLink'>
              About
            </a>
            <a href='#Contact' className='navLink'>
              Contact
            </a>
          </nav>
        </Flex>
      </Container>
    </header>
  );
}
export default Header;
