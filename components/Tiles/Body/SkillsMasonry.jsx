import React from 'react'

const SkillsMasonry = () => {
  const webDev =
    {
      skillCat: "Web Development",
      skillList: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Node.js", "Express.js", "TailwindCSS", "NextUI", "CI/CD", "Axure RP"]
    };
    const progLang =
    {
      skillCat: "Programming Languages",
      skillList: ["C++", "Python", "C", "Java"]
    };
    const dataProjM =
    {
      skillCat: "Database & Collaboration Tools",
      skillList: ["MongoDB", "PostgreSQL", "Asana", "Slack", "Jira", "Github"]
    };
    const special =
    {
      skillCat: "Specialized Skills",
      skillList: ["Search Engine Optimization (SEO)", "SEMrush", "Google Search Console", "Google Analytics", "Google Ads", "Adobe Photoshop", "TensorFlow"]
    };


  return (
    <div className='w-full rounded-xl max-tile-sm flex flex-col gap-5'>
        <div className='bg-tile p-5 rounded-xl shadow-md flex flex-col gap-3'> {/* full col span tile */}
          <span className='text-[18px] text-center'>{webDev.skillCat}</span>
          <div className='flex flex-wrap gap-3 justify-center'>
            {webDev.skillList.map((skill, skillIndex) => (
              <span key={skillIndex} className='skill-tile'>{skill}</span>
            ))}
          </div>
        </div>
        <div className='grid grid-rows-3 md:grid-flow-col gap-5'>
            <div className='bg-tile rounded-xl shadow-md p-3 row-span-3 flex flex-col gap-3'> {/* tall box left */}
              <span className='text-[18px] text-center'>{special.skillCat}</span>
              <div className='flex flex-col items-center gap-3'>
                {special.skillList.map((skill, skillIndex) => (
                  <span key={skillIndex} className='skill-tile min-w-[200px]'>{skill}</span>
                ))}
              </div>
            </div>
            <div className='bg-tile rounded-xl shadow-md p-3 flex flex-col gap-3'> {/* thin box right */}
              <span className='text-[18px] text-center'>{progLang.skillCat}</span>
              <div className='flex gap-5 justify-center'>
                {progLang.skillList.map((skill, skillIndex) => (
                  <span key={skillIndex} className='skill-tile'>{skill}</span>
                ))}
              </div>
            </div>
            <div className='bg-tile rounded-xl shadow-md p-3 row-span-2 flex flex-col gap-3'> {/* thick box right */}
              <span className='text-[18px] text-center'>{dataProjM.skillCat}</span>
              <div className='flex flex-wrap gap-3 justify-center'>
                {dataProjM.skillList.map((skill, skillIndex) => (
                  <span key={skillIndex} className='skill-tile'>{skill}</span>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default SkillsMasonry