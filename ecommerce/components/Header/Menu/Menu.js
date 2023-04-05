import { Container, Menu, Grid, Icon, label } from "semantic-ui-react";
import Link from "next/link";

const MenuWeb = () => {
  return (
    <div className="menu">
      <Container>
        <Grid>
          <Grid.Column className="menu_left" width={6}>
            <MenuPlataforms />
          </Grid.Column>
          <Grid.Column className="menu_right" width={10}>
            <MenuOptions />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
};

const MenuPlataforms = () => {
  return (
    <Menu>
      <Link href={"/play-station"}>
        <Menu.Item>Play Station</Menu.Item>
      </Link>
      <Link href={"/x-box"}>
        <Menu.Item>Xbox</Menu.Item>
      </Link>
      <Link href={"/Switch"}>
        <Menu.Item>Switch</Menu.Item>
      </Link>
    </Menu>
  );
};

const MenuOptions = () => {
  return (
    <Menu className="menu">
      <Menu.Item>
        <Icon name="user outline" />
        Mi Cuenta
      </Menu.Item>
    </Menu>
  );
};

export default MenuWeb;
