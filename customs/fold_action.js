//ledong�����۵���������: https://blog.rmiao.top/hexo-fold-block/

$(document).ready(function(){
    $(document).on('click', '.fold_hider', function(){
        $('>.fold', this.parentNode).slideToggle();
        $('>:first', this).toggleClass('open');
    });
    //Ĭ��������۵�
    $("div.fold").css("display","none");
});