import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import generate from "../action";

export default function Display() {
  const [url, setUrl] = useState("");
  const [transcipt, setTranscript] = useState("");

  const handleClick = async () => {
    if (!url) {
      alert("Please enter a valid Youtube url");
      return;
    }
    alert("Finding Transcript");
    const response = await generate(url);
    setTranscript(response);
  };

  return (
    <div>
      <Card className="w-auto">
        <CardHeader>
          <CardTitle>Generate Transcript</CardTitle>
          <CardDescription>Enter Your Youtube Url here</CardDescription>
        </CardHeader>
        <CardContent>
          <Input id="url" placeholder="Youtube Url" onChange={(e) => setUrl(e.target.value)}/>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button onClick={handleClick}>Generate</Button>
          {transcipt && <p>{transcipt}</p>}
        </CardFooter>
      </Card>
    </div>
  );
}
