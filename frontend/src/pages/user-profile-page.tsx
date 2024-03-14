import { useUpdateUser } from "@/api/user-api";
import { UserProfileForm } from "@/forms/user-profile-form/user-profile-form";

const UserProfilePage = () => {
  const { updateUser, isLoading } = useUpdateUser();
  return (
    <div className="mt-20">
      <UserProfileForm onSave={updateUser} isLoading={isLoading} />
    </div>
  );
};

export default UserProfilePage;
