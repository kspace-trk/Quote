import axios from "axios";
export const state = () => ({
  list: [],
  sumValue: 0,
  contactText: "",
  index: 0
});

export const mutations = {
  setItems(state, { list }) {
    state.list = list;
    state.list.forEach(element => {
      element.select = false;
      element.index = state.index;
      state.index++;
    });
  },
  selectContents(state, index) {
    state.list[index].select = !state.list[index].select;
    if (state.list[index].select) {
      state.sumValue += state.list[index].value;
    } else {
      state.sumValue -= state.list[index].value;
    }
  },
  contactText(state) {
    state.contactText = "";
    state.list.forEach(element => {
      if (element.select) {
        state.contactText += element.name + "\n";
      }
    });
    state.contactText =
      "見積もり結果\n----------\n" +
      state.contactText +
      "合計金額：" +
      state.sumValue +
      "円\n----------\n" +
      "※こちらの内容をもとに、改めてお見積もりの連絡をさせていただきます。\nその他ご要望がありましたら以下に御記載ください。\n----------";
  }
};
export const getters = {
  list: state => state.list
};
export const actions = {
  async fetchItems({ commit }) {
    await axios
      .get("https://steg-quote.microcms.io/api/v1/contents?limit=99", {
        headers: { "X-API-KEY": process.env.API_KEY }
      })
      .then(response => {
        commit("setItems", { list: response.data.contents });
      });
  }
};
