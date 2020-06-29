# seo Hugo Module

(intro)

## Requirements

Requirements:
- Go 1.14
- Hugo 0.54.0


## Installation

If not already, [init](https://gohugo.io/hugo-modules/use-modules/#initialize-a-new-module) your project as Hugo Module:

```
$: hugo mod init github.com/theNewDynamic/hugo-module-tnd-seo
```

Configure your project's module to import this module:

```yaml
# config.yaml
module:
  imports:
  - path: github.com/theNewDynamic/hugo-module-tnd-seo
```

## Usage

Drop the following where appropriate
```
{{ if templates.Exists "partials/tnd-seo/print.html" }}
  {{ partial "tnd-seo/tags.html" . }}
{{ end }}
```

The above partials, will look for content information and build an Data object to be printed in SEO tags (og, twitter card etc...).
If you need to alternate the data model, you can do so by adding ot your project a `layouts/partials/tnd-seo/extend.html` partial and add to it as explained [here](/layouts/partials/tnd-seo/extend.html).

### Some Partial/Feature

#### Examples

### Settings

Settings are added to the project's parameter under the `tnd_seo` map as shown below.

```yaml
# config.yaml
params:
  tnd_seo:
    # overides .Site.Title
    site_name: MyWebsite 
    # Used for articles without images
    default_image: "/images/default.jpg"
    # if true will use the SEO data object to output an json+ld script tag.
    jsonld: true
    # if true will display a human readable overlay on everypage to monitor SEO data object (only if dev != production)
    debug: true
```

#### Configure Key 1

#### Configure Key 2

### Front Matter

The following can be overriden just for SEO within the Front Matter:

```
---
title: What a post
description: That's dull!
seo:
  image: /uploads/way-better-that-this-post-featured.png
  description: Content marketing 101
```

## theNewDynamic

This project is maintained and love by [thenewDynamic](https://www.thenewdynamic.com).