import $api from '@/http';
import { CreateWorkData, PatchWorkData, WorkData } from '@/types/WorkData';

class UserService {
  async createWork(workData: CreateWorkData) {
    return $api.post<WorkData>('/works', workData);
  }

  async patchWork(workData: PatchWorkData) {
    return $api.patch<WorkData>('/works/' + workData.id, workData);
  }

  async deleteWork(id: string) {
    return $api.delete<WorkData>('/works/' + id);
  }

  async getAllWorks() {
    return $api.get<WorkData[]>('/works');
  }
}

export default new UserService();
