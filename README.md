![](assets/logo.svg)

# `use-videocard`
![https://www.npmjs.com/package/use-videocard](https://img.shields.io/npm/v/use-videocard?style=for-the-badge)
![](https://img.shields.io/github/languages/code-size/BRA1L0R/use-videocard?style=for-the-badge)
![https://github.com/BRA1L0R/use-videocard/blob/master/LICENSE.md](https://img.shields.io/github/license/BRA1L0R/use-videocard?style=for-the-badge)
![https://www.npmjs.com/package/use-videocard](https://img.shields.io/npm/dy/use-videocard?style=for-the-badge)

## Installation
This package can be found in the NPM registry, install it using this command:
#### With _npm_:
```
npm install use-videocard
```

#### With _yarn_:
```
yarn add use-videocard
```

## Example
```tsx
import React from 'react'
import useVideoCard from 'use-videocard'

function App() {
  const graphics = useVideoCard()

  return (
    <div className="App">
      <p>Vendor: graphics?.unmasked.vendor</p>
      <p>GPU: graphics?.unmasked.renderer</p>
    </div>
  );
}
```

## API
### `useVideoCard (gl?: WebGLRenderingContext): GraphicsInformation`
- `gl`: The WebGLRenderingContext which we want to extract the information from. _NOTE: this field is *OPTIONAL*, the hook creates a canvas without appending it to the dom, but if you really want to specify the `WebGLRenderingContext` then set this field_

### `GraphicsInformation`
```ts
interface GraphicsInformation {
    renderer: string,
    vendor: string,
    unmasked: {
        vendor: string,
        renderer: string
    }
}
```

- renderer: The masked renderer ID
- vendor: The masked vendor ID
- unmasked:
  - vendor: The unmasked vendor name. _es: `NVIDIA Corporation`_
  - renderer: The unmasked renderer name (the graphics card model and the pci version). _es: `Geforce GTX 1070/PCIe/SSE2`_

## Contributors
<a href="https://github.com/BRA1L0R"><img style="height:auto;" alt="" src="https://avatars2.githubusercontent.com/u/17928339?s=460&u=f7f92a4673f1286094c282b3ee7b46076527ac72&v=4" width="80" height="80"><a/>
<a href="https://github.com/talentlessguy"><img style="height:auto;" alt="" src="https://avatars3.githubusercontent.com/u/35937217?s=460&amp;u=d8f2691645359f6499cd3ded31b22c202e08d00e&amp;v=4" width="80" height="80"><a/>
