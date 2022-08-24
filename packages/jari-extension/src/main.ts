import { Main } from "@k8slens/extensions";
import registerJari from './index';

export default class LensJariExtension extends Main.LensExtension {
  __v2Register = registerJari
}
