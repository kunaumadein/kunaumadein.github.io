import React, { useEffect, useState } from "react";
import ImgBanner from './assets/banner.svg';
import ImgEBCLogo from './assets/ebc-logo.svg';
import "./styles.css";

export const handler = ({ inputs, mechanic }) => {
    const {
        dateTypeAndLocation,
        eventType,
        firstLine,
        secondLine,
        subTitel,
        sponsoredBy,
    } = inputs;

    const { topLogo, sponsorLogo } = inputs;
    
    /*
    const [topHref, setTopHref] = useState("");
    */
    const [bottomHref, setBottomHref] = useState("");

    const loadImageFromFileObject = (fileObject, stateSetter) => {
        const reader = new FileReader();
        reader.onload = () => {
            stateSetter(reader.result);
        };
        reader.readAsDataURL(fileObject);
    };

    useEffect(() => {
        if (topLogo) loadImageFromFileObject(topLogo, setTopHref);
        if (sponsorLogo) loadImageFromFileObject(sponsorLogo, setBottomHref);
    }, []);

    useEffect(() => {
        if ((!sponsorLogo && !bottomHref) || (bottomHref && sponsorLogo)) mechanic.done();
    }, [sponsorLogo, bottomHref]);

    useEffect(() => {
      if ((!sponsorLogo && !bottomHref) || (bottomHref && sponsorLogo)) mechanic.done();
  }, [sponsorLogo, bottomHref]);

    /*
 useEffect(() => {
  if ((topHref || bottomHref) && (!topLogo ||  topHref) && (!bottomLogo || bottomHref)) mechanic.done();
}, [topLogo, topHref, bottomLogo,  bottomHref]);
*/

return (
    <svg width={1200} height={627}>
      <favicon url="./assets/favicon.ico"/>
        <image href={ImgBanner} width={1200} height={627} />
        <image
          x={950}
          y={-10}
          width={200}
          height={200}
          href={ImgEBCLogo}
        >
        </image>

        <image
          x={200}
          y={447}
          width={230}
          height={230}
          href={bottomHref}
        >
        </image>
        {/* The text */}

        <text
          x={40}
          y={75}
          fill={'#ffffff'}
          textAnchor="start"
          fontWeight="regular"
          fontFamily="Garnett Regular"
          fontSize={30}
        >
          {dateTypeAndLocation}
        </text>

        <text
          x={40}
          y={125}
          fill={'#ffffff'}
          textAnchor="start"
          fontWeight="regular"
          fontFamily="Garnett Regular"
          fontSize={30}
        >
          {eventType}
        </text>
          <text
            x={40}
            y={300}
            fill={'#ffffff'}
            textAnchor="start"
            fontWeight="regular"
            fontFamily="Garnett Regular"
            fontSize={72}
          >
            {firstLine}
          </text>

        <text
          x={40}
          y={385}
          fill={'#ffffff'}
          textAnchor="start"
          fontWeight="regular"
          fontFamily="Garnett Regular"
          fontSize={72}
        >
          {secondLine}
        </text>

        <text
          x={40}
          y={575}
          fill={'#ffffff'}
          textAnchor="start"
          fontWeight="regular"
          fontFamily="Garnett Regular"
          fontSize={30}
        >
          {subTitel}
        </text>

        <text
          x={40}
          y={575}
          fill={'#ffffff'}
          textAnchor="start"
          fontWeight="regular"
          fontFamily="Garnett Regular"
          fontSize={20}
        >
          {sponsoredBy}
        </text>
    </svg>
  );
};

export const inputs = {
  dateTypeAndLocation: {
    type: "text",
    default: "Monday March 21st: From 11.00-11.45",
  },
  eventType: {
    type: "text",
    default: "Webinar",
  },
  firstLine: {
    type: "text",
    default: "Guidelines for Blockchain",
  },
  secondLine: {
    type: "text",
    default: "and DLT Governance",
  },
  subTitel: {
    type: "text",
    default: "- the new standard explained",
  },
  sponsoredBy: {
    type: "text",
    default: "",
  },
  sponsorLogo: { 
    type: "image",
    multiple: false,
  },
};

//Voreinstellungen/Presets
export const presets = {
  LinkedIn: {
    width: 1200,
    height: 627,
  }
};

export const settings = {
  engine: require("@mechanic-design/engine-react"),
  showMultipleExports: true,
  hideScaleToFit: true,
  hideGenerate: true,
  optimize: false,
  hideFeedback: true
};
