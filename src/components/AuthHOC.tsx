import { useState } from "react"

const withAuthentication = (WrappedComponent) => {
  return function AuthHOC(props) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleLogin = () => {
      setIsAuthenticated(true)
    }

    const handleLogout = () => {
      setIsAuthenticated(false)
    }

    const otherHandler = () => { }

    return (<>
      {isAuthenticated ? (
        <div>
          <button onClick={handleLogout}>Cerrar sesión</button>
          <WrappedComponent {...props} />
        </div>
      ) : (
        <div>
          <p>Inicia sesión para acceder a esta página.</p>
          <button onClick={handleLogin}>Iniciar sesión</button>
        </div>
      )}
    </>)
  }
}

export default withAuthentication