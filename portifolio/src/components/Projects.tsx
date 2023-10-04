
export default function Projects() {
    const projects = [
    {
      title: "Busca Cep",
      description: "Buscar cep auto preenche o endereço",
      image:
      "https://i.ibb.co/094dsn9/Video-cep.gif[/img][/url] ",

      link: "https://busca-endereco-pelo-cep.vercel.app/",
   
     
    },
    
  
      {
        title: "Cripto Moedas",
        description: "Descrição do projeto 3",
        image:
        "https://i.ibb.co/PWKF6Cr/2023-08-01-144058.png[/img]"
       
        ,
        link: "https://site-criptonoedas.vercel.app/",
     
      },
    {
      title: "X-men",
      description: "Descrição do projeto 4",
      image:
      "https://i.ibb.co/vwGbHrH/imagem-projeto.png[/img][/url]"

      ,
      link: "https://x-men-two.vercel.app/",
      
    },
    {
      title: "Conversor de Moedas ",
      description: "Descrição do projeto 5",
      image:
        "https://i.ibb.co/wNGL0tY/2023-09-06-133944.png[/img][/url]",
      link: "https://conversor-de-moedas-phi.vercel.app/",
    
    },
    {
        title: "CRUD Pet",
        description: "Buscar cep auto preenche o endereço",
        image: "https://i.ibb.co/Wv50XC1/Video-2023-06-15-210440.gif[/img][/url]" ,
        link: "https://front-back-petshop.vercel.app/",
       
      },
  
  

    {
        title: "Chat",
        description: "Bate papo",
        image:
        " https://i.ibb.co/kQqcZfx/V-deo-sem-t-tulo-Feito-com-o-Clipchamp.gif[/img][/url]" ,

        // link: "https://busca-endereco-pelo-cep.vercel.app/",
     
      }, 
   
      {
        title: "Sitema de Hotel",
        description: "Bate papo",
         image:
        "https://i.ibb.co/mNN2hn5/Video-hotel.gif[/img][/url]",
        link: "https://github.com/JacquelineCasali/One-Alura-Hotel",
      }, 

         {
        title: "Api-Sistema-Medico",
        description: "Bate papo",
         image:
         "https://i.ibb.co/P9qJygK/Video-2023-10-04-064647.gif",
       
        link: "https://github.com/JacquelineCasali/Api-Sistema-Medico-Java",
      }, 
    ]


  
  
  
    return (
        <>
     <div className="bg-white-100" id="projetos">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-20  lg:max-w-none lg:py-30">
           <div className="relative p-4 text-center " >
            <h2 className="   mb-2 font-light text-green-800 " >
             
               <span className="mr-2 ml-4 font-handwriting text-3xl font-semibold md:text-center  "  >
                Projetos 
              </span>
              
            </h2>
             <p className="relative text-2xl text-gray-400">
              Alguns dos projetos Desenvolvidos.
            </p> 
            <div className="absolute left-6  top-4 z-0  h-10 w-44 rounded-lg bg-green-600/10 md:left-1/3 ml-28 "  />
          </div>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          
            {projects.map((project) => (
           
           <div key={project.title} className="group relative ">
               
                <div className=" relative h-full w-full overflow-hidden border-b-8 border-green-600/75 bg-white  sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={project.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
               
                <div className="flex justify-center mb-6">
                <h3 className="mt-6 text-xl font-semibold text-green-500 no-underline hover:underline">
                  <a href={project.link} target="_blank">
                    <span className="absolute inset-0 " />
                  {project.title}
                  </a>
                </h3>
                {/* <div className="absolute right-0 -mt-[6px] h-3 w-full rounded-l-full bg-gradient-to-r from-green-700 to-green-400 md:w-full" />  */}

                  </div>    
                                  </div>
            ))}
          </div>
        </div>
      </div>
    </div>
       
    <div className="absolute right-0 -mt-[6px] h-3 w-full rounded-l-full bg-gradient-to-r from-green-700 to-green-400 md:w-full" /> 

       
       
    </>
  )
}
