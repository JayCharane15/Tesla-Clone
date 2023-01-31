import React, {useState} from 'react'
import styled from 'styled-components'
// import { Menu as MenuIcon } from "@material-ui/icons";
// import MenuIcon from "@material-ui/icons/Menu";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
function Header() {
  const [burgerStauts, setBurgerStatus] = useState(0);
  return (
    <div>
        <Container>
          <a>
            <img src="/images/logo.svg"></img>
          </a>
          <Menu>
            <p><a href="#">Model S</a></p>
            <p><a href="#">Model 3</a></p>
            <p><a href="#">Model S</a></p>
            <p><a href="#">Model Y</a></p>


          </Menu>

          <RightMenu>
              <a href="#">Shop </a>
              <a href="#">Tesla Account</a>
              {/* <button>Menu</button> */}
              <CustomMenu onClick={() => setBurgerStatus(true)}/>
          </RightMenu>

          <BurgerNav show={burgerStauts}>
            <CloseWrapper>
              <CustomClose onClick={() => setBurgerStatus(false)}/>
            </CloseWrapper>
            

            <li><a href='#'>Existing inventory</a></li>
            <li><a href='#'>Existing inventory</a></li>
            <li><a href='#'>Existing inventory</a></li>
            <li><a href='#'>Existing inventory</a></li>
            <li><a href='#'>Existing inventory</a></li>
            <li><a href='#'>Existing inventory</a></li>
            <li><a href='#'>Existing inventory</a></li>
          </BurgerNav>

        </Container>
    </div>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;



`

const Menu = styled.div`

  @media(max-width: 768px){
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
      padding: 0 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;          


`

const BurgerNav = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transition: transform 0.3s ease-in;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

    }
    a{
        font-weight: 600;

    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;


`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`