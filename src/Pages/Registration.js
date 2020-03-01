import React, { useState } from "react"
import { Message, Table, Button, Form, Input } from "semantic-ui-react"
import InputBox from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/InputBox.js"
import Header from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Header.js"
import CustomSelect from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Select.js"
import RadioButton from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/RadioButton.js"
import CommentBox from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/CommentBox.js"
import CheckBoxes from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/CheckBoxes.js"
import styled from "styled-components"

import UserIcon from "/Users/mihirdharangaonkar/forms-app/src/Icons/User.png"
import { TOTAL_LENGTH } from "/Users/mihirdharangaonkar/forms-app/src/Constants/URI.js"
import { Modal } from "semantic-ui-react"

const Registration = ({ history }) => {
  const options = [
    { key: "af", value: "af", text: "Afghanistan" },
    { key: "ax", value: "ax", text: "Aland Islands" },
    { key: "al", value: "al", text: "Albania" },
    { key: "dz", value: "dz", text: "Algeria" },
    { key: "as", value: "as", text: "American Samoa" },
    { key: "ad", value: "ad", text: "Andorra" },
    { key: "ao", value: "ao", text: "Angola" },
    { key: "ai", value: "ai", text: "Anguilla" },
    { key: "ag", value: "ag", text: "Antigua" },
    { key: "ar", value: "ar", text: "Argentina" },
    { key: "am", value: "am", text: "Armenia" },
    { key: "aw", value: "aw", text: "Aruba" },
    { key: "au", value: "au", text: "Australia" },
    { key: "at", value: "at", text: "Austria" },
    { key: "az", value: "az", text: "Azerbaijan" },
    { key: "bs", value: "bs", text: "Bahamas" },
    { key: "bh", value: "bh", text: "Bahrain" },
    { key: "bd", value: "bd", text: "Bangladesh" },
    { key: "bb", value: "bb", text: "Barbados" },
    { key: "by", value: "by", text: "Belarus" },
    { key: "be", value: "be", text: "Belgium" },
    { key: "bz", value: "bz", text: "Belize" },
    { key: "bj", value: "bj", text: "Benin" }
  ]
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [country, setCountry] = useState("bs")
  const [date, setDate] = useState("")
  const [doc, setDoc] = useState([])
  const [comment, setComment] = useState("")
  const [gender, setGender] = useState("")
  const [popUpCountry, setPopUpCountry] = useState("")
  const [religion, setReligion] = useState(false)

  const MessageWrapper = styled.div`
    width: 600px;
    padding: 10px;
  `
  const ButtonAlign = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
  `
  const Labels = [
    { Label: "Male", value: 1 },
    { Label: "Female", value: 2 },
    { Label: "Other", value: 3 }
  ]

  const LabelName = [
    { Label: "Hindu", value: 1 },
    { Label: "Buddhist", value: 2 },
    { Label: "Jews", value: 3 }
  ]

  const values = [
    name,
    lastName,
    country,
    date,
    comment,
    religion,
    gender,
    popUpCountry,
    doc
  ]
  return (
    <Form>
      <Form.Field>
        <Header header="Enter your details" path={UserIcon} />
        <Table basic="very">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Fields</Table.HeaderCell>
              <Table.HeaderCell>Values</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Please enter your first name :</Table.Cell>
              <Table.Cell>
                <InputBox
                  type="text"
                  placeholder="FirstName"
                  id="firstName"
                  name="firstName"
                  value={name}
                  onPress={(e) => setName(e.target.value)}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Please enter your last name </Table.Cell>
              <Table.Cell>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Select your country </Table.Cell>
              <Table.Cell>
                <CustomSelect
                  id="countryDropDown"
                  name="countryDropDown"
                  options={options}
                  value={country}
                  handleChange={(e, v) => setCountry(v.value)}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Select your Gender </Table.Cell>
              <Table.Cell>
                <RadioButton
                  options={Labels}
                  value={gender}
                  handleChange={(e, v) => setGender(v.value)}
                  name="radiogroup"
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Select your religion: </Table.Cell>
              <Table.Cell>
                <CheckBoxes
                  id="religion"
                  name="religion"
                  LabelName={LabelName}
                  value={religion}
                  handleChange={(e) => setReligion(e.target.value)}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Select the Date of Birth </Table.Cell>
              <Table.Cell>
                <InputBox
                  id="date"
                  type="Date"
                  name="date"
                  value={date}
                  onPress={(e) => setDate(e.target.value)}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Select your Country for tax purpose</Table.Cell>
              <Table.Cell>
                {`${popUpCountry}`}
                <Modal trigger={<Button secondary>Add Taxation Country</Button>}>
                  <Modal.Header>Select one country</Modal.Header>
                  <Modal.Content>
                    <CustomSelect
                      id="countryDropDown"
                      name="countryDropDown"
                      options={options}
                      value={popUpCountry}
                      handleChange={(e, v) => setPopUpCountry(v.value)}
                    />
                    <Button secondary style={{ margin: "60px" }}>
                      Add
                    </Button>
                    <p> {`Do you have TIN with you?`} </p>
                    <RadioButton options={Labels} />
                  </Modal.Content>
                </Modal>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Upload the Documents</Table.Cell>
              <Table.Cell>
                <InputBox
                  id="file"
                  type="file"
                  name="fileUpload"
                  value={doc}
                  onPress={(e) => setDoc({ file: e.target.files[0].name })}
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Comments </Table.Cell>
              <Table.Cell>
                <CommentBox
                  id="comments"
                  name="comments"
                  value={comment}
                  onComment={(e) => setComment(e.target.value)}
                />
                {`${comment.length}/${TOTAL_LENGTH}`}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <MessageWrapper>
          <Message info>Please make sure you answered all fields</Message>
        </MessageWrapper>
        <ButtonAlign>
          <Button
            secondary
            onClick={() => {
              history.go(-1)
            }}
          >
            {" "}
            Back{" "}
          </Button>
          <Button
            secondary
            onClick={() => {
              history.push("./datatable")
            }}
          >
            Go To DataTable
          </Button>
          <Button
            secondary
            type="button"
            onClick={() => {
              alert(JSON.stringify(values))
              history.push(`/Success`)
            }}
          >
            {" "}
            Next{" "}
          </Button>
        </ButtonAlign>
      </Form.Field>
    </Form>
  )
}

export default Registration
