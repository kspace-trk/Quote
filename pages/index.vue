<template>
  <div class="top-wrapper">
    <div class="main-visual">
      <div class="main-visual-background">
        <div class="main-visual-l">
          <div class="main-visual-label-wrapper">
            <div class="main-visual-label-url">
              <p>team-steg.com</p>
            </div>
            <div class="main-visual-label-l"></div>
            <div class="main-visual-label-r">
              <div class="main-visual-label-r-contents">
                <div class="label-title">
                  <p>Steg Quote System</p>
                </div>

                <div class="label-subtitle">
                  <p>Webサイト制作料金見積もりシステム</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-visual-r">
          <div class="steg-logo">
            <img src="img/steg-logo-light.png" alt="circle-logo" />
          </div>
        </div>
      </div>
    </div>
    <how2use />
  </div>
</template>
<script>
import how2use from "@/components/how2use.vue";
export default {
  components: {
    how2use,
  },
};
</script>
<style scoped>
.top-wrapper {
  margin-bottom: 160px;
}
.main-visual {
  width: 100%;
  height: 100%;
}
.main-visual-background {
  width: 100%;
  height: 80vh;
  display: flex;
}
.main-visual-l {
  width: 18%;
  height: 100%;
  background-color: #ffffff;
}
.main-visual-r {
  width: 82%;
  height: 100%;
  background-color: #20d8ba;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.steg-logo {
  width: 60%;
  margin-right: 15px;
}
.steg-logo img {
  width: 100%;
}
.main-visual-label-wrapper {
  width: 90vw;
  max-width: 700px;
  max-height: 300px;
  height: 60vh;
  background-color: #ffffff;
  position: absolute;
  top: calc(40vh - 150px);
  display: flex;
  align-items: center;
}
.main-visual-label-url {
  width: 10%;
  height: 300px;
  display: grid;
  place-items: center;
}
.main-visual-label-url p {
  height: 300px;
  letter-spacing: 9px;
  text-align: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  margin: 0;
}
.main-visual-label-l {
  width: 6%;
  height: 100%;
  background-color: #20d8ba;
}
.main-visual-label-r {
  width: 84%;
  height: 100%;
  display: grid;
  place-items: center;
}
.main-visual-label-r-contents {
  display: flex;
  flex-direction: column;
  margin: 0 25px;
}
.label-title p {
  font-size: 3.5rem;
  font-weight: 900;
}
@media screen and (max-width: 480px) {
  .label-title p {
    font-size: 3rem;
    font-weight: 900;
  }
  .label-subtitle p {
    font-size: 0.8rem;
  }
}
</style>