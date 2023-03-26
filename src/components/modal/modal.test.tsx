import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './modal';
import { describe, it, expect } from 'vitest';

describe('Welcome image', () => {
  it('Render Welcome component', () => {
    const { container } = render(<Modal mode={'success'} text={''} />);
    expect(container.firstChild).toHaveClass('overlay');
  });

  test('Render Welcome component', () => {
    const title = 'Success';
    const text = 'your data is saved';
    render(<Modal mode={'success'} text={text} title={title} />);
    const modalTitle = screen.getByText('Success');
    const modalText = screen.getByText('your data is saved');

    expect(modalTitle).toBeInTheDocument();
    expect(modalText).toBeInTheDocument();
    expect(modalTitle).toHaveClass('modal-header');
    expect(modalText).toHaveClass('modal-text');
  });
});
