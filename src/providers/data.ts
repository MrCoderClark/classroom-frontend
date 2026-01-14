import {
  BaseRecord,
  DataProvider,
  GetListParams,
  GetListResponse,
} from "@refinedev/core";

const mockSubjects = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    description: "Fundamental concepts of programming and computer science.",
    department: "CS",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Linear Algebra",
    code: "MATH201",
    description: "Study of vectors, matrices, and linear transformations.",
    department: "Math",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "English Literature",
    code: "ENG102",
    description: "Analysis of major works of English literature.",
    department: "English",
    createdAt: new Date().toISOString(),
  },
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") return { data: [] as TData[], total: 0 };

    return {
      data: mockSubjects as unknown as TData[],
      total: mockSubjects.length,
    };
  },

  getOne: async () => {
    {
      throw new Error("This function is not present in mock");
    }
  },
  create: async () => {
    {
      throw new Error("This function is not present in mock");
    }
  },
  update: async () => {
    {
      throw new Error("This function is not present in mock");
    }
  },
  deleteOne: async () => {
    {
      throw new Error("This function is not present in mock");
    }
  },

  getApiUrl: () => "",
};
