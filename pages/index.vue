<template>
  <div class="shdrs">
    <video class="shdrs__loop" :class="{ '-muted': isMuted }" :muted="isMuted" autoplay loop playsinline preload="auto" poster="images/video_poster.jpg">
      <source src="https://storage.googleapis.com/shdrs/loop.mp4" type="video/mp4" />
      <source src="https://storage.googleapis.com/shdrs/loop.webm" type="video/webm" />
    </video>
    <div class="shdrs__splash" :class="{ '-muted': !isMuted }">
      <div class="shdrs__logo"><Logo /></div>
      <div class="shdrs__claim">
        <p>The Shaders is an Artists &amp; Technologists creative group based in Paris, founded in 2004.</p>
        <p>Immersive Music Visualization, Live Visual Performance, Digital Art</p>
      </div>
      <div class="shdrs__social">
        <a class="shdrs__ig" target="_blank" href="//instagram.com/theshaders.tv">instagram</a><a class="shdrs__fb" target="_blank" href="//facebook.com/theshaders.tv">facebook</a
        ><a class="shdrs__tw" target="_blank" href="//twitter.com/theshaders">twitter</a><a class="shdrs__vm" target="_blank" href="//vimeo.com/theshaders">vimeo</a
        ><a class="shdrs__mailto" target="_blank" href="hello@theshaders.tv">email</a>
      </div>
    </div>

    <div class="shdrs__sound-toggle" :class="{ '-muted': isMuted }" @click="isMuted = !isMuted">sound</div>
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

<style lang="scss">
.shdrs {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  &__loop {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease-out;
    z-index: -1;
    pointer-events: none;
    &.-muted {
      opacity: 0.3;
    }
  }
  &__splash {
    width: 60%;
    max-width: 570px;
    min-width: 300px;
    text-align: center;
    transition: opacity 1.2s ease-in;
    &.-muted {
      opacity: 0;
    }
  }
  &__logo {
    padding-top: 33%;
    position: relative;
    max-width: 520px;
    margin: auto;
    svg {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    path {
      fill: #fff;
    }
  }
  &__claim {
    padding: 3% 0 10%;
    line-height: 1.7em;
    font-family: "Libre Franklin", sans-serif;
    letter-spacing: 0.13em;
    font-size: 0.85em;
    max-width: 520px;
    margin: auto;
    p {
      margin: 2em 0;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
        font-size: 0.9em;
      }
    }
  }
  &__social {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
      padding: 0.5em 1em;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 0.9em;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &__sound-toggle {
    position: fixed;
    bottom: 2%;
    right: 2%;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 1rem;
    letter-spacing: 0.2em;
    cursor: pointer;
    &.-muted {
      text-decoration: line-through;
    }
  }
}
</style>
