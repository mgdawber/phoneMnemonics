import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders the app', () => {
  render(<App />)

  expect(screen.getByRole('heading')).toBeInTheDocument()
});

test('renders input', () => {
  render(<App />)

  fireEvent.click(screen.getByText('2'))

  expect(screen.getByRole('heading')).toHaveTextContent('2')
});

test('renders mnemonics list', () => {
  render(<App />)

  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('4'))

  expect(screen.getAllByRole('listitem')).toHaveLength(9)
});

test('clears the input', () => {
  render(<App />)

  fireEvent.click(screen.getByText('2'))
  fireEvent.click(screen.getByText('Clear'))

  expect(screen.getByRole('heading')).toHaveTextContent('')
});
