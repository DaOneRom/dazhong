jQuery(function($) {
  var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
      for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
  };
  var hamburgers = document.querySelectorAll(".hamburger");
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.classList.toggle("is-active");
      }, false);
    });
  }
});
jQuery(function($) {
  $("[data-toggle='toggle']").click(function() {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');
  });
});
jQuery(function($) {
  $('.slide').slide({
    start: true,
    speed: 5000,
    animate: 'horizontal'
  });
});

$('article').readmore({speed: 500});
