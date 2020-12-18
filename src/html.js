import React from "react";
import PropTypes from "prop-types";

function defaultOutput(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

export default function HTML(props) {
  console.log('GATSBY_OUTPUT_JSON', process.env.GATSBY_OUTPUT_JSON)

  const head = props.headComponents.map(({ props, type }) => ({
    ...props,
    type,
  }));

  const postBody = props.postBodyComponents.map(({ props, type, key }) => ({
    ...props,
    type,
    key
  }));

  const body = props.body;

  return process.env.GATSBY_OUTPUT_JSON ? (
    <hsInteractiveStory
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ head, body, postBody }) }}
    />
  ) : defaultOutput(props);
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
