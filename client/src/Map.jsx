import react from "react";

const GoogleMapEmbed = ({ htmlCode }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlCode,
      }}
    />
  );
};

export default GoogleMapEmbed;
