import React from 'react';
import MiddleLayout from 'components/MiddleLayout';

type IProps = {};
interface IState {}

class About extends React.Component<IProps, IState> {
  componentDidMount() {
    console.log('About componentDidMount');
  }
  getStyle = () => {
    const container = {
      background: 'green',
    };
    return {
      container,
    };
  }
  public render() {
    const style = this.getStyle();
    return (
      <MiddleLayout route={'about'}>
        <div style={style.container}>
          About
        </div>
      </MiddleLayout>
    );
  }
}
export default About;
