import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Property",
  description: "Check this property",
});

const ProfilePageLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProfilePageLayout;
