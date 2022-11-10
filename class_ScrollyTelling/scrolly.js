// console.log("test");

items = document.getElementsByClassName("items");
// console.log(items);

// [...items].map((item) => {
//   console.log(item);
// });

Array.from(items).map((item) => {
  console.log(item);
  const watch = scrollMonitor.create(item);
  watch.fullyEnterViewport(() => {
    console.log(item.id);
    if (item.id === "item-2") {
      document.getElementById("light").src = "./img/pic_bulbon.gif";
    } else {
      document.getElementById("light").src = "./img/pic_bulboff.gif";
    }
  });
});
