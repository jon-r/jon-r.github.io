/*adding the icons*/
//var listItems = document.getElementsByTagName('li');
var liIcons = document.querySelectorAll('li > strong'),
  listCount = liIcons.length;

for (i = 0; i < listCount; i++) {
  li = liIcons[i].parentElement;
  liText = liIcons[i].textContent;
  icon = liText.substr(0, 4).toLowerCase();

  li.className = 'list-icon ' + icon;
}

/*Modals*/
var modal = document.getElementById('js-modal'),
  m_first = document.getElementById('m-first'),
  m_close = document.getElementById('m-close'),
  m_list = document.getElementById('m-list'),
  canZoom = document.querySelectorAll('.can-zoom > img'),
  zoomCount = canZoom.length;

for (i = 0; i < zoomCount; i++) {
  canZoom[i].onclick=function(e) {
    x = (e.clientX - 40) + "px";
    y = (e.clientY - 40) + "px";

    modalSmall(x,y);
    modal.className = 'modal is-open';
    window.setTimeout(modalFull, 5);
    setMainImg(e);
    fillGallery();
  }
}

m_list.onclick=function(e) {
  if (e.target.tagName == 'IMG') {
    setMainImg(e);
  }
}

m_close.onclick=function(e) {
  console.log(e);
  x = (e.clientX - 40) + "px";
  y = (e.clientY - 40) + "px";
  modalSmall(x,y);
  window.setTimeout(function() {
    modal.className = 'modal';
  }, 500);
}

function modalSmall(x,y) {
  modal.style.left = x;
  modal.style.top = y;
  modal.style.width = '50px';
  modal.style.height = '50px';
}

function modalFull() {
  modal.style.left = '5vw';
  modal.style.top = '5vh';
  modal.style.width = '90vw';
  modal.style.height = '90vh';
}

function setMainImg(e) {
  getThumb = e.target.src;
  getFull = getThumb.replace('-thumb', '');
  m_first.src = getFull;
}

function fillGallery() {
  //insert images to modal gallery
  if (m_list.children.length == 0) {
    for (i = 0; i < zoomCount; i++) {
      li = document.createElement('li');
      img = canZoom[i].cloneNode();
      li.appendChild(img);
      m_list.appendChild(li);
    }
  }
}

