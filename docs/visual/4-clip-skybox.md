---
title: Clip — Skybox
---

# Skybox (Mask)

A skybox clip creates a skybox with a custom dissolve mask.

## Animation Properties
| Property                | Description                                                                                     |
|-------------------------|-------------------------------------------------------------------------------------------------|
| Position                | The position of the dissolve mask|
| Rotation                | The rotation of the dissolve mask|
| Scale                   | The scale of the dissolve mask|
| Opacity                 | The opacity of the dissolve mask (0-1)|
| Skybox Rotation         | The rotation angle of the skybox panorama (in degrees)|

## Static Properties
| Property                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Time                     | Specifies when the skybox first appears during the map sequence. You can adjust this by setting the value manually or by dragging the clip’s start point in the timeline.                                                                                                                                                                                                                                                                                      |
| Duration                 | This defines how long the skybox is visible during the map sequence. Tip: You can also adjust the timing by dragging the skybox clip directly in the timeline.                                                                                                                                                                                                                                                                                                 |
| Skybox Mask Type         | You can choose from three dissolve edge styles: sphere, plane, and box. Each mask type offers unique shapes and effects depending on how you animate its values:<br/>1) **Sphere:** Adjust the scale to create a portal-like "in" or "out" effect.<br/>2) **Plane:** Animate the rotation and Y position to dissolve the skybox linearly.<br/>3) **Box:** Modify rotation and position to achieve dynamic effects, such as square or diamond-shaped dissolves. |
| Skybox Texture           | Select the panoramic image used for the skybox. (.png format)<br/>_Tip: try [Skybox AI](https://skybox.blockadelabs.com/) if you want unique skyboxes ;)_                                                                                                                                                                                                                                                                                                        |
| Dissolve Texture         | The texture pattern of the dissolve effect along the edges. Use this to add variation or stylization to how the shape dissolves.                                                                                                                                                                                                                                                                                                                               |
| Dissolve Width           | The width of the gradient color along the edges.                                                                                                                                                                                                                                                                                                                                                                                                               |
| Dissolve Tile Size       | Adjusts the scale of the noise pattern used on the dissolve edges. Smaller values result in a larger, smoother pattern with less repetition, while larger values increase detail and texture by repeating the pattern more frequently.                                                                                                                                                                                                                         |
| Dissolve Color           | The gradient color along the edges.                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Known Issues
The Composer cannot support two skybox clips with the **same Skybox Mask Type** at the same music time