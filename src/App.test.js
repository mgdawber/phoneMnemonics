import { render, screen } from '@testing-library/react'
import App from './App'

beforeAll(() => render(<App />))

test('renders the app', () => {
  expect(screen.getByRole('heading')).toBeInTheDocument()
});

test('has 12 buttons', () => {
  const items = screen.getByRole('button')
  expect(items).toHaveLength(10)
});
