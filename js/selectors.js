'use-strict';
//add your code here

function h1Selector(element) {
  document.querySelectorAll('h1');
  return document.querySelectorAll('h1');
}

function liInOlSelector(element) {
  return $('ol li');
}

function linkSelector(element) {
  return $('div.box5 a');
}

function imageSelector(element) {
  return $('img[alt="cat sleeping"]').attr("alt");
}

function checkboxInputSelector(element) {
  return $(':checkbox');
}