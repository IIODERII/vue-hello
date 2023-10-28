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
        (this.greetings = "You've been Rickrolled!"),
          (this.image =
            "https://www.giantfreakinrobot.com/wp-content/uploads/2022/08/rick-astley.jpg");
        this.imgClass = "d-block";
        this.message = "Cliccami per tornare indietro!";
        this.audio.play();
      } else {
        (this.greetings = "Ciao!"), (this.image = "");
        this.imgClass = "d-none";
        this.message = "Clicca su di me per vedere la foto di un gattino!";
        this.audio.pause();
      }
    },
  },
}).mount("#app");
