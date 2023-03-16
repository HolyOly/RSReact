import React from 'react';

export function Icon(props: IIcon) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ width: `${props.width}`, height: `${props.height}`, color: props.color }}
    />
  );
}
