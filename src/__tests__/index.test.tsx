import React from 'react'
import { Text } from 'react-native'
import renderer from 'react-test-renderer'

import Table from '../index'

describe('Table', () => {
  it('Renders a normal table correctly', () => {
    const normalTable = renderer
      .create(
        <Table isScrollable={false}>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 1</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 2</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 3</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 4</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 5</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 6</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTable).toMatchSnapshot()
  })

  it('Renders a normal table with one row correctly', () => {
    const normalTableWithOneRow = renderer
      .create(
        <Table isScrollable={false}>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 1</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 2</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTableWithOneRow).toMatchSnapshot()
  })

  it('Renders a normal table with one row and one cell correctly', () => {
    const normalTableWithOneRowAndCell = renderer
      .create(
        <Table isScrollable={false}>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 1</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTableWithOneRowAndCell).toMatchSnapshot()
  })

  it('Renders a scrollable table correctly', () => {
    const normalTable = renderer
      .create(
        <Table isScrollable={true}>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 1</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 2</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 3</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 4</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 5</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 6</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTable).toMatchSnapshot()
  })

  it('Renders a normal table with overridden styles correctly', () => {
    const scrollableTable = renderer
      .create(
        <Table isScrollable={true} style={{ borderWidth: 4 }}>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 1</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 2</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 3</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 4</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell>
              <Text>text 5</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 6</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(scrollableTable).toMatchSnapshot()
  })

  it('Renders a normal table with one row and overridden styles correctly', () => {
    const normalTableWithOneRowAndOverRiddenStyles = renderer
      .create(
        <Table isScrollable={false}>
          <Table.Row
            lastStyle={{ borderBottomWidth: 0 }}
            style={{ borderWidth: 5 }}
          >
            <Table.Cell>
              <Text>text 1</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 2</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTableWithOneRowAndOverRiddenStyles).toMatchSnapshot()
  })

  it('Renders a normal table with one row and cell with overridden styles correctly', () => {
    const normalTableWithOneRowAndOneCell = renderer
      .create(
        <Table isScrollable={false}>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell style={{ borderRadius: 4 }}>
              <Text>text 1</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTableWithOneRowAndOneCell).toMatchSnapshot()
  })

  it('Renders a normal table with row overridden last styles correctly', () => {
    const normalTableWithOneRowWithLastStyle = renderer
      .create(
        <Table isScrollable={false}>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell style={{ borderRadius: 4 }}>
              <Text>text 1</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell style={{ borderRadius: 4 }}>
              <Text>text 1</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTableWithOneRowWithLastStyle).toMatchSnapshot()
  })

  it('Renders a normal table with cell overridden last styles correctly', () => {
    const normalTableWithCellLastStyle = renderer
      .create(
        <Table isScrollable={false}>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell lastStyle={{ borderRadius: 4 }}>
              <Text>text 1</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row lastStyle={{ borderBottomWidth: 0 }}>
            <Table.Cell lastStyle={{ borderRadius: 5 }}>
              <Text>text 1</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTableWithCellLastStyle).toMatchSnapshot()
  })

  it('Renders a normal table with row overridden first styles correctly', () => {
    const normalTableWithOneRowWithLastStyle = renderer
      .create(
        <Table isScrollable={false}>
          <Table.Row firstStyle={{ borderWidth: 0 }}>
            <Table.Cell style={{ borderRadius: 4 }}>
              <Text>text 1</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell style={{ borderRadius: 4 }}>
              <Text>text 1</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTableWithOneRowWithLastStyle).toMatchSnapshot()
  })

  it('Renders a normal table with cell overridden first styles correctly', () => {
    const normalTableWithCellLastStyle = renderer
      .create(
        <Table isScrollable={false}>
          <Table.Row>
            <Table.Cell firstStyle={{ borderWidth: 4 }}>
              <Text>text 1</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>text 2</Text>
            </Table.Cell>
          </Table.Row>
        </Table>
      )
      .toJSON()

    expect(normalTableWithCellLastStyle).toMatchSnapshot()
  })
})
