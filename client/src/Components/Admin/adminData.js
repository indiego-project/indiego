import instance from "../../api/core/default";

class AdminData {
  constructor(config) {
    this.title = config.title;
    this.queryKey = config.queryKey;
    this.queryFn = config.queryFn;
    this.sort = config.sort;
    this.handlers = config.handlers;
  }
}

const PerformerRequest = new AdminData({
  title: "퍼포머 인증 신청",
  queryKey: "FetchPerformerCertReq",
  sort: "cert",
  queryFn: (args) => {
    const params = args;
    return () => {
      return instance.get("/certifications", { params });
    };
  },
  handlers: {
    approve: (args) => {
      const { message, id } = args;
      return () => {
        return instance.post(`admins/certifications/${id}`, { message });
      };
    },

    reject: (args) => {
      const { data, id } = args;
      return () => {
        return instance.delete(`admins/certifications/${id}`, { data });
      };
    },
  },
});

const AllCommentsRequest = new AdminData({
  title: "모든 댓글 보기",
  queryKey: "FetchAllComments",
  sort: "comments",
  queryFn: (args) => {
    const params = args;
    return () => {
      return instance.get("admins/comments", { params });
    };
  },
  handlers: {
    remove: (args) => {
      const { id } = args;
      return () => {
        return instance.delete(`admins/deletedComments/${id}`);
      };
    },
  },
});

const RemovedCommentsRequest = new AdminData({
  title: "삭제된 댓글 보기",
  queryKey: "FetchRemovedComments",
  sort: "deleted",
  queryFn: (args) => {
    const params = args;
    return () => {
      return instance.get("admins/deletedComments", { params });
    };
  },
  handlers: {
    resotre: (args) => {
      const { id } = args;
      return () => {
        return instance.post(`admins/comments/${id}`);
      };
    },
  },
});

export const AdminFeatures = [
  PerformerRequest,
  AllCommentsRequest,
  RemovedCommentsRequest,
];
