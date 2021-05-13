import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputSearch from ".";

describe('<InputSearch />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();

    render(<InputSearch handleChange={fn} searchValue={'test'} />)

    const input = screen.getByPlaceholderText(/Do your research/i)
    expect(input).toBeInTheDocument();

    expect(input.value).toBe('test');
  })

  it('should have a value of searchValue', () => {
    const fn = jest.fn();

    render(<InputSearch handleChange={fn} />)

    const input = screen.getByPlaceholderText(/Do your research/i)

    const value = 'value test'

    userEvent.type(input, value)

    expect(input.value).toBe('value test')
    expect(fn).toHaveBeenCalledTimes(value.length)
  })

  it('should match snapshot', () => {
    const fn = jest.fn();

    const { container } = render(<InputSearch handleChange={fn} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
