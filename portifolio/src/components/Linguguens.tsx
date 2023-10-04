import { HiCodeBracketSquare } from "react-icons/hi2"

export default function Linguguens() {
     
      const skills = [
        {
          name: "HTML5/CSS3",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
          level: 95,
        },
        {
          name: "JavaScript",

          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          level: 90,
        },
        {
          name: "React.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
          level: 85,
        },
     
        {         name: "Angular.js",
            icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
          
        },
        {
          name: "Node.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
       
               },
               {
                name: "Mysql",
                icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
             
                     },
                     {
                      name: "Express",
                      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
                   
                           },
                       
                                 {
                                  name: "Java",
                                  icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
                               
                                       },

     
                  ]
    
      return (
        <section className=" bg-gradient-to-tr  to-green-700  from-green-400 text-white rounded-br-[60px] md:rounded-br-[200px]" id="educacao" >
  
          <div className="container mx-auto max-w-4xl p-4 py-20">
            <div className="flex flex-col gap-8  p-4 text-center">
              <h2 className="flex  justify-center  mb-4 font-bold">
              <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
          
                <span className="font-handwriting text-4xl text-green-900">
                  Skills
                </span>
              </h2>
              
           
            </div>
    
         
                <div className="grid grid-cols-2 gap-4 font-semibold md:grid-cols-4">
                  {skills.map((skill, index) => (
                    <div
                      key={`skill-${index}`}
                      className="flex flex-row justify-center gap-2 md:flex-col "
                    >
                      <div className=" relative flex w-40 items-center justify-center rounded-tl-[60px]
                       bg-white p-4 aspect-square flex-col border-b-8 border-green-500/75">
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
