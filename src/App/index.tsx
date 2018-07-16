import * as React from 'react';
import { Recompose } from './Recompose';
import { DataFlow } from './DataFlow';

export class App extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <Recompose />
        <DataFlow />
      </React.Fragment>
    );
  }
}
