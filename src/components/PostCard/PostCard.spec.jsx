import { render, screen } from '@testing-library/react';
import { PostCard } from '.';

const props = {
  attributes: {
    id: 1,
    title: 'title 1',
    body: 'body 1',
    cover: 'file.png'
  }
}

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: /title/i }))
      .toHaveAttribute('src', 'file.png');
    expect(screen.getByRole('heading', { name: 'title 1' }))
      .toBeInTheDocument();
    expect(screen.getByText('body 1'))
      .toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  })
})
