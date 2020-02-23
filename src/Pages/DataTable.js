import React, { useState } from "react"
import styled from "styled-components"
import Header from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Header.js"
import { Table } from "semantic-ui-react"
import { USERS } from "/Users/mihirdharangaonkar/forms-app/src/Constants/URI.js"
import Loading from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Loading.js"
import { useGet } from "/Users/mihirdharangaonkar/forms-app/src/Constants/useRest.js"
import ImageView from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/ImageView.js"
import logo from "/Users/mihirdharangaonkar/forms-app/src/Icons/icons8-right-24.png"
import { toast } from "react-toastify"
import TableIcon from "/Users/mihirdharangaonkar/forms-app/src/Icons/DataTable.png"

export const Wrapper = styled.div`
display: flex;
flex-direction:column;
width: 100%
align-items:center;
`
export const SearchBox = styled.input`
  border: none;
  border-bottom: 5px solid;
  width: 60%;
  height: 50px;
  margin: 30px;
  margin-left: 230px;
`

export const Minimal = styled.button`
  border: none;
  background-color: white;
  opacity: 0.2;
`

const DataTable = ({ history, match }) => {
  const [text, setText] = useState("")

  const handleClick = (id) => {
    history.push(`/userdetails/${id}`)
  }

  const { data, error, loading } = useGet(USERS)

  if (loading) {
    return <Loading />
  }
  if (error) {
    return toast.error(error.message)
  }

  return (
    <>
      <Wrapper>
        <Header header="Data Table" path={TableIcon} />
        <SearchBox
          placeholder={"Search for users..."}
          onChange={(e) => setText(e.target.value)}
        />
        {text}
        <Table basic="very" padded collapsed striped fixed sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>See Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data
              .filter((emp) => emp.title.toLowerCase().includes(text))
              .map((user) => (
                <Table.Row key={user.id}>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.title}</Table.Cell>
                  <Table.Cell>{`${user.completed}`}</Table.Cell>
                  <Table.Cell>
                    <Minimal
                      onClick={() => {
                        handleClick(user.id)
                      }}
                    >
                      <ImageView path={logo} style={{ width: 5, height: 10 }} />
                    </Minimal>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </Wrapper>
    </>
  )
}

export default DataTable
