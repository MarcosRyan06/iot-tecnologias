const imagens = {
    mobile: [
        "assets/img/imgIT/im1.jpg",
        "assets/img/imgIT/im2.jpg",
        "assets/img/imgIT/im3.jpg"
    ],
        social: [
          "assets/img/imgRS/rs1.jpg",
          "assets/img/imgRS/rs2.jpg"

    ],
        iot: [
          "assets/img/imgIOT/iot1.jpg",
          "assets/img/imgIOT/iot2.jpg",
          "assets/img/imgIOT/iot3.jpg"
    ],
        sensor: [
          "assets/img/imgSA/sa1.jpg",
          "assets/img/imgSA/sa2.jpg"

    ],
        arch: [
          "assets/img/imgAIOT/aiot1.jpg",
          "assets/img/imgAIOT/aiot2.jpg",
          "assets/img/imgAIOT/aiot3.jpg"
    ],
        cloud: [
          "assets/img/imgCFE/cfe1.jpg",
          "assets/img/imgCFE/cfe3.jpg"

    ],
};
      document.querySelectorAll(".carrosel").forEach((carrosel) => {
        let i = 0;
        imagens[carrosel.dataset.theme].forEach((src, index) => {
          const img = document.createElement("img");
          img.src = src;
          if (index === 0) img.classList.add("active");
          carrosel.appendChild(img);
        });

        setInterval(() => {
          const imgs = carrosel.querySelectorAll("img");
          imgs[i].classList.remove("active");
          i = (i + 1) % imgs.length;
          imgs[i].classList.add("active");
        }, 3500);
      });