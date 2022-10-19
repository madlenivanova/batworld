exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const POSTS_PER_PAGE = 9;

  return new Promise((res, rej) => {
    graphql(`
      {
        pages: allDatoCmsPage {
          edges {
            node {
              id
              pageSlug
            }
          }
        }
        blogPosts: allDatoCmsBlogPost {
          edges {
            node {
              id
              pageSlug
            }
          }
        }
      }
    `).then(result => {
      console.log(result);
      const singlePages = result.data.pages.edges;
      const blogPosts = result.data.blogPosts.edges;

      for (
        var i = 1;
        i < Math.ceil(blogPosts.length / POSTS_PER_PAGE);
        i += 1
      ) {
        createPage({
          path: `/blog/page/${i + 1}`,
          component: require.resolve(`./src/templates/blog-posts-page.js`),
        });
      }

      blogPosts.forEach((post, i) => {
        const slug = post.node.pageSlug || `post--${i}`; //63214
        const nextSlug =
          blogPosts[i === blogPosts.length - 1 ? 0 : i + 1].node.pageSlug;
        const prevSlug =
          blogPosts[i === 0 ? blogPosts.length - 1 : i - 1].node.pageSlug;

        createPage({
          path: `/blog/${slug}`,
          component: require.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: slug,
            nextSlug: nextSlug,
            prevSlug: prevSlug,
          },
        });
      });

      singlePages.forEach(page => {
        const slug = page.node.pageSlug;

        createPage({
          path: `/${slug}`,
          component: require.resolve(`./src/templates/page.js`),
          context: {
            slug: slug,
          },
        });
      });

      res();
    });
  });
};
