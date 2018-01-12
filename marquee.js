(function() {
  var elem = "<marquee>";

  if (document.body.innerHTML.indexOf(elem) > -1) {
    document.body.innerHTML = document.body.innerHTML.replace(elem, "").replace("</marquee>", "");
  } else {
    document.body.innerHTML = elem + document.body.innerHTML + "</marquee>";
  }
})();
