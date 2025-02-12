function createParagraph(){
    var word1 = document.getElementById('word1').value;
    var word2 = document.getElementById('word2').value;
    var word3 = document.getElementById('word3').value;
    var word4 = document.getElementById('word4').value;
    var word5 = document.getElementById('word5').value;
    var word6 = document.getElementById('word6').value;
    var word7 = document.getElementById('word7').value;
    var word8 = document.getElementById('word8').value;
    var word9 = document.getElementById('word9').value;
    var word10 = document.getElementById('word10').value;
    var word11 = document.getElementById('word11').value;
    var word12 = document.getElementById('word12').value;
    var word13 = document.getElementById('word13').value;
    var word14 = document.getElementById('word14').value;
    var word15 = document.getElementById('word15').value;
    var word16 = document.getElementById('word16').value;
    var word17 = document.getElementById('word17').value;
    var word18 = document.getElementById('word18').value;

var paragraph = '<p>I love '+ word1 + ' on a train from my ' + word2 + ' to the ' + word3 + ' city. Trains are ' + word4 + ' because they ' + word5 + ' on special ' + word6 + ' made of ' + word7 + ' instead of roads. its fun ' + word8 + ' for the train and ' + word9 + ' the ' + word10 + ' sound as the train arrives. While ' + word11 + ' on the train, I like to look out the ' + word12 + ' and see the countryside, passing '+ word13 +' and ' + word14 + ', '+ word15 + ' and ' + word16 + ' . '+ word17 + ' as we ' + word18 + ' past. </p>'
    document.getElementById('answer').innerHTML = paragraph; 
}

//I love__on a train from my__to the__city. Trains
//are__because they__on special__made of__instead of roads. it's fun __for the train and__the__
//sound as the train arrives. While__on the train, I like to look out the__and see the countryside,
//passing__and__,__and__.__ as we__past.