"use server";

import { YoutubeTranscript } from "youtube-transcript";

export default async function generate(url) {
  const response = await YoutubeTranscript.fetchTranscript(url)
  const transcript = response.map(item => item.text.replace(/&amp;#39;/g, "'")).join(' ')
  return transcript
}
