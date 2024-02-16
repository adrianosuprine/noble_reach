/* eslint-disable react/prop-types */

 
function ProgramsCard({program}){
  
return (
  <>
     <div className="card">
      <div className="card-image">
      <img width="100%"className="w-2/5 rounded" src={program.photo} alt={program.name} />
      </div>
      <div>
        <h3 className="card-title">{program.name}</h3>
        <p className="description">{program.description}</p>
      </div>
        
  </div>
  </>
 
 
)
        
         
   
   
}

export default ProgramsCard;