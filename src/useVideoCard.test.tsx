import { renderHook, act } from '@testing-library/react-hooks'
import { useVideoCard } from './useVideoCard'
import ctx from 'jest-webgl-canvas-mock'

test("should return graphics information", () => {
    ctx.beginPath();
})

// TODO: Unit testing
// Currently i have not find a proper way to actually test this package,
// may fix in the future