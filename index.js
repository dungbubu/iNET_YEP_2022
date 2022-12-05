$('.owl-carousel').owlCarousel({items: 1});

function nextPage2() {
  $('.page0, .page1, .page2').addClass('active');
}

function backPage1() {
  $('.page0, .page1, .page2').removeClass('active');
}
function nextPage3() {
  $('.page3').addClass('active');
  $('.page2').removeClass('active');
  $('#nextP2, #backP2').hide();
  $('#nextP3, #backP3').show();
}

function backPage2() {
  $('.page2').addClass('active');
  $('.page3').removeClass('active');
  $('#nextP3, #backP3').hide();
  $('#nextP2, #backP2').show();
}
function nextPage4() {
  $('.page4').addClass('active');
  $('.page0, .page1, .page3').removeClass('active');
  $('.contentPage1').hide();
}

function gobackhome() {
  $('.page4').removeClass('active');
  $('#nextP3, #backP3').hide();
  $('#nextP2, #backP2, .contentPage1').show();
}