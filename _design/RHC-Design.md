---
title: Red Hot Chilli - FrontEnd

ref: rhc-design
sub-title: Design | Web Shop
sort: 1
layout: folio
responsive: true

intro: Red Hot Chilli Northwest specialise in the sale of refurbished commercial catering equipment. They needed a site that would show off the company’s regularly updating product list, serving both UK and across Europe.
---

###Web Design

The Website at Red Hot Chilli is an online catalogue, using a custom-made CMS system built around the WordPress database functions. The site’s frontend is a responsive, fully featured design with a very lightweight footprint. The backend works off an existing database designed in Microsoft Access.

####Toolkit (Frontend)

I used **SCSS** for style, a **jQuery** to aid with scripting, and **Gulp** for post-processing. Code was handwritten with **Brackets**. Designs and vector logos were developed in **Illustrator CC**. My personal **Github** account was used for version control.

####Features

- Layout developed from analytics and customer feedback
- Mobile-first responsive design
- Bold, high contrast colour palette.
- Custom-built CMS plugin. [More]({{ site.baseurl }}/design/RHC-Technical)

####Layout

![index](/images/placeholder.png)

Using analytics from the previous site over two years, and from experience with customer feedback, I have arranged the site to have the most requested information at the top of each page. The menu and search bar are at the same place on every page to aid navigation, with touch friendly buttons easy to use for mobile users.

The animated carousel was a more flashy replacement from the existing site. Although carousels are losing popularity, the team at Red Hot Chilli wanted a way to show off any special items that come along.

![product page](/images/placeholder.png)

The biggest selling point of equipment are the photos. Red Hot Chilli make sure to use photos of the exact product for sale, with minimal editing to remove distracting surroundings.

The downside to having s blank environment for the commercial equipment is giving the customer a sense of scale. Commercial equipment tends to be much larger than the domestic equivalent, and this is not always portrayed in the photos. I decided to add a dynamic scale reference on each item, so to help customers visualise how large equipment is.

![scale](/images/placeholder.png)
codepen here (scale)

####Icons & Colours

![icons](/images/placeholder.png)

As well as adding simple visual cues for the customer, I designed a set of SVG icons used to inform customer of common specs. For example, a question that comes up a lot is the power requirements. While many items can be plugged in to standard UK plug sockets, the higher powered units tend to need commercial level wiring into three phase power setups. 

The black and white icons are from the Subway icon set by [Mariusz Ostrowski](http://www.pixle.pl). Other icons were designed in Illustrator.

![Colour palette]({{ site.baseurl }}/images/palette.svg#rhc)

I have used a b old, high contrast colour scheme to highlight product features. The dark blue-greys frame the page, with the company’s red used for emphasis and focal points.

###Future

The next big feature I wish to add to the site is a form of shopping cart / wishlist. As a general rule, Red Hot Chilli do not want direct internet purchasing on the site, but it would be good for customers to mail a list of multiple items so we can offer delivery quotes. I am currently considering ways to use local storage or cookies to keep basic database records. I could also extend this to be a basic floor planner, combining a similar technique as the scale image.

From a design point of view I also want to use more SVG elements where I can. Some flat graphics can easily be vectorised to work better on higher DPI devices.

Finally, a general goal is improved ease of use. I have designed the site to target users that are less savvy with web shopping. However, I know there some things that may only make sense to me as a web power user. I plan to take close attention to feedback from my colleagues and customers, and figure out what works and what needs smoothing out.
