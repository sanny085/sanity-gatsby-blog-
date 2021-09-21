export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61499fc3e20f24aac396d27d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ajkvm6dr",
                  apiId: "e20eab0c-7354-45f8-bd37-36bc2267ce20",
                },
                {
                  buildHookId: "61499fc3aa4e2baa946d0b3f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fpnxc4ta",
                  apiId: "5cb3e535-7921-44e6-a07d-59a3af4a47b4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sanny085/sanity-gatsby-blog-",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fpnxc4ta.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
