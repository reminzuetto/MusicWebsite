document.addEventListener("DOMContentLoaded", function () {
  const music = new Audio("./Music/MTP/DungLamTraiTimAnhDau.mp3");

  let songs = [
    {
      songName: "AisayKaisay-Hasan Raheem",
      filePath: "songs/1.mp3",
      coverPath: "covers/Aisay Kaisay - Hasan Raheem.jpg",
    },
    {
      songName: "Attention-Charlie Puth",
      filePath: "songs/2.mp3",
      coverPath: "covers/Attention - Charlie Puth.jpg",
    },
    {
      songName: "Bikhra-Abdul Hannan",
      filePath: "songs/3.mp3",
      coverPath: "covers/Bikhra - Abdul Hannan.jpg",
    },
    {
      songName: "Blinding Lights-TheWeeknd",
      filePath: "songs/4.mp3",
      coverPath: "covers/Blinding Lights - The Weeknd.jpg",
    },
    {
      songName: "Call Out My Name-TheWeeknd",
      filePath: "songs/5.mp3",
      coverPath: "covers/Call Out My Name - The Weeknd.jpg",
    },
    {
      songName: "Harleys In Hawaii-Katy Perry",
      filePath: "songs/6.mp3",
      coverPath: "covers/Harleys In Hawaii - Katy Perry.jpg",
    },
    {
      songName: "Heat Waves-Glass Animals",
      filePath: "songs/7.mp3",
      coverPath: "covers/Heat Waves - Glass Animals.jpg",
    },
    {
      songName: "Hope-XXXTENTACION",
      filePath: "songs/8.mp3",
      coverPath: "covers/Hope -XXXTENTACION.jpg",
    },
    {
      songName: "JOONA-Hasan Raheem",
      filePath: "songs/9.mp3",
      coverPath: "covers/JOONA -Hasan Raheem.jpg",
    },
    {
      songName: "Light Switch-Charlie Puth",
      filePath: "songs/10.mp3",
      coverPath: "covers/Light Switch -Charlie Puth.jpg",
    },
    {
      songName: "Afsanay-Young Stunners",
      filePath: "songs/11.mp3",
      coverPath: "covers/Afsanay-Young Stunners.jpg",
    },
    {
      songName: "Agency-Young Stunners",
      filePath: "songs/12.mp3",
      coverPath: "covers/Agency-Young Stunners.jpg",
    },
    {
      songName: "Ajab Si(Om SHanti Om)-K.K",
      filePath: "songs/13.mp3",
      coverPath: "covers/Ajab Si-K.K.jpg",
    },
    {
      songName: "Akhiyaan - Mitraz",
      filePath: "songs/14.mp3",
      coverPath: "covers/Akhiyaan - Mitraz.jpg",
    },
    {
      songName: "Anjaan - Jani,Talha Yonus",
      filePath: "songs/15.mp3",
      coverPath: "covers/Anjaan-Jani.jpg",
    },
    {
      songName: "Ashes(2020) - Stellar",
      filePath: "songs/16.mp3",
      coverPath: "covers/Ashes-Stellar.jpg",
    },
    {
      songName: "Asli Hai-Young Stunners",
      filePath: "songs/17.mp3",
      coverPath: "covers/Asli Hai-Young Stunners.jpg",
    },
    {
      songName: "Back To The Future-Bastille",
      filePath: "songs/18.mp3",
      coverPath: "covers/Back To The Future-Bastille.jpg",
    },
    {
      songName: "Bad Guy-Billie Eilish",
      filePath: "songs/19.mp3",
      coverPath: "covers/Bad Guy-Billie Eilish.jpg",
    },
    {
      songName: "Bellyache-Billie Eilish",
      filePath: "songs/20.mp3",
      coverPath: "covers/Bellyache-Billie Eilish.jpg",
    },
    {
      songName: "Blow Your Mind-Dua Lipa",
      filePath: "songs/21.mp3",
      coverPath: "covers/Blow Your Mind-Dua Lipa.jpg",
    },
    {
      songName: "Burning Down - EYK",
      filePath: "songs/22.mp3",
      coverPath: "covers/Burning Down-Everyone You Know.jpg",
    },
    {
      songName: "Cake By The Ocean-DNCE",
      filePath: "songs/23.mp3",
      coverPath: "covers/Cake By The Ocean-DNCE.jpg",
    },
    {
      songName: "Closer-The Chainsmokers",
      filePath: "songs/24.mp3",
      coverPath: "covers/Closer-The Chainsmokers.jpg",
    },
    {
      songName: "Copines-Aya Nakamura",
      filePath: "songs/25.mp3",
      coverPath: "covers/Copines-Aya Nakamura.jpg",
    },
    {
      songName: "Dancing Feet-DNCE",
      filePath: "songs/26.mp3",
      coverPath: "covers/Dancing Feet-DNCE.jpg",
    },
    {
      songName: "Desire-Years & Years",
      filePath: "songs/27.mp3",
      coverPath: "covers/Desire-Years & Years.jpg",
    },
    {
      songName: "Die For You-TheWeeknd",
      filePath: "songs/28.mp3",
      coverPath: "covers/Die For You-TheWeeknd.jpg",
    },
    {
      songName: "Djadja-Aya Nakamura",
      filePath: "songs/29.mp3",
      coverPath: "covers/Djadja-Aya Nakamura.jpg",
    },
    {
      songName: "Dont Let Me Down-Chainsmokers",
      filePath: "songs/30.mp3",
      coverPath: "covers/Don't Let Me Down-The Chainsmokers.jpg",
    },
    {
      songName: "Don't Mind-Young Stunners",
      filePath: "songs/31.mp3",
      coverPath: "covers/Don't Mind-Young Stunners.jpg",
    },
    {
      songName: "El Melouk-Ahmed Saad",
      filePath: "songs/32.mp3",
      coverPath: "covers/El Melouk-Ahmed Saad.jpg",
    },
    {
      songName: "Excuses-Ap Dhillon",
      filePath: "songs/33.mp3",
      coverPath: "covers/Excuses-Ap Dhillon.jpg",
    },
    {
      songName: "Formula - Labrinth",
      filePath: "songs/34.mp3",
      coverPath: "covers/Formula-Labrinth.jpg",
    },
    {
      songName: "Goosebumps-Travis Scott",
      filePath: "songs/35.mp3",
      coverPath: "covers/Goosebumps-Travis Scott.jpg",
    },
    {
      songName: "Head First-Christian French",
      filePath: "songs/36.mp3",
      coverPath: "covers/Head First-Christian French.jpg",
    },
    {
      songName: "Heartburn(Remix) - Wafia",
      filePath: "songs/37.mp3",
      coverPath: "covers/Heartburn-Wafia.jpg",
    },
    {
      songName: "Honeypie - JAWNY",
      filePath: "songs/38.mp3",
      coverPath: "covers/Honeypie-JAWNY.jpg",
    },
    {
      songName: "Hymn For - Coldplay",
      filePath: "songs/39.mp3",
      coverPath: "covers/Hymn For The Weekend-Coldplay.jpg",
    },
    {
      songName: "In the Dark - Swae Lee",
      filePath: "songs/40.mp3",
      coverPath: "covers/In the Dark-Swae Lee.jpg",
    },
    {
      songName: "Kana Yaari Kaifi Khalil",
      filePath: "songs/41.mp3",
      coverPath: "covers/Kana Yaari Kaifi Khalil.jpg",
    },
    {
      songName: "Let Me Kiss You - 1D",
      filePath: "songs/42.mp3",
      coverPath: "covers/Kiss You-1D.jpg",
    },
    {
      songName: "Kya Mujhe Pyar Hai-K.K",
      filePath: "songs/43.mp3",
      coverPath: "covers/Kya Mujhe Pyar Hai -K.K.jpg",
    },
    {
      songName: "Labon Ko(Bhool Bhulaiya) -KK",
      filePath: "songs/44.mp3",
      coverPath: "covers/Labon Ko-KK.jpg",
    },
    {
      songName: "Levitating-Dua Lipa",
      filePath: "songs/45.mp3",
      coverPath: "covers/Levitating-Dua Lipa.jpg",
    },
    {
      songName: "Lights Down Low-MAX",
      filePath: "songs/46.mp3",
      coverPath: "covers/Lights Down Low-MAX.jpg",
    },
    {
      songName: "Love Nwantiti-CKay",
      filePath: "songs/47.mp3",
      coverPath: "covers/Love Nwantiti-CKay.jpg",
    },
    {
      songName: "Lovely - Billie Eilish,Khalid",
      filePath: "songs/48.mp3",
      coverPath: "covers/Lovely-Billie Eilish.jpg",
    },
    {
      songName: "Michael Jackson-Lovin You",
      filePath: "songs/49.mp3",
      coverPath: "covers/Loving You-Michael Jackson.jpg",
    },
    {
      songName: "Lucid Dreams-Juice WRLD",
      filePath: "songs/50.mp3",
      coverPath: "covers/Lucid Dreams-Juice WRLD.jpg",
    },
    {
      songName: "Maikada - M. Samie",
      filePath: "songs/51.mp3",
      coverPath: "covers/Maikada-Muhammad Samie.jpg",
    },
    {
      songName: "Mushk OST-Ali Zafar",
      filePath: "songs/52.mp3",
      coverPath: "covers/Mushk OST-Ali Zafar.jpg",
    },
    {
      songName: "My Universe-Coldplay",
      filePath: "songs/53.mp3",
      coverPath: "covers/My Universe-Coldplay.jpg",
    },
    {
      songName: "Mystery of Love-Sufjan Stevens",
      filePath: "songs/54.mp3",
      coverPath: "covers/Mystery of Love-Sufjan Stevens.jpg",
    },
    {
      songName: "No Lie -Dua Lipa,Sean Paul",
      filePath: "songs/55.mp3",
      coverPath: "covers/No Lie-Dua Lipa.jpg",
    },
    {
      songName: "Passive-The Perfect Circle",
      filePath: "songs/56.mp3",
      coverPath: "covers/Passive-The Perfect Circle.jpg",
    },
    {
      songName: "Peaky Blinder-Otnicka",
      filePath: "songs/57.mp3",
      coverPath: "covers/Peaky Blinder-Otnicka.jpg",
    },
    {
      songName: "Piche Hut - Hassan Raheem",
      filePath: "songs/58.mp3",
      coverPath: "covers/Piche Hut - Hassan Raheem.jpg",
    },
    {
      songName: "Right Round - Flo Rida",
      filePath: "songs/59.mp3",
      coverPath: "covers/Right Round - Flo Rida.jpg",
    },
    {
      songName: "Sach Keh Raha Hai-KK",
      filePath: "songs/60.mp3",
      coverPath: "covers/Sach Keh Raha Hai-KK.jpg",
    },
    {
      songName: "Smile - Juice WRLD",
      filePath: "songs/61.mp3",
      coverPath: "covers/Smile-Juice WRLD.jpg",
    },
    {
      songName: "Sorry - Justin Bieber",
      filePath: "songs/62.mp3",
      coverPath: "covers/Sorry-Justin Bieber.jpg",
    },
    {
      songName: "Starboy - The Weeknd",
      filePath: "songs/63.mp3",
      coverPath: "covers/Starboy - The Weeknd.jpg",
    },
    {
      songName: "Sunflower-Swae Lee",
      filePath: "songs/64.mp3",
      coverPath: "covers/Sunflower-Swae Lee.jpg",
    },
    {
      songName: "Takeaway-The Chainsmokers",
      filePath: "songs/65.mp3",
      coverPath: "covers/Takeaway-The Chainsmokers.jpg",
    },
    {
      songName: "The Hot Stepper-Ini Kamoze",
      filePath: "songs/66.mp3",
      coverPath: "covers/The Hot Stepper-Ini Kamoze.jpg",
    },
    {
      songName: "Vibe(2021) -Herman",
      filePath: "songs/67.mp3",
      coverPath: "covers/Vibe-Herman.jpg",
    },
    {
      songName: "We Don't Talk-Charlie Puth",
      filePath: "songs/68.mp3",
      coverPath: "covers/We Don't Talk Anymore - Charlie Puth.jpg",
    },
    {
      songName: "Do You Mean-Justin Bieber",
      filePath: "songs/69.mp3",
      coverPath: "covers/What Do You Mean-Justin Bieber.jpg",
    },
    {
      songName: "What Makes You Beautiful-1D",
      filePath: "songs/70.mp3",
      coverPath: "covers/What Makes You Beautiful-1D.jpg",
    },
    {
      songName: "World Is Mine-Samm Henshaw",
      filePath: "songs/71.mp3",
      coverPath: "covers/World Is Mine-Samm Henshaw.jpg",
    },
    {
      songName: "Без тебя я не я-JONY",
      filePath: "songs/72.mp3",
      coverPath: "covers/Без тебя я не я-JONY.jpg",
    },
  ];

  Array.from(document.getElementsByClassName("songItem")).forEach(
    (element, i) => {
      if (songs[i]) {
        element.querySelector("img").src = songs[i].poster;
        element.querySelector("h5").innerHTML = songs[i].songname;
      }
    }
  );

  let masterPlay = document.getElementById("masterPlay");
  let wave = document.getElementsByClassName("wave")[0];
  let poster_master_play = document.getElementById("poster_master_play");
  let title = document.getElementById("title");

  const updateMasterPlayButton = () => {
    if (music.paused || music.currentTime <= 0) {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    } else {
      masterPlay.classList.add("bi-pause-fill");
      masterPlay.classList.remove("bi-play-fill");
      wave.classList.add("active2");
    }
  };

  masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
      music.play();
    } else {
      music.pause();
    }
    updateMasterPlayButton();
  });

  const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("songlistplay")).forEach(
      (element) => {
        element.classList.add("bi-play-circle-fill");
        element.classList.remove("bi-pause-circle-fill");
      }
    );
  };

  const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach(
      (element) => {
        element.style.background = "rgba(105, 105, 170, 0)";
      }
    );
  };

  let index = 0;

  Array.from(document.getElementsByClassName("songlistplay")).forEach(
    (element, i) => {
      element.addEventListener("click", (e) => {
        index = i;
        makeAllPlay();
        e.target.classList.remove("bi-play-circle-fill");
        e.target.classList.add("bi-pause-circle-fill");
        music.src = songs[index].mp3link;
        poster_master_play.src = songs[index].poster;
        title.innerHTML = songs[index].songname;
        music.play();
        updateMasterPlayButton();
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName("songItem"))[
          index
        ].style.background = "rgba(105, 105, 170, 0.1)";
      });
    }
  );

  music.addEventListener("ended", updateMasterPlayButton);

  let currentStart = document.getElementById("currentStart");
  let currentEnd = document.getElementById("currentEnd");
  let seek = document.getElementById("seek");
  let bar2 = document.getElementById("bar2");
  let dot = document.getElementsByClassName("dot")[0];

  music.addEventListener("loadedmetadata", () => {
    let music_dur = music.duration;
    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
      sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;
  });

  music.addEventListener("timeupdate", () => {
    let music_current = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_current / 60);
    let sec1 = Math.floor(music_current % 60);
    if (sec1 < 10) {
      sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;

    if (music_dur) {
      let progressBar = parseInt((music_current / music_dur) * 100);
      seek.value = progressBar;
      let seekbar = seek.value;
      bar2.style.width = `${seekbar}%`;
      dot.style.left = `${seekbar}%`;
    }
  });

  seek.addEventListener("change", () => {
    music.currentTime = (seek.value * music.duration) / 100;
  });

  let vol_icon = document.getElementById("vol_icon");
  let vol = document.getElementById("vol");
  let vol_dot = document.getElementById("vol_dot");
  let vol_bar = document.getElementsByClassName("vol_bar")[0];

  vol.addEventListener("change", () => {
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
    if (vol_a == 0) {
      vol_icon.classList.remove("bi-volume-down-fill");
      vol_icon.classList.add("bi-volume-mute-fill");
      vol_icon.classList.remove("bi-volume-up-fill");
    } else if (vol_a > 0 && vol_a <= 50) {
      vol_icon.classList.remove("bi-volume-mute-fill");
      vol_icon.classList.remove("bi-volume-up-fill");
      vol_icon.classList.add("bi-volume-down-fill");
    } else {
      vol_icon.classList.remove("bi-volume-mute-fill");
      vol_icon.classList.remove("bi-volume-down-fill");
      vol_icon.classList.add("bi-volume-up-fill");
    }
  });

  let back = document.getElementById("back");
  let next = document.getElementById("next");

  const changeSong = (increment) => {
    index += increment;
    if (index < 0) {
      index = songs.length - 1;
    } else if (index >= songs.length) {
      index = 0;
    }
    music.src = songs[index].mp3link;
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songname;
    music.play();
    makeAllPlay();
    document.getElementById(index + 1).classList.add("bi-pause-circle-fill");
    document.getElementById(index + 1).classList.remove("bi-play-circle-fill");
    console.log(document.getElementsByClassName("wave")[0].classList);
    wave.classList.add("active2");
    console.log(document.getElementsByClassName("wave")[0].classList);

    updateMasterPlayButton();
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[
      index
    ].style.background = "rgba(105, 105, 170, 0.1)";
  };

  back.addEventListener("click", () => changeSong(-1));
  next.addEventListener("click", () => changeSong(1));

  let left_scroll = document.getElementById("left_scroll");
  let right_scroll = document.getElementById("right_scroll");
  let items = document.getElementsByClassName("items")[0];
  left_scroll.addEventListener("click", () => {
    items.scrollLeft -= 330;
  });
  right_scroll.addEventListener("click", () => {
    items.scrollLeft += 330;
  });
});
