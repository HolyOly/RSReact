import React from 'react';
import './modal.css';

export interface IModal {
  mode: 'success' | 'error' | 'info' | 'default';
  title?: string;
  text: string;
  position?: 'top' | 'center' | 'bottom';
  isClose?: boolean;
}

export function Modal(props: IModal) {
  return (
    <div className="overlay">
      <div className="modal-container">
        <div className="modal-content">
          {props.title ? <div className="modal-header">{props.title}</div> : ''}
          <div className="modal-body">
            <div className="modal-text">{props.text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
