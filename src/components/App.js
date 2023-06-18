import React from 'react'

const App = () => {
  return (
    <>
    <h1>App File</h1>
    <h1>I am running on {process.env.APP_ENV} enviornment</h1>
    <h1>My key is  {process.env.APP_KEY}</h1>
    </>
  )
}
export default App;