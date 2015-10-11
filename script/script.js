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
