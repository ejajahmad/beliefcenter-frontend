"use client";

import React, { useState } from "react";
import { MdPrivacyTip } from "react-icons/md";
import { createItem } from "@directus/sdk";
import directusClient from "../../../../lib/directus-client";
import Image from "next/image";

export default function PostForm() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneno: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);

    try {
      await directusClient.request(
        createItem("lead", {
          name: formData.fullname,
          email: formData.email,
          mobile: formData.phoneno,
          source: "News",
          sub_source: window.location.href,
        })
      );

      setSuccess(true);
      setFormData({ fullname: "", email: "", phoneno: "" });
    } catch (err) {
      console.error("Failed to submit lead:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="formcontrol mb-4"
        name="fullname"
        placeholder="Full Name"
        value={formData.fullname}
        onChange={handleChange}
        required
      />
      <input type="email" className="formcontrol mb-4" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel" className="formcontrol mb-4" name="phoneno" placeholder="Phone" value={formData.phoneno} onChange={handleChange} required />
      <p className="bg-gray-50 text-gray-700 text-xs sm:text-sm mb-4 px-2 py-1 border border-gray-100 rounded-lg flex items-center gap-1 justify-center">
        <MdPrivacyTip size={14} className="text-blue-500" /> We do not spam. We value your privacy.
      </p>
      <button type="submit" disabled={submitting} className="btnprimary w-full flex items-center gap-1 sm:gap-2 justify-center">
        <span class="flex -space-x-2 overflow-hidden">
          <Image width={30} height={30} class="inline-block size-6 rounded-full border-2 border-white" src="/images/user.png" alt="" />
          <Image width={30} height={30} class="inline-block size-6 rounded-full border-2 border-white" src="/images/user.png" alt="" />
          <Image width={30} height={30} class="inline-block size-6 rounded-full border-2 border-white" src="/images/user.png" alt="" />
        </span>
        {submitting ? "Submitting..." : "Talk to an Expert"}
      </button>
      {success && <p className="text-green-600 text-sm mt-2 text-center">Thank you! We'll contact you soon.</p>}
    </form>
  );
}
