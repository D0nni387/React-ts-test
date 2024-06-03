import { Image } from '../../interfaces/image';
import mockData from '../mockData.json';

export interface ApiResponse {
  next: string;
  previous: string | null;
  current_page: number;
  page_size: number;
  total_pages: number;
  count: number;
  results: Image[];
}

const mockApi = (): ApiResponse => {
  return mockData;
};

export default mockApi;
