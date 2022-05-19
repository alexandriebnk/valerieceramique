import React from 'react';

const ParagraphHTML = ({ content }) => (
  <p
    dangerouslySetInnerHTML={{
      __html: content.replace(/\n/g, '<br />'),
    }}
  ></p>
);

export default ParagraphHTML;
