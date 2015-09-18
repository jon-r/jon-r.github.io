---
title: Red Hot Chilli - BackEnd

ref: rhc-tech
sub-title: Development | Wordpress Plugin
sort: 3
layout: folio
intro: The front end of the website needs to be built to the needs of the customer. The back end is built to speed up data entry of the company, as well as optimise site performance.
---

###Web Development

The Red Hot Chilli website is built with WordPress. I have created a plugin and theme combination to keep design separate from function. However, in a few places the two have become interlinked.

The Wordpress _Theme_ is the basis of the site and includes the style and customer interaction. I have discussed more [here]({{ site.baseurl }}/design/RHC-Design). The _Plugin_ handles the shop features.

####Toolkit (Backend)

The site functionality is primarily written in **PHP** with the **Wordpress API**. I have used a **WinSCP** batch file to sync to the website via SSH. Code was handwritten with **Brackets**. My personal **Github** account was used for version control. The site, including **MySQL database** is hosted on an **Amazon EC2** server.

####Features

- Superlight theme and plugin combination, built to do exactly as required, without the bloat of full featured CMS’s.
- Semi-Modular template design means page layout can be re-arranged with little technical knowledge.
- Intelligent file sync keeps website up to date with minimal effort.
- Direct connection to existing database minimises double-handling of content.

####Database & Server Management

One key requirement for the site was to use the existing database. Stock is handled in a Microsoft Access database, recording all information on products, such as specs, sales records and refurbishment logs. Having the data in one place means amendments to products can be corrected near instantly, minimising mistakes from maintaining multiple duplicates of the same information. Not all the data will be public (dates sold and invoice refences for example), but only entering data once saves a lot of time.

![data “process” flow diagram](/images/placeholder.png)
codepen here (code to tile)

Product info is recorded on the Access database. Key specs, such as power supply, product model number and dimensions are separated form a general description. I needed to modify some parts of the product table to include website specific information, such as “live on site”, but mostly the table remained untouched, and little redevelopment was needed on existing access forms.

The site was built on WordPress, due to its excellent documentation and modification. Since WordPress relies on MySQL, and the company database was at the time on a locally hosted SQL database, I needed to make a few adjustments to combine the two. It was fairly easy to transfer data to mysql, so I ended up just merging the WP tables with the office ones, on a new database hosted online.

####Product Data Entry

![access to website editor(carousel)](/images/placeholder.png)

Working with a colleague, we added several forms in access to deal with the additional website features. For example, I needed a way to easily design the banner tiles. Working with VBA I managed to simulate the template in an access form. This meant new slides could be written without even logging into WordPress.

The carousel is animated through a simple timer in JavaScript, shuffling classes that slide in and out the templates. I have used extra css classes, (added by php) to format text in a few basic layouts.

![images to site](/images/placeholder.png)

I made a short batch script to upload all images via SSH. This is much faster than previous CMS uploading methods I have used in the past. The one issue is that product Images must be organised by reference number. However, this encourages good naming conventions and image cataloguing, which can never be a bad thing.

####Site Functions

![scale reference, technical](/images/placeholder.png)

The scale reference is also dynamically calculated in php. Using an average human height as point of reference, all dimensions are scaled proportionally. After a few quick calculations, the height and width is used in a simple SVG image.

Also sizes

![Autocomplete](/images/placeholder.png)

Autocomplete

![Modular text](/images/placeholder.png)

Modular

####Optimising Performance

![speed test results](/images/placeholder.png)

Optimisation (caching objects, compressing, resizing images. Speed results)

###Future
- Lazy loading images/product lists (these are biggest performance hits on site)
- Static html pages where possible, or at least elements of pages. Site still running uncached queries every time. 
- Majority of each page stays static. WP caching plugins mean faster site, at the cost of static data for everything, including products.
- More optimisation, more caching/ajaxing. Is it worth it? WP core is slowing most of the site.

