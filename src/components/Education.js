const index = (props) => {
  return (
    <div id="education">
      <div className="flex justify-between">
        <div> {props.title} </div>
        <div> {props.description}</div>
        <div> {props.date}</div>
      </div>
    </div>
  )
}

export default index
