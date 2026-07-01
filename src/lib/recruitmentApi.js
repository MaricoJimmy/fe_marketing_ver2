const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://localhost:8000").replace(/\/$/, "");
const ADMIN_API_KEY = import.meta.env.VITE_RECRUITMENT_ADMIN_API_KEY || "change-me";

const buildUrl = (path, query) => {
  const url = new URL(`${API_BASE_URL}${path}`);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
};

const parseError = async (response) => {
  try {
    const body = await response.json();
    return body?.detail || JSON.stringify(body);
  } catch {
    return `Request failed with status ${response.status}`;
  }
};

const request = async (path, options = {}, { admin = false, query } = {}) => {
  const headers = {
    ...(options.headers || {}),
  };

  if (admin) {
    headers["x-api-key"] = ADMIN_API_KEY;
  }

  const response = await fetch(buildUrl(path, query), {
    ...options,
    headers,
  });

  if (!response.ok) {
    const message = await parseError(response);
    throw new Error(message);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};

export const recruitmentApi = {
  getPublicJobs: () => request("/api/v1/jobs", {}, { query: { active_only: true } }),

  listJobs: (activeOnly = false) =>
    request(
      "/api/v1/jobs",
      {},
      {
        query: { active_only: activeOnly },
      }
    ),

  createJob: (payload) =>
    request(
      "/api/v1/jobs",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
      { admin: true }
    ),

  updateJob: (jobId, payload) =>
    request(
      `/api/v1/jobs/${jobId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
      { admin: true }
    ),

  deleteJob: (jobId) =>
    request(
      `/api/v1/jobs/${jobId}`,
      {
        method: "DELETE",
      },
      { admin: true }
    ),

  toggleJob: (jobId) =>
    request(
      `/api/v1/jobs/${jobId}/toggle`,
      {
        method: "PATCH",
      },
      { admin: true }
    ),

  generateJobTest: (jobId) =>
    request(
      `/api/v1/jobs/${jobId}/generate-test`,
      {
        method: "POST",
      },
      { admin: true }
    ),

  submitApplication: (formData) =>
    request("/api/v1/applications", {
      method: "POST",
      body: formData,
    }),

  getApplicationsByEmail: (email) =>
    request("/api/v1/applications/by-email", {}, { query: { email } }),

  listApplications: (filters = {}) =>
    request("/api/v1/applications", {}, { admin: true, query: filters }),

  getApplication: (applicationId) =>
    request(`/api/v1/applications/${applicationId}`, {}, { admin: true }),

  updateCvStatus: (applicationId, cvStatus) =>
    request(
      `/api/v1/applications/${applicationId}/cv-status`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cv_status: cvStatus }),
      },
      { admin: true }
    ),

  updateNotes: (applicationId, notes) =>
    request(
      `/api/v1/applications/${applicationId}/notes`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes }),
      },
      { admin: true }
    ),

  updateTestStatus: (applicationId, round, status) =>
    request(
      `/api/v1/applications/${applicationId}/test-status`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ round, status }),
      },
      { admin: true }
    ),

  addApplicationForTest: (payload) =>
    request(
      "/api/v1/applications/add-for-test",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
      { admin: true }
    ),

  getTestQuestions: (round, applicationId) =>
    request(
      `/api/v1/test/questions/${round}`,
      {},
      {
        query: applicationId ? { application_id: applicationId } : undefined,
      }
    ),

  submitTest: (payload) =>
    request("/api/v1/test/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }),

  getTestResult: (applicationId) => request(`/api/v1/test/result/${applicationId}`),

  listQuestionnaires: () => request("/api/v1/questionnaires", {}, { admin: true }),
  
  createQuestionnaire: (payload) => request("/api/v1/questionnaires", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }, { admin: true }),
  
  updateQuestionnaire: (id, payload) => request(`/api/v1/questionnaires/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }, { admin: true }),
  
  deleteQuestionnaire: (id) => request(`/api/v1/questionnaires/${id}`, {
    method: "DELETE"
  }, { admin: true }),

  // Question CRUD
  listQuestions: (questionnaireId) => request("/api/v1/questions", {}, { 
    admin: true, 
    query: questionnaireId ? { questionnaire_id: questionnaireId } : undefined 
  }),
  
  getQuestion: (questionId) => request(`/api/v1/questions/${questionId}`, {}, { admin: true }),
  
  createQuestion: (payload) => request("/api/v1/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }, { admin: true }),
  
  createQuestionsBatch: (questionnaireId, payloads) => request(`/api/v1/questions/batch?questionnaire_id=${questionnaireId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payloads),
  }, { admin: true }),
  
  updateQuestion: (questionId, payload) => request(`/api/v1/questions/${questionId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }, { admin: true }),
  
  deleteQuestion: (questionId) => request(`/api/v1/questions/${questionId}`, {
    method: "DELETE"
  }, { admin: true }),
};

export { API_BASE_URL };
