const index = (props) => {
  return (
    <div id="job" className="my-2">
      <div className="flex justify-between">
        <div className="font-bold">{props.companyName} </div>
        <div className="font-bold">{props.location}</div>
      </div>
      <div className="flex justify-between">
        <div className="font-semibold"> {props.title} </div>
        <div className="font-semibold"> {props.date}</div>
      </div>
      <div className="p-2">
        {props?.descriptions?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </div>
  )
}

export default index
