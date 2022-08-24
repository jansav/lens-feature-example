import {DiContainer, getInjectable} from "@ogre-tools/injectable";
import { mikkoInjectionToken } from "@lensapp/mikko";

const janneInjectable = getInjectable({
  id: 'janne',
  instantiate: () => () => {
    console.log('janne');
  },
  injectionToken: mikkoInjectionToken
})

export default (di: DiContainer) => {
  console.log('register janne');
  di.register(janneInjectable);
}
