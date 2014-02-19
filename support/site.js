function hilight(){
    var email = document.getElementById('mce-EMAIL');
    email.className += ' hilight';
    setTimeout(function(){
        email.className = email.className.replace(/hilight/,'');
    }, 1000);
    email.focus();
}



// require typewriter script
var typewriter = require('typewriter');
// get element
var twSpan = document.getElementById('typewriter');
// initalize builder
var tw = typewriter(twSpan).withAccuracy(95)
                         .withMinimumSpeed(5)
                         .withMaximumSpeed(22)
                         .build();

function print_counts(school_counts){

    var twEl = document.getElementById('typecount');
    // initalize builder
    var twCount = typewriter(twEl).withAccuracy(95)
                         .withMinimumSpeed(5)
                         .withMaximumSpeed(22)
                         .build();

    twCount.put('# ')
    .type('registrations:')
    .put(' <br />')
        .waitRange(300, 700);

    for (var i = 0; i < Math.min(3, school_counts.length); i++){
        twCount
            .type(school_counts[i][1] + ': \t ')
            .put('<b>' + school_counts[i][2] + '</b><br />');
    }

    twCount.put('<br /><br />')
        
}
var scr = document.createElement('script');
scr.src = 'http://go.hacksc.com/api/counts?callback=print_counts';
document.body.appendChild(scr);


// fancy typewriter dsl
tw.put('# ')
    .waitRange(500, 1000)
    .type('36 hours')
    .put('<br/>')
    .waitRange(500, 1000)
    .put('food:')
    .waitRange(300, 600)
    .type(' provided')
    .put('<br/>')
    .wait(600)
    .put('coders:')
    .waitRange(400, 600)
    .put(' needed')
    .waitRange(200, 400)
    .put('<br/>')
    .put('join us')
    .wait(700)
    .put('.')
    .wait(200)
    .put('<br/>')
    .put('<a href="http://go.hacksc.com/registrations/new" id="whiteunderline">signup</a>');


        