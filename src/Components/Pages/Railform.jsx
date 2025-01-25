import { useParams } from "react-router";

const Railform = () => {
  const { id } = useParams();
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",

      }}
    >
      <h1
      
      >
        Railform
      </h1>
      <p
        style={{
          fontWeight:"600"
        }}
      >
        RR No : {id}
      </p>
    </div>
  );
};

export default Railform;
