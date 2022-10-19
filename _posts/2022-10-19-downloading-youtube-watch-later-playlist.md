---
title: "Downloading YouTube Watch Later Playlist"
excerpt: 'There are times when you don''t have access to the internet. Be it during travel, on a plane, on a train, or during a layover. However, those are perfect opportunities to follow up on some of your favorite channels and clear up your long-overdue "Watch Later" playlist.'
---

_This post is mostly for myself, as I do this quite often and always forget where to find my copy-pasteable solution. However, I believe it might come in handy for some of you as well._

There are times when you don't have access to the internet. Be it during travel, on a plane, on a train, or during a layover. However, those are perfect opportunities to follow up on some of your favorite channels and clear up your long-overdue "Watch Later" playlist.

Using "Watch Later" is the most convenient way, as YouTube has a shortcut for it everywhere. In its web app as a small "clock" button, in the mobile app as a separate action, or in the TV app as an additional option in the overlay.

However, it's not possible to make this playlist publicly accessible. Because of that, any tool that could be used to use it as the data source for video fetching will require generating an authentication token in order to work.

Moving all videos from the "Watch Later" playlist to a regular, public one and then using it directly is one of the possible solutions, but it's cumbersome, and you have to remember to clean it up after each use.

Fortunately, it's easy enough to extract all the necessary urls using a small devtools snippet, and then plug them in directly into the prepared shell script.

---

As a prerequisit, you must have [yt-dlp](https://github.com/yt-dlp/yt-dlp) installed in your environment.

Once you open your ["Watch Later"](https://www.youtube.com/playlist?list=WL) page, open the DevTools console and extract all the urls using the snippet below. It will find all the videos present on the current page, and for each of them get the `href` attribute, which points directly to the video itself.

We will also quote all the values and join them with a newline, so it's easier to quickly copy the result directly, without any manual modifications.

```js
const videoElements = Array.from(
  document
    .querySelector("ytd-playlist-video-list-renderer")
    .querySelectorAll("ytd-playlist-video-renderer")
);

const links = videoElements
  .map((el) => `"${el.querySelector("a").href}"`)
  .join("\n");

console.log(links);
```

Not that we have all the data, we create a `download.sh` file in the desired directory and fill it with values in an appropriate place.

```sh
videos=(
    # newline separated list of links
    "https://www.youtube.com/watch?v=vxKBHX9Datw&list=WL&index=1"
    "https://www.youtube.com/watch?v=Q-WHRJPlL5g&list=WL&index=2"
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=WL&index=3"
)

for video in ${videos[@]}
do
  yt-dlp \
    --format 'bestvideo[ext=mp4][height<=720]+bestaudio[ext=m4a]/best[ext=mp4][height<=720]/best' \
    --no-playlist \
    --sponsorblock-remove default \
    $video
done
```

The script will iterate through all the videos, one by one, and feed them to the `yt-dlp`.

To quickly summarize what the flags mean.

- `--format` - file format parameters.
- `bestvideo[ext=mp4][height<=720]+bestaudio[ext=m4a]` - download the highest quality of `mp4` format, with `m4a` audio format, but not larger than `720p`
- `best[ext=mp4][height<=720]` - if not possible, download the highest quality of `mp4` format, but not larger than `720p`
- `best` - if not possible, fallback to whatever the best quality is available
- `--no-playlist` - do not attempt to fetch the next video in the playlist, as we provide the data ourselves, and the playlist is not public anyway (it looks at `list` query parameter, which is present by default in our extracted URLs, thus we'd get some noise)
- `--sponsorblock-remove default` - use [ajayyy/SponsorBlock](https://github.com/ajayyy/SponsorBlock) API to automatically remove some parts of the videos, that are sponsored, fillers, interactions reminders etc. By default it will remove all possible chapters

Once everything is set, we can either give the saved script executable permission with `chmod +x download.sh` and run it as `./download.sh`. Or we can run it directly using `sh ./download.sh`.

That's it. Now everything should be available locally, and you can happily spend your downtime binging that sweet, sweet YouTube content.
