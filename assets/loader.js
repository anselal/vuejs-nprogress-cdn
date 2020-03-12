function dynamicallyLoadScript(url) {
	var script = document.createElement("script");  // create a script DOM node
	script.src = url;  // set its src to the provided URL
	script.type = "text/javascript";
	script.async = false;
	script.defer = true;
	document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

function dynamicallyLoadStyle(url) {
	var style = document.createElement("link"); // create a script DOM node
	style.href = url; // set it's href to the provided URL
	style.rel = "stylesheet";
	document.head.appendChild(style); // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

function loadAssets() {
	dynamicallyLoadScript("assets/js/vue-2.6.11.min.js");
	dynamicallyLoadScript("assets/js/vue-router-3.1.3.min.js");
	dynamicallyLoadScript("assets/js/axios-0.19.2.min.js");
	dynamicallyLoadScript("assets/js/nprogress-0.2.0.min.js");
	dynamicallyLoadStyle("assets/css/nprogress-0.2.0.min.css");
}
