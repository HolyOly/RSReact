import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal } from './modal';
import CloseBtn from '../../assets/svg/close.svg';
import { describe, it, expect } from 'vitest';
import { modalTestData } from '../../data/test_data';

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

  it('check close button', () => {
    render(<Modal mode={'success'} text={''} isCloseBtn={true} />);
    const { container } = render(<CloseBtn />);
    container.hasAttribute('viewBox');
  });

  it('check for background', async () => {
    render(<Modal {...modalTestData} />);
    const inputMale = screen.getByTestId('modalBackground');
    expect(inputMale).toHaveStyle(`backgroundImage: url(${modalTestData.img})`);
  });

  it('additional check for a like', async () => {
    render(<Modal {...modalTestData} />);
    const modalText = screen.getByText(/Created at:/);
    expect(modalText).toBeInTheDocument();
    expect(modalText).toHaveClass('modal-text');
    expect(modalText).toHaveTextContent(`Created at: ${modalTestData.date}`);
  });
});
