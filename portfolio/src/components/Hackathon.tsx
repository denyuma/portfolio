import { hackathons } from "../data/hackathons";

const Hackathon = (): JSX.Element => (
  <div className="prose">
    {" "}
    <ul>
      {hackathons.map((hackathon, i) => (
        <li key={i} className="prose prose-lg">
          {hackathon.name} &nbsp;&nbsp;
          {hackathon.date}
          {hackathon.award ? "：" : null}
          {hackathon.award}
        </li>
      ))}
    </ul>
  </div>
);

export default Hackathon;
