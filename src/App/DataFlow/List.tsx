import * as React from 'react';

interface List {
  data: object[];
}

interface Gist {
  id: string,
  description: string;
}

export const List: React.SFC<List> = ({ data: gists }) => (
  <ul>
    {gists.map((gist: Gist) => (
      <li key={gist.id}>{gist.description}</li>
    ))}
  </ul>
);
