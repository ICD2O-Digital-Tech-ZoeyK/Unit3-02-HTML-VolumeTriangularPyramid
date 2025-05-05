// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict";
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate() {
  // input
  let base = parseFloat(document.getElementById('base-of-triangle').value);
  let height = parseFloat(document.getElementById('height-of-triangle').value);
  let pyramidHeight = parseFloat(document.getElementById('height-of-pyramid').value);

  // process
  let triangleArea = (base * height) * 0.5;
  let volume = (triangleArea * pyramidHeight) / 3;

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³';
}
