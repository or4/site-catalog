import * as React from 'react';
import MainLayout from 'components/MainLayout';

type IProps = {}
interface IState {}

class About extends React.Component<IProps, IState> {
  public render() {
    return (
      <MainLayout>
      <div>
        About
      </div>
      </MainLayout>
    );
  }
}
export default About;
