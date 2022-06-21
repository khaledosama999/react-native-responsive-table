import { deepmerge } from 'deepmerge-ts'
import React, { ReactChild } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

import { BORDER_COLOR } from './constants'

type RowProps = {
  style?: ViewStyle
  children: ReactChild | ReactChild[]
  isLast?: Boolean
  lastStyle?: ViewStyle
  isFirst?: Boolean
  firstStyle?: ViewStyle
}

const Row: React.FC<RowProps> = ({
  style = {},
  children,
  isLast = false,
  isFirst = false,
  lastStyle = {},
  firstStyle = {},
}) => {
  const customStyles: any = {}

  const finalRowStyle = deepmerge(
    styles.row,
    customStyles,
    style,
    isLast ? lastStyle : {},
    isFirst ? firstStyle : {}
  ) as any

  //Get the number of children and update each child to have a flex basis, so they all have equal width
  // in the table
  const childrenArray = React.Children.toArray(children)
  const childrenArrayLength = childrenArray.length || 1
  const flexBasis = Math.floor(100 / childrenArrayLength)

  return (
    <View style={finalRowStyle}>
      {childrenArray.map((child: any, index) => {
        const childStyle = child.props.style || {}
        const isCellLast = index === childrenArray.length - 1
        const isCellFirst = index === 0

        return React.cloneElement(child, {
          style: { flexBasis: `${flexBasis}%`, ...childStyle },
          isLast: isCellLast,
          isFirst: isCellFirst,
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
