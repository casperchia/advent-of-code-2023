import { readInput } from "../util";

type Src = number;
type Dst = number;
type Range = number;

type Map = [Dst, Src, Range][];

export type Input = {
  seeds: number[];
  maps: Map[];
};

export const parseInput = (input: string): Input => {
  const maps: Map[] = [];
  let seeds: number[];
  let currentMap: Map;
  input.split("\n").map((line) => {
    const seedMatch = line.match(/seeds: (?<numbers>.*)/);
    const isMapNameMatch = line.includes("map:");
    const mapMatch = line.match(/\d+/);
    if (seedMatch) {
      seeds = seedMatch.groups["numbers"].split(/\s+/).map(Number);
    } else if (isMapNameMatch) {
      currentMap = [];
      maps.push(currentMap);
    } else if (mapMatch) {
      const [dst, src, range] = line.split(/\s+/).map(Number);
      currentMap.push([dst, src, range]);
    }
  });

  return { seeds, maps };
};

export const getDestination = (src: Src, map: Map): Dst => {
  let destination: Dst = src;
  map.forEach(([dstMin, srcMin, range]) => {
    const srcMax = srcMin + range - 1;
    if (src >= srcMin && src <= srcMax) {
      const diff = src - srcMin;
      destination = dstMin + diff;
      return;
    }
  });
  return destination;
};

export const getLocation = (seed: number, maps: Map[]): number => {
  return maps.reduce((src, map) => getDestination(src, map), seed);
};

export const getLocations = (input: Input): number[] => {
  return input.seeds.map((seed) => getLocation(seed, input.maps));
};

export const solve = () => {
  return Math.min(
    ...getLocations(parseInput(readInput("src/day5/day5.input.txt"))),
  );
};
