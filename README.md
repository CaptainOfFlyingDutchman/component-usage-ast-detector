#### Purpose

This script can show if a React.js component has been used in any of the TSX files.

---

#### Steps to run the audit

```shell
cd audit
npm install
npm run start
```

After executing `npm start` you would get output as a JSON object, as shown below:

```typescript
{ 
    Component1: true,
    Component2: false
}
```
`true` infers that the component has been used and `false` infers that the components has not been used anywhere.
