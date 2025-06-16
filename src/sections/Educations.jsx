import { Timeline } from "../components/Timeline1";
import { educations } from "../constants";
const Educations = () => {
  return (
    <div className="w-full">
      <Timeline data={educations} />
    </div>
  );
};

export default Educations;
