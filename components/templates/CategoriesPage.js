import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../modules/Card";
import styles from "./CategoriesPage.module.css";

const CategoriesPage = ({ data }) => {
  const router = useRouter();
  const [query, setQuery] = useState({
    difficulty: "",
    time: "",
  });

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, query });
    }
  }, []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    router.push({
      pathname: "categories",
      query,
    });
  };

  return (
    <div className={styles.container}>
      <h2>Categories</h2>

      <div className={styles.subContainer}>
        <div className={styles.select}>
          <select
            value={query.difficulty}
            name="difficulty"
            onChange={changeHandler}
          >
            <option>Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <select value={query.time} name="time" onChange={changeHandler}>
            <option>Cooking Time</option>
            <option>More than 30 min</option>
            <option>Less than 30 min</option>
          </select>

          <button onClick={searchHandler}>Search</button>
        </div>

        <div className={styles.cards}>
          {!data.length ? <img src="/images/search.png" alt="search" /> : ""}
          {data.map((food) => (
            <Card key={food.id} {...food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
