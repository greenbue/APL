$(document).ready(function(){
    $(".courses a").click(function(){
      $(this).tab('show');
      console.log("Hello");
    });
    $(function() {
      if ( document.location.href.indexOf('#active') > -1 ) {
        $('#active_tab').click();
      }
      else if ( document.location.href.indexOf('#recommended') > -1 ) {
        $('#recommended_tab').click();
      }
      else if ( document.location.href.indexOf('#completed') > -1 ) {
        $('#completed_tab').click();
      }
    });
    $('.courses a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});
