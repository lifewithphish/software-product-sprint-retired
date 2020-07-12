// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// add a function that runs the photo gallery
//function adapted from w3schools: 
// https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
//After using w3's method for displaying the photos, i replaced
//their javascript with these functions to display the text rather
//than opening the photo in a larger payne

function showText(text){
    document.getElementById("text").innerHTML=text;
}

function hide(){
    document.getElementById("text").innerHTML="";
}






/**
 * Adds a random greeting to the page.
 * Saving because I thought it was a cute function
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

