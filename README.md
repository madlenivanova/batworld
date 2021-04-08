# HS Bespoke Features Starter

a starter template to speed up development of bespoke features and making stuff reusable

## 🚀 Quick start

1.  **Create a new BF page.**

    clone repo and

    ```shell
    npm install
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

## Suggested workflow

Replace storyId in src/pages/index.js.
add conditionals for section dividers in story.js, components/ and dato.js.
each section should include
c (component)
data
elements.
each element -
c (component)
data

1. **Setup fonts, styles and data**

Upload WOFF/WOFF2 versions of your fonts to **`/src/fonts`** and replace names and urls in fonts.js.

Setup your initial story data in **`/src/data/story`** page data in **`/src/data/app`**. Those can be edited later but the page needs them to build anything.

Setup your main typographic styles in **`/src/components/Typography`**

2. **Setup your components**

Setup your main components in **`/src/components`**.

The current structure in Dato uses Sections (layouts) and Elements inside each section.
Elements are usually repetitive across BFs (for example Paragraph or Gallery), while Sections can differ, and need to be adjusted manually.

To define unique Sections for a story:
2.1. Build them as components (for example SectionFeature.js);
2.2. Include them in utilities/story.js;
2.3. Add conditionals inside utilities/dato.js, so the Story builder can map the Dato entities to the components, for example:

```shell
if (includes(item.sectionId, 'feature')) {
  layout.c = SECTIONS.SectionFeature;
} else if (includes(item.sectionId, 'intro')) {
  layout.c = SECTIONS.SectionIntro;
}
```

Same goes for elements - in case you need to define new ones.

## 🧐 A few notes on special components

The starter includes some helpful utilities to speed up development.
Those are:

1. **LoadProvider** in **`/src/providers/LoadProvider`**

A utility to let your components know when fonts and images have loaded.
Useful if you need to setup GSAP animations or calculate component heights for some reason.

2. **ResizeProvider** in **`/src/providers/ResizeProvider`**

A utility to let your components know when the window has been resized.
See notes on how to use it inside the file.

3. **On scroll / trigger animation effects** in **`/src/effects`**

You can wrap your components inside those to create effects on scroll (fade in, zoom in, anything else that can be animated with GSAP).

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

Deploy to HS
// to do

## Using hs-specials

Install gatsby-plugin-alias-imports and add this to gatsby-config.
The react alias is necessary to avoid conflicting react versions in hs-specials and the template.

```shell
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          react: require.resolve(`${__dirname}/node_modules/react`),
          "@hs-specials": path.resolve(`../hs-specials`),
        },
        extensions: [],
      },
    },
```

Use like this:

```shell
  import Specials from '@hs-specials';
  // console.log to see what's up :)
```
