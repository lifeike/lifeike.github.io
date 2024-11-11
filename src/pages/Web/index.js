import WorkExperience from "../../components/WorkExperience"

const index = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">Feeco Li</h2>
        <h2 className="font-semibold text-lg">[Frontend/Backend/Fullstack Developer]</h2>
      </div>
      <div className="flex justify-center space-x-2">
        <li>Calgary Alberta</li>
        <li>lifeike67@gmail.com</li>
        <li>(403)400-5028</li>
        <li>likedinin.com/in/feeco</li>
      </div>
      <div>
        <div> skills</div>
        <div className="border-b-2 border-black"> </div>
        <div> Typescript, React, Node Express, MongoDB,AWS, TailwindCSS, ShadCN, MySql, Nextjs</div>
      </div>
      <div>
        <div> employment</div>
        <div className="border-b-2 border-black"> </div>
        <WorkExperience
          companyName="VOG APP DEVELOPER INC."
          location="Calgary, Canada"
          title="Full Stack Developer"
          date="2021.1-Present"
          descriptions={[
            "Developed and deployed cloud-based web applications tailored to various industry needs",
            "Provided comprehensive technical support and problem-solving solutions to developers company-wide",
            "Continuously enhanced and refined the reusable code library for improved performance and efficiency",
          ]}
        />
        <WorkExperience
          companyName="SKETCHBOX (CONTRACT) San Francisco"
          location="San Francisco, United States"
          title="Full Stack Developer"
          date="2023.3-2023.6"
          descriptions={[
            "Efficiently executed live application deployment in alignment with design mockups",
            "Strategically formulated development pathways for multi-platform projects, adapting to specific business contexts",
            "Proactively maintained and enhanced live products to align with evolving customer requirements",
          ]}
        />
        <WorkExperience
          companyName="BANK OF COMMUNICATIONS"
          location="Beijing, China"
          title="Frontend Developer"
          date="2016.5-2018.6"
          descriptions={[
            "Created a tablet-based internal settlement application for managing joint accounts in the banking sector",
            "Enhanced calculation accuracy and prevented settlement discrepancies using custom-developed libraries",
          ]}
        />
      </div>
    </>
  )
}

export default index
