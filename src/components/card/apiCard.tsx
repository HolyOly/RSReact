import React, { useContext } from 'react';
import LikeFill from '../../assets/svg/like-fill.svg';
import Like from '../../assets/svg/like.svg';
import './card.css';
import { ModalContext } from '../../GardenApp';

export function CardApi(props: IFetchData) {
  const { changeModalStatus } = useContext(ModalContext);
  const { alt_description, created_at, description, likes, urls, tags } = props;

  return (
    <div
      className="card"
      onClick={() =>
        changeModalStatus(true, {
          mode: 'info',
          title: tags ? tags[0]?.title : alt_description,
          text: description,
          date: created_at?.slice(0, 10),
          img: urls?.small,
          isCloseBtn: true,
        })
      }
    >
      <div className="card-image-api" style={{ backgroundImage: `url('${urls?.small}')` }}></div>
      <div className="card-title api-title">{tags ? tags[0]?.title : alt_description}</div>
      <div className="card-description api-description">
        {description ? description : alt_description}
      </div>
      <div className="card-description">{`Created at: ${created_at?.slice(0, 10)}`}</div>
      <div className="card-like">
        <span className="api-like">{likes}</span>
        {likes ? <LikeFill /> : <Like />}
      </div>
    </div>
  );
}
