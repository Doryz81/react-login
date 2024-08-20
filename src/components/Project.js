import React, { useState, useEffect } from "react";
import {db} from "../firebaseConfig.js";
import { getDocs, collection, addDoc } from "firebase/firestore";




function Project () {
    const {projects, setProjects} = useState([]);

    const projectsReference = collection(db, "projects");

    useEffect(() => {
        const getProjects = async () => {
            try {
                const data = await getDocs(projectsReference);
                const filterData =  data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                console.log(filterData);
                setProjects(filterData);
            } catch (error) {
                console.log(error)
            }
        }
        getProjects();
    }, []);

    return (
        <>
            {projects.map( (project, index) => (
                <div key = {index}>
                    <h1>Nombre: {project.name}</h1>
                    <p>Propietario: {project.owner}</p>
                    <p>Fecha: {project.delivery}</p>
                </div>
            ))}

        </>
    );

}

export default Project;
