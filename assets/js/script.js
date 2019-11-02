/*var paraph = document.getElementById('texte');
document.querySelector('button').addEventListener('click', function(){
    var text = paraph.textContent;
    var index4 = 3;
    var index10 = 9;
    var index35 = 34;
    var index59 = 58;

    alert('Le caractère à la ' + (index4+1) + ' em position est ' + text.charAt(index4) +  
    '\nA la ' + (index10+1) + ' em position est ' + text.charAt(index10) + 
    '\nA la ' + (index35+1) + ' em position est ' + text.charAt(index35) + 
    '\nA la ' + (index59+1) + ' em position est ' + text.charAt(index59));
});*/

var paraph = document.getElementById('texte');
document.querySelector('button').addEventListener('click', function(){
var text = paraph.textContent;
var arrayText = text.split('');// coupe la phrase à chanque élément
alert('Le caractère à la 4ème place est ' + arrayText[4] + ' ,à la 10ème place est ' + arrayText[10] + ', à la 35ème place est ' + arrayText[35] + ', à la 59ème place est ' + arrayText[59] + '.');
});