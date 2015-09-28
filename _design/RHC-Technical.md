---
title: Red Hot Chilli - BackEnd

ref: rhc-tech
sub-title: Development | Wordpress Plugin
sort: 3
layout: folio
intro: The front end of the website needs to be built to the needs of the customer. The back end is built to speed up data entry of the company, as well as optimise site performance.

images:
  - shop_compile
  - One #plugin breakdown
  - Two #item tile breakdown
---

###Web Development

The Red Hot Chilli website is built with WordPress. I have created a plugin and theme combination to keep design separate from function. However, in a few places the two have become interlinked.

The Wordpress _Theme_ is the basis of the site and includes the style and customer interaction. I have discussed more [here]({{ site.baseurl }}/design/RHC-Design). The _Plugin_ handles the shop features.

####Toolkit (Backend)

- Functionality is primarily written in **PHP** with the **Wordpress API**.
- I have used a **WinSCP** batch file to sync to the website via SSH.
- Code was handwritten with **Brackets**.
- My personal **Github** account was used for version control.
- The site, including **MySQL database** is hosted on a self maintained **Amazon EC2** server.

####Features

- Superlight theme and plugin combination, built to do exactly as required, without the bloat of full featured CMS’s.
- Semi-Modular template design means page layout can be re-arranged with little technical knowledge.
- Intelligent file sync keeps website up to date with minimal effort.
- Direct connection to existing database minimises double-handling of content.

####Site Modules

![scale reference, technical](/images/placeholder.png)

The scale reference is also dynamically calculated in php. Using an average human height as point of reference, all dimensions are scaled proportionally. After a few quick calculations, the height and width is used in a simple SVG image.

Also sizes (mm to feet/inch)

_function list here_

- Autocomplete (search)
![Autocomplete](/images/placeholder.png)

- Modular (shortcodes)
![Modular text](/images/placeholder.png)

- Cache (mini_cache)
- compressing, resizing images (image_edit)
- formatting descriptions (text_formatter)
- contact form validation (contact_forms)

####Product Data Entry

Product info is recorded on the Access database. Key specs, such as power supply, product model number and dimensions are separated form a general description. I needed to modify some parts of the product table to include website specific information, such as “live on site”, but mostly the table remained untouched, and little redevelopment was needed on existing access forms.

![codepen](/images/placeholder.png)
codepen here (code to tile)

![access to website editor(carousel)](/images/placeholder.png)

Working with a colleague, we added several forms in access to deal with the additional website features. For example, I needed a way to easily design the banner tiles. Working with VBA I managed to simulate the template in an access form. This meant new slides could be written without even logging into WordPress.

The carousel is animated through a simple timer in JavaScript, shuffling classes that slide in and out the templates. I have used extra css classes, (added by php) to format text in a few basic layouts.

![images to site](/images/placeholder.png)

I made a short batch script to upload all images via SSH. This is much faster than previous CMS uploading methods I have used in the past. The one issue is that product Images must be organised by reference number. However, this encourages good naming conventions and image cataloguing, which can never be a bad thing.


###Future
- Lazy loading images/product lists (these are biggest performance hits on site)

