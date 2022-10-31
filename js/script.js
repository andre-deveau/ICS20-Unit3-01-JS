// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-01-JS/sw.js", {
    scope: "/ICS20-Unit3-01-JS/",
  })
}

/**
 * This function displays an alert.
 */
function enterClicked() {
//input
const aBase = parseInt(document.getElementById("base-a").value)
const bBase = paresInt(document.getElementById("base-b").value)
const height = paresInt(document.getElementById("Height").value)

//process
const area = ((aBase + bBase) / 2) * height

//output
document.getElementById("area-of-trapezoid").innerHTML = 
"The are of the trapezoid is: " + area.toFixed(2) + "cm²"
}
