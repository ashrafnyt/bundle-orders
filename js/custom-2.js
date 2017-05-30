$(document).ready(function(){        
        /* for any bundle selection */        
        $('.bundle').on("click",function(){
            var bundle_id=$(this).attr('id');          
                      
            if($(this).hasClass('forsale')){
                console.log('Its for sale!');
            }
            else{
                console.log('Not for sale!');
            }
            
            var a_name='tiger';
            a_name=$(this).data('nickname');
            
            /* display selected animal name */
            $("#animal").html(a_name);
            
            /* display step 2 */
            $('#step-2').show();
        });
        
        /* add the word Bundle befor default bundle name */
        function change_text(bundle_name){            
            bundle_name1=$("#bundle-1").data('nickname');        
            bundle_name2=$("#bundle-2").data('nickname');        
            bundle_name3=$("#bundle-3").data('nickname');        
            
            $('div.bundle-1 h2').html(bundle_name+" "+bundle_name1);       
            $('div.bundle-2 h2').html(bundle_name+" "+bundle_name2);       
            $('div.bundle-3 h2').html(bundle_name+" "+bundle_name3);     
        }
                       
        /* using prepend inserting word or text before h2 text */
        function add_bundlename(bundle_name){
            $('div.bundle h2').prepend(bundle_name);
        }
        
                
    /* ###### looping each bundle using .each() ###### */ 
        $( "div.bundle" ).each(function(index ) {
            var default_text = $( this ).text();
            console.log(default_text);
            
            /* storing the nickname */
            var bundle_nickname=$(this).data('nickname'); 
            
            /* storing bundle with nickname */
            var new_text = 'Bundle '+bundle_nickname;            
            
            $(this).find("h2").html(new_text+" : "+default_text);
            
        });
         
    /* ##### top fixed nav bar when mouse scroll ##### */
        var nav ='#topnav';
        $(window).scroll(function(){                        
            if($(this).scrollTop()>125){
                /* when mouse scrolled down */
                $('#topnav').addClass("nav_fixed");
                $(".nav_fixed").slideDown('900');
                $('#topnav').addClass("nav_color");
                $('.nav_subscribe').addClass("fixednav_subscription");
               }
            else{
                /* when mouse not scrolled */
                $('#topnav').removeClass("nav_fixed");
                $('#topnav').removeClass("nav_color");
                $('.nav_subscribe').removeClass("fixednav_subscription");
            }            
        });
    /* on scroll fixed nav ends */
    
    /* ########## For mobile nav ################ */    
        $('.current_page').click(function(){
            /* slide toggle */
        $('menu').slideToggle('slow',function(){         
            if ($('menu').is(':hidden'))
            {   
                 /* when slide closed */
                 $('#topnav').removeClass("opened");
                 $('.mobile_subscription').removeClass('blue');
                 $('.mobile_nav h5').removeClass("black");
                 $('.mobile_nav h5 i').css('transform','rotate(0deg)');
                 $('.mobile_nav h5 i').css('transition','ease all 1s');
                 $('.mobile_nav h5 i svg path').css('fill','#fff');
            }
            else
            {
                /* when slide open */
                $('#topnav').addClass("opened"); 
                $('.mobile_nav h5').addClass("black");                 
                $('.mobile_subscription').addClass('blue');
                $('.mobile_subscription').removeClass('.mobile_subscription');   //$('.mobile_nav h5 i').css('background','black');
                $('.mobile_nav h5 i').css('transform','rotate(180deg)');
                $('.mobile_nav h5 i svg path').css('fill','black');
                
            }
       
            });         
                    
        });    
    
    /* Mobile nav ends */
    
    
    /* ######### For smooth scrolling to all links ##### */    
          $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
              // Prevent default anchor click behavior
              event.preventDefault();

              // Store hash
              var hash = this.hash;

              // Using jQuery's animate() method to add smooth page scroll
              // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 1000, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
              });
            } // End if
          });
    /* Smooth scrolling ends */
    
    
    
    /* get the campaign id from the url */
    //var url = "http://www.abc.com/get-started?oc=100002&campaingId=abcdef";
    
     var url = new URL(document.URL);
     var searchParams = new URLSearchParams(url.search);
     console.log(searchParams.get('campaignId'));    
     var camp_id = searchParams.get('campaignId');
     
     $('.back-to-3').attr('href','file:///Users/910375/Public/ashraful/v4/bundle3.html?campaignId='+camp_id); 
    
    $('.back-to-2').attr('href','file:///Users/910375/Public/ashraful/v4/bundle2.html?campaignId='+camp_id);
    
    $('.back-to-home').attr('href','file:///Users/910375/Public/ashraful/v4/bundle.html?campaignId='+camp_id);
    $('.nav-block a.nav_subscribe').attr('href','file:///Users/910375/Public/ashraful/v4/bundle.html?campaignId='+camp_id);    
    
     console.log(camp_id);
    
    
    /* for slide up image text 
    $('.toggle_icon').on("click",function(){
        console.log('toggle icon clicked....');
        $('.toggle').css('display','block');
        $('.image_box').find('figcaption').addClass('active');
        $(this).css('transform','rotate(45deg)');
        $(this).toggleClass('toggle');
    });*/
    
        
    
       // console.log('test');
       // $(this).next().find('p.toggle').slideToggle("slow");
        //$(this).parent('li figure figcaption p').find(".toggle").slideToggle("slow");
        
        //$(this).parent('figcaption').children("p.toggle").slideToggle("slow");
      // $(this).next('.toggle').slideToggle('slow');/
       
        //$('.image_list li figure figcaption').find("p.toggle").slideToggle("slow");         
       
            /* $('figcaption p.toggle').slideToggle('slow', function() {
                if ($('.toggle').is(':hidden')) {
                    $('i.toggle_icon').css('transform','rotate(0deg)');
                } 
                else {
                    $('i.toggle_icon').css('transform','rotate(45deg)');
                }
            });
            */
             
      
        
     /* function for get rotated class quantity */
        var rotated=0;
        function getRotated(){
             rotated =$('.rotated').length;
        }    


        /* ######## Learn more button click  ######### */

        $('.more').click(function(){
            /* adding toggle class details */
            $('.details').toggle('slow');           
                     
            /* Count active class of rotated */
            getRotated();
            
            /* if roated is active or roated=1 */
            if(rotated>0){
                /* remove class rotated */
                $('.more i').removeClass('rotated');
                /* add transform roated to 0deg */
                $('.more i').css('transform','rotate(0deg)');
                /* add Learn More text to the span */
                $('.more span').html('Learn More');
                /* remove class close */
                $('.more').removeClass('close');
               }
            /* when roated is removed or roated=0 */
            else{
                /* add class roated */
                $('.more i').addClass('rotated');
                /* add transform roated to 45deg */
                $('.more i').css('transform','rotate(45deg)');
                /* add close text to the span */
                $('.more span').html('Close');
                /* add class close */
                $('.more').addClass('close');                
            }                   

        });
    /* End of Learn More button*/
    
        
});    
    