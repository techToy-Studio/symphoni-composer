---
sidebar_position: 2
title: Creating Your Symphoni
description: Learn how to create your first Symphoni level
---

# Creating Your Symphoni

**Click "Create New"**

![Create New](/img/createnew.gif)

You will enter the **initial setup page for your new symphoni**.

![Create Page Guide](/img/createpageguide.png)

1. **Set Music**
   - Choose the audio for your Symphoni.
   - Format: OGG

2. **Cover Image**
   - Add a cover image to represent your Symphoni in the game.
   
     - Format: PNG
     - Recommended Resolution: 512x512 pixels, or any 1:1 ratio

3. **Song Details**
   - Provide the following details, which will be displayed in-game:

     - Song Name
     - Artist Name
     - Map Author Name (Your Nickname). If you choose to upload to Mod.io your Mod.io username will override this field.

4. **Menu Preview Time**
   - Defines the snippet of the song (start and end time) that plays as a preview on the song selection screen.

     - Example: *A start time of 4 seconds and an end time of 8 seconds will preview the 4-8 second range of your song.*

5. **BPM (Beats Per Minute)**
   - Define the BPM of your audio clip. A higher BPM means more beats for note placement, while a lower BPM means fewer beats.

     - Use BPM finder like [TuneBeat](https://tunebat.com/Analyzer) if you don't know your BPM.

6. **Music Start Offset Time**
   - The time in the song where the first beat starts (in seconds).
     - Example: *2.5 will mean your first beat will start at 2.5 seconds into the song.*

7. **Difficulty Levels**
   - Add and configure difficulty levels (Easy, Medium, Hard, Expert).
   - Set **preview time** for each difficulty.
     - Preview time **controls how fast notes are.**
     - Recommended preview timing value for each level:

       - Easy: ~3 seconds (slower notes)
       - Medium: ~2 seconds 
       - Hard: ~1.5 seconds (faster notes)
       - Expert: &lt;1 second (super fast notes)

[//]: # (   - *Perfect Trigger Duration for arcs*: 0.1x of the preview time.)

[//]: # (   - *Preview Duration for bubbles*: 0.5x of the preview time)

[//]: # (   - Example: With a preview time of 2 seconds,)

[//]: # ()
[//]: # (        - An arc will spawn at `[timestamp - 2s]`, and takes 2s to preview. Its perfect trigger duration range will be `[timestamp - 0.2s, timestamp + 0.2s]`. )

[//]: # (        - A bubble will spawn at `[timestamp - 1s]`, and takes 1s to preview. Its input detecting range will be `[timestamp, timestamp + bubble's duration]`.)


[//]: # (## Next Steps)

[//]: # ()
[//]: # ([//]: # &#40;- [Learn about Composer Interface]&#40;/docs/getting-started/map-interface&#41;&#41;)
[//]: # (- [Explore Map Creation]&#40;/docs/map/map-interface&#41;)

[//]: # (- [Explore Visual Creation]&#40;/docs/visual/visualstart&#41;)