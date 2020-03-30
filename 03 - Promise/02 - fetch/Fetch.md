# Fetch

## Fetch Example

```js
fetch(`https://api.github.com/user/getify`).then(
  // on Fulfilled
  response => {
    consolelog(response);
  },
  // on Rejected
  error => {
    console.error(error);
  }
);
```
