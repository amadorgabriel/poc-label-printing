import { convertToX1a } from "./utils/convertToX1a";
import { mountPDF } from "./utils/mountPDF";

export function mountX1a() {
  mountPDF();
  convertToX1a();
}
