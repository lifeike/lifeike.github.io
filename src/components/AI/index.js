import React, { useState, useRef, useEffect, memo } from "react"
import Joi from "joi"
import { connect } from "react-redux"
import { produce } from "immer"

const initialState = {}
const schema = Joi.object({})
const index = (props) => {
  const [data, setData] = useState(initialState)
  const loadData = async () => {}
  useEffect(() => {
    loadData()
    return () => setData(initialState)
  }, [])
  return (
    <div>
      <h2>ai resume</h2>
    </div>
  )
}

export default connect(null, null)(index)
