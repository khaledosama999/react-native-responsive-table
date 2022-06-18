import React, { ReactChild } from 'react'
import { ScrollView, StyleSheet, View, ViewStyle } from 'react-native'

import { BORDER_COLOR } from './constants'
import Cell from './table-cell'
import Row from './table-row'

type TableProps = {
  style?: ViewStyle,
  isScrollable?: Boolean
  height?: Number | String
  children: ReactChild | ReactChild[]
}

const Table: React.FC<TableProps> & { Row: typeof Row; Cell: typeof Cell } = ({
  style = {},
  children,
  isScrollable = false,
  height,
}) => {
  const customStyles: any = {}
  if (height !== null || height != undefined) customStyles.height = height

  const finalTableStyle = {
    ...styles.table,
    ...customStyles,
    ...style,
  } as any

  const childrenArray = React.Children.toArray(children)
  const Container = isScrollable ? ScrollView : View

  return (
    <Container style={finalTableStyle}>
      {childrenArray.map((child: any, index) => {
        const isLast = index === childrenArray.length - 1

        return React.cloneElement(child, {
          ...child.props,
          isLast,
        })
      })}
    </Container>
  )
}

Table.Row = Row
Table.Cell = Cell

const styles = StyleSheet.create({
  table: {
    width: '100%',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    borderColor: BORDER_COLOR,
    backgroundColor: '#FFFFFF',
  },
})

export default Table
