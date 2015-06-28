---
title: Red Hot Chilli – CMS Development
layout: folio
sub-title: Full Stack Production | Wordpress | AWS
sort: c
---

The front end of the website was built to the needs of the customer. The back end was built to speed up data entry of the company, as well as optimise site performance.

##Features

- Superlight theme and plugin combination, built to do exactly as required, without the bloat of full featured CMS’s.
- Semi-Modular template design means page layout can be re-arranged with little technical knowledge.
- Intelligent file sync keeps website up to date with minimal effort.
- Direct connection to existing database minimises double-handling of content.

##Technical

One key requirement for the site was to use the existing database. Stock is handled in a Microsoft Access database, recording all information on products, such as specs, sales records and refurbishment logs. Having the data in one place means amendments to products can be corrected near instantly, minimising mistakes from maintaining multiple duplicates of the same information. Not all the data will be public, but only entering data once saves a lot of time.
[data “process” flow diagram]
Product info is recorded on the Access database. Key specs, such as power supply, product model number and dimensions are separated form a general description. I needed to modify some parts of the product table to include website specific information, such as “live on site”, but mostly the table remained untouched, and little redevelopment was needed on existing access forms.
The site was built on WordPress, due to its excellent documentation and modification. Since WordPress relies on MySQL, and the company database was at the time on a locally hosted SQL database, I needed to make a few adjustments to combine the two. It was fairly easy to transfer data to mysql, so I ended up just merging the WP tables with the office ones, on a new database hosted online.

![Link via MySQL](/images/placeholder.png)
The connection to the database was the first technical challenge. WordPress runs off a MySQL database, and I also needed to connect the local database to it. Many web hosting packages are fairly restrictive when it comes to accessing the MySQL database. This is understandable considering most hosting packages are shared, and the security to the data is vital, while dedicated hosting packages that allow a remote connection come at a premium.

After some research on dedicated hosts, I decided to use a small Amazon AWS package, since the current needs for the company were easily covered by the entry level free tier, while being expandable in the future.

![access to website editor(carousel)](/images/placeholder.png)
Working with a colleague, we added several forms in access to deal with the additional website features. For example, I needed a way to easily design the banner tiles. Working with VBA I managed to simulate the template in an access form. This meant new slides could be written without even logging into WordPress.

The carousel is animated through a simple timer in JavaScript, shuffling classes that slide in and out the templates. I have used extra css classes, (added by php) to format text in a few basic layouts.

![images to site](/images/placeholder.png)
I made a short batch script to upload all images via SSH. This is much faster than previous CMS uploading methods I have used in the past. The one issue is that product Images must be organised by reference number. However, this encourages good naming conventions and image cataloguing, which can never be a bad thing.

![scale reference, technical](/images/placeholder.png)
The scale reference is also dynamically calculated in php. Using an average human height as point of reference, all dimensions are scaled proportionally. After a few quick calculations, the height and width is used in a simple SVG image.

![speed test results](/images/placeholder.png)
Optimisation (caching objects, compressing, resizing images. Speed results)

##Future
- Lazy loading images/product lists (these are biggest performance hits on site)
- Static html pages where possible, or at least elements of pages. Site still running uncached queries every time. 
- Majority of each page stays static. WP caching plugins mean faster site, at the cost of static data for everything, including products.
- More optimisation, more caching/ajaxing. Is it worth it? WP core is slowing most of the site.

