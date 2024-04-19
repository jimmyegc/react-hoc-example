import withAuthentication from "./AuthHOC"

const DefaultComponent = () => {
  const handleClick = () => {
    console.log('default click!')
  }

  return (<>
    <div onClick={handleClick}>DefaultComponent</div>
  </>)
}

export default withAuthentication(DefaultComponent)