// ==UserScript==
// @name		Github Rawgit Button
// @namespace	eight04.blogspot.com
// @description	An userscript to add "Rawgit" button on github.
// @include		https://github.com/*
// @include		https://gist.github.com/*
// @version		1.2.1
// @grant 		none
// ==/UserScript==

"use strict";

function replace(){
	// Check if raw-url button exists
	var btn = document.querySelector("#raw-url") || document.querySelector(".raw-url");
	if (!btn || btn.classList.contains("rawgit")) {
		return;
	}

	var url = location.href;
	if (url.indexOf("gist.github.com") > -1) {
		url = url.replace("gist.github.com", "rawgit.com");
		url = url + "/raw/";
	} else {
		url = url.replace("github.com", "rawgit.com");
		url = url.replace("/blob/", "/");
	}

	var newBtn = btn.cloneNode(false);
	newBtn.href = url;
	newBtn.textContent = "Rawgit";
	newBtn.removeAttribute("id");

	btn.parentNode.insertBefore(newBtn, btn.nextSibling);

	btn.classList.add("rawgit");
}

var container =
	document.querySelector("#js-repo-pjax-container") ||
	document.querySelector("#js-pjax-container");

if (container) {
	new MutationObserver(function(){
		replace();
	}).observe(container, {childList: true, subtree: true});
}

replace();
