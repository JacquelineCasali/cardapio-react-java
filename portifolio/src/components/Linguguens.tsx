import { HiCodeBracketSquare } from "react-icons/hi2"
import skills from "../json/Skills.json"
export default function Linguguens() {
     
      
    
      return (
        <section className=" bg-gradient-to-tr  to-green-700  from-green-400 text-white rounded-br-[60px] md:rounded-br-[120px] lg:rounded-br-[220px]" id="educacao" >
  
          <div className="container mx-auto max-w-4xl p-6 py-24 md:pb-0 md:pt-20 ">
            <div className="flex flex-col gap-8  p-4 text-center"   >
              <h2 className="flex  justify-center  mb-4 font-bold">
              <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
          
                <span className="font-handwriting text-4xl text-green-900">
                  Skills
                </span>
              </h2>
              
           
            </div>
    
         
                <div className="grid grid-cols-2 font-semibold md:grid-cols-3 lg:grid-cols-4 " >
                  {skills.map((skill, index) => (
                    <div
                      key={`skill-${index}`}
                      className="flex flex-row justify-center gap-2 md:mb-5  "
                    >
                      <div className=" relative flex w-40 items-center justify-center rounded-tl-[60px]
                       bg-white p-4 aspect-square flex-col border-b-8 border-green-500/75" >
    <h4 className="font-semibold text-green-700 mb-6 ">{skill.name}</h4>
     <img className=" w-20"
      src={skill.icon}
       alt={skill.name}
                         
                        />

          </div>
                    
                     
                    </div>
                  ))}
                </div>
              
            </div>
        
 
        </section>
      )
    }
