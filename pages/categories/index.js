import CategoriesPage from "@/components/templates/CategoriesPage";

const Categories = ({ data }) => {
  return <CategoriesPage data={data} />;
};

export default Categories;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  const filteredData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty === difficulty
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Coocking Time"] || "";
      const [timeDetail] = cookingTime.split(" "); // or  const timeDetail = cookingTime.split(" ")[0];
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && +timeDetail > 30) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && difficulty.length) {
      return item;
    } else if (!time && difficulty && difficultyResult.length) {
      return item;
    } else if (time && !difficulty && timeResult.length) {
      return item;
    }
  });

  return {
    props: {
      data: filteredData,
    },
  };
}
