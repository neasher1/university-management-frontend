type ActionBar = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBar) => {
  return (
    <div>
      <h2>{title}</h2>
      <div style={{ display: "flex" }}>{children}</div>
    </div>
  );
};

export default ActionBar;
