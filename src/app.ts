import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});

// TUPLES
let arr = ["naruto", 25, true];
arr[0] = false;
arr[1] = "sasuke";
arr = [30, false, "sasuke"];

let tup: [string, number, boolean] = ["naruto", 25, true];
// tup[0] = false;
tup[0] = "kakashi";

let student: [string, number];
//student = [23564, 'sakura'];
student = ["sakura", 23564];
