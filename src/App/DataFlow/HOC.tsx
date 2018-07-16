import * as React from 'react';

interface ComponentStates {
  data: object[];
}

export const withData = (url: any) => (Component: React.ComponentType) => (
  class extends React.Component<any, ComponentStates> {

    constructor(props: any) {
      super(props)
      this.state = { data: [] }
    }

    componentDidMount() {
      this.getData();
    }

    getData() {
      const endpoint = typeof url === 'function'
        ? url(this.props)
        : url;

      fetch(endpoint)
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }

  }
);
