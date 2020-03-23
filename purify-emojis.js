
var url;

function getMessages() {
	setTimeout(function() {
        try {
            var par = document.getElementsByClassName("__i_ _7i2k");
            if (par.length) {
                var messages = par[0].children[2];
                url = window.location.href;
                checkPageChange(startObserver(messages))
            }
            else {
                getMessages();
            }
        }
        catch (error) { }
	}, 500);
}

function checkPageChange(observer) {
    setTimeout(function(ob) {
        if (url != window.location.href) {
            ob.disconnect();
            getMessages();
            console.log("Updated page.");
        }
        checkPageChange(ob);
    }, 500, observer);
}

function purify(child) {
    try {
        if (child.getAttribute("class").includes("clearfix _o46 _3erg")) {
            console.log(child);
            var bbl = child.children[0];
            var msg = bbl.children[1];
            if (child.innerHTML.includes('<img') && child.innerHTML.includes('src="https://static.xx.fbcdn.net/images/emoji.php/')) {
                text = msg.getAttribute('aria-label');
                if (text) {
                    // child.setAttribute('class', 'clearfix _o46 _3erg _3i_m _nd_ _8lma direction_ltr text_align_ltr');
                    if (bbl.getAttribute('class').includes('_43by _6ybp')) {
                        bbl.setAttribute('class', '_3058 _ui9 _hh7 _6ybn _s1- _52mr _43by _6ybp _3oh-');
                    }
                    else {
                        bbl.setAttribute('class', '_3058 _ui9 _hh7 _6ybn _s1- _52mr _3oh-');
                    }
                    msg.innerHTML = '<span class="_30h- _58nk">'.concat(msg.getAttribute('aria-label')).concat('</span>');
                }
            }
        }
    } catch (error) { }
}

function startObserver(messages) {
    // Replace all emojis found initially
    var arr = Array.from(document.getElementsByClassName('clearfix _o46 _3erg _3i_m _nd_'));
    arr.forEach(purify);

	const config = {childList: true, subtree: true, attributes: true };

	const callback = function(mutationsList, observer) {
		for (let mutation of mutationsList) {
			if (mutation.type === 'childList') {
                e = mutation.target
				if (e.getAttribute("class") === "_41ud") {
                    arr = Array.from(e.children);
                    arr.forEach(purify);
				}
			}
		}
	};

	const observer = new MutationObserver(callback);
    observer.observe(messages, config)
    return observer;
}

getMessages();