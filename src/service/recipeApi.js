import axios from "axios";

axios.defaults.baseURL = "https://api.edamam.com/api/recipes/v2";

export function searchRecipe(query) {
  return axios
    .get(`/`, {
      params: {
        q: query,
        app_id: "74411313",
        app_key: "a5c3cdf0f55a5108a5466a6bac37a089",
        type: "public",
      },
    })
    .then((res) => res.data);
}
