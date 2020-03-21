console.log("start");

function getMessages() {
	setTimeout(function() {
		var par = document.getElementsByClassName("__i_ _7i2k");
		if (par.length) {
			var messages = par[0].children[2];
			main(messages)
		}
		else {
			getMessages();
		}
	}, 500);
}

function main(messages) {
	console.log(messages);
	console.log("done");

	const config = {childList: true, subtree: true };

	const callback = function(mutationsList, observer) {
		for (let mutation of mutationsList) {
			if (mutation.type === 'childList') {
				e = mutation.target
				if (e.getAttribute("class") === "_aok _7i2m") {
					console.log(e);
					e.children[0].innerHTML = '<div class="_3058 _ui9 _hh7 _6ybn _s1- _52mr _43by _6ybp _3oh-">'.concat(e.getAttribute("aria-label")).concat("</div>");	
				}
			}
		}
	};

	const observer = new MutationObserver(callback);

	observer.observe(messages, config)
}

getMessages();
