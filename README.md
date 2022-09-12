# Hugo SEO Module

Handles all of your SEO needs:

- Meta tags
- Facebook opengraph meta tags
- Twitter card tags
- Sitemap
- XML feeds
- Robots.txt
- JSON-LD breadcrumbs
- JSON-LD article (see config below to set .types for article)

## Requirements

Requirements:

- Go 1.14
- Hugo 0.54.0

## Installation

If not already, [init](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module) your project as Hugo Module:

```
$: hugo mod init github.com/user/project_name
```

Configure your project's module to import this module:

```yaml
# config.yaml
module:
  imports:
    - path: github.com/future-wd/hugo-seo
```

## Usage

Drop the following in your websites HEAD

```
{{ partial "hugo-seo/tags.html" . }}
```

The above partials, will look for content information and build an Data object to be printed in SEO tags (og, twitter card etc...).

> Note:
>
> By default the module creates a `<title>` tag. This can be disabled with configuration, see below.

## Site Config

Settings are added to the project's params under the `seo` map as shown below.

Defaults have been shown.

```yaml
# config.yaml
title: Set your site's title here
enableRobotsTXT: true # this is set for you, but don't set it to false in your site!
params:
  description: Default SEO description for pages without one.
  seo:
    generate: # choose which tags are generated
      title: true
      meta: true
      twitter: true
      og: true
      jsonld:
        article: true # only generated for .types configured in articleTypes or eventTypes
        breadcrumbs: true
    titleSeparator: "|" # the character used in between the two strings for the title if not home page.
    siteName: # site title override (for og/twitter)
    ogArticleTypes: [post, posts, blog, news, article, articles, event, events]
    jsonldArticleTypes: [post, posts, blog, news, article, articles, event, events]
    image: # set default here, page override can be set. 
    private: false # makes the whole site private, see below.
```

### Site Title

Set the sites title in the site config.

### enableRobotsTXT

This has already been set to true in the modules config. DO NOT have `enableRobotsTXT: false` in your site config, because it will override the SEO module.


### params.description

Set a default description that will be used if the page does not have a description or summary.

### params.seo.generate

Here you an disable the generation of different tag types. This can also be set at a page level if you wish to disable a tag just for one page e.g. params.seo.generate.jsonld.article: false if you are custom generating an event json-ld script for that page.

The module generates a title tag. If you can't disable your theme's title, change the config to false.

### params.seo.titleSeparator

The home page has <title>{ site title}</title>

Other pages have <title>{page title} | { site title } </title>

You can change the separator from "|" to another character e.g. "-"

### params.seo.siteName

You can set a site title overide for use in the open graph tag.

### params.seo.ogArticleTypes

The types in the array will be recognised as articles for opengraph tag generation.

### params.seo.jsonldArticleTypes

The types in the array will have a json-ld article script generated.

### params.seo.image

Provide a default image should a page not have use. It can be a global resource (assets dir) or static file (static dir) path.

#### params.seo.private

If site config has private: true set, the following will take place:

- `<meta name="robots" content="noindex, nofollow" >`
- robots.txt: `Disallow: *`, no link to sitemap
- RSS feeds: disabled
- Sitemap: empty file

You can set seo.private: true at a site level to make every page public.

This can be overriden at a page level e.g.

site:  params.seo.private: false

AND

```markdown
---
# content/private/index.md (see below)
seo:
  private: true
---
```

Will result in the following output:

- `<meta name="robots" content="noindex, nofollow" >` for 1 page and the rest `<meta name="robots" content="index, follow" >`
- robots.txt: `Disallow: /private/index.html`, sitemap linked
- RSS feeds: /private/index.html omitted
- Sitemap: /private/index.html omitted

### Front Matter

The module uses title, description, summary and type from frontmatter.

Additionally there is a `seo` map for overrides specific to the module. 

Add any of the configurations to override your site configuration.

```markdown
---
title: Page title
description: Takes precedence over summary
summary: Page summary
type: set the type, the module may categorise the page as an article or event.
seo:
  generate: # set to false to disable a tag
    title: true
    meta: true
    twitter: true
    og: true
    jsonld:
      article: true
      breadcrumbs: true
  title: Overrides the page title
  image: path to page resource, or static file
  description: Overrides page description
  canonical: path to actual page if this is a duplicate
---
```

> Note:
>
> Don't copy and paste in this whole list, as it may override many of your defaults in site config!

## Credits

Sean Emerson - Future Web Design

Originally forked from tnd-seo by [thenewDynamic](https://www.thenewdynamic.com).

## Errors, Feature requests and Contributions

Log an error or feature request as an issue.

PR's are welcome.
