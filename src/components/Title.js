import React from 'react';

const Title = (props, children) => {
  return (
  <>
    <h1>Título: {props.title}</h1>
    <p>Children: <small>{props.children}</small></p>
  </>
  )
}

export default Title;