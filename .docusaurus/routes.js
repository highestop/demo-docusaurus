
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','10d'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','c0c'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','868'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','ce8'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','db4'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','7a4'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','4aa'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','9dd'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','d83'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','c85'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','dba'),
  exact: true,
},
{
  path: '/docs/create/create-a-blog-post',
  component: ComponentCreator('/docs/create/create-a-blog-post','245'),
  exact: true,
},
{
  path: '/docs/create/create-a-document',
  component: ComponentCreator('/docs/create/create-a-document','8ea'),
  exact: true,
},
{
  path: '/docs/create/create-a-page',
  component: ComponentCreator('/docs/create/create-a-page','f13'),
  exact: true,
},
{
  path: '/docs/create/markdown/markdown-features',
  component: ComponentCreator('/docs/create/markdown/markdown-features','b64'),
  exact: true,
},
{
  path: '/docs/thank-you',
  component: ComponentCreator('/docs/thank-you','3bd'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
