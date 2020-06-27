import { Config } from 'bili'

const config: Config = {
  plugins: {
    typescript2: {
      tsconfigOverride: {
        include: ['src']
      }
    }
  },
  input: 'src/index.tsx',
  output: {
    format: ['cjs-min', 'esm-min']
  }
}

export default config