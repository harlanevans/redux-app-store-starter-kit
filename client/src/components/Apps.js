import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { getApps, } from '../reducers/apps';
import { Container, Header, Card, Image, } from 'semantic-ui-react';


class Apps extends React.Component {

  componentDidMount() {
    this.props.dispatch(getApps());
  }

  render() {
    return (
      <div>
        <h1>Apps Component</h1>
      </div>
    )
  }
}

export default connect()(Apps);
