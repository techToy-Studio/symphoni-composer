---
sidebar_position: 2
title: Creating Your Symphoni
description: Learn how to create your first Symphoni level
---

# Creating Your Symphoni

## Create
1. Click "Create New"

2. Set Audio Track
Choose the audio track for your Symphoni

3. Cover Image
Add a cover image to represent your Symphoni in the game.
Format: PNG
Recommended: Perfect-square dimensions (e.g., 512x512 pixels)

4. Song Details
Provide the following details, which will be displayed in-game
Song Name
Artist Name
Map Author Name (your name or username)

5. BPM (Beats Per Minute)
Define the BPM of your audio clip
A higher BPM means more beats for note placement, while a lower BPM means fewer beats

6. Menu Preview Time
Set the menu preview start and menu preview end to define the portion of your audio clip that will play on the Symphoni song page (in seconds)
Example: A start time of 4 seconds and an end time of 8 seconds will preview the 4-8 second range of your song

7. Music Start Offset
Time in the song where the first beat starts (in seconds)
Example: 2.5 will mean your first beat will start at 2.5 seconds into the song

8. Difficulty Levels
Add and configure difficulty levels (Easy, Medium, Hard, Expert)
Recommended preview timing value for each level:
Easy: ~3 seconds (slower notes)
Medium: ~2 seconds
Hard: ~1.5 seconds (faster notes)
Expert: ~1 second (super fast notes)
Preview time explained
For arcs: It represents how long the arcs will take to fly to the percent hit timestamp since spawning. Perfect trigger duration is 0.1x of the preview time. 
For bubbles: It’s the same idea as arcs except it will only use 0.5x of the preview time, and trigger check will happen after that amount of time, and last for the whole duration of the note.
Example: With a preview time of 2 seconds, an arc will spawn at [timestamp - 2s], its perfect trigger duration range will be [timestamp - 0.2s, timestamp + 0.2s]. A bubble will spawn at [timestamp-1s], takes 1s for preview, and its detecting trigger input range will be [timestamp, timestamp + duration].
Notice: The red zones you see at the beginning and ending of the timeline in the map page, is calculated by the preview time, because notes require the preview time to fly in or disappear.

Once complete, you can click & navigate to the map tab to start composing! 🎵 

## Load
1. Click "Load Project"
2. Choose your Symphoni zip file to load

## Next Steps
- [Learn about Note Placement](/docs/getting-started/note-placement)
- [Explore Level Navigation](/docs/getting-started/navigation)
- [Understand Saving and Publishing](/docs/getting-started/publishing) 