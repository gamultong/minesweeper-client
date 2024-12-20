# Kinds of Websocket Events
## 1. Summary

The WebSocket message handler processes various events sent by the server. Each event triggers specific actions based on its type and associated payload. This ensures synchronization between the client and server, handling tiles, cursor positions, and user actions.

| Request Name            | Description                                                            |
|----------------------|----------------------------------------------------------------------------|
| `Create Connection`   | Includes the client's screen size in the URL query string when establishing a WebSocket connection to the server. |
| `fetch-tiles`         | Requests tile data from the server for a specified range.                   |
| `set-view-size`       | Sends the current screen size of the client to the server for tile optimization based on the visible area. |
| `pointing`            | Sends the pointer's position to the server and performs the click action on a tile simultaneously. |
| `moving`              | Requests to move to a target position, validating if the move is allowed based on the rules. |

| Event Name      | Purpose                          | Key Actions                                 |
|----------------------|--------------------------------------|------------------------------------------------|
| `tiles`             | Handles requested tile grid updates. | Updates grid with `replaceTiles`.              |
| `flag-set`          | Processes tile flagging.             | Updates cached tile data.                      |
| `tile-updated`      | Updates tile state dynamically.      | Modifies the tile grid based on the payload.   |
| `my-cursor`         | Sets initial user information.       | Updates cursor position, color, and pointer.   |
| `you-died`          | Manages user death countdown.        | Calculates and sets revive time.               |
| `cursors`           | Updates all other user cursors.      | Normalizes cursor positions and colors.        |
| `moved`             | Updates cursor movement events.      | Adjusts cursor positions dynamically.          |
| `cursor-quit`       | Removes users who quit the game.     | Deletes cursor data from the state.            |                                 |


## 2. Send Requests Types and Behaviors

### 2.1. Create Connection
When you try to create a Websocket connection, add Query string of view width and height in url.
Its purpose is check how many tiles can be rendered in client's browser.

### 2.2. `fetch-tiles` Request
The `fetch-tiles` reqeust is used to request tile data from the server. The client sends this event with a specific coordinate range to fetch the tile information within a defined area.

The body contains the following:
| Field     | Type   | Description                                      |
|-----------|--------|--------------------------------------------------|
| `start_p` | Object | Defines the starting position of the requested tile range. |
| `start_p.x` | Number | X-coordinate of the starting point.               |
| `start_p.y` | Number | Y-coordinate of the starting point.               |
| `end_p`   | Object | Defines the ending position of the requested tile range.   |
| `end_p.x` | Number | X-coordinate of the ending point.                 |
| `end_p.y` | Number | Y-coordinate of the ending point.                 |

### 2.3. `set-view-size` Request
The `set-view-size` request is used to inform the server about the size of the user's current view or display area. This allows the server to optimize the tile data sent to the client based on the visible area.

The body contains the following fields:
| Field  | Type   | Description                                      |
|--------|--------|--------------------------------------------------|
| `width`  | Number | The width of the current view or visible area (in tiles). |
| `height` | Number | The height of the current view or visible area (in tiles). |

### 2.4. `pointing` Request
The `pointing` request is used to send the current cursor position and simultaneously perform a click action on a tile. The server processes the event and responds with updated pointer information or tile status.

The body contains the following fields:
| Field       | Type     | Description                                              |
|-------------|----------|----------------------------------------------------------|
| `position.x`| Integer  | X-coordinate of the pointer's position.                  |
| `position.y`| Integer  | Y-coordinate of the pointer's position.                  |
| `click_type`| String   | Type of click interaction (`GENERAL_CLICK` or `SPECIAL_CLICK`). |

### 2.5. `moving` Request
The `moving` request is used to send a destination position where the player wants to move. The server processes the event and validates whether the move is allowed based on the rules.

The body contains the following fields:
| Field       | Type     | Description                          |
|-------------|----------|--------------------------------------|
| `position.x`| Integer  | X-coordinate of the target position. |
| `position.y`| Integer  | Y-coordinate of the target position. |

## 3. Handle Event Types and Behaviors

### 3.1. `tiles` Event
- Purpose: Handles tiles requested by the user.  
- Payload: Contains starting and ending positions of the tile grid and unsorted tile data.  
- Behavior:
  - Extracts the tile grid (`unsortedTiles`) and boundary positions (`start_p` and `end_p`).  
  - Calls `replaceTiles` to update the tile grid.


### 3.2. `flag-set` and `tile-updated` Events
- Purpose: Handles unrequested tile updates or tile flagging.  
- Payload: Provides details about the tile's position, state, and visual properties.  
- Behavior:
  - Updates the caching tiles using `setCachingTiles`.  
  - Determines the tile's new state:
    - Opened Tiles:
      - If the tile contains a mine → Set as `'B'` (Bomb).  
      - Otherwise → Display the number of neighboring mines (`number`).  
    - Closed Tiles:
      - If flagged → Prefix with `'F'` and the tile's color.  
      - If not flagged → Prefix with `'C'`.  
      - Tiles alternate visual patterns (`0` or `1`) based on position parity.


### 3.3. `my-cursor` Event
- Purpose: Fetches the client's cursor and initial game state.  
- Payload: Contains cursor position, pointer coordinates, and color.  
- Behavior:
  - Sets the cursor's initial position using `setOringinPosition` and `setCursorPosition`.  
  - Sets the cursor's color.  
  - Updates any pointer click position if available.


### 3.4. `you-died` Event
- Purpose: Handles user death and revive countdown.  
- Payload: Includes the revive time (`revive_at`).  
- Behavior:
  - Calculates the time remaining until revival based on the current time.  
  - Sets the remaining revive time (`setLeftReviveTime`).


### 3.5. `cursors` Event
- Purpose: Synchronizes the positions and colors of other users' cursors.  
- Payload: Contains an array of cursor positions and associated colors.  
- Behavior:
  - Processes the cursor array to normalize color values.  
  - Updates the cursor list using `addCursors`.


### 3.6. `moved` Event
- Purpose: Handles movement events of other users' cursors.  
- Payload: Includes the origin and new positions of a cursor, as well as its color.  
- Behavior:
  - Searches for the cursor in the current list based on its original position and color.  
  - Updates the cursor's position if found.  
  - Updates the state with the new cursor list (`setCursors`).


### 3.7. `cursor-quit` Event
- Purpose: Removes cursors of users who have quit the game.  
- Payload: Includes the cursor's position and color.  
- Behavior:
  - Searches for the cursor in the current list based on its position and color.  
  - Removes the cursor if found.  
  - Updates the state with the new cursor list (`setCursors`).
