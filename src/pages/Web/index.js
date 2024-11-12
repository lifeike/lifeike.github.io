import WorkExperience from "../../components/WorkExperience"
import ProjectDetail from "../../components/ProjectDetail"
import Certificate from "../../components/Certificate"
import Education from "../../components/Education"

const index = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg">Feeco Li</h2>
        <h2 className="font-semibold text-lg">[Frontend/Backend/Full Stack Developer]</h2>
      </div>
      <div className="flex justify-center space-x-4">
        <li className="list-none">Calgary Alberta</li>
        <li className="list-none font-medium text-blue-600 dark:text-blue-500 underline">lifeike67@gmail.com</li>
        <li className="list-none">(403)400-5028</li>
        <li className="list-none font-medium text-blue-600 dark:text-blue-500 underline">linkedin.com/in/feeco/#projects</li>
      </div>
      <div className="my-2">
        <div className="font-bold text-lg uppercase"> Skills</div>
        <div className="border-b-2 border-black"> </div>
        <div>Nextjs, AWS, React Native, Firebase, Typescript, Tailwind, MySql, MongoDB</div>
      </div>
      <div className="my-2">
        <div className="font-bold text-lg uppercase"> Employment</div>
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
          companyName="SKETCHBOX (CONTRACT)"
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
      <div className="my-2">
        <div className="font-bold text-lg uppercase"> Projects</div>
        <div className="border-b-2 border-black"> </div>
        <div className="p-2">
          <ProjectDetail title="Noosu" description="Home health care services" date="2021.1-Present" />
          <ProjectDetail title="Sketchbox 3D" description="Virtual reality training & assessment" date="2021.1-Present" />
          <ProjectDetail title="OSL" description="Safety & Project Management" date="2021.1-Present" />
          <ProjectDetail title="Karbon-X" description="Carbon offsets and credits trading" date="2021.1-Present" />
          <ProjectDetail title="Luxe Du Jour" description="Luxury platform you shop, sell" date="2021.1-Present" />
          <ProjectDetail title="Exclusive Reward" description="Reward platforms for car owners" date="2021.1-Present" />
          <ProjectDetail title="Quilt" description="Donation platform" date="2021.1-Present" />
          <ProjectDetail title="Vip Golf" description="Exclusive golf club" date="2021.1-Present" />
        </div>
      </div>
      <div className="my-2">
        <div className="font-bold text-lg uppercase">Certificate</div>
        <div className="border-b-2 border-black"> </div>
        <Certificate title="Amazon web services solution Architect Associate" description="Credential ID H0PC2TJDFEQE1ZKS" />
      </div>
      <div className="my-2">
        <div className="font-bold text-lg uppercase">Education</div>
        <div className="border-b-2 border-black"> </div>
        <Education
          schoolName="SOUTHERN ALBERTA INSTITUTE OF TECHNOLOGY (SAIT)"
          location="Calgary, Canada"
          major="Diploma of Information Technology; Major in Software Development "
          date="2018-2020"
        />
        <div className="my-2"> </div>
        <Education
          schoolName="SHAN DONG UNIVERSITY"
          location="ShanDong, China"
          major="Bachelor of Management; Major in Human Resource Management "
          date="2009-2013"
        />
      </div>
    </>
  )
}

export default index
