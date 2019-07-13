$(function(){
    "use strict";
    $(window).on("resize",function()
    {
        var wid =$(window).width()
        console.log(wid);
    });
});
$(function(){
    "use strict";
    $("#drop1").hide(1,function(){
    $(".Product").click(function(){
        $("#drop1").stop(true,false,true).slideToggle()
    });
  });
});
$(function(){
    "use strict";
    $(".drop-down1").hide(1,function(){
    $(".Product1").hover(function(){
        $(".drop-down1").stop(true,false,true).slideToggle()
    });
  });
});
$(function(){
    "use strict";
    $(".drop-down2").hide(1,function(){
    $(".Product8").hover(function(){
        $(".drop-down2").stop(true,false,true).slideToggle()
    });
  });
});
$(function(){
    "use strict";
    $(".drop-down3").hide(1,function(){
    $(".contact4").hover(function(){
        $(".drop-down3").stop(true,false,true).slideToggle()
    });
  });
});
$(function(){
    "use strict";
    $(".drop-down4").hide(1,function(){
    $(".contact5").hover(function(){
        $(".drop-down4").stop(true,false,true).slideToggle()
    });
  });
});
$(function(){
    "use strict";
    $(".drop2").hide(1,function(){
    $(".contact").click(function(){
        $(".drop2").stop(true,false,true).slideToggle()
    });
  });
});

