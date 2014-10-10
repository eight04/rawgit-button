// ==UserScript==
// @name		Github Rawgit Button
// @namespace	eight04.blogspot.com
// @description	An userscript to add "Rawgit" button on github.
// @include		https://github.com/*/blob/*
// @version		1.0
// @grant 		none
// ==/UserScript==

"use strict";

var url = location.href.replace("github.com", "rawgit.com");
url = url.replace("/blob/", "/");
var btn = document.querySelector("#raw-url");
btn.href = url;
btn.textContent = "Rawgit";
