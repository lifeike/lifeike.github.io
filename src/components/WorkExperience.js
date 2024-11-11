const index = (props) => {
  return (
    <div id="job">
      <div className="flex justify-between">
        <div>{props.companyName} </div>
        <div>{props.location}</div>
      </div>
      <div className="flex justify-between">
        <div> {props.title} </div>
        <div> {props.date}</div>
      </div>
      <div>
        {props.descriptions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </div>
  )
}

export default index
