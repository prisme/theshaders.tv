<template>
  <div class="shdrs">
    <video class="shdrs__loop" :class="{ '-muted': isMuted }" :muted="isMuted" autoplay loop playsinline preload="auto" poster="images/video_poster.jpg">
      <source src="https://storage.googleapis.com/shdrs/loop.mp4" type="video/mp4" />
      <source src="https://storage.googleapis.com/shdrs/loop.webm" type="video/webm" />
    </video>
    <div class="shdrs__splash" :class="{ '-muted': !isMuted || isBioVisible }">
      <div class="shdrs__logo"><Logo /></div>
      <div class="shdrs__claim">
        <p>The Shaders is an Artists &amp; Technologists creative group based in Paris, founded in 2004.</p>
        <p>Immersive Music Visualization, Live Visual Performance, Digital Art</p>
      </div>
      <div class="shdrs__social">
        <a class="shdrs__ig" target="_blank" href="//instagram.com/theshaders.tv">instagram</a><a class="shdrs__fb" target="_blank" href="//facebook.com/theshaders.tv">facebook</a
        ><a class="shdrs__tw" target="_blank" href="//twitter.com/theshaders">twitter</a><a class="shdrs__vm" target="_blank" href="//vimeo.com/theshaders">vimeo</a
        ><a class="shdrs__mailto" target="_blank" href="hello@theshaders.tv">say hi</a>
      </div>
    </div>
    <div class="shdrs__bio" :class="{ '-muted': !isBioVisible }">
      <p>Since 2004, The Shaders have been pushing the boundaries of common perception of Time and Space, immersing audiences in video &amp; lighting scenographic installations</p>
      <p>
        The Paris based collective is all about creativity and tech flavoured experimentations. Bolstered by an extensive VJ experience, The Shaders have developed a unique aesthetics to create the
        abstract works of art that have become their trademark.
      </p>
      <p>
        The collective excels at conceiving tailored-made, live in situ performances, which reveal a transmedial synaesthetic visual language. Thus placing the audience at the heart of their
        performance, The Shaders create a phenomenological experience, epitomising the collective and societal dimension of the festive party spirit that inspires their creations.
      </p>
      <p>The Shaders’ ephemeral and singular approach literally embody the uniqueness of the on-going celebration and the resulting sense of communion.</p>
    </div>

    <div class="shdrs__bio-toggle" :class="{ '-muted': !isBioVisible }" @click="isBioVisible = !isBioVisible">manifest</div>
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
      isBioVisible: false,
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
  font-family: "Libre Franklin", sans-serif;
  letter-spacing: 0.13em;
  font-size: 1em;
  line-height: 1.7em;

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
    max-width: 520px;
    margin: auto;
    font-size: 0.85em;

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
      text-decoration: underline;
      text-underline-position: under;
    }
  }
  &__bio {
    font-size: 0.85em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    max-width: 520px;
    p {
      margin: 1.5em 0;
    }
    transition: opacity 1.2s ease-in;
    &.-muted {
      opacity: 0;
      z-index: -1;
    }
  }
  &__sound-toggle,
  &__bio-toggle {
    position: fixed;
    bottom: 2%;
    text-transform: uppercase;
    font-size: 0.8em;
    padding: 1rem;
    letter-spacing: 0.2em;
    cursor: pointer;
    &.-muted {
      text-decoration: line-through;
    }
  }
  &__sound-toggle {
    right: 2%;
  }
  &__bio-toggle {
    left: 2%;
  }
}
</style>
