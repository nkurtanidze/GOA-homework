import { v4 as uuidv4 } from "uuid";

for (let i = 0; i < 5; i++) {
  const id = uuidv4();
  console.log(id);
}
