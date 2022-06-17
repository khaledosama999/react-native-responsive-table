import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, Text,View } from 'react-native'
import Table from 'react-native-responsive-table'

const App = () => {
  return (
    <SafeAreaView style={{height:'100%'}}>
      <View style={styles.container}>
        <Table isScrollable={true}>
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
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
