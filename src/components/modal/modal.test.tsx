import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './modal';
import { describe, it, expect } from 'vitest';

describe('Modal', () => {
  it('Render Modal component', () => {
    const { container } = render(<Modal mode={'success'} text={''} />);
    expect(container.firstChild).toHaveClass('overlay');
  });

  test('check for the presence of elements in Modal', () => {
    const title = 'Success';
    const text = 'your data is saved';

    render(<Modal mode={'success'} text={text} title={title} />);
    const modalTitle = screen.getByText(title);
    const modalText = screen.getByText(text);

    expect(modalTitle).toBeInTheDocument();
    expect(modalText).toBeInTheDocument();
    expect(modalTitle).toHaveClass('modal-header');
    expect(modalText).toHaveClass('modal-text');
  });
});
