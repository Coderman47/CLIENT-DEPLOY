import axios from "axios";

export const getAllNotes = async () => {
  try {
    return (await axios("/countries")).data.map((name) => {
      return name.name;
    });
  } catch (err) {
    console.log(err);
  }
};

export const postNotes = async (name) => {
  try {
    return (await axios.post("/activities", { name: name }))
    .data;
  } catch (err) {
    console.log(err);
  }
};
