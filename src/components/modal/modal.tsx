import React, { useContext } from 'react';
import CloseBtn from '../../assets/svg/close.svg';
import './modal.css';
import { ModalContext } from '../../GardenApp';

export function Modal(props: IModal) {
  const { changeModalStatus } = useContext(ModalContext);

  return (
    <div className="overlay" data-testid="overlay" onClick={() => changeModalStatus(false)}>
      <div className="modal-container">
        {props.isCloseBtn && (
          <div className="close" onClick={() => changeModalStatus(false)}>
            <CloseBtn />
          </div>
        )}
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {props.img && (
            <div
              className="modal-image"
              data-testid="modalBackground"
              style={{ backgroundImage: `url('${props.img}')` }}
            ></div>
          )}
          {props.title ? <div className="modal-header">{props.title}</div> : ''}
          <div className="modal-body">
            <div className="modal-text">{props.text}</div>
            {props.date && <div className="modal-text">{`Created at: ${props.date}`}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
