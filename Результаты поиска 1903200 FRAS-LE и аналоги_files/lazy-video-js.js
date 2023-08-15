$(document).ready( function() {
    var youtube = document.querySelectorAll( "#youtube" );
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg";
        var image = new Image();
                image.src = source;
                image.addEventListener( "load", function() {
                    youtube[ i ].appendChild( image );
                }( i ) );
        
                youtube[i].addEventListener( "click", function() {
                    var iframe = document.createElement( "iframe" );
                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "allowfullscreen", "" );
                    iframe.setAttribute( "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" );
                    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?autoplay=1" );
                    this.innerHTML = "";
                    this.appendChild( iframe );
                } );    
    };
});

$(document).ready( function(t) {
    var youtube = document.querySelectorAll( "#youtube-details" );
    for (var i = 0; i < youtube.length; i++) {
        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg";
        var image = new Image();
                image.src = source;
                image.setAttribute( "style", "margin-top: 15px;" );
                image.addEventListener( "load", function() {
                    youtube[ i ].appendChild( image );
                }( i ) );
        
                youtube[i].addEventListener( "click", function() {
                    var iframe = document.createElement( "iframe" );
                    iframe.setAttribute( "frameborder", "0" );
                    iframe.setAttribute( "class", "video-details" );
                    iframe.setAttribute( "width", "425" );
                    iframe.setAttribute( "height", "234" );
                    iframe.setAttribute( "allowfullscreen", "" );
                    iframe.setAttribute( "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" );
                    iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?autoplay=1" );
                    this.innerHTML = "";
                    this.appendChild( iframe );
                } );    
    };
});

webSettings.set_handler( function(controls) {
    if (webSettings.isControl(controls, Constants.zw_InformationBlocks.ID)) {
        var youtube = document.querySelectorAll( "#youtube-videoreview" );
        for (var i = 0; i < youtube.length; i++) {
            var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg";
            var image = new Image();
                    image.src = source;
                    image.addEventListener( "load", function() {
                        youtube[ i ].appendChild( image );
                    }( i ) );
            
                    youtube[i].addEventListener( "click", function() {
                        var iframe = document.createElement( "iframe" );
                        iframe.setAttribute( "frameborder", "0" );
                        iframe.setAttribute( "allowfullscreen", "" );
                        iframe.setAttribute( "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" );
                        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?autoplay=1" );
                        this.innerHTML = "";
                        this.appendChild( iframe );
                    } );    
        }
    } 
});

webSettings.set_handler( function(controls) {
    if (webSettings.isControl(controls, Constants.zw_InformationBlocks.ID)) {
        var youtube = document.querySelectorAll( "#youtube-videoreview" );
        for (var i = 0; i < youtube.length; i++) {
            var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg";
            var image = new Image();
                    image.src = source;
                    image.addEventListener( "load", function() {
                        youtube[ i ].appendChild( image );
                    }( i ) );
            
                    youtube[i].addEventListener( "click", function() {
                        var iframe = document.createElement( "iframe" );
                        iframe.setAttribute( "frameborder", "0" );
                        iframe.setAttribute( "allowfullscreen", "" );
                        iframe.setAttribute( "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" );
                        iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?autoplay=1" );
                        this.innerHTML = "";
                        this.appendChild( iframe );
                    } );    
        }
    } 
});