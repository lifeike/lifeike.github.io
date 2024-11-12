const index = (props) => {
  return (
    <div id="education">
      <div className="flex justify-between">
        <div> {props.schoolName} </div>
        <div> {props.location}</div>
      </div>
      <div className="flex justify-between">
        <div> {props.major} </div>
        <div> {props.date}</div>
      </div>
    </div>
  )
}

export default index
