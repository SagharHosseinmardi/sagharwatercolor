var images;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value;
  } else {
    return number_value;
  }
}

images = [
  "https://img.freepik.com/premium-vector/watercolour-wreath-blue-pink-flying-butterflies_125155-116.jpg?w=1060",
  "https://img.freepik.com/premium-vector/watercolour-collection-flying-butterflies_125155-121.jpg?w=1060",
  "https://img.freepik.com/premium-vector/watercolor-colorful-butterflies-isolated-white-background_125155-33.jpg?w=900",
  "https://img.freepik.com/premium-vector/watercolour-collection-flying-butterflies_125155-118.jpg?w=1060"
];
let element_picture = document.getElementById("picture");
images.push(images[0]);
element_picture.setAttribute("src", images.shift());

document.getElementById("next-image").addEventListener("click", (event) => {
  let element_picture2 = document.getElementById("picture");
  images.push(images[0]);
  element_picture2.setAttribute("src", images.shift());
});

document.getElementById("back-image").addEventListener("click", (event) => {
  let element_picture3 = document.getElementById("picture");
  images.unshift(images.slice(-1)[0]);
  element_picture3.setAttribute("src", images.pop());
});

document.getElementById("submit").addEventListener("click", (event) => {
  let element_list = document.getElementById("list");
  let new_ul = document.createElement("ul");
  new_ul.innerText = getNumberOrString(document.getElementById("text").value);

  element_list.appendChild(new_ul);
});