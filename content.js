//main page
var elements1 = document.getElementsByTagName('span');
for (var i = 0; i < elements1.length; i++) {
    elements1[i].classList.remove('label-warning', 'label-danger', 'label-success');
}
//code page
var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText1 = text.replace(/Easy/gi, '');
            var replacedText2 = text.replace(/Medium/gi, '');
            var replacedText3 = text.replace(/Hard/gi, '');

            if (replacedText1 !== text) {
                element.replaceChild(document.createTextNode(replacedText1), node);
            }else if(replacedText2 !== text){
                element.replaceChild(document.createTextNode(replacedText2), node);
            }else if(replacedText3 !== text){
                element.replaceChild(document.createTextNode(replacedText3), node);
            }
        }
    }
}