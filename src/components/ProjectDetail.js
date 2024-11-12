const index = (props) => {
  return (
    <div id="project">
      <div className="grid grid-cols-3">
        <div className="font-bold"> {props.title} </div>
        <div> {props.description}</div>
        <div className="flex justify-end">
          {props.links.map((item, index) => (
            <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank" href={item.url} key={item.url}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default index
