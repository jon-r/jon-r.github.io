---
title: Red Hot Chilli - BackEnd

ref: rhc-tech
sub-title: Development | Wordpress Plugin
sort: 3
layout: folio
intro: The front end of the website needs to be built to the needs of the customer. The back end is built to speed up data entry of the company, as well as optimise site performance.

images:
  - shop_compile
  - shop_flow
  - Two
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

###Site Modules

The plugin consists of a number of separate php modules that combine to create the shop catalogue environment. While each component can work independently, the more complex functions rely on a tree of core variables that work like a small scale DOM structure. For example, the navigation relies on unique page references, and the category pages rely on preset filters.

####Product Data Entry

![codepen](/images/placeholder.png)
codepen here (code table to tile)

Product info is recorded on the Access database. Key specs, such as power supply, product model number and dimensions are separated form a general description. I needed to modify some parts of the product table to include website specific information, such as “live on site”, but mostly the table remained untouched, and little redevelopment was needed on existing access forms.

The core function of the CMS is to convert the database into user friendly output. This included clear specs and descriptions. A large number of customers still prefer measurements in feet and inches, so I have made sure to include a simple mm to feet/inch converter.

####WYSIWYG Carousel editor

![access to website editor(carousel)](/images/placeholder.png)

We added several forms in access to deal with the additional website features. For example, I needed a way to easily design the banner tiles. Working with VBA I managed to simulate the template in an access form. This meant new slides could be written without even logging into WordPress.

The carousel is animated through a simple timer in JavaScript, shuffling classes that slide in and out the templates. I have used extra css classes, (added by php) to format text in a few basic layouts.

####Smart Image Uploads

![style guide]({{ site.baseurl }}/images/{{ page.ref }}/img_sync.jpg)

I made a short batch script to upload all images via SSH. This is much faster than previous CMS uploading methods I have used in the past. The one issue is that product Images must be organised by reference number. However, this encourages good naming conventions and image cataloguing, which can never be a bad thing.

####Scale Reference with SVGs

![scale reference, technical](/images/placeholder.png)

The scale reference is also dynamically calculated in php. Using an average human height as point of reference, all dimensions are scaled proportionally. After a few quick calculations, the height and width is used in a simple SVG image.

####Cacheing and site Optimisations

![cache images speed boost](/images/placeholder.png)

The site is fairly speedy, but I knew I could make it faster with caching products. I created a super light cache system that saves blocks of each page as html. Thanks to html caching, I have reduced mysql requests on the average page by 80%, and each page loads around 20% faster.

The images are uploaded to the site at 1500px. Since this is largely overkil for thumbnails, I have the site generate the 150px thumbnails as needed. Some items have multiple images that are rarely viewed, and the thumbnail generator only creates smaller images when needed.

The main issue with cacheing items is the best way to make updates. I dont want to make a small price change on one oven and have to reset the cache on everything, which is how the older Red Hot Chilli site worked.

I have used VBA on the database to log changes, which links to a simple php script securely target and refresh only necessary pages.

####Other
- Validate

- Autocomplete (search)
![Autocomplete](/images/placeholder.png)

- Modular (shortcodes)
![Modular text](/images/placeholder.png)

- formatting descriptions (text_formatter)
- contact form validation (contact_forms)


###Future
- Lazy loading images/product lists (these are biggest performance hits on site)

