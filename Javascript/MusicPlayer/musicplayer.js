jQuery(function ($) {
    "use strict";
    let supportsAudio = !!document.createElement("audio").canPlayType;
    if (supportsAudio) {
        // initialize plyr
        let player = new Plyr("#audio1", {
            controls: [
                                "restart",
                                "play",
                                "progress",
                                "current-time",
                                "duration",
                                "mute",
                                "volume",
                                "download"
                            ]
        });
        // initialize playlist and controls
        let index = 0,
            playing = false,
            mediaPath =
            "Music/Index/",
            extension = "",
            tracks = [{
                    track: 1,
                    name: "Summer Air - Rollercoaster Tycoon 3 - PC",
                    duration: "4:00",
                    file: "SummerAir"
                                },
                {
                    track: 2,
                    name: "I'm Gay - Holland Boys",
                    duration: "3:43",
                    file: "I'm Gay"
                                },
                {
                    track: 3,
                    name: "Dreamscape - 009 Sound System",
                    duration: "3:30",
                    file: "Dreamscape"
                                },
                {
                    track: 4,
                    name: "Track 7 - AMF Extreme Bowling - PS2, XBOX",
                    duration: "2:05",
                    file: "AMFEBTrack7"
                                },
                {
                    track: 5,
                    name: "Careless Whisper - George Michael",
                    duration: "5:01",
                    file: "careless"
                                },
                {
                    track: 6,
                    name: "Know Your Role - The Rock's 2000 Titantron Entrance Theme Version 3",
                    duration: "3:40",
                    file: "therock2000v3"
                                },
                {
                    track: 7,
                    name: "Sandstorm - Darude",
                    duration: "3:52",
                    file: "Darudesandstorm"
                                },
                {
                    track: 8,
                    name: "Fair Weather - Trammell Starks - Weather Channel",
                    duration: "4:21",
                    file: "fairweather"
                                },
                {
                    track: 9,
                    name: "Malaysia - AMF Bowling Pinbusters - Wii",
                    duration: "2:49",
                    file: "AMFPBmalaysia"
                                },
                {
                    track: 10,
                    name: "Cosmic Lanes - Gutterball 3D - PC",
                    duration: "1:30",
                    file: "gb3dcosmic"
                                },
                {
                    track: 11,
                    name: "Cracklin' Rosie - Neil Diamond - Skate 3 - PS3",
                    duration: "3:00",
                    file: "crackros"
                                },
                {
                    track: 12,
                    name: "Lotus in Dam - Akimasa Yamada - Gran Turismo 5 - PS3",
                    duration: "3:03",
                    file: "lotusdam"
                                },
                {
                    track: 13,
                    name: "Believe - MAKOTO - Gran Turismo 5 - PS3",
                    duration: "3:27",
                    file: "believe"
                                },
                {
                    track: 14,
                    name: "Liberty - KEMMEI - Gran Turismo 5 - PS3",
                    duration: "4:12",
                    file: "liberty"
                                },
                {
                    track: 15,
                    name: "Let Me See Your Mind - Tyme - Gran Turismo 5 - PS3",
                    duration: "3:06",
                    file: "seemind"
                                },
                {
                    track: 16,
                    name: "Globe - Yuki Oike - Gran Turismo 5 - PS3",
                    duration: "3:16",
                    file: "globe"
                                },
                {
                    track: 17,
                    name: "Batman Theme (Original) - Neal Hefti - YTP: Terminator 3 Arnold has windows 7",
                    duration: "1:07",
                    file: "batman"
                                },
                {
                    track: 18,
                    name: "In Game - Terminator 2 - SNES - BITS Studios - Shahid Ahmad - YTP: Terminator 3 Arnold has windows 7",
                    duration: "2:46",
                    file: "t2snes"
                                },
                {
                    track: 19,
                    name: "In Game - ORB: 1, 2, 3 - Cool Math Games - PC",
                    duration: "2:02",
                    file: "orb"
                                },
                {
                    track: 20,
                    name: "Theme - Run 2 - Cool Math Games - PC",
                    duration: "3:19",
                    file: "run2"
                                },
                {
                    track: 21,
                    name: "Crab Rave - Noisestorm",
                    duration: "3:12",
                    file: "crabrave"
                                },
                {
                    track: 22,
                    name: "100 Pin Bowling - Wii Sports Resort - Wii",
                    duration: "0:55",
                    file: "100pins"
                                },
                {
                    track: 23,
                    name: "Clamor in the Manor! Part 4 - Scooby-Doo Night of 100 Frights - PS2, Gamecube, XBOX",
                    duration: "1:59",
                    file: "manorp4"
                                },
                {
                    track: 24,
                    name: "Eyes of the Maestro - Real Pool - PS2",
                    duration: "3:24",
                    file: "maestroeyes"
                                },
                {
                    track: 25,
                    name: "Rubber Band - Jackal Queenston - Penis Music",
                    duration: "2:11",
                    file: "rubberband"
                                },
                {
                    track: 26,
                    name: "Theme - Avengers",
                    duration: "4:11",
                    file: "avengers"
                                },
                {
                    track: 27,
                    name: "Rasputin - Boney M - 100 Year Old Organ",
                    duration: "2:45",
                    file: "rbm100"
                                },
                {
                    track: 28,
                    name: "Never Gonna Give You Up - Rick Astley - Rick Roll",
                    duration: "3:32",
                    file: "rickroll"
                                },
                {
                    track: 29,
                    name: "Lisa Frank 420 / Modern Computer - Floral Shoppe - Macintosh Plus - Vektroid",
                    duration: "7:21",
                    file: "mpfs"
                                },
                {
                    track: 30,
                    name: "Neon City - Wario Land: Shake It - Wii",
                    duration: "2:14",
                    file: "neon"
                                },
                {
                    track: 31,
                    name: "Airytale Castle - Wario Land: Shake It - Wii",
                    duration: "2:44",
                    file: "airytale"
                                },
                {
                    track: 32,
                    name: "Soggybog River - Wario Land: Shake It - Wii",
                    duration: "1:54",
                    file: "soggybog"
                                },
                {
                    track: 33,
                    name: "Bloomsday Blowout - Wario Land: Shake It - Wii",
                    duration: "1:36",
                    file: "bloomsday"
                                },
                {
                    track: 34,
                    name: "Creep Blue Sea - Wario Land: Shake It - Wii",
                    duration: "2:00",
                    file: "creepblue"
                                },
                {
                    track: 35,
                    name: "Tour - Movie Maker - Windows ME - Microsoft",
                    duration: "1:53",
                    file: "movietour"
                                },
                            ],
            buildPlaylist = $.each(tracks, function (key, value) {
                let trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = "0" + trackNumber;
                }
                $("#plList").append(
                    '<li> \
<div class="plItem"> \
<span class="plNum">' +
                    trackNumber +
                    '.</span> \
<span class="plTitle">' +
                    trackName +
                    '</span> \
<span class="plLength">' +
                    trackDuration +
                    "</span> \
</div> \
</li>"
                );
            }),
            trackCount = tracks.length,
            npAction = $("#npAction"),
            npTitle = $("#npTitle"),
            audio = $("#audio1")
            .on("play", function () {
                playing = true;
                npAction.text("Now Playing...");
            })
            .on("pause", function () {
                playing = false;
                npAction.text("Paused...");
            })
            .on("ended", function () {
                npAction.text("Paused...");
                if (index + 1 < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            })
            .get(0),
            btnPrev = $("#btnPrev").on("click", function () {
                if (index - 1 > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $("#btnNext").on("click", function () {
                if (index + 1 < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $("#plList li").on("click", function () {
                let id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $(".plSel").removeClass("plSel");
                $("#plList li:eq(" + id + ")").addClass("plSel");
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on("loadedmetadata", function () {
                    $('a[data-plyr="download"]').attr("href", source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType("audio/mpeg") ?
            ".mp3" :
            audio.canPlayType("audio/ogg") ? ".ogg" : "";
        loadTrack(index);
    } else {
        // no audio support
        $(".column").addClass("hidden");
        let noSupport = $("#audio1").text();
        $(".container").append('<p class="no-support" width="100%">' + noSupport + "</p>");
    }
});
