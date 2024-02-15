import { useState,useEffect } from "react";
import ProgramsCard from "./ProgramsCard";
import './Page.css';

function ProgramsPage(){
    const [programs, setPrograms] = useState([]);
    let [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/programs")
          .then((response) => response.json())
          .then((data) => {
            setPrograms(data);
          });
      }, []);


      function handleSearch(e)  {
        searchTerm = e.target.value.toLowerCase();
      
       // updates the search term in state 
       setSearchTerm(searchTerm);
      
     }
    return (
        <div>
            
            <h3 className="text-center aspect-auto ">Noble~Reach works with companies and charity organizations to 
                promote <br/>self-sufficiency and improvements in health, 
                education, mental health,<br/> reduce cases of gender based violence,
                female genital mutilation. <br/>
                We have worked to fund programs that offer creative solutions
                 to meet the basic needs of communities in Africa.</h3>
                 <h2 className="text-center font-bold py-2rem">Programs</h2>
                 <input id="search-bar"
                    type="text"
                    placeholder="Search programs..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button>Search</button>
                <div className="card-container">
                    {
                        programs.map(((program,index) =>
                            <ProgramsCard key={index} program={program} search={searchTerm}/>) 
                        )
                    }
                </div>
                
        </div>

    )
}

export default ProgramsPage;