# Hooks

#### useState

- its used to manage local state
- [state, setstate] -> structure

```javascript
const [count, setCount] = useState(0);
```

- with typescript

```typescript
const [count, setCount] = useState<number>(0);
```

- to change state

```javascript
function changeState(value) {
  setState(value);
}
changeState(2);
console.log(state); // 2
```

#### useEffect
- its for lifecycle
- run one time
```javascript
useEffect(() => {
  console.log("Hello")
},[])
```
- run every time the dependency change
```javascript
const [user, setUser] = useState();
useEffect(() => {
  console.log("Hello")
},[user])
```

#### useContext
- set theme light or dark
```javascript
import { createContext } from "react"

export const ThemeContext = createContext("light")

import { ThemeContext } from "./ThemeContext"

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Home />
    </ThemeContext.Provider>
  )
}

import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function Home() {
  const theme = useContext(ThemeContext)

  return <Text>Theme: {theme}</Text>
}
```
- Its possible combine useState and useContext
```javascript
import { createContext, useState } from "react"

export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  function login(name) {
    setUser({ name })
  }

  function logout() {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}
```