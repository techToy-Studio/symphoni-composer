---
sidebar_position: 5
title: Note — Moving Bubble
description: Learn how to edit a moving bubble
---

# Moving Bubble

## Moving Bubble Preview Time Window

The Moving Bubble Preview Time Window refers to the amount of time the bubble preview shows up before becoming _active_ to detect player input. The Moving Bubble Preview Time Window behaves the same way as the [Bubble Preview Time](/docs/map/bubble#Bubble-Preview-Time-Window).

**Note:** when in an _active_ state, the bubble registers player input

## Properties

| Property      | Description                                                                                          |
|---------------|------------------------------------------------------------------------------------------------------|
| Hand          | Dictates which hand should point at the note (dominant hand, non-dominant hand)                      |
| Timestamp     | The song timestamp in which the bubble becomes **active**                                            |
| Duration      | The total time duration the the bubble is **active** for                                             |
| Path          | Indicates the path of the moving bubble, requiring a minimum of two positions                        |


## Property Window Edits
- Upon selecting a moving bubble, you can make edits to it in the properties window
- Timestamp can be modified either by timestamp or beat time
    - Note that timestamp indicates the _start_ time of the bubble
- Duration can be modified either by timestamp or beat time
- The path the moving bubble follows is sequential (starting from top to bottom)
- You can add or remove a new position to the path by clicking **Add** or clicking on the **X** icon.
- Each position can be modified in one of two ways
    - Linear: Defines the (x,y) coordinates of the bubble, where one unit is equivalent to the radius of the ring
    - Angular: Given an angle (0-360 degrees), and a distance value, the position of the bubble is defined by the distance from the center of the ring at the given angle

## Preview Space Edits
- Preview space snapping can be toggled from the "Create Tool Property" window when creating a note
- Drag and drop a moving bubble in the preview space to manipulate its _starting_ position
- Drag and drop each white dot in the preview space to manipulate the path it follows
    - Note: the line drawn between the white dots does NOT correspond to how the bubble moves in-game
- You can hover & click on a moving bubble in the preview space to select it