// Add your code here
//Image
const pic = document.createElement("img");
pic.src = "../images/saifullahshaik.png";
pic.width = "200";
pic.alt = "Picture of Saifullah Shaik";

pic.style.display = "block";
pic.style.margin = "auto";
pic.style.borderRadius = "100%";
//Bio
const bio = document.createElement("p");
bio.textContent =
  "Hi everyone my name is Saifullah Shaik, I go by Saif (pronounced safe) and my pronouns are He/Him. I am an undergraduate student and have little to no experience with web development. A fun fact about me is other then computer science I spend the rest of my time coaching and playing basketball. I have coached basketball at the elementary school level and trained athletes at the high school level.";

const firstline = document.createElement("span");
firstline.textContent = "Hi everyone my name is Saifullah Shaik. ";
firstline.style.fontWeight = "bold";
bio.prepend(firstline, document.createElement("br"));

bio.style.margin = "20px auto";
bio.style.width = "300px";

const main = document.querySelector("main");
main.append(pic);
main.append(bio);
