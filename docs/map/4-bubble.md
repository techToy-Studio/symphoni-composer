---
sidebar_position: 4
title: Note — Bubble
description: Learn how to edit a bubble
---

# Bubble

## Bubble Preview Time Window

The Bubble Preview Time Window refers to the amount of time the bubble preview shows up before becoming _active_ to detect player input. The Bubble Preview Time Window is equivalent to 50% of the **Note Preview Time** dictated in the Setup tab. The longer the **Note Preview Time**, the slower the preview visual indicator closes in.. and the shorter the **Note Preview Time**, the faster the preview visual indicator becomes.

**Note:** when in an _active_ state, the bubble registers player input

## Properties

| Property      | Description                                                                                          |
|---------------|------------------------------------------------------------------------------------------------------|
| Hand          | Dictates which hand should point at the note (dominant hand, non-dominant hand)                      |
| Timestamp     | The song timestamp in which the bubble becomes **active**                                            |
| Duration      | The total time duration the the bubble is **active** for                                             |
| Position      | Indicates the position of the bubble                                                                 |


## Property Window Edits
- Upon selecting a bubble, you can make edits to it in the properties window
- Timestamp can be modified either by timestamp or beat time
    - Note that timestamp indicates the _start_ time of the bubble
- Duration can be modified either by timestamp or beat time
- Position can be modified in one of two ways
    - Linear: Defines the (x,y) coordinates of the bubble, where one unit is equivalent to the radius of the ring
    - Angular: Given an angle (0-360 degrees), and a distance value, the position of the bubble is defined by the distance from the center of the ring at the given angle

## Preview Space Edits
- Preview space snapping can be toggled from the "Create Tool Property" window when creating a note
- Drag and drop a bubble in the preview space to manipulate its position
- You can hover & click on a bubble in the preview space to select it