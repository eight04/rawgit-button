// ==UserScript==
// @name		Github Rawgit Button
// @namespace	eight04.blogspot.com
// @description	An userscript to add "Rawgit" button on github.
// @include		https://github.com/*
// @version		1.1
// @grant 		none
// ==/UserScript==

"use strict";

function replace(){
	var btn = document.querySelector("#raw-url");
	if (!btn || btn.classList.contains("rawgit")) {
		return;
	}
	
	var url = location.href.replace("github.com", "rawgit.com");
	url = url.replace("/blob/", "/");
	btn.href = url;
	btn.classList.add("rawgit");
	btn.textContent = "Rawgit";
}

var container = document.querySelector("#js-repo-pjax-container");
if (container) {
	new MutationObserver(function(e){
		replace();
	}).observe(container, {childList: true, subtree: true});
}

replace();
