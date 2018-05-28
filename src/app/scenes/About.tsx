import * as React from 'react';

type IProps = {};
interface IState {}

class About extends React.Component<IProps, IState> {
  componentDidMount() {
    console.log('About componentDidMount');
  }
  public render() {
    return (
      <div>
          About
      </div>
    );
  }
}
export default About;
