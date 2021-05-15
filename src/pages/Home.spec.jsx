import { rest } from 'msw';
import { setupServer } from 'msw/node'

import { render, screen, waitForElementToBeRemoved } from "@testing-library/react"
import { Home } from "./Home";
import userEvent from '@testing-library/user-event';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts',
    async (req, res, ctx) => {
      return res(ctx.json([
        {
          userId: 1,
          id: 1,
          title: "title 1",
          body: "body 1"
        },
        {
          userId: 2,
          id: 2,
          title: "title 2",
          body: "body 2"
        },
        {
          userId: 3,
          id: 3,
          title: "title 3",
          body: "body 3"
        },
      ]));
    }),
  rest.get('https://jsonplaceholder.typicode.com/photos',
    async (req, res, ctx) => {
      return res(ctx.json([
        {
          url: 'file1.jpg'
        },
        {
          url: 'file2.jpg'
        },
        {
          url: 'file3.jpg'
        },
      ]));
    })
]

const server = setupServer(...handlers)

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  })

  afterEach(() => server.resetHandlers())

  afterAll(() => {
    server.close();
  })

  it('should render search, posts and load more', async () => {
    const { debug } = render(<Home />);
    const noMorePosts = screen.getByText('Não existem Posts!');

    await waitForElementToBeRemoved(noMorePosts)

    const search = screen.getByPlaceholderText(/research/);

    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(3);

    const button = screen.getByRole('button', { name: /Load/i });
    expect(button).toBeInTheDocument();
  })

  it('should search for posts', async () => {
    const { debug } = render(<Home />);
    const noMorePosts = screen.getByText('Não existem Posts!');

    await waitForElementToBeRemoved(noMorePosts)

    const search = screen.getByPlaceholderText(/research/);

    userEvent.clear(search, /title 1/i)
    expect(screen.getByRole('heading', { name: /title 1/i }))
    .toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /title 2/i }))
    .toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /title 3/i }))
    .toBeInTheDocument()


  })
})
