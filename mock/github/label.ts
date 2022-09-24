import { Label } from "../../types/github";

type Params = Partial<Label>;

export const mockLabel = (params?: Params): Label => {
  return {
    ...sampleLabel,
    ...params,
  };
};

const sampleLabel = {
  id: 208045946,
  node_id: "MDU6TGFiZWwyMDgwNDU5NDY=",
  url: "https://api.github.com/repos/octocat/Hello-World/labels/bug",
  name: "bug",
  description: "Something isn't working",
  color: "f29513",
  default: true,
};