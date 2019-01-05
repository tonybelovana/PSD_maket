 jQuery(document).ready(function() {
            jQuery('.pagescroll-menu').pagescroll_menu();	
            });
        
        $('.mobile-nav').hide();
        $('.burger').on('click', function(){
            $('.mobile-nav').slideToggle();
        });
        
        
        $(function(){
              $('.bxslider').bxSlider({
                    mode: 'horizontal',
                    captions: true,
                    responsive: true,
                    touchEnabled: true,
                    auto: true,
                    pause: 6000,
              });
            });
        
        $(function(){
              $('.bxslider').bxSlider({
                    mode: 'horizontal',
                    captions: true,
                    responsive: true,
                    touchEnabled: true,
                    auto: true,
                    pause: 6000,
              });
            });
        
        
jQuery(function($){
    $('a[href*="#"]').on('click.smoothscroll', function( e ){
    var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
    if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
    var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
    if( ! $target.length ) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 400, 'swing', function(){
    window.location.hash = hash;
    });
    });
});