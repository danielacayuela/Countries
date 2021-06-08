import { render, screen } from '@testing-library/react';
import App from './App';
import CountryCard from './Components/CountryDetail/CountryCard.jsx'

// test('renders learn react link', () => {
//   render(<App/>);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders learn react link', () => {
  render(<CountryCard/>);
  const linkElement = screen.getByText('Code:');
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<CountryCard/>);
  const linkElement = screen.getByText('Capital:');
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<CountryCard/>);
  const linkElement = screen.getByText('Region:');
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<CountryCard />);
  const linkElement = screen.getByText('Activities:');
  expect(linkElement).toBeInTheDocument();
});

