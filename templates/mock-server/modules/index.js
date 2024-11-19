import { getDemoApis } from './demo';
import { getAuthApis } from './auth';

export default function createApis(server) {
  getDemoApis(server);
  getAuthApis(server);
}
