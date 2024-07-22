import { loading } from "../assets";
import Button from "./Button";

const Generating = ({ className, href, childern }) => {
  return (
    <div className={`flex mt-9 ${className || ""} text-base`}>
      <Button href={href ? href : ""} white>
        {childern ? childern : "see website"}
      </Button>
    </div>
  );
};

export default Generating;
