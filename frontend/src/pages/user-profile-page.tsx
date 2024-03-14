import { useGetUser, useUpdateUser } from "@/api/user-api";
import { UserProfileForm } from "@/forms/user-profile-form/user-profile-form";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetUserLoading } = useGetUser();
  const { updateUser, isLoading: isUpdateUserLoading } = useUpdateUser();

  if (isGetUserLoading) {
    return <span className="mt=20">Loading...</span>;
  }

  if (!currentUser) {
    return <span className="mt=20">Unable to load user profile data.</span>;
  }
  return (
    <div className="mt-20">
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateUserLoading}
      />
    </div>
  );
};

export default UserProfilePage;
