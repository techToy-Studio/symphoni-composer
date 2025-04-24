---
sidebar_position: 5
title: Note — Moving Bubble
description: Learn how to edit a moving bubble
---

# Moving Bubble

<!-- ## Moving Bubble Preview Time Window

The Moving Bubble Preview Time Window refers to the amount of time the bubble preview shows up before becoming _active_ to detect player input. The Moving Bubble Preview Time Window behaves the same way as the [Bubble Preview Time]&#40;/docs/map/bubble#Bubble-Preview-Time-Window&#41;.

**Note:** when in an _active_ state, the bubble registers player input -->

## What are Moving Bubbles in Symphoni?
Moving Bubbles are notes that challenge the player to precisely point at a moving orb over a period of time.

![Edit Moving Bubble](/img/moving-bubble-edit.png)

## Properties

| Property      | Description                                                                                                                                                                                                                                                |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Hand          | Dictates which hand should point at the note (dominant hand, non-dominant hand)                                                                                                                                                                            |
| Timestamp     | The song timestamp in which the bubble becomes **active**                                                                                                                                                                                                  |
| Duration      | The total duration of the time the bubble is **active**                                                                                                                                                                                                    |
| Position (Snap) Unit | - Defines how bubble positions are calculated.<br/> - **Linear**: Defines the (x,y) coordinates of the bubble, where one unit is equivalent to the radius of the ring<br/> - **Radial**: Defines position in angles and distance from the center of the ring |
| Path          | - Indicates the path of the moving bubble, requiring a minimum of two positions<br/> - Paths follow a top down sequential order                                                                                                                                |

## When Creating a New Moving Bubble
- Moving bubbles can be snapped to fixed positions by toggling "Snap" in _Create Tool Property_

## When Editing an Existing Moving Bubble
- You can select an existing moving bubble by:

  - Hover & click on a moving bubble in the viewport to select it
  - Click on the moving bubble in the timeline window
- Upon selecting a moving bubble, **you can make edits to it in the _Note Property Window_**

  - Timestamp here represents the start time of the moving bubble (when it becomes active)
  - Timestamp can be modified either by seconds or beat time
- Once selected, **you can also do the following in viewport**:

  - Modify the position by dragging the bubble
  - Drag and drop each white dot in the viewport to manipulate the path it follows
    - **Note**: the line drawn between the white dots does NOT correspond to how the bubble moves in-game


