

import React from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './partial/NavMenu';

export const Layout = ({name}) => {

  return (
    <div>
      <NavMenu />
        <Container>
          {name}
        </Container>
    </div>
  )
}

