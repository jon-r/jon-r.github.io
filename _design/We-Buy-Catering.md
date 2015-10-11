---
title: We Buy Catering

sub-title: Design | Web & Print Marketing
ref: wbc
layout: folio
sort: 2
responsive: true

intro: 'Half of the challenge for second hand companies is sourcing the equipment. Unlike new stock that can often be supplied on demand, refurbishment retailers can only sell what they can get their hands on. <br>
Sitelink: <a href="www.webuycateringnorthwest.co.uk">We Buy Catering</a>'

images:
 - leaflet1
 - old-designs
 - multiple

---

###Web Design

The ‘We Buy Catering’ marketing campaign serves as an advert to purchase equipment for Red Hot Chilli Northwest. The microsite is a simple, one page design with basic mobile responsiveness.

####Toolkit (Web)

- **PHP** boilerplate to create multiple sites easily.
- Style in **Sassy SCSS** with a hint of Bourbon.
- The site was designed in **Photoshop CC**
- Pages were Handwritten with **Brackets**.
- Printed designs were created in **inDesign CC**.

####Features
- Assorted leaflets, designed for multiple target markets.
- Blue monochrome colour palette.
- Minimal asymmetric design, designed to be quick to scan information.
- SEO friendly content, responsive design.
- Simple php template allows quick duplication of design for different themes.

####Layout

The website was arranged to be as clear and focussed as possible. I wanted to go straight to the end goal - the purchase of catering equipment. The site tries to answer all customer questions as simply as possible, and encourage them to get in touch.

I also wanted to show that the company deals with large and small clients. The site has been given a modern feel with consistent, responsive design. Subtle features like themed social icons, and scroll effects add a little polish. I personally like the static background effect, symbolising the way We Buy Catering quickly converts equipment to cash.
{% comment %}
![static BG](/images/placeholder.png)
codepen here (static bg)
{% endcomment %}

The site uses a monochromatic colour scheme. As well as a contrast to the reds on the Red Hot Chilli site, blue is the colour of trust and confidence. Clients are often under a lot of stress, selling equipment as a necessity rather than out of choice. We Buy Catering offers a quick and easy service, with mutual interest in cost effective purchases.

![Colour palette]({{ site.baseurl }}/images/palette.svg#wbc)

####Technical

One the main challenge for the site was targetting a fairly varied range of audiences. I wanted to encourage customers and have more focused sites to appeal to a variety of targets. The main pages focused on areas in the northwest (Manchester, Liverpool, Chester) with sub pages targetted at different catering markets (Pubs, Farm Shops, Cafes)

Originally, I just made a copy/paste collection of sites. I made individual tweaks manually. This worked but was messy to make any changes, and ended up with several inconsistencies between sites.

I decided to create a PHP tamplate with a list of variables that covered each site. The core php was taken from a root location, and each page remained consistent and easily maintained. Instead of spending time readjusting several pages, linking sevaral images, etc, All that was needed was about 10 lines of php variables and a couple of extra pictures.

![framework template]({{ site.baseurl }}/images/{{ page.ref }}/template.jpg)

####Print Design

In a similar vein to the website, I designed a range of postcard sized flyers to target a range of customers. A demolition company clearing out an old kitchen is after a little extra bonus compared to just scrapping the equipment, whereas a large restaurant franchise is seeking out an experienced and economically sound service.

They were designed to match the blue/white style of the website, to encourage consistency and a professional touch.

![leaflet]({{ site.baseurl }}/images/{{ page.ref }}/leaflets.jpg)

###Future

In the future I want to work more SVG images into the site. The title banner is a good start since it is already fairly flat, but I would also like to create an animated "how it works". One idea is continuing the Cooker to Coin idea, and having an animated flow chart of the purchasing process, but this would take a lot of planning and design to be effective.

Another, more realistic goal is giving the customer a way to upload images directly to us, either by form, dropbox, or something similar. I will need to research the best, easy to use method, that also does not hurt the performance of the site.
