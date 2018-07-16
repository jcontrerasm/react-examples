import * as React from 'react';
import { Profile } from './Profile';
import { compose, flattenProp, renameProps, withProps } from 'recompose';

const userData = {
  username: "Juan Carlos",
  age: 26,
  phone: 978456123,
  correo: 'jcontrerasmeneses@gmail.com'
}

const enhance = compose(
  withProps({
    user: userData
  }),
  flattenProp('user'),
  renameProps({
    username: 'name',
    correo: 'email',
  })
);

export const EnhancedProfile = enhance(Profile);

export const Recompose: React.SFC<{}> = () => (
  <React.Fragment>
    <h1>Recompose</h1>
    <EnhancedProfile />
    <hr/>
  </React.Fragment>
)
