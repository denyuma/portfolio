import { career } from "../data/career";
import { CareerItem } from "./CareerItem";

const Carrer = (): JSX.Element => (
  <ul className="p-2 bg-gray-50 rounded-3xl sm:p-5 xl:p-6">
    {career.reverse().map((content, i) => (
      <CareerItem
        since={content.since}
        until={content.until}
        title={content.title}
        body={content.body}
        key={i}
        isLast={career.length === i + 1}
        isFirst={i === 0}
        isActive={content.isActive}
      />
    ))}
  </ul>
);

export default Carrer;
