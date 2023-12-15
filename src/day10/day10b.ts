import {
  Direction,
  getNextDirection,
  getNextPoint,
  getStartingPoint,
  Grid,
  isPointInGrid,
  Legend,
  parseInput,
  Point,
} from "./day10a";

export const getPathCoordinates = (
  grid: Grid,
  [x, y]: Point,
  direction: Direction,
): Point[] => {
  const points: Point[] = [];

  while (true) {
    const nextDirection = getNextDirection(direction, grid[y][x]);
    if (!nextDirection) break;

    const [nextX, nextY] = getNextPoint([x, y], nextDirection);
    if (!isPointInGrid([nextX, nextY], grid)) break;

    x = nextX;
    y = nextY;
    direction = nextDirection;
    points.push([x, y]);

    if (grid[y][x] === "S") return points;
  }

  return [];
};

const isPointingNorth = (legend: Legend): boolean =>
  ["|", "J", "L"].includes(legend);

export const solve = () => {
  const grid = parseInput("src/day10/day10.input.txt");
  const startingPoint = getStartingPoint(grid);
  let coordinates = getPathCoordinates(grid, startingPoint, "Up");
  if (coordinates.length === 0)
    coordinates = getPathCoordinates(grid, startingPoint, "Down");
  if (coordinates.length === 0)
    coordinates = getPathCoordinates(grid, startingPoint, "Left");

  let tiles = 0;
  let isInside = false;
  grid.forEach((row, y) => {
    grid[y].forEach((legend, x) => {
      const isPartOfLoop = coordinates.find(([aX, aY]) => aX === x && aY === y);
      if (isPartOfLoop && isPointingNorth(legend)) {
        isInside = !isInside;
      } else if (!isPartOfLoop && isInside) {
        tiles++;
      }
    });
  });
  return tiles;
};
