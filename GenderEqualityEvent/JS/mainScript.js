//JQuery

$(document).ready(function(){
    //Quotes animation here
    var quote1= '<span class="quote">"</span>To all the little girls who are watching this, never doubt that you are valuable and powerful, and deserving of every chance and opportunity in the world to pursue and achieve your own dreams.';

var quote2= '<span class="quote">"</span>Feminism is not about making women stronger. Women are already strong, it is about changing the way the world perceives that strength.';

var quote3= '<span class="quote">"</span>You do not have to be pretty. You do not owe prettiness to anyone. Not to your boyfriend/spouse/partner, not to your co-workers, especially not to random men on the street. You do not owe it to your mother, you do not owe it to your children, you do not owe it to civilization in general. Prettiness is not a rent you pay for occupying a space marked "female".';

var textArray = [quote1, quote2, quote3];
   $("#quote-msg").html(quote1);
var index = 1;
setInterval(function(){        
$("#quote-msg").animate({
                        opacity:0.6
                        },function(){
                            if(textArray.length > index) {
                                $(this).html(textArray[index]).animate({opacity:0.6})
                                index++;
                            }else
                                index = 0;
                        }
                    );
    },8000);
    
    
var index1 = 0;  
var images =["Ad1.png","Ad2.png"];
setInterval(function(){
    
$("#tile1").animate({
                        opacity:1
                        },function(){
                            if(images.length > index1) {
                               
                                var myImg = $('<img />',{
                                    class : 'tile1',
                                    src : 'CSS/Images/'+images[index1],
                                    alt : images[index1]
                                });
                                $('#tile1 img').remove();
                                $(this).prepend(myImg);
                                index1++;
                            }else
                                index1 = 0;
                        }
                    );
    },4000);
    
    $('.pledge-btn').click(function(){
        $('.modal-content').show(200);
    });
    
    $('#close').click(function(){
        $('.modal-content').hide(200);
    });
});


//JS
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



