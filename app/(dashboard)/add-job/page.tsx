import CreateJobForm from "../../../components/CreateJobForm";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const AddJobPage = () => {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="px-8">
        <CreateJobForm></CreateJobForm>
      </div>
    </HydrationBoundary>
  );
};

export default AddJobPage;
