# How to Render Tiles

This project uses three `<canvas>` elements to render graphics for animation efficiency:

1. Tile Canvas: Renders tiles.
2. Interaction Canvas: Draws your cursor's path and its range of interaction.
3. Cursors Canvas: Draws user cursors.

## How to Make Frames

### 0. Initialize Start & End Points.

Initialize the tiles and set up the start & end point based on client's window size and tile size.
They're calculated based on how many tiles can be rendered in client's window.

More details can be found in play/page.tsx 
### 1. Connect to the Server

This hook attempts to reconnect the WebSocket using the specified URL and view dimensions whenever the WebSocket is not open and the start & end points are defined.

More details can be found in play/page.tsx 
### 2. Get Tiles Data from Server Using WebSocket

To get the tiles and cursors data from the server, establish a WebSocket connection and listen for incoming messages. When a message is received, parse the data and update the state accordingly.

Request all tiles based on start & end points and make all tiles to have dummy datas "??".

Warning:
- The `start_y` and `end_y` coordinates are reversed because the y-axis is inverted.
- The received payload is destructured to extract specific values.
- The extracted values are then used in the `replaceTiles` function to update the tiles.

If Requested tiles are delivered, replace dummy data tiles to delivered tiles.

More details can be found in play/page.tsx 
### 3. Caching Path2D Objects and a Font

To improve rendering performance, cache the Path2D objects and load the local font using fontface.load() function in Promise Object in states before rendering.

More details can be found in components/canvas/index.tsx 
### 4. Render Tiles in Canvases

Once all properties are cached, set the loading state to `false` and render the tiles on the tile canvas. Rendering will depend on properties such as tile map, tile size, cursor positions, click position, color, and zoom.

The tile canvas is rendered based on CanvasRenderingContext2D refer to Cached Path2D Objects.
- Define Inner Coordinates: Set up the region where the gradient will be applied.
- Create Gradient Objects: Use createLinearGradient to create and store gradient objects.
- Add Colors: Assign start and end colors to each gradient using addColorStop.
- Apply Gradient: Set the gradient as the fill style and render the tile using fill().

The interaction canvas is rendered based on the user's cursor position, pointer, and movement path.
- Draw the Cursor: Render the user's cursor on the canvas.
- Highlight the Clicked Tile: Draw a border around the clicked tile to provide visual feedback.
- Draw the Path: If a path exists (paths.length > 0), draw the lines connecting each point, centered within tiles.

The cursor canvas is rendered based on other user cursors' position
- Canvas Setup: Get the canvas for drawing other users' cursors.
- Clear Previous Drawing: Use clearRect to clean the canvas.
- Draw Cursors:
  - Go through each cursor in the cursors array.
  - Calculate the correct position for each cursor.
  - Use the drawCursor function to draw the cursor with the right position and color.

More details can be found in components/canvas/index.tsx
### 5. Update Canvases

Several events might trigger the need to update the canvas. Here's how to handle them:

#### 5-1. When Client Cursor's Position Changes

Similar to how tiles were loaded previously, load the tiles based on the direction of movement. Push the tiles in the opposite direction of the movement, fill the empty spaces with "??", and then load and replace the tiles accordingly.

Diagonal movements are handled similarly. When the cursor moves diagonally, load the tiles in the direction of the movement, push the tiles in the opposite direction, fill the empty spaces with "??", and then load and replace the tiles accordingly.

And set start & end points, re-render all canvases based on cursor's position

#### 5-2. When Other Cursors' Status Changes

Re-render cursor canvas based on other cursors' position.

#### 5-3. When Any Tile Has Been Updated

Replace that tile and Re-render all canvases.

#### 5-4. When Client Sets the Zoom Level

And set start & end points, re-render all canvases based on cursor's position