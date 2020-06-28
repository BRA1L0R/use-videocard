![](assets/logo.svg)

# `use-videocard`

## Introduction
This package is a react hook for getting the grahics card information from WebGL by creating a temporary canvas that later gets deleted

NOTE: The canvas never gets appended to DOM, so no worries

## Installation
This package can be found in the NPM registry, install it using this command:
#### With _npm_:

`npm install use-videocard`

#### With _yarn_:

`yarn add use-videocard`

## Example
```tsx
function App() {
  const graphics = useVideoCard()

  useEffect(() => {
    console.log(graphics?.unmasked.vendor + " " + graphics?.unmasked.renderer)
  })

  return (
    <div className="App">
    </div>
  );
}
```

Example output: `NVIDIA Corporation Geforce GTX 1070/PCIe/SSE2`

## Contributors
<a href="https://github.com/talentlessguy"><img style="height:auto;" alt="" src="https://avatars3.githubusercontent.com/u/35937217?s=460&amp;u=d8f2691645359f6499cd3ded31b22c202e08d00e&amp;v=4" width="80" height="80"><a/>
