const index = (props) => {
  return (
    <div id="certificate">
      <div className="flex justify-between">
        <div> {props.title} </div>
        <div> {props.description}</div>
      </div>
    </div>
  )
}

export default index
