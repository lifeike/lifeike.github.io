const index = (props) => {
  return (
    <div id="certificate">
      <div className="flex justify-between">
        <div className="font-medium text-blue-600 dark:text-blue-500 underline capitalize">
          <a target="_blank" href="https://www.linkedin.com/posts/feeco_aws-saa-certificate-activity-7055594961253105664-K1ax">
            {props.title}
          </a>
        </div>
        <div> {props.description}</div>
      </div>
    </div>
  )
}

export default index
