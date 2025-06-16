import { Timeline } from "../components/Timeline2";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
