# About Interactions.
You can interact client using `onClick` and `onMouseDown` events 
All interactions are handled in interaction canvas.

## 1. Click Interaction Overview
The user interacts with a grid of tiles through mouse clicks. There are two types of interactions:

General Click (Left Click): Used to open tiles or move the cursor.
Special Click (Right Click): Used to flag or unflag tiles.
The system calculates tile positions, evaluates tile states, and performs actions accordingly.

## 2. Coordinate Systems
To determine which tile the user interacted with, the system performs coordinate transformations:

Canvas Coordinates
The raw mouse click position (relative to the screen) is adjusted to align with the canvas grid.

Relative Tile Coordinates
The click position is converted to a relative position within the tile grid by dividing the adjusted position by the tile size. Tile padding is also factored in.

Absolute Tile Coordinates
The relative coordinates are adjusted by the grid's starting position to determine the tile’s absolute position.

## 3. Tile States and Content
Each tile in the grid can have one of the following states:

Closed Tile: A tile that has not been interacted with.
Flagged Tile: A tile marked as containing a potential mine.
Opened Tile: A tile that has been revealed (no mine).
Out of Bounds: When the user clicks outside the grid.

## 4. Click Types
The type of click interaction is determined based on the mouse button:

| Click Type     | Mouse Button | Behavior                       |
|----------------|--------------|--------------------------------|
| General Click  | Left Click   | Opens or moves to a tile.      |
| Special Click  | Right Click  | Flags or unflags a tile.       |
## 5. Behavior Based on Tile State

### General Click (Left Click)

| Tile State   | Behavior                                      |
|--------------|-----------------------------------------------|
| Closed Tile  | Opens the tile to reveal content.             |
| Opened Tile  | Moves the cursor to the tile if a path exists.|
| Flagged Tile | No action.                                    |
| Out of Bounds| No action.                                    |

### Special Click (Right Click)

| Tile State   | Behavior                                      |
|--------------|-----------------------------------------------|
| Closed Tile  | Flags the tile (marks as suspicious).         |
| Flagged Tile | Unflags the tile (returns to closed state).   |
| Opened Tile  | No action.                                    |
| Out of Bounds| No action.                                    |
## 6. Tile Movement
If the user clicks an Opened or Exploded tile with a General Click:

- The system attempts to move the cursor to the clicked tile.
- Movement occurs only if there is a valid path from the current position to the target tile.
- Movement speed is fixed at 5 tiles per second.
## 7. Event Processing
When the user interacts with a tile:

- The system determines the tile’s position (relative and absolute).
- It retrieves the content of the clicked tile.
- It evaluates the click type (General or Special).
- The appropriate action is performed:
- Opening a tile (General Click).
- Flagging or unflagging (Special Click).
- Moving the cursor (General Click on valid tiles).
## 8. Special Conditions
If any neighboring tile explodes due to user interaction, the player loses control of all tiles for a duration (e.g., 3 minutes).
Clicks outside the grid are ignored and marked as "Out of Bounds".