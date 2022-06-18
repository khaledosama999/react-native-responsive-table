import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import Table from 'react-native-responsive-table-view'

const App = () => {
  const [tableName, setTableName] = useState('normal');

  return (
    <SafeAreaView style={{height:'100%'}}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={()=> setTableName('normal')}>
          <Text>Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setTableName("scrollable")}>
          <Text>Scrollable</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTableName("columns")}>
          <Text>Different columns</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Table isScrollable={false} style={{display: tableName === 'normal' ? 'flex':'none'}}>
          <Table.Row>
            <Table.Cell><Text>text 1</Text></Table.Cell>
            <Table.Cell><Text>text 2</Text></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Text>text 3</Text></Table.Cell>
            <Table.Cell><Text>text 4</Text></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Text>text 5</Text></Table.Cell>
            <Table.Cell><Text>text 6</Text></Table.Cell>
          </Table.Row>
        </Table>

        <Table isScrollable={true} style={{display: tableName === 'scrollable' ? 'flex':'none'}}>
          <Table.Row>
            <Table.Cell><Text>text 1</Text></Table.Cell>
            <Table.Cell><Text>text 2</Text></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Text>text 3</Text></Table.Cell>
            <Table.Cell><Text>text 4</Text></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Text>text 5</Text></Table.Cell>
            <Table.Cell><Text>text 6</Text></Table.Cell>
          </Table.Row>
        </Table>

        <Table isScrollable={true} style={{display: tableName === 'columns' ? 'flex':'none'}}>
          <Table.Row>
            <Table.Cell><Text>text 1</Text></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Text>text 2</Text></Table.Cell>
            <Table.Cell><Text>text 3</Text></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Text>text 4</Text></Table.Cell>
            <Table.Cell><Text>text 5</Text></Table.Cell>
            <Table.Cell><Text>text 6</Text></Table.Cell>
          </Table.Row>
        </Table>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonsContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    paddingHorizontal:24
  },
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    paddingHorizontal:24
  }
})
export default App
