---
title: Clip — Video
---

# Video

A video clip is simply a video player that works like a TV in your game space. 

The supported file format right now is .mp4. 

Try to keep the file size less than 200MB to prevent long loading time when the song starts in the game.

## Animation Properties
| Property                | Description                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Position                | The position of the video plane.                                                                 |
| Rotation                | The rotation of the video plane.                                                                 |
| Scale                   | The scale of the video plane.                                                                    |
| Opacity                 | The opacity of the video.                                                                       |
| Tint Color              | The tint color of the video.                                                                         |

## Static Properties
| Property                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Time                     | Specifies when the video first appears. You can adjust this by setting the value manually or by dragging the clip’s start point in the timeline. Note: This controls only the appearance timing—not the video's internal playback start time.                                                                                                                                                                          |
| Duration                 | This defines how long the video clip is visible. Tip: You can also adjust the timing by dragging the video clip directly in the timeline.                                                                                                                                                                                                                                                                              |
| Video File               | The source file of the video file. (.mp4)                                                                                                                                                                                                                                                                                                                                                                                                      |
| Video Mask Type          | Applies a visual mask around the video plane to shape its appearance. Use these masks to blend the video naturally into the scene or create stylistic cutouts.<br/>Currently, three mask styles are supported: <br/>1) **Edge**: Fades out the borders for a soft, vignette-like effect. <br/>2) **Circular**: Creates a circular silhouette, similar to the spotlight or portal effects.<br/>3) **None**: Displays the video without any masking/vignette.  |
| Start Time Offset        | Controls the exact playback start point within the video file. This allows you to skip ahead or delay playback, independent of when the video appears on the timeline.                                                                                                                                                                                                                                                                         |
