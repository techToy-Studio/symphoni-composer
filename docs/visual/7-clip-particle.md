---
title: Clip — Particle
---

# Particle

Only the built-in particle presets are supported—uploading custom external particle files is not available.

However, you can still customize the existing presets using the provided adjustable properties to suit your design.

## Animation Properties
| Property                | Description                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Position                | The position of the particles spawning origins.                                                               |
| Rotation                | The rotation of the particles spawning origins.                                                               |
| Scale                   | The scale of the particles spawning origins.                                                                 |

## Static Properties
| Property                         | Description                                                                                                                                                                                                                                                   |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Time                             | Determines when the particle effect becomes visible. You can set this manually or adjust it directly in the timeline by dragging the clip’s start point.<br/>_Tip: Some particle effects may have a slight visual delay due to their configured start speed._ |
| Duration                         | Specifies how long the particle effect remains visible. Note: Some effects may linger briefly after the clip ends due to their spawn settings.<br/>_Tip: To make the particle disappear instantly at the end, enable “Clear Particle On End” below._          |
| Preset                           | Choose from a set of predefined particle presets—ready to use as-is or as a starting point for customization.<br/>_Tip: After selecting a preset, you can fine-tune its individual properties below to create tailored visual effects._                       |
| Playback                         | Determines how the particle effect behaves during the clip:<br/>1) **One-shot**: Plays once at the start of the clip.<br/>2) **Loop**: Continuously plays throughout the clip’s duration.                                                                     |
| Time Multiplier                  | The initial speed of the particles. The greater the value, the more spread out they will be.                                                                                                                                                                  |
| Size Multiplier                  | Multiplies the initial size of the particles.                                                                                                                                                                                                                 |
| Emission Rate                    | Multiplies the number of particles emitted per unit of time.                                                                                                                                                                                                  |
| Emission Shape Scale             | Multiplies the scale size of the emitter shape used for individual particle systems.                                                                                                                                                                          |
| Clear Particle On End            | Removes all particles immediately when the clip ends. This prevents the lingering particles after the clip ends.                                                                                                                                              |
| Override Start Color             | Override the default color of the particles.                                                                                                                                                                                                                  |
| Override Texture                 | Override the default particle appearance by uploading your own sprite image. Use this to customize the shape and look of individual particles. (Only .png format is supported.)                                                                               |
| Override Size Over Lifetime      | Override the default size animation of particles. Use this to control how each particle scales over time while the system is active.                                                                                                                          |
| Override Color Over Lifetime     | Override the default color animation of particles. Use this to control the color of the particles over time while the system is active.                                                                                                                       |