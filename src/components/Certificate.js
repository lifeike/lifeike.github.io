const index = (props) => {
  return (
    <div id="certificate">
      <div className="flex justify-between">
        <div className="font-medium text-blue-600 dark:text-blue-500 underline capitalize"> {props.title} </div>
        <div> {props.description}</div>
      </div>
    </div>
  )
}

export default index
