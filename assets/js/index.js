$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});


$('#contact-form').on('submit', function(e) {
    $('#contactFormModal').modal('show');
    e.preventDefault();
})

$('html, body').animate({
    scrollTop: $("#target-element").offset().top
}, 1000);


