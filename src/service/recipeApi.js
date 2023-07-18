import axios from "axios";

axios.defaults.baseURL =
  "https://api.edamam.com/api/recipes/v2/a5c3cdf0f55a5108a5466a6bac37a089";

export function searchRecipe(query, page) {
  return axios
    .get(`/search`, {
      params: {
        query,
        page,
      },
    })
    .then((res) => res.data);
}
