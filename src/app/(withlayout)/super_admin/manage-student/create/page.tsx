import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const ManageStudentCreate = () => {
    return (
        <div>
            <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `manage-student`,
            link: `/super_admin/manage-student/`,
          },
        ]}
      />

            <h2>Manage student create</h2>
        </div>
    );
};

export default ManageStudentCreate;