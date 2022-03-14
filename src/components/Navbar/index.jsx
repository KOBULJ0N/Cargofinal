import React, { useState } from "react";
import {
  Brandname,
  Container,
  Wrapper,
  But,
  ButtonOrange,
  Text,
  Phone,
  Flex,
  Search,
  Hamburger,
  MenuMobile,
  Menubut,
} from "./style";

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Container>
      <MenuMobile.Wrap>
        <Menubut.Wrap>
          <Menubut
            type="primary"
            onClick={toggleCollapsed}
            style={{ marginBottom: 16 }}
          >
            <Hamburger />
          </Menubut>
        </Menubut.Wrap>
        {!collapsed && (
          <Flex col>
            <But col>Driver Application</But>
            <ButtonOrange col>Get A Quote</ButtonOrange>
          </Flex>
        )}
      </MenuMobile.Wrap>

      {collapsed && <Brandname />}
      {collapsed && (
        <Wrapper>
          <But>Driver Application</But>
          <ButtonOrange>Get A Quote</ButtonOrange>
          <Flex>
            <Phone />
            <Text>Call</Text>
          </Flex>
          <Search />
          <Flex>
            <Hamburger />
            <Text>Menu</Text>
          </Flex>
        </Wrapper>
      )}
    </Container>
  );
};
export default Navbar;
