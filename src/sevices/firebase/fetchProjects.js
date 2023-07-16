import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import { useState } from "react";

const fetchProjects = (setProjects) => {
  const projectsList = collection(db, "projects");
  const q = query(projectsList, orderBy("id"));
  getDocs(q)
    .then((response) => {
      const pro = response.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setProjects(pro);
    })
    .catch((error) => console.log(error.message));
};

export default fetchProjects;
