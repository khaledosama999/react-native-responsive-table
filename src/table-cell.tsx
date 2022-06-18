import * as React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

type CellProps = {
  style?: ViewStyle
}

const Cell: React.FC<CellProps> = ({ style = {}, children }) => {
  const finalCellStyle = {
    ...styles.cell,
    ...style,
  } as any

  return <View style={finalCellStyle}>{children}</View>
}

const styles = StyleSheet.create({
  cell: {
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },
})

export default Cell
