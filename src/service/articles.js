import axios from "./api.js";

const ArticleService = {
  async getArticles() {
    const response = await axios.get("/articles");
    return response.data;
  },
  async getOneArticles(id) {
    const response = await axios.get(`articles/${id}`);
    return response.data;
  },

  async createArticle(article) {
    const response = await axios.post("/articles", {
      article,
    });
    return response.data;
  },
};

export default ArticleService;
