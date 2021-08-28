$(document).ready(function(){



  $(".intro-para").fadeIn(1500);
 

  let picture = 1;

  $(".project-section > .left").click(function(){
    $(".project-section > .picture").css('opacity', '0');
    if(picture == 1) {
      picture = 3;
    } else {
      picture--
    }
    console.log(picture)
    $(".project-section > .picture > img").attr("src", `./img/project${picture}.jpg`);
    $(".project-section > .picture").animate({opacity: '1'}, 800);
  });

  $(".project-section > .right").click(function(){

    $(".project-section > .picture").css('opacity', '0');

    if(picture == 3) {
      picture = 1;
    } else {
      picture++
    }
    console.log(picture)
    $(".project-section > .picture > img").attr("src", `./img/project${picture}.jpg`);
    
    $(".project-section > .picture").animate({opacity: '1'}, 800);
  });



  
  $(window).scroll(function (e) { 
    
    
    let scroll = $(window).scrollTop();

    console.log(scroll)
  
    if(scroll > 400){

      $(".section-skills > h2").fadeIn(900);
      $(".skill").animate({margin: '0', opacity: '1'}, 900);
      

      $(".skill-html").animate({width: '95%'}, 1900);
      $(".skill-html").animate({width: '95%'}, 1900);
      $(".skill-css").animate({width: '80%'}, 1500);
      $(".skill-javascript").animate({width: '75%'}, 1900);
      $(".skill-php").animate({width: '85%'}, 1900);
      $(".skill-testing").animate({width: '72%'}, 1900);
      $(".skill-photoshop").animate({width: '65%'}, 1900);


    }

    
    if(scroll > 1850){
      isDone = true;
      $(".form-heading").fadeIn(1500);
     $(".form-div").slideDown(2000);
     $(".submitForm").fadeIn(2000);
     
      

      setTimeout(() => {
        
        $(".form-div").css('minHeight', '55vh');
        
        
      }, 3000);
    
    
    }
  });


});
