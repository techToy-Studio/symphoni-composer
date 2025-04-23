---
title: Clip Management
description: Learn how to manage visual clips in your Symphoni level
---

# Managing Visual Clips

## Basic Note Placement
Basic control for visual clips is similar to controlling map notes. You can add a clip by selecting Add Clip and click in an existing track. 
![Create Visual Clip](/img/addvisualclip.gif)

Deleting, multi-select, dragging are all the same as map notes.

## Managing Keyframes
Each type of clip will have some properties that can animate. Animations require keyframes to define their behaviors. 
In the timeline they are white diamonds. In the inspector they will show up as properties with diamonds and arrows in front of the property field.

Multi-editing keyframes of different visual clips is NOT supported.

![Keyframe Property](/img/keyframeproperty.png)

- If there are arrows beside the diamond, this property in this visual clip has keyframes.
- If the diamond is blue, there's a keyframe for this property at the __current cursor time__.
- If the diamond is grey but there are arrows beside it, there's no key frame at the current cursor time.
- If there are NO arrows beside the diamond, this property in this visual clip is __static__.

### Navigate between keyframes
Use the arrows to navigate between keyframes in this clip.

In the timeline they function just like visual clips. You can drag to move them around, and also select or multi-select them. You can even copy paste them.

Just remember, editing keyframes of different clips is not supported.
### Add a keyframe
First you need to make sure the cursor time is within this visual clips duration. The diamond won't be interactable if the current time is not within valid range of the clip.
To add a keyframe, simply click any grey diamond.

Or if there are already keyframes for this property, changing the value at a different time will automatically create a keyframe at that time with the new value.

![Add Keyframe](/img/addkeyframe.gif)


### Delete a keyframe
You can delete a keyframe in the timeline just like manipulating a visual clip, or you can click the diamond when it's blue (there's a keyframe at this time) to delete that keyframe.


