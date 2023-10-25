import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const ChangePassword = () => {
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <h2>Manage student password</h2>
    </div>
  );
};

export default ChangePassword;
