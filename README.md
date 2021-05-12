# HS Bespoke Features Starter

A starter template for speedier, more sustainable development of bespoke features.

Preview the starter template here:
[hs-sample-bespoke-feature.netlify.app](https://hs-sample-bespoke-feature.netlify.app/)

## 🚀 Quick start

1.  **Create a new BF page.**

clone repo and

```shell
npm install
gatsby develop
```

Your site is now running at `http://localhost:8000`!

## Suggested workflow

1. **Setup your story in DatoCMS**

Have a look at the [current sample story](https://interactive-stories.admin.datocms.com/editor/item_types/526134/items/38786796/edit) that the starter template uses:

The current structure in Dato uses Section Dividers and Elements inside each section (as Dato does not allow for defacto nested content at this point).
Elements are usually repetitive across bespoke features (for example Paragraph or Gallery), while Sections can differ, and might need to be adjusted manually. However, most stories have three types of sections: Intro, Feature, Footer, and those are currently predefined in the components folder.

On Dato level, sections are differentiated via their section-id.
It doesn't have to be unique, but in order for a section to be recognized as an intro section, the id needs to include it as a string, for example "section-intro". Same goes for feature and footer.

**Defining custom sections and elements**

If you need to define a custom section, use the same approach, and name the id something unique, for example "section-davidbowie". Build a component for it, and include it in utilities/story.js. Then in utilities/dato.js (line 32-40), do something like:

```shell
(...)
else if (includes(item.sectionId, "davidbowie")) {
  layout.c = SECTIONS.SectionDavidBowie;
}
```

_Please abstain from adding custom elements (blocks), unless absoulutely necessary!!! And discuss it with me first!!! More exclamation marks!!!!!_

**Adding custom props to sections or elements**

Sometimes you may need to add a custom prop, for example a background color or a different typeface.

_Don't add custom props to blocks in Dato - it will only make blocks heavier! Instead, use the id from the query to assign it manually in utilities/dato.js. It's not perfect, but nothing is._

**Querying story data**

IMPORTANT: Replace STORYID in the graphql query in src/pages/index.js.
This should be automated somehow, but for now isn't.

```shell
filter: { id: { eq: "DatoCmsBespokeStory-STORYID-en" } }
```

2. **Setup fonts, styles and data**

Upload WOFF/WOFF2 versions of your fonts to **`/src/fonts`** and replace names and urls in fonts.js.

Setup global styles in **`/src/components/GlobalStyles`**

Setup fonts in **`/src/components/GlobalFonts`**

Setup your main typographic styles in **`/src/components/Typography`**

3. **Setup your components**

Setup your main components in **`/src/components`**.

// Explain how to set it up in dato cms

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

Same goes for elements - in case you need to define new ones. It doesn't matter how you structure the conditionals, as long as the Story knows which components to use for each Dato entity.

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

// add notes about HS elements used in previews - header, spacings - how to disable and enable them (possibly more elegantly than now)
