---
title: Red Hot Chilli - BackEnd

ref: rhc-tech
sub-title: Development | WordPress Plugin
sort: 3
layout: folio
intro: 'The front end of the website needs to be built to the needs of the customer. The back end is built to speed up data entry of the company, as well as optimise site performance.<br>
Sitelink: <a href="https://github.com/jon-r/jr-shop">Github Repository</a>'

images:
  - modular
  - shop_compile
  - shop_flow
---

###Web Development

The Red Hot Chilli website is built with WordPress. I have created a plugin and theme combination to keep design separate from function. However, in a few places the two have become interlinked.

The WordPress _Theme_ is the basis of the site and includes the style and customer interaction. I have discussed more [here]({{ site.baseurl }}/design/RHC-Design). The _Plugin_ handles the shop features.

####Toolkit (Backend)

- Functionality is primarily written in **PHP**
- The **WordPress** API's have been used extensively to help in plugins.
- I have used a **WinSCP** batch file to sync to the website via SSH.
- Code was handwritten with **Brackets**.
- My personal **Github** account was used for version control.
- The CMS is built on an **Access** database.
- The site is hosted on a self-maintained Amazon **AWS** server.

####Features

- Superlight theme and plugin combination, built to do exactly as required, without the bloat of full featured CMS’s.
- Semi-Modular template design means page layout can be re-arranged with little technical knowledge.
- Intelligent file sync keeps website up to date with minimal effort.
- Direct connection to existing database minimises double-handling of content.

###Site Modules

The plugin consists of a number of separate PHP modules that combine to create the shop catalogue environment. While each component can work independently, the more complex functions rely on a tree of core variables that work like a small scale DOM structure. For example, the navigation relies on unique page references, and the category pages rely on pre-assigned filters.

####Product Data Entry
{% comment %}
![codepen](/images/placeholder.png)
codepen here (code table to tile)
{% endcomment %}

_JR\_Shop\_Compile:_
Product info is recorded on the Access database. Key specs, such as power supply, product model number and dimensions are separated form a general description. I needed to modify some parts of the product table to include website specific information, such as “live on site”, but mostly the table remained untouched, and little redevelopment was needed on existing access forms.

The core function of the CMS is to convert the database into user friendly output. This included clear specs and descriptions. A large number of customers still prefer measurements in feet and inches, so I have made sure to include a simple mm to feet/inch converter.

####WYSIWYG Carousel editor

<span class="half-span can-zoom" >
![carousel editor]({{ site.baseurl }}/images/{{ page.ref }}/carousel.jpg)
</span>

_JR\_Carousel:_
We added several forms in access to deal with the additional website features. For example, I wanted a way to easily design the carousel slides. Working with VBA I managed to simulate the template in an access form. This meant new slides could be written without even logging into WordPress.

The carousel is animated through a simple timer in JavaScript, shuffling classes that slide in and out the templates. I have used extra CSS classes, (added by PHP) to format text in a few basic layouts.

####Caching and site Optimisations
{% comment %}
![cache images speed boost](/images/placeholder.png)
{% endcomment %}

_JR\_Mini\_Cache:_
The site is fairly speedy, but I knew I could make it faster with caching products. I created a super light cache system that saves blocks of each page as html. Thanks to html caching, I have reduced mysql requests on the average page by 80%, and each page loads around 20% faster.

The images are uploaded to the site at 1500px. Since this is overkill for photos that are seen as thumbnails most of the time, I have the site generate the 150px thumbnails as needed. Some items have multiple images that are rarely viewed, and the thumbnail generator only creates smaller images when needed.

_JR\_File\_Cleanup:_
The main issue with caching items is the best way to make updates. I did not want to make a small price change on one oven force me into resetting the cache on everything, which is how the older Red Hot Chilli site worked. I have used VBA on the database to log changes, which links to a simple PHP script securely target and refresh only necessary pages.

This module also tidies up old images that are no longer viewable on the site. The auto-generated thumbnails are periodically swept, removing images that are either inactive or haven't been viewed for a while.

####Other Functions

_JR\_Validate:_
The first point of call on every page on the site. Ensuring page links are valid, pointing at correctly accessible products, and whitelisting queries for security. Any URL string can go IN to the validation, but only secure results come out.

<span class="half-span can-zoom" >
![image sync]({{ site.baseurl }}/images/{{ page.ref }}/img_sync.jpg)
</span>

_JR\_Image\_Sync:_
I made a short batch script to upload all images via SSH. This is much faster than previous CMS uploading methods I have used in the past.

The one issue is that product Images must be organised by reference number. However, this encourages good naming conventions and image cataloguing, which can never be a bad thing.

<span class="half-span can-zoom" >
![scale reference]({{ site.baseurl }}/images/{{ page.ref }}/img_scale.jpg)
</span>

_JR\_Scale\_Ref:_
The scale reference is also dynamically calculated in PHP. Using an average human height as point of reference, all dimensions are scaled proportionally. After a few quick calculations, the height and width is used in a simple SVG image.

_JR\_Autocomplete:_
Generates an AJAX smart search option for the customer. Gathers information from popular brands and categories to help the customer find what they are looking for.

{% comment %}
![Autocomplete](/images/placeholder.png)
{% endcomment %}

_JR\_Shortcodes:_
Using the WordPress Shortcodes API, I have setup the site templates as modular elements. Blocks of the page can then be rearranged via the WordPress content editor. This also toggles the cache on specific pages where needed.


{% comment %}
![Modular text](/images/placeholder.png)


- formatting descriptions (text_formatter)
- contact form validation (contact_forms)
{% endcomment %}


