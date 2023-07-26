import { MainLayoutProperties } from "./main-layout-properties.interface";

export const MainLayout = ({ children }: MainLayoutProperties) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
