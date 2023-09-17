async function load({ params }) {
  let allTags = await Promise.all(
    Object.entries(/* @__PURE__ */ Object.assign({ "./(posts)/daisyui-colors-and-themes/+page.md": () => import("./(posts)/daisyui-colors-and-themes/_page.md.js"), "./(posts)/daisyui-vs-tailwindui/+page.md": () => import("./(posts)/daisyui-vs-tailwindui/_page.md.js"), "./(posts)/mary-ui/+page.md": () => import("./(posts)/mary-ui/_page.md.js"), "./(posts)/most-common-mistake-when-using-tailwind-css/+page.md": () => import("./(posts)/most-common-mistake-when-using-tailwind-css/_page.md.js"), "./(posts)/what-is-daisyui/+page.md": () => import("./(posts)/what-is-daisyui/_page.md.js") })).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      if (!metadata.published) {
        return {};
      }
      return {
        ...metadata.tags
      };
    })
  );
  const tags = [];
  allTags.forEach((obj) => {
    for (const key in obj) {
      const value = obj[key];
      if (!tags.includes(value)) {
        tags.push(value);
      }
    }
  });
  return {
    tags
  };
}
export {
  load
};
