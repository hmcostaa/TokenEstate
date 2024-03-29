import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Profile Page",
  description: "Your Portfolio",
});

const ProfilePageLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default ProfilePageLayout;
