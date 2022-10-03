import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
// import Singup from "../Singup/Signup";

// const Link

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Signup")
    alert("payment")
  }
   

  const handleClick1 = () => {
    navigate("/")
    alert("Home")
  }
   

  return (
    <Container zIndex={2} pos="fixed" maxW="100%" bg="black" color="white" height="80px">
      <Flex py="1rem" my={0.5}>
        <Image
          onClick={handleClick1}
          mt="-10px"
          ml="40px"
          boxSize="65px"
          objectFit="logo"
          src="https://tv.apple.com/assets/brands/Apple_TV_plus_logo_white-2721485772b7d06c4e33379ce990870e.svg"
          alt="appleTv+ logo"
        />

        <Spacer />
        <Flex>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              border="1px"
              width=""
              variant="Outline"
              bg="black"
              color="gray.200"
              //   children={<SearchIcon color="gray.300" />}
              placeholder="Search"
              fontWeight="bold"
            />
          </InputGroup>
          
          <Button onClick={handleClick} bg="#007aff" mx={2} >
          <Link to="/Singup">
              SIGNUP
              </Link>
          </Button>
          
         
        </Flex>
      </Flex>
    </Container>
  );
}

export default Navbar;
