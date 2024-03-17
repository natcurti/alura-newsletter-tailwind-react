import data from "../../../articles.json";

const ArticleList = () => {
  return (
    <div>
      {data.map((article, index) => (
        <p key={index}>{article.title}</p>
      ))}
    </div>
  );
};

export default ArticleList;
