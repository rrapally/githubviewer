import React, { Component } from 'react';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem } from "native-base";

import GitHubCommitView from './app/components/GitHubCommitView';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      DEFAULT_REPO: 'repos/rrapally/githubviewer',
      doUpdate: false
    }
  }

  render() {
    return ( 
      <Container>
        <Header>
          <Body>
            <Title>GitHub Commits Viewer</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Commits History: {this.state.DEFAULT_REPO}</Text>
                <GitHubCommitView repo={this.state.DEFAULT_REPO}/>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>

    );
  }
}

