"use server";

import { PageData } from "../../../type";

export const sendPageData = async (pageData: PageData) => {
  const webhookUrl = process.env.WEBHOOK_URL ?? "";
  const apiKey = process.env.N8N_API_KEY ?? "";

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pageData),
      mode: "cors",
      keepalive: true,
    });

    return { status: true, data: null, message: "Page data sent successfully" };
  } catch (error) {
    return { status: false, data: null, message: error };
  }
};
