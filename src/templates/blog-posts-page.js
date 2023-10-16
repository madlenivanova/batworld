import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";

const BlogPage = () => {
  return (
    <React.Fragment>
      <h1>blog</h1>
    </React.Fragment>
  );
};

export default BlogPage;

// export const query = graphql`
//   query BlogPostsPageQuery {
//     posts: allDatoCmsBlogPost(sort: { fields: [position], order: ASC }) {
//       edges {
//         node {
//           id
//           postTitle
//           postDate
//           slug
//           excerpt
//           fragen
//           news
//           downloads
//           twofiftyDinge
//           projekte
//           featuredImage {
//             fluid {
//               src
//               srcSet
//               aspectRatio
//             }
//             focalPoint {
//               x
//               y
//             }
//           }
//         }
//       }
//     }
//   }
// `;
