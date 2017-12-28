import React from 'react';

import { Button, Popup } from 'semantic-ui-react'

const Hello = ({ name }) => (
  <div>
    <h1>Hello {name}!</h1>
    <Button>Click Here</Button>
    <Popup
      trigger={<Button icon='add' />}
      content='Add users to your feed'
    />
  </div>
)

export default Hello ;
