<template>
  <div class="result-detail-wrapper">
    <div v-if="sumValue === 0">項目がありません</div>
    <div class="result-detail-contents" v-for="elem in list" :key="elem.id">
      <div v-if="elem.select">
        <resultDetailContents :list="elem" />
      </div>
    </div>
  </div>
</template>
<script>
import resultDetailContents from "@/components/resultDetailContents.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      sumValue: (state) => state.sumValue,
      list: (state) => state.list,
    }),
  },
  components: {
    resultDetailContents,
  },
};
</script>
<style scoped>
.result-detail-wrapper {
  max-width: 1000px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px;
  padding: 50px 0 35px;
}
.result-detail-contents {
  width: 90%;
}
</style>
