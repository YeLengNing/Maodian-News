/**
 * Created by hp on 2017/6/7.
 */
$(function(){
   var page={
      inIt:function(){
            this.mao();
            this.btn_show();
       },
       mao:function(){
            $('.mao>li').click(function(){
                var locName=location.href+'#'+$(this).attr('data-name');
                location.hash=$(this).attr('data-name');
            })
       },
       btn_show:function(){
           $('.content').click(function(){
               $('.mao').stop().slideToggle();
           });
           $('.mao>li').click(function(){
               $(this).parent().stop().slideUp();
           })
       }
   };
  page.inIt();
});