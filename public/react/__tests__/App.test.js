import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import { App } from './App';
/**
 * @jest-environment jsdom
 */
import "regenerator-runtime/runtime";

describe('App', () => {
  const mockPages = [
    {
      id: 1,
      title: 'First Page',
      slug: 'first_page',
      content: 'This is my first page.',
      status: 'closed',
      createdAt: '2023-05-19T10:20:22.230Z',
      updatedAt: '2023-05-19T10:20:22.230Z',
      authorId: 2
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockPages)
      })
    );
  });

  it('renders the list of pages', async () => {
    const { findByText } = render(<App/>);

    await findByText('First Page');

    expect(await findByText('First Page')).toBeInTheDocument();
  });

  it('displays the page details when a page is clicked', async () => {
    const { findByText, getByText } = render(<App />);

    await findByText('First Page');

    fireEvent.click(getByText('First Page'));

    await findByText('Page Details');

    expect(await findByText('Page Details')).toBeInTheDocument();
  });

  it('returns to the list view when "Back to Wiki List" button is clicked', async () => {
    const { findByText, getByText } = render(<App />);

    await findByText('First Page');

    fireEvent.click(getByText('First Page'));

    await findByText('Page Details');

    fireEvent.click(getByText('Back to Wiki List'));

    await findByText('First Page');

    expect(await findByText('First Page')).toBeInTheDocument();
  });
});
