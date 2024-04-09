import React from 'react'

export default function SanitizedHtml({sanitizedHtmlField}) {
  return (
    <div className='my-4' dangerouslySetInnerHTML={{ __html: sanitizedHtmlField }} />
    );
}
