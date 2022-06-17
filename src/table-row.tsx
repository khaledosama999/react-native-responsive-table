import React, { cloneElement, ReactChild } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

import { BORDER_COLOR } from './constants'

type RowProps = {
  style?: StyleSheet.NamedStyles<ViewStyle>
  children: ReactChild[]
  isLast?: Boolean
}

const Row: React.FC<RowProps> = ({ style = {}, children, isLast = false }) => {
  const customStyles: any = {}

  if (isLast) customStyles.borderBottomWidth = 0

  const finalRowStyle = {
    ...styles.row,
    ...customStyles,
    ...style,
  } as any

  //Get the number of children and update each child to have a flex basis, so they all have equal width
  // in the table
  const childrenArray = React.Children.toArray(children)
  const childrenArrayLength = childrenArray.length || 1
  const flexBasis = Math.floor(100 / childrenArrayLength)

  return (
    <View style={finalRowStyle}>
      {childrenArray.map((child: any) => {
        const childStyle = child.props || {}

        return cloneElement(child, {
          style: { flexBasis: `${flexBasis}%`, ...childStyle },
        })
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: BORDER_COLOR,
  },
})

export default Row
