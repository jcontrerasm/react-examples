import * as React from 'react';

interface Profile {
  name: string;
  age: number;
  phone: string;
  email: string;
}

export const Profile: React.SFC<Profile> = ({ name, age, phone, email }) => (
  <React.Fragment>
    <div>Name: {name}</div>
    <div>Age: {age}</div>
    <div>Phone: {phone}</div>
    <div>E-mail: {email}</div>
  </React.Fragment>
)
