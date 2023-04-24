import React, { useState } from "react";
import Image from "next/image";

export type Props = {
  logo_url: string;
};

const TechImg = ({ logo_url }: Props) => {
  return (
    <div>
      <Image src={logo_url} alt="alt text" height={50} width={50} />
    </div>
  );
};

export default TechImg;
