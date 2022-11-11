import $api from '@/http';
import { CreatePostData, PatchPostData } from '@/types/PostData';

class UserService {
  async createPost(postData: CreatePostData) {
    return $api.post('/posts', postData);
  }

  async getPost(postId: string) {
    return $api.get('/posts/' + postId);
  }

  async patchPost(postData: PatchPostData) {
    return $api.patch('/posts/' + postData.id, postData);
  }

  async getAllPosts() {
    return $api.get('/posts');
  }
}

export default new UserService();
