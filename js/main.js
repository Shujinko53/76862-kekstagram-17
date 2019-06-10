var makeElement = function (url, likes, comments) {
  var element = document.createElement(url);
  element.classList.add(likes);
  if (text) {
    element.textContent = comments;
  }
  return element;
};

var createPhoto = function(social) {
  var listItem = makeElement('social');

  var picture = makeElement('img', 'social__picture');
  picture.src = photos/{i}.jpg;
  picture.alt = img.alt;
  listItem.appendChild(picture);


};
