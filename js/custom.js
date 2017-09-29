$( document ).ready(function() {
  var Prismic = PrismicJS;
  
  // Prismic.getApi("https://liveconnected.prismic.io/api/v2").then(function(api) {
  //   return api.getByUID('living-connected', 'liveconnected');
  Prismic.getApi("https://lcprismictest.prismic.io/api/v2").then(function(api) {
    return api.getByUID('living-connected', 'liveconnected');
  }).then(function(document) {
    const api = document.data
    console.log("document", document)

    // --- SPLASH PAGE ---

      // Splash Page Main title
      $('#main_title').html(api.splash_main_title[0].text)

      // Splash Page Sub title
      $('#main_subtitle').html(api.splash_main_subtitle[0].text)

      // Splash Page Main Text
      $('#main_text').html(api.splash_main_text[0].text)

      // Splash Page Readings Descrption
      $('#readings_description').html(api.splash_readings_description[0].text)

      // Splash Page Triggers Descrption
      $('#triggers_description').html(api.spash_triggers_description[0].text)

    // --- SERVICES PAGE ---

      // Services Page Main Title
      $('#services_main_title').html(api.services_main_title[0].text)

      // Splash Page Paragraph 1
      $('#services_main_paragraph_1').html(api.services_main_paragraph_1[0].text)

      // Services Page Main Title 2
      $('#services_main_title_2').html(api.services_main_title_2[0].text)
            
      // Splash Page Paragraph 2
      $('#services_main_paragraph_2').html(api.services_main_paragraph_2[0].text)
    
      // Services Page Main Title 3
      $('#services_main_title_3').html(api.services_main_title_3[0].text)
      
      // Splash Page Paragraph 3
      $('#services_main_paragraph_3').html(api.services_main_paragraph_3[0].text)

      // TESTIMONIALS
      const testimonial = document.data.body[0].items

      for ( const value of testimonial){  
        // navigation dots
        $('#testimonial_dots').append('<li class="dot" id="selected_dot">')

        // testimonial box
        $('#testimonial_ul').append('<li id="testimonial_li">' + 
        '<div class="box-81 equalElement darkBlue left ae-3">' + 
        '<p class="light ae-5" id="testimonial">' + 
        value.testimonial[0].text +
        '<div class="author-81">' +
        '<p class="small bold ae-6" id="testimonial_author">' +
        value.testimonial_author[0].text + 
        '<p class="small cropBottom ae-7" id="author_description">' +
        value.author_description[0].text)
      }
      // adding the selected class to the first in the list
      $('#testimonial_box li:first').addClass('selected')
      $('#testimonial_dots li:first').addClass('selected')
      
    // --- ABOUT PAGE ---
      // Main title
      $('#about_title').html(api.about_title[0].text)
      // Subtitle
      $('#about_subtitle').html(api.about_subtitle[0].text)
      // CLinicians
      for (const person of document.data.body1[1].items){
        console.log(person)
        $('#clinicianBox').append(
          '<li class="col-3-12">' +
          '<a href="#" class="box-77 ae-3 fromCenter">' +
          '<div class="thumbnail-77">' +
          '<img src="'+ person.clinician_img.url +'" alt="Picture" class="wide"/>' + 
            '</div>' +
            '<div class="details-77 equalElement">'+
              '<div class="table wide">' +
                '<div class="cell">' +
                  '<div class="title-77">' + person.clinician_title[0].text +
                  '<div class="description-77">' + person.clinician_text[0].text +
                  '<div class="author-77 noPaddingLeft">' +
                    '<div class="name-77">' + person.clinician_name[0].text +
                    '<p class="specs-77">' + person.clinician_subname[0].text 
        )
      }
      // Partner Title
      $('#partner_clients').html(api.partner_clients[0].text)
      // Partners Logos
      for(const logo of document.data.body1[0].items){
        $('#partner_logos').append(
          '<li class="col-2-12 col-tablet-1-3 col-phablet-1-2 col-phone-1-1">' +
          '<div class="table wide equalElement">' +
          '<div class="cell">' +
          '<img width="100" alt="" id="p_logos" src="'+ logo.logo.url +
          '"/>')
      }

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