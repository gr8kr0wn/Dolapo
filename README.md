# Dolapo — portfolio (revamp)

Static site, no build step. Deploy the folder as is (Vercel, Netlify, GitHub Pages).

- **Light mode** is a creator-profile layout with a video grid.
- **Dark mode** is the cosmic studio: avatar in orbit, then a big player and a playlist.
- Visitors first get whatever their device is set to; the moon/sun button switches, and the choice is remembered.

## Editing
Everything lives in `data/projects.js`: videos, services and strengths. Both layouts read from it.

- **Add a video:** copy a project block, change `url`, `title`, `description`, `poster`, `duration`, `likes`, `date`.
  The `poster` is the preview image. For X videos, open the post, right-click the video preview and copy its image address
  (`https://pbs.twimg.com/amplify_video_thumb/...`), or put a frame in `assets/img/` and use that path.
- **Videos play through X's own player** in a popup, because X blocks its video files from playing directly on other sites.
  To play a video natively instead, put the `.mp4` in `assets/videos/` and add `video: "assets/videos/name.mp4"` to that project.
