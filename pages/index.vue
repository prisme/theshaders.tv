<template>
  <div>
    <video class="loop" :class="{ muted: isMuted }" :muted="isMuted" autoplay loop playsinline preload="auto" poster="images/video_poster.jpg">
      <source src="https://storage.googleapis.com/shdrs/loop.mp4" type="video/mp4" />
      <source src="https://storage.googleapis.com/shdrs/loop.webm" type="video/webm" />
    </video>
    <div class="splash" :class="{ muted: !isMuted }">
      <div class="logo"><Logo /></div>
      <div class="claim">
        <p>The Shaders is an Artists &amp; Technologists creative group based in Paris, founded in 2004.</p>
        <p>Immersive Music Visualization, Live Visual Performance, Digital Art</p>
      </div>
      <div class="social">
        <a class="ig" target="_blank" href="//instagram.com/theshaders.tv">instagram</a><a class="fb" target="_blank" href="//facebook.com/theshaders.tv">facebook</a
        ><a class="tw" target="_blank" href="//twitter.com/theshaders">twitter</a><a class="vm" target="_blank" href="//vimeo.com/theshaders">vimeo</a
        ><a class="mailto" target="_blank" href="hello@theshaders.tv">email</a>
      </div>
    </div>

    <div class="sound-toggle" :class="{ muted: isMuted }" @click="isMuted = !isMuted">sound</div>
  </div>
</template>

<script>
import Logo from "~/static/images/logo.svg";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      isMuted: true,
    };
  },
};
</script>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul,
nav {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}

body {
  background: #000;
  font-family: "Exo 2", sans-serif;
  color: white;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

.loop {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  transform: translateX(-50%) translateY(-50%);
  opacity: 1;
  transition: opacity 0.3s ease-out;
  pointer-events: none;
}

.loop.muted {
  opacity: 0.3;
}

.splash {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 570px;
  min-width: 300px;
  text-align: center;
  transition: opacity 1.2s ease-in;
}

.splash.muted {
  opacity: 0;
}

.logo {
  padding-top: 33%;
  position: relative;
  max-width: 520px;
  margin: auto;
}

.logo svg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.logo path {
  fill: #fff;
}

.claim {
  padding: 3% 0 10%;
  line-height: 1.7em;
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 0.13em;
  font-size: 0.85em;
  max-width: 520px;
  margin: auto;
}

.claim p {
  margin: 2em 0;
}
.claim p:first-child {
  margin-top: 0;
}
.claim p:last-child {
  margin-bottom: 0;
  font-size: 0.9em;
}

.social {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.social a {
  padding: 0.5em 1em;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.9em;
}

.social a:hover {
  text-decoration: underline;
}

.sound-toggle {
  position: fixed;
  bottom: 2%;
  right: 2%;
  text-transform: uppercase;
  font-size: 0.8em;
  padding: 1rem;
  letter-spacing: 0.2em;
  cursor: pointer;
}

.sound-toggle.muted {
  text-decoration: line-through;
}
</style>
