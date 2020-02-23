import React from "react"
import { Table } from "semantic-ui-react"
import styled from "styled-components"
import Header from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Header.js"
import { useGet } from "/Users/mihirdharangaonkar/forms-app/src/Constants/useRest.js"
import Loading from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Loading.js"
import UserIcon from "/Users/mihirdharangaonkar/forms-app/src/Icons/UserDetailsIcon.png"

const BottomBorderTable = styled(Table)`
  border: none;
  text-align: top;
`

const UserDetails = ({ match }) => {
  const user = match.params.task

  const { data, loading, error } = useGet(
    `https://jsonplaceholder.typicode.com/todos/${user}`
  )

  if (loading) {
    return <Loading />
  }
  if (error) {
    alert(error.message)
  }
  return (
    <>
      <Header header="Details of user" path={UserIcon} />

      <BottomBorderTable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{data.id}</Table.Cell>
            <Table.Cell>{data.title}</Table.Cell>
            <Table.Cell>{`${data.completed}`}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </BottomBorderTable>
    </>
  )
}

export default UserDetails
