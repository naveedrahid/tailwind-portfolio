import React from 'react'

export default function SanitizedHtml(sanitizedHtmlField) {
  return (
    <div dangerouslySetInnerHTML={{ __html: sanitizedHtmlField }} />
    );
}
