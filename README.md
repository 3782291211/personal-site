# 3D React single-page application

Welcome to another one of my 3D projects with Three.js! This time, I have created a 3D scene that is mainly based on drei's text component and various image filter  effects from three.js's postprocessing libraries.

The purpose of this app is to display the various projects I've worked on and to provide links to the repositories and hosted apps.

<br>
<img width=350 src="public/three-js.png">

<br>

## App features:
- Interactive camera with fully controllable position and zoom.
- Control buttons to cycle through different projects.
- Various postprocessing effects, including bloom, scan lines, noise and a glitch effect.
- Loading screen utilising React's suspense component.
<br>

## Libraries used:
- Three.js
- React-three/fiber
- React-three/drei
- postprocessing & React-three/postprocessing

### A note on performance
This app is powered by **WebGL** and should run well on most modern browsers, including Chrome, Firefox, Internet Explorer, Opera and Safari. However, there is a small chance that you may experience poor performance on some browsers which do not properly support WebGL, such as Brave Web Browser.

On the off chance that you experience poor frame rates or stuttering animations on your chosen browser, switch to Google Chrome for best results.