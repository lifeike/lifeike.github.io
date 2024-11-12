const index = (props) => {
  return (
    <div id="project">
      <div className="grid grid-cols-3">
        <div className="font-bold"> {props.title} </div>
        <div> {props.description}</div>
        <div className="flex justify-end"> {props.date}</div>
      </div>
    </div>
  )
}

export default index
