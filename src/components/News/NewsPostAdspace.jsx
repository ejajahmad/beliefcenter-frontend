import React, { useEffect, useState } from "react";
import { readItems } from "@directus/sdk";
import Link from "next/link";
import Image from "next/image";
import directusClient from "../../../lib/directus-client";
import { getDirectusImageUrl } from "../../../lib/helpers";

export default function NewsPostAdspace() {
  const [config, setConfig] = useState({
    news_post_adspace_image: null,
    news_post_adspace_link: "#",
  });
  useEffect(() => {
    directusClient
      .request(
        readItems("blog_config", {
          fields: ["news_post_adspace_image, news_post_adspace_link"],
        })
      )
      .then((response) => {
        setConfig(response);
      })
      .catch(console.error);
  }, []);

  if (!config.news_post_adspace_image) {
    return null;
  }

  return (
    <div className="overflow-hidden shadow-md rounded-lg mb-6">
      <Link href={config.news_post_adspace_link} target="_blank">
        <Image
          src={getDirectusImageUrl(config.news_post_adspace_image)}
          width={400}
          height={200}
          alt="Adspace"
          className="w-100"
          style={{
            objectFit: "contain",
            height: "min-content",
          }}
        />
      </Link>
    </div>
  );
}
