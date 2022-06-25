$(document).ready(function() {    
    var $element = $('#bubble-1');
    var newText = 'Печатающийся текст';
    bubbleText({
        element: $element,
        newText: newText,
        speed: 3000,
        repeat: Infinity,
    });
})