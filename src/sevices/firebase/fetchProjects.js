import {
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { collectionGroup, where } from "firebase/firestore";
import { db } from "./firebase";
import { useState } from "react";

// const fetchProjects = async (setProjects) => {
//   const projectsList = collection(db, "projects");
//   const q = query(projectsList, orderBy("id"));
//   getDocs(q)
//     .then((response) => {
//       const pro = response.docs.map((doc) => ({
//         data: doc.data(),
//         id: doc.id,
//       }));
//       setProjects(pro);
//     })
//     .catch((error) => console.log(error.message));
// };

// const fetchProjects = async (setProjects) => {
//   const projectsList = collection(db, "projects");

//   const q = query(projectsList, orderBy("id"));

//   getDocs(q)
//     .then((response) => {
//       const result = [];

//       response.docs.map((doc) => {
//         const childCollectionRef = collection(doc.ref, "screenshots");
//         getDocs(childCollectionRef).then((subResopnse) => {
//           const pro2 = subResopnse.docs.map((subDoc) => ({
//             data: doc.data(),
//             id: doc.id,
//             screenshots: subDoc.data(),
//           }));
//           const screenshots = [];
//           subResopnse.docs.map((subDoc) => {
//             screenshots.push(subDoc.data());
//           });
//           const pro = {
//             data: doc.data(),
//             id: doc.id,
//             screenshots: screenshots,
//           };
//           result.push(pro);
//           console.log(pro);
//           setProjects(result);
//         });
//       });
//       console.log("run time");
//     })
//     .catch((error) => console.log(error.message));
// };

// const fetchProjects = async (setProjects) => {
//   const projectsList = collection(db, "projects");
//   const q = query(projectsList, orderBy("id"));
//   getDocs(q)
//     .then((response) => {
//       const result = [];
//       response.docs.map((doc) => {
//         const childCollectionRef = collection(doc.ref, "screenshots");
//         getDocs(childCollectionRef).then((subResopnse) => {
//           const screenshots = [];
//           subResopnse.docs.map((subDoc) => {
//             screenshots.push(subDoc.data());
//           });
//           const pro = {
//             data: doc.data(),
//             id: doc.id,
//             screenshots: screenshots,
//           };
//           result.push(pro);
//           // console.log(pro);
//         });
//       });
//       setProjects(result);
//       console.log("run time");
//     })
//     .catch((error) => console.log(error.message));
// };

const fetchProjects = async (setProjects) => {
  const projectsList = collection(db, "projects");
  const q = query(projectsList, orderBy("id"));
  getDocs(q)
    .then((response) => {
      var result = [];
      response.docs.map((doc) => {
        var screenshots = [];
        const q2 = collection(doc.ref, "screenshots");
        getDocs(q2).then((response2) => {
          response2.docs.map((doc2) => {
            screenshots.push(doc2.data());
          });
        });
        result.push({
          data: doc.data(),
          id: doc.id,
          screenshots: screenshots,
        });
      });
      setProjects(result);
    })
    .catch((error) => console.log(error.message));
};

export default fetchProjects;
