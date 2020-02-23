import React, { useState } from "react"
import { Form, TextArea } from "semantic-ui-react"
import { TOTAL_LENGTH } from "/Users/mihirdharangaonkar/forms-app/src/Constants/URI.js"

const CommentBox = () => {
  const [value, setValue] = useState("")
  return (
    <>
      <Form>
        <TextArea
          rows={5}
          placeholder="Enter the detail here..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
          maxLength={TOTAL_LENGTH}
        />
      </Form>
      {`${value.length}/${TOTAL_LENGTH}`}
    </>
  )
}

export default CommentBox
