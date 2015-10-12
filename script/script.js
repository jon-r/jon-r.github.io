/*adding the icons*/
//var listItems = document.getElementsByTagName('li');
var liIcons = document.querySelectorAll('li > strong'),
  listCount = liIcons.length,

  iconSrc = '/images/icons.min.svg#';


for (i = 0; i < listCount; i++) {
  li = liIcons[i].parentElement;
  liText = liIcons[i].textContent;
  icon = iconSrc + 'ico-' + liText.substr(0, 3).toLowerCase();

  newIcon = document.createElement('img');
  newIcon.setAttribute('class', 'list-icon');
  newIcon.setAttribute('src', icon);
  newIcon.setAttribute('title', liText);

  li.insertBefore(newIcon, liIcons[i]);
}

/* modal popups ----------------------------------------------------------------------
// eg zoom and enhance
var $imgGalleryModal  = $('#js-gallery-modal'),
    $imgGalleryOpen   = $('#js-gallery-zoom'),
    $imgGalleryClose  = $imgGalleryModal.find('.modal-close');
    $buyModal         = $('#js-buy-modal'),
    $buyModalOpen     = $('#js-buy-btn'),
    $buyModalClose    = $buyModal.find('.modal-close'),
    $queryModal         = $('#js-query-modal'),
    $queryModalOpen     = $('#js-query-btn'),
    $queryModalClose    = $queryModal.find('.modal-close');

function modalOpen(e) {
  e.addClass('is-active')
}
function modalOpenSmall(e) {
  e.addClass('is-active-small');
}
function modalClose(e) {
  e.removeClass('is-active');
  e.removeClass('is-active-small');
}

$imgGalleryOpen.click(function() {
  $getImgSrc = $imgGalleryMain.find('img').attr('src');
  $bigImgSrc = $getImgSrc.replace('gallery-tile','gallery');

  if ($imgGalleryModal.find('img').length) {

    $imgGalleryModal.find('img').attr('src',$bigImgSrc);
  } else {
    $bigImgNew = '<img src="' + $bigImgSrc + '" >';
    $imgGalleryModal.append($bigImgNew);
  }
  modalOpen($imgGalleryModal);
});

$imgGalleryClose.click(function() {
  modalClose($imgGalleryModal);
});

$buyModalOpen.click(function() {
  modalOpenSmall($buyModal)
})
$queryModalOpen.click(function() {
  modalOpenSmall($queryModal)
})
$buyModalClose.click(function() {
  modalClose($buyModal);
});
$queryModalClose.click(function() {
  modalClose($queryModal);
});
*/
