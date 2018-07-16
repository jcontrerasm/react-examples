import * as React from 'react';
import { withGists } from './constants';
import { List } from './List';

export class DataFlow extends React.Component<{}, {}> {

  constructor(props: object) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <h1>Data Flow</h1>
        <ListWithGists username="acdlite"/>
      </React.Fragment>
    );
  }
}

const ListWithGists = withGists(List);
