---
sidebar_position: 4
title: Note — Bubble
description: Learn how to edit a bubble
---

# Bubble

<!-- ## Bubble Preview Time Window

The Bubble Preview Time Window refers to the amount of time the bubble preview shows up before becoming _active_ to detect player input. The Bubble Preview Time Window is equivalent to 50% of the **Note Preview Time** dictated in the Setup tab. The longer the **Note Preview Time**, the slower the preview visual indicator closes in.. and the shorter the **Note Preview Time**, the faster the preview visual indicator becomes.

**Note:** when in an _active_ state, the bubble registers player input -->

## What are Bubbles in Symphoni?
Bubbles are notes that challenge the player to precisely point at an orb over a period of time.

## Properties

| Property            | Description                                                                                                                                                                                                                                          |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Hand                | Dictates which hand should point at the note (dominant hand, non-dominant hand)                                                                                                                                                                      |
| Timestamp           | The song timestamp in which the bubble becomes **active**                                                                                                                                                                                            |
| Duration            | The total time duration the the bubble is **active** for                                                                                                                                                                                             |
| Position (Snap) Unit| - Defines how bubble positions are calculated.<br/> - **Linear**: Defines the (x,y) coordinates of the bubble, where one unit is equivalent to the radius of the ring<br/> - **Radial**: Defines position in angles and distance from the center of the ring |
| Position            | Indicates the position of the bubble                                                                                                                                                                                                                 |


## When Creating a New Bubble
- Bubbles can be snapped to fixed positions by toggling "Snap" in _Create Tool Property_

## When Editing an Existing Bubble
- You can **select an existing bubble** by:
  - Hover & click on a bubble in the preview space to select it
  - Click on the bubble in the timeline window
- Upon selecting a bubble, **you can make edits to it in the _Note Property Window_**
  - Timestamp here represents the start time of the bubble (when it becomes active)
  - Timestamp can be modified either by seconds or beat time

## Additional Tips and Tricks
- In preview space, you can modify the position by dragging the bubble