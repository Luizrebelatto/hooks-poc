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
