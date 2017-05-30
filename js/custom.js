/* Custom javascript */
/* by- ashraful kabir */
$(document).ready(function(){ 
    // creating objects for daily specials 
    var dailySpecials={};
    
    dailySpecials["Wednesday"]={};
    dailySpecials["Wednesday"].discountPerc=15;
    dailySpecials["Wednesday"].qtyType='odd';
    
    dailySpecials["Thursday"]={};
    dailySpecials["Thursday"].discountPerc=20;
    dailySpecials["Thursday"].qtyType='even';
    
    dailySpecials["Friday"]={};
    dailySpecials["Friday"].discountPerc=30;
    dailySpecials["Friday"].qtyType='odd';
    
    dailySpecials["Saturday"]={};
    dailySpecials["Saturday"].discountPerc=40;
    dailySpecials["Saturday"].qtyType='even';
    
    dailySpecials["Sunday"]={};
    dailySpecials["Sunday"].discountPerc=50;
    dailySpecials["Sunday"].qtyType='odd';
    
    dailySpecials["Monday"]={};
    dailySpecials["Monday"].discountPerc=30;
    dailySpecials["Monday"].qtyType='even';
    
    dailySpecials["Tuesday"]={};
    dailySpecials["Tuesday"].discountPerc=30;
    dailySpecials["Tuesday"].qtyType='odd';
     
    var day = new Date();
    var weekday = new Array();
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";   
    
    var todaysDay =weekday[day.getDay()];
    
    var quantityType = dailySpecials[todaysDay].qtyType;
    var discountedPercent = dailySpecials[todaysDay].discountPerc;
   // alert(discountedPercent);
    
    /* on page loading adding sub-heading div */
    $('.bundle-1 h2,.bundle-2 h2').after('<div class="sub-heading">&nbsp; </div>');      
    $('.sub-heading').last().css('height','auto');            
    
        /* For any bundle selection */        
        $('.bundle').not('.notForSale').on("click",function(){
            var bundle_id=$(this).attr('id');          
                     
            if($(this).hasClass('forSale')){               
                /* Display the purchase message  */
                $('.purchase-message').html('<h2>You can purchase this bundle.</h2>');
                $('.purchase-message h2').css('color','green');
                $('#bundle-selected').show();
                
                /* display others options */
                $('#otherOptions').show();                
                
                 regularBundlePrice = $(this).find('span.regularPrice').text();                  
            }
            else{
                /* Display the purchase message  */
                $('.purchase-message').html('<h2>You can not purchase this bundle. Please select another Bundle. </h2>');
                $('.purchase-message h2').css('color','red');
                $('#bundle-selected').show();
                
                /* hide other options */
               $('#otherOptions').hide();
                
                
            }
            
            bundleName='basic'; 
            /* storing the data value into bundleName */
            bundleName=$(this).data('nickname');
            
            /* display selected animal name on div#animal */
            $("#selectedBundle").html(bundleName); 
            
            /* display bundle name to variable block */
             $('span.bundleSelected').text(bundleName);
            
        });
        
        /* add the word Bundle befor default bundle name */
        function change_text(bundle_name){            
            bundle_name1=$("#bundle-1").data('nickname');        
            bundle_name2=$("#bundle-2").data('nickname');        
            bundle_name3=$("#bundle-3").data('nickname');      
                        
            $('div.bundle-1 h2').html(bundle_name);       
            $('div.bundle-2 h2').html(bundle_name);       
            $('div.bundle-3 h2').html(bundle_name);
        }
                       
        /* Using prepend inserting word or text before h2 text */
        function add_bundlename(bundle_name){
            $('div.bundle h2').prepend(bundle_name);
        }
        
                
    /* ###### Looping each bundle using .each() ###### */ 
        $( "div.bundle" ).each(function(index ) {
            var default_text = $( this ).text();
            console.log(default_text);
            
            /* storing the nickname */
            var bundle_nickname=$(this).data('nickname'); 
            
            /* storing bundle with nickname */
            var new_text = bundle_nickname;           
            
            $(this).find("h2").html(new_text);
            
        });
    
    /* Global variables */
    var regularPrice = 0;
    var discountedPrice = 0;
    var afterDiscountPrice = 0;
    
    /* Discount calculation */
    function discountCalculation(regularPrice,discountedPrice){
        afterDiscountPrice = regularPrice-(regularPrice*discountedPrice/100);      
        return afterDiscountPrice;
    }    
    /* End of discount calculation */   
    
    
    /* Round up the total amount method */
    function roundTotalPrice(totalNumber,precision){        
        roundTotal= Math.ceil(totalNumber * precision) / precision;
        return roundTotal;
    }     
    
    /* Step 2 submit username */
    $( "button.submit" ).on("click",function() {  
            /* storing the input value into var inputVal */
             userName = $("input#username").val(); 
            
            /* get the length of the input value */
            var length = userName.length;
        
        /* check if the input value is blank or no*/
          if (userName=='') {           
            $( "#form-text" ).html( "Please Enter Username" );
              /* add class success */
              $("#form-text").addClass('error');
            
          }
        else{
        /* checking if the lenght of input value is less then 5*/
            if(length <5){             
              $( "#form-text" ).html( "Username Can't be less then 5 charecters" );   
                $("#form-text").addClass('error');
             
              
            }
            else{
                /* call hasNumbers() function to check the string has number */
                var str = hasNumbers(userName);
                
                /* checking if then given input value is numeric or no */
                if(str==true){                    
                    $('#form-text').html('Please enter non numeric value.');
                    /* remove class success */
                    $("#form-text").removeClass('success');
                    /* add class success */
                    $("#form-text").addClass('error');
                    
                }
                else{
                    /* succeess message! */                  
                    $('#form-text').html('Yahoooo!!! Good Job: '+userName);
                    /* add class success */
                    $("#form-text").addClass('success');
                    $('#step-3').css('display','block');
                    
                     $('span.username').text(userName);
                    
                }
                
            }
                        
        }
        
        /* Check an string that contains number */
            function hasNumbers(t)
            {
                return /\d/.test(t);
            }
          
    });    
    /* End of username submission */
    
    
        /* function for get circle active class quantity */
        function getCircleQuantity(){
             /* getting the length of ciractive */
             circleQuantity =$('.ciractive').length;
            return circleQuantity;
        }

         /* function for get triangle active class quantity */
        function getTriangleQuantity(){
             triangleQuantity =$('.triactive').length;
            return triangleQuantity;
        }    
        
    
    /* ######## Triangle selection ######### */
   
    $('div.triangles').on("click",function(){
        /* adding toggle class triactive */
        $(this).toggleClass('triactive');
        
        /* Count active class of triangle */
        getTriangleQuantity();
        
         /* display step 4 when shapes more then 0 */
        var cs = checkShapes(); // total quantity of shapes 
        if(cs>0){
            $('#step-4').css('display','block');
            $('.tricircle span#triangleQuantity').text(triangleQuantity);
            
           }
        else{
             $('#step-4').css('display','none');
        }       
              
    });
   /* ################ End of triangle selection ######## */ 
     
    /*   Circle selection  */    
    $('.circles').on("click",function(){
        /* add the toogle class ciractive */
        $(this).toggleClass('ciractive');
        
        /* count active class of circle */
          getCircleQuantity();
        
        /* display step 4 when shapes more then 0 */
        var cs = checkShapes(); // total quantity of shapes 
        if(cs>0){
            $('#step-4').css('display','block');
            $('.tricircle span#circleQuantity').text(circleQuantity);
           }
        else{
             $('#step-4').css('display','none');
        }
    });
   /*  End of circle selection */    
   
      
        /* Check Shapes Quantity */    
        function checkShapes(){
            totalShape = getCircleQuantity()+getTriangleQuantity();
            return totalShape;
        }
    
        /* discount calculation */
        function discountCalculation(regularPrice,discountedPerc){
            afterDiscountPrice = regularPrice-(regularPrice*discountedPerc/100);      
            return afterDiscountPrice;
        }       
        /* End of discount calculation */

        /* round up the total amount  */
        function roundTotalPrice(totalNumber,precision){        
            return Math.ceil(totalNumber * precision) / precision;
        }  
    
        
    /* Show all variables  */
    function showAllVariables(){
         totalShape = checkShapes(); // call totalShapes()
        
        todaysDiscountedPerc = discountedPercent;
        console.log('Todays discount percent: '+todaysDiscountedPerc);
       
        // total price after discount
        totalPriceAfterDiscount = discountCalculation(regularBundlePrice,todaysDiscountedPerc);
        
        console.log('Regular Bundle Price: '+regularBundlePrice);
        
        console.log('Total price after discount: '+totalPriceAfterDiscount);
        
        // round up the discounted total price
        finalPrice = roundTotalPrice(totalPriceAfterDiscount,100);
        // end of final price after round up
        sValue =regularBundlePrice-finalPrice;
        savingsValue = roundTotalPrice(sValue,100);
        // end fo savings value with round up.
        
        console.log('Final price: '+finalPrice);
        
        $('h1.showAllVariables').text('Order Details');
        $('p.username').html('Username: '+userName);
        $('p.bundleSelected').html('Bundle: '+bundleName);
        $('p.price').html('Regular Price: '+regularBundlePrice);        
        $('p.finalPrice').html('Final Price(After Discount): '+finalPrice);        
        $('p.triangleQuantity').html('Triangle Quantity: '+triangleQuantity);
        $('p.circleQuantity').html('Circle Quantity: '+circleQuantity);
        $('p.totalShape').html('Total Shape: '+totalShape);
        
        $('p.offerMessage').html('<strong>You have win the Todays Special Offer.</strong>');
        
         $('.ShowPercent').text(todaysDiscountedPerc);
         $('.ShowPercent').append('%');
         $('.savingsValue').text(savingsValue);
        $(".discountProgressBar").animate({width:todaysDiscountedPerc+"%"}, 1500)
    }
    /* End of show all variables */
    
    
    $('sender').on("click",function(){
        totalShape = checkShapes(); // get total shapes
        
        if(totalShape%2==0){ // checking total shapes is odd or even
            oddOrEven ='even';
           }
        else{
             oddOrEven ='odd';
        }          
        
        showAllVariables(); // Show all vairables
        $('.discountProgress').css('display','block');        
        
         sendVariables(); // call sendVariables()  
                
        
    });
    /* End of submit variables*/
    
    
   /* send variables  */    
    function sendVariables(){
         var request = $.ajax({
              method: "POST",
              url: "tracker.html",             
              data: {
                  username:userName,
                  bundle:bundleName,
                  price:regularBundlePrice,
                  
              }
        });                
        
        /* success message */
        request.done(function( response ){          
                alert( "Variables Sent: " + response );
                //console.log(data);
        }); 
        
        /* error message */
        request.fail(function( jqXHR, textStatus ) {
            $('.dataSendSuccess').text("Request failed: " + textStatus);
          
          console.log( "Request failed: " + textStatus );
        });        
    }
    // End of sendVariables     
                 
                       
                
});    
    