jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'duration',
                'mute',
                'volume',
                'download'
            ]
        });
        // initialize playlist and controls
        var index = 0,
            playing = false,
            mediaPath = 'https://SEGACD32XMODEL1.github.io/Websiteland/Music/Index/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "Summer Air - Rollercoaster Tycoon 3",
                "duration": "4:00",
                "file": "SummerAir"
            }, {
                "track": 2,
                "name": "I'm Gay - Holland Boys",
                "duration": "3:43",
                "file": "I'm Gay"
            }, {
                "track": 3,
                "name": "Dreamscape - 009 Sound System",
                "duration": "3:30",
                "file": "Dreamscape"
            }, {
                "track": 4,
                "name": "Track 7 - AMF Extreme Bowling",
                "duration": "2:05",
                "file": "AMFEBTrack7"
            }, {
                "track": 5,
                "name": "Careless Whisper - George Michael",
                "duration": "5:01",
                "file": "careless"
            }, {
                "track": 6,
                "name": "Know Your Role - The Rock's 2000 Titantron Entrance Theme Version 3",
                "duration": "3:40",
                "file": "therock2000v3"
            }, {
                "track": 7,
                "name": "Sandstorm - Darude",
                "duration": "3:52",
                "file": "Darudesandstorm"
            }, {
                "track": 8,
                "name": "Fair Weather - Trammell Starks",
                "duration": "4:21",
                "file": "fairweather"
            }, {
                "track": 9,
                "name": "Malaysia - AMF Bowling Pinbusters",
                "duration": "2:49",
                "file": "AMFPBmalaysia"
            }, {
                "track": 10,
                "name": "Cosmic Lanes - Gutterball 3D",
                "duration": "1:30",
                "file": "gb3dcosmic"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li> \
                    <div class="plItem"> \
                        <span class="plNum">' + trackNumber + '.</span> \
                        <span class="plTitle">' + trackName + '</span> \
                        <span class="plLength">' + trackDuration + '</span> \
                    </div> \
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
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
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
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
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
