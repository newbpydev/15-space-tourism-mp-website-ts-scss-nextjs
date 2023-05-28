import fs from "fs";
import path from "path";
import { Destination } from "../types/destination";
import { Crew } from "../types/crew";
import { Technology } from "../types/technology";
import { get } from "http";

interface Data {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}

export const getAllData = async () => {
  const url = path.join(process.cwd(), "data/data.json");
  // let data: Data;

  try {
    const fsData = fs.readFileSync(url, "utf-8");
    const jsonData: Data = JSON.parse(fsData);
    // data = jsonData;
    return jsonData;
  } catch (error) {
    console.error(`Error reading file from disk: ${error}`);
  }
};

export const getDestinations = async () => {
  const data = await getAllData();
  if (data) return data.destinations;
};

export const getCrew = async () => {
  const data = await getAllData();
  if (data) return data.crew;
};

export const getTechnology = async () => {
  const data = await getAllData();
  if (data) return data.technology;
};
