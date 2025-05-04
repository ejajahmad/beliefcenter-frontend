import {
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import React from "react";

export default function SocialShareButton() {
  return (
    <>
      <TelegramShareButton url={'https://github.com/next-share'}>
        <TelegramIcon size={22} round />
      </TelegramShareButton>
      <TwitterShareButton url={'https://github.com/next-share'}>
        <TwitterIcon size={22} round />
      </TwitterShareButton>
      <WhatsappShareButton url={'https://github.com/next-share'}>
        <WhatsappIcon size={22} round />
      </WhatsappShareButton>
      <LinkedinShareButton url={'https://github.com/next-share'}>
        <LinkedinIcon size={22} round />
      </LinkedinShareButton>
    </>
  );
}
