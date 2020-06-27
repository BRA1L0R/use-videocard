import { renderHook, act } from '@testing-library/react-hooks'
import { useVideoCard } from './useVideoCard'
import ctx from 'jest-webgl-canvas-mock'

test("should return graphics information", () => {
    ctx.beginPath();
})