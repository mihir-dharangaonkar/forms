import React from "react"
import { Form, TextArea } from "semantic-ui-react"
import { TOTAL_LENGTH } from "/Users/mihirdharangaonkar/forms-app/src/Constants/URI.js"

const CommentBox = ({ onComment }) => {
  return (
    <>
      <Form>
        <TextArea
          rows={5}
          placeholder="Enter the detail here..."
          onChange={onComment}
          maxLength={TOTAL_LENGTH}
        />
      </Form>
    </>
  )
}

export default CommentBox
