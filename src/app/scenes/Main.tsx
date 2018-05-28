import * as React from 'react';

interface IProps {}
interface IState {}

class Main extends React.Component<IProps, IState> {
  componentDidMount() {
    console.log('Main componentDidMount');
  }
  public render() {
    return (
      <div>
        Main
      </div>
    );
  }
}

export default Main;
