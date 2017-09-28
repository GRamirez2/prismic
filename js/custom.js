$( document ).ready(function() {
  var Prismic = PrismicJS;
  
  Prismic.getApi("https://liveconnected.prismic.io/api/v2").then(function(api) {
    return api.getByUID('living-connected', 'liveconnected');
  }).then(function(document) {
    console.log("document", document)
    // console.log('title', document.data.title1[0].text)

    // $('#image').attr("src", document.data.image_one.url);
    // $('#title').html(document.data.title1[0].text);
    // $('#description').html(PrismicDOM.RichText.asHtml(document.data.description));
    // $('#title').html(PrismicDOM.RichText.asText(document.tags[0]));

  });

  // nav bar selected page becomes active
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
  });

  // logo click clears all links active status
  $('div a[href="#home"]').click(function(){
    $('ul li a').removeClass("active");
  })

});