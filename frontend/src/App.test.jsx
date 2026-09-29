import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('muestra el título y aumenta el contador al hacer clic', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Get started')

    const boton = screen.getByRole('button', { name: /count is 0/i })
    fireEvent.click(boton)
    expect(boton.textContent).toBe('Count is 1')
  })
})
