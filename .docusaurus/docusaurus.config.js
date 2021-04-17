export default {
  "title": "Highestop's WorkSpace",
  "tagline": "Personal documents & blogs website, by Highestop Chen, powered by Docusaurus.",
  "url": "https://demo-docusaurus.highestop.me",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "assets/favicon.ico",
  "organizationName": "highestop",
  "projectName": "demo-docusaurus-doc",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "switchConfig": {
        "lightIcon": "☀️",
        "darkIcon": "🌙",
        "darkIconStyle": {},
        "lightIconStyle": {}
      },
      "respectPrefersColorScheme": false
    },
    "navbar": {
      "title": "Highestop's WorkSpace",
      "logo": {
        "alt": "Highestop's WorkSpace",
        "src": "assets/logo.svg"
      },
      "items": [
        {
          "to": "/docs/",
          "label": "Documents",
          "position": "left"
        },
        {
          "to": "/blog/",
          "label": "Blogs",
          "position": "left"
        },
        {
          "href": "https://github.com/highestop/demo-docusaurus",
          "label": "Github",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Documents",
          "items": [
            {
              "label": "Getting Started",
              "to": "/docs/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blogs",
              "to": "/blog/"
            },
            {
              "label": "Github",
              "href": "https://github.com/highestop/demo-docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021, by Highestop Chen, built with Docusaurus."
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/chenyn/Workspace/@Github/demo-docusaurus/docs/.sidebars.js"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/Users/chenyn/Workspace/@Github/demo-docusaurus/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};