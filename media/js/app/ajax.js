var words = new Array();

function createWordLists() {
	var ajax;
	try {
		ajax = new XMLHttpRequest();
	} catch(e) {
		try {
			ajax = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
				console.log(e.toString());
				return false;
			}
		}
	}

	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			try {
				words.push(ajax.responseText.split('\n'));
			} catch(e) {
				console.log(e.toString());
			}
		}
	}

	try {
		ajax.open("POST", "./media/wordlists/test.txt", true);
	} catch(e) {
		console.log(e.toString());
	}

	try {
		ajax.send(null);
	} catch(e) {
		console.log(e.toString());
	}
	
	return words;
}
