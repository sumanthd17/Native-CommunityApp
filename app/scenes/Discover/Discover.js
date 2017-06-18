import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  Image,
} from 'react-native';

import ViewContainer from '../../components/ViewContainer';
import StatusbarBackground from '../../components/StatusbarBackground';
import DiscoverListItem from './DiscoverListItem'

export default class Discover extends Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2'])
    }
  }

  _renderRow(rowData) {
    return (
      <DiscoverListItem name='Sumanth' env='trails' pace='4:45'/>
    )
  }

  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          marginLeft: 30,
          marginRight: 30,
          height: adjacentRowHighlighted ? 4 : 2,
          backgroundColor: adjacentRowHighlighted ? '#385998' : 'rgba(0,0,0,0.1)',
        }}
      />
    );
  }
  render() {
    return (
      <ViewContainer>
        <StatusbarBackground />
        <View style={styles.container}>
          <Text>THESE PEOPLE ARE READY TO RUN</Text>
          <Text>GO OUT, MEET NEW PEOPLE, EXPLORE NEW TRAILS</Text>
          <Text>AND HAVE FUN</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSeparator={this._renderSeparator}
        />
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
    //justifyContent: 'flex-start',
  }
});
