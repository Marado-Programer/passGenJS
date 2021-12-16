var wordlist = new Array();

var alphaLowerCase = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
var alphaUpperCase = new Array();
for (var char in alphaLowerCase)
    alphaUpperCase.push(alphaLowerCase[char].toUpperCase());
var numeric = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
var symbols = new Array('#', '$', '%', '&', '@', '^', '`', '~');
var pauses = new Array('.', ',', ':', ';');
var quotations = new Array('"', '\'');
var dashes = new Array('\\', '/', '|', '_', '-');
var matemetical = new Array('<', '*', '+', '!', '?', '=');
var parentheses = new Array('{', '[', '(', ')', ']', '}');

var chars = new Array(alphaLowerCase, alphaUpperCase, numeric, symbols, pauses, quotations, dashes, matemetical, parentheses);

function createPW(numChar, level) {                                             
    validPw = false;
    do {
        var curChars = new Array();                                                 
        var lvls = level.split('');
        for (var lvlChoice = 0; lvlChoice < lvls.length; lvlChoice++)
            if (lvls[lvlChoice] == '1')
                for (var char in chars[lvlChoice])
                    curChars.push(chars[lvlChoice][char]);
        var pw = "";
        for (var i = 0; i < numChar; i++)
            pw += curChars[Math.floor(Math.random() * curChars.length)];
        validPw = isValid(pw);
        console.log(pw);
    } while(!validPw);
    return pw;
}

function isValid(pw) {
    for (var l in wordlist)
        for (var w in wordlist[l]) {
            if (pw == wordlist[l][w])
                return false;
            else
                return true;
        }
}

window.onload = function() {
    var app = document.getElementById("app");

    var choicesDiv = app.appendChild(document.createElement("div"));

    var pwCheck_az = choicesDiv.appendChild(document.createElement("input"));
    pwCheck_az.setAttribute("type", "checkbox");
    pwCheck_az.setAttribute("name", "a-z");
    pwCheck_az.setAttribute("checked", "true");
    var pwCheck_azText = choicesDiv.appendChild(document.createElement("label"));
    pwCheck_azText.setAttribute("for", "a-z");
    pwCheck_azText.innerHTML = "a-z";

    var pwCheck_AZ = choicesDiv.appendChild(document.createElement("input"));
    pwCheck_AZ.setAttribute("type", "checkbox");
    pwCheck_AZ.setAttribute("name", "A-Z");
    pwCheck_AZ.setAttribute("checked", "true");
    var pwCheck_AZText = choicesDiv.appendChild(document.createElement("label"));
    pwCheck_AZText.setAttribute("for", "A-Z");
    pwCheck_AZText.innerHTML = "A-Z";

    var pwCheck_09 = choicesDiv.appendChild(document.createElement("input"));
    pwCheck_09.setAttribute("type", "checkbox");
    pwCheck_09.setAttribute("name", "0-9");
    pwCheck_09.setAttribute("checked", "true");
    var pwCheck_09Text = choicesDiv.appendChild(document.createElement("label"));
    pwCheck_09Text.setAttribute("for", "0-9");
    pwCheck_09Text.innerHTML = "0-9";

    var pwCheck_sym = choicesDiv.appendChild(document.createElement("input"));
    pwCheck_sym.setAttribute("type", "checkbox");
    pwCheck_sym.setAttribute("name", "sym");
    var pwCheck_symText = choicesDiv.appendChild(document.createElement("label"));
    pwCheck_symText.setAttribute("for", "sym");
    pwCheck_symText.innerHTML = "# $ % & @ ^ ` ~";

    var pwCheck_s = choicesDiv.appendChild(document.createElement("input"));
    pwCheck_s.setAttribute("type", "checkbox");
    pwCheck_s.setAttribute("name", "s");
    var pwCheck_sText = choicesDiv.appendChild(document.createElement("label"));
    pwCheck_sText.setAttribute("for", "s");
    pwCheck_sText.innerHTML = ". , : ;";

    var pwCheck_q = choicesDiv.appendChild(document.createElement("input"));
    pwCheck_q.setAttribute("type", "checkbox");
    pwCheck_q.setAttribute("name", "q");
    var pwCheck_qText = choicesDiv.appendChild(document.createElement("label"));
    pwCheck_qText.setAttribute("for", "q");
    pwCheck_qText.innerHTML = "' \"";

    var pwCheck_d = choicesDiv.appendChild(document.createElement("input"));
    pwCheck_d.setAttribute("type", "checkbox");
    pwCheck_d.setAttribute("name", "d");
    var pwCheck_dText = choicesDiv.appendChild(document.createElement("label"));
    pwCheck_dText.setAttribute("for", "d");
    pwCheck_dText.innerHTML = "\\ / | _ -";

    var pwCheck_m = choicesDiv.appendChild(document.createElement("input"));
    pwCheck_m.setAttribute("type", "checkbox");
    pwCheck_m.setAttribute("name", "m");
    var pwCheck_mText = choicesDiv.appendChild(document.createElement("label"));
    pwCheck_mText.setAttribute("for", "m");
    pwCheck_mText.innerHTML = "< * + ! ? =";

    var pwCheck_p = choicesDiv.appendChild(document.createElement("input"));
    pwCheck_p.setAttribute("type", "checkbox");
    pwCheck_p.setAttribute("name", "p");
    var pwCheck_pText = choicesDiv.appendChild(document.createElement("label"));
    pwCheck_pText.setAttribute("for", "p");
    pwCheck_pText.innerHTML = "{ [ ( ) ] }";

    var pwSize = app.appendChild(document.createElement("input"));
    pwSize.setAttribute("type", "number");

    var pwGen = app.appendChild(document.createElement("button"));
    pwGen.innerHTML = "Generate Password!";
    pwGen.onclick = function() {
        var choices = choicesDiv.getElementsByTagName("input");
        var choiceStr = "";
        for (var choice in choices)
            choiceStr += choices[choice].checked ? "1" : "0";
        console.log(createPW(pwSize.value, choiceStr));
    }

    wordlist.push(createWordLists());
    console.log(wordlist);
    for (var i in wordlist) {
        console.log(wordlist[i]);
        for (var j in wordlist[i]) {
            console.log(wordlist[i][j]);
        }
    }
};