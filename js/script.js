const { createApp } = Vue;

createApp({
  data() {
    return {
      greetings: "Ciao!",
      image: "",
      message: "Clicca su di me per vedere la foto di un gattino!",
      imgClass: "d-none",
      audio: new Audio("../mp3/aTotallyNormalSongISwear.mp3"),
    };
  },
  methods: {
    myClick() {
      if (this.imgClass === "d-none") {
        this.image =
          "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/pembroke-welsh-corgi.jpg?crop=1xw:0.9997114829774957xh;center,top&resize=980:*";
        this.imgClass = "d-block";
        this.message =
          "E invece era un Cagnolino!! Sono simpaticissimo, cliccami per tornare indietro!";
        this.audio.play();
      } else {
        this.image = "";
        this.imgClass = "d-none";
        this.message = "Clicca su di me per vedere la foto di un gattino!";
        this.audio.pause();
      }
    },
  },
}).mount("#app");
