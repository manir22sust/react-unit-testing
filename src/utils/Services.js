export const FetchData = () => {
  return fetch("http://localhost:5173/data.json").then((res) => {
    return res.json();
  });
};
