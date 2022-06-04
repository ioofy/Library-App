import { Helmet } from "react-helmet";

type HelmetProps = {
  title: string;
  description: string;
};

const HelmetEntity: React.FC<HelmetProps> = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
  );
};

export default HelmetEntity;
