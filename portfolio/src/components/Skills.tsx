import { skills } from "../data/skills";
import { SkillIcon } from "./icons";

const Skills = (): JSX.Element => (
  <div>
    {skills.map((skill) => (
      <a key={skill.name} className="inline-block pb-2 pr-4" href={skill.href}>
        <SkillIcon name={skill.name} />
      </a>
    ))}
  </div>
);

export default Skills;
