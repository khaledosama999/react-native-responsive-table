import { deepmerge } from 'deepmerge-ts'
import * as React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

type CellProps = {
  style?: ViewStyle
  isLast?: Boolean
  lastStyle?: ViewStyle
  isFirst?: Boolean
  firstStyle?: ViewStyle
}

const Cell: React.FC<CellProps> = ({
  style = {},
  children,
  isLast = false,
  lastStyle = {},
  isFirst = false,
  firstStyle,
}) => {
  const finalCellStyle = deepmerge(
    styles.cell,
    style,
    isLast ? lastStyle : {},
    isFirst ? firstStyle : {}
  ) as any

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
