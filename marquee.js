(function() {
  if (document.body.innerHTML.indexOf("<marquee>") > -1) {
    document.body.innerHTML = document.body.innerHTML.replace("<marquee>", "").replace("</marquee>", "");
  } else {
    document.body.innerHTML = "<marquee>" + document.body.innerHTML;
  }
})();
