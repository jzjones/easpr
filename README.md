easpr
=====

Easpr is a project that combines Polymer with WebRTC to create custom collaborative elements. This repository contains the code for a website demoing each of the elements in action. To see the demo, visit http://cs.unc.edu/~ssmith96/easpr/index.html. Below are descriptions of each of these elements:

webrtc-element
This is the 'base' element that each of the other elements inherit. As such, each of the other elements are dependent upon it. As it's functionality is primarily "behind the scenes," it should not actually be placed on a page; instead, use one of the other elements that extend it.

webrtc-container
This element is used to contain each of the functional elements: videochat, textchat and map. Simply including this element within a page will add the functionality of the other elements with a complete layout created using Pure CSS.

videochat-element
This element provides conference call functionality via WebRTC and RTC MultiConnection.

textchat-element
This element provides peer-to-peer text chat via WebRTC and RTC MultiConnection.

map-element
This element provides a collaborative map made using Leaflet JS and RTC MultiConnection. Clicking on the map will place a marker that can be seen by others in the session.

For more information, please view our repository associated with Bower.
