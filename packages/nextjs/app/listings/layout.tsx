import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Listings",
  description: "Check the available listings",
});

const ProfilePageLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProfilePageLayout;
